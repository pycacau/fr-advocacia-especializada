const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3001;
const SECRET_KEY = 'your-secret-key';
// Middleware
app.use(cors());
app.use(bodyParser.json());
// Database file path
const DB_PATH = path.join(__dirname, 'db.json');
// Initialize database if it doesn't exist
if (!fs.existsSync(DB_PATH)) {
    const initialData = {
        users: [],
        processes: [],
        updates: []
    };
    fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2));
}
// Helper functions
const readDB = () => {
    const data = fs.readFileSync(DB_PATH, 'utf8');
    return JSON.parse(data);
};
const writeDB = (data) => {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
};
// Authentication middleware
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }
        req.user = user;
        next();
    });
};
// Admin authentication middleware
const authenticateAdmin = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token não fornecido' });
    }
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token inválido' });
        }
        if (user.role !== 'admin') {
            return res.status(403).json({ message: 'Acesso negado' });
        }
        req.user = user;
        next();
    });
};
// Routes
// Login route
app.post('/api/login', async (req, res) => {
    const { cpf, processNumber } = req.body;
    if (!cpf || !processNumber) {
        return res.status(400).json({ message: 'CPF e número do processo são obrigatórios' });
    }
    const db = readDB();
    const user = db.users.find((u) => u.cpf === cpf);
    if (!user) {
        return res.status(401).json({ message: 'CPF não encontrado' });
    }
    // Check if process belongs to user
    const userProcesses = db.processes.filter((p) => p.clientCpf === cpf);
    const hasProcess = userProcesses.some((p) => p.number === processNumber);
    if (!hasProcess) {
        return res.status(401).json({ message: 'Número do processo inválido para este CPF' });
    }
    const token = jwt.sign({ cpf: user.cpf, role: 'client' }, SECRET_KEY, { expiresIn: '24h' });
    res.json({
        token,
        user: {
            cpf: user.cpf,
            name: user.name,
            role: 'client'
        }
    });
});
// Admin login route
app.post('/api/admin/login', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Usuário e senha são obrigatórios' });
    }
    const db = readDB();
    const admin = db.users.find((u) => u.username === username && u.role === 'admin');
    if (!admin) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
    }
    const isValidPassword = await bcrypt.compare(password, admin.password);
    if (!isValidPassword) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
    }
    const token = jwt.sign({ id: admin.id, username: admin.username, role: 'admin' }, SECRET_KEY, { expiresIn: '24h' });
    res.json({
        token,
        user: {
            id: admin.id,
            username: admin.username,
            role: 'admin'
        }
    });
});
// Get user processes
app.get('/api/processes', authenticateToken, (req, res) => {
    const db = readDB();
    const userCpf = req.user.cpf;
    const processes = db.processes.filter((p) => p.clientCpf === userCpf);
    // Add latest update to each process
    const processesWithUpdates = processes.map((process) => {
        const latestUpdate = db.updates
            .filter((u) => u.processId === process.id)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
        return Object.assign(Object.assign({}, process), { latestUpdate });
    });
    res.json(processesWithUpdates);
});
// Get client processes (alias for /api/processes)
app.get('/api/client/processes', authenticateToken, (req, res) => {
    const db = readDB();
    const userCpf = req.user.cpf;
    const processes = db.processes.filter((p) => p.clientCpf === userCpf);
    // Add latest update to each process
    const processesWithUpdates = processes.map((process) => {
        const latestUpdate = db.updates
            .filter((u) => u.processId === process.id)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
        return Object.assign(Object.assign({}, process), { latestUpdate });
    });
    res.json(processesWithUpdates);
});
// Admin routes
// Get all processes (admin)
app.get('/api/admin/processes', authenticateAdmin, (req, res) => {
    const db = readDB();
    const processes = db.processes.map((process) => {
        const client = db.users.find((u) => u.cpf === process.clientCpf);
        const latestUpdate = db.updates
            .filter((u) => u.processId === process.id)
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
        return Object.assign(Object.assign({}, process), { clientName: client ? client.name : 'Cliente não encontrado', latestUpdate });
    });
    res.json(processes);
});
// Create new process (admin)
app.post('/api/admin/processes', authenticateAdmin, (req, res) => {
    const { number, description, status, clientCpf } = req.body;
    if (!number || !description || !status || !clientCpf) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }
    const db = readDB();
    // Check if process number already exists
    const existingProcess = db.processes.find((p) => p.number === number);
    if (existingProcess) {
        return res.status(400).json({ message: 'Número do processo já existe' });
    }
    // Check if client exists
    const client = db.users.find((u) => u.cpf === clientCpf);
    if (!client) {
        return res.status(400).json({ message: 'Cliente não encontrado' });
    }
    const newProcess = {
        id: Date.now().toString(),
        number,
        description,
        status,
        clientCpf,
        createdAt: new Date().toISOString()
    };
    db.processes.push(newProcess);
    writeDB(db);
    res.status(201).json(newProcess);
});
// Update process status (admin)
app.put('/api/admin/processes/:id', authenticateAdmin, (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
        return res.status(400).json({ message: 'Status é obrigatório' });
    }
    const db = readDB();
    const processIndex = db.processes.findIndex((p) => p.id === id);
    if (processIndex === -1) {
        return res.status(404).json({ message: 'Processo não encontrado' });
    }
    db.processes[processIndex].status = status;
    writeDB(db);
    res.json(db.processes[processIndex]);
});
// Add process update (admin)
app.post('/api/admin/processes/:id/updates', authenticateAdmin, (req, res) => {
    const { id } = req.params;
    const { description } = req.body;
    if (!description) {
        return res.status(400).json({ message: 'Descrição é obrigatória' });
    }
    const db = readDB();
    const process = db.processes.find((p) => p.id === id);
    if (!process) {
        return res.status(404).json({ message: 'Processo não encontrado' });
    }
    const newUpdate = {
        id: Date.now().toString(),
        processId: id,
        description,
        date: new Date().toISOString()
    };
    db.updates.push(newUpdate);
    writeDB(db);
    res.status(201).json(newUpdate);
});
// Get process updates (admin)
app.get('/api/admin/processes/:id/updates', authenticateAdmin, (req, res) => {
    const { id } = req.params;
    const db = readDB();
    const updates = db.updates
        .filter((u) => u.processId === id)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    res.json(updates);
});
// Create client (admin)
app.post('/api/admin/clients', authenticateAdmin, async (req, res) => {
    const { name, cpf } = req.body;
    if (!name || !cpf) {
        return res.status(400).json({ message: 'Nome e CPF são obrigatórios' });
    }
    const db = readDB();
    // Check if CPF already exists
    const existingUser = db.users.find((u) => u.cpf === cpf);
    if (existingUser) {
        return res.status(400).json({ message: 'CPF já cadastrado' });
    }
    const newClient = {
        id: Date.now().toString(),
        name,
        cpf,
        role: 'client',
        createdAt: new Date().toISOString()
    };
    db.users.push(newClient);
    writeDB(db);
    res.status(201).json(newClient);
});
// Get all clients (admin)
app.get('/api/admin/clients', authenticateAdmin, (req, res) => {
    const db = readDB();
    const clients = db.users.filter((u) => u.role === 'client');
    res.json(clients);
});
// Initialize admin user if not exists
const initializeAdmin = async () => {
    const db = readDB();
    const adminExists = db.users.find((u) => u.role === 'admin');
    if (!adminExists) {
        const hashedPassword = await bcrypt.hash('admin123', 10);
        const admin = {
            id: 'admin-1',
            username: 'admin',
            password: hashedPassword,
            role: 'admin',
            createdAt: new Date().toISOString()
        };
        db.users.push(admin);
        writeDB(db);
        console.log('Admin user created: username: admin, password: admin123');
    }
};
initializeAdmin();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
