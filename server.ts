import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'
import { fileURLToPath } from 'url'

// Corrige __dirname no ESM
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

interface AuthRequest extends Request {
  user?: any
}

const app = express()
const PORT = 3001
const SECRET_KEY = 'your-secret-key'

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Serve static files from Process Search directory
app.use(express.static(path.join(__dirname, 'Process Search')))

// Caminho do “banco de dados”
const DB_PATH = path.join(__dirname, 'db.json')

// Inicializa db.json se não existir
if (!fs.existsSync(DB_PATH)) {
  const initialData = {
    users: [],
    processes: [],
    updates: []
  }
  fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2))
}

// Funções auxiliares
const readDB = () => {
  const data = fs.readFileSync(DB_PATH, 'utf8')
  return JSON.parse(data)
}

const writeDB = (data: any) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2))
}

// Middleware de autenticação
const authenticateToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) return res.status(401).json({ message: 'Token não fornecido' })

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token inválido' })
    req.user = user
    next()
  })
}

// Middleware de admin
const authenticateAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) return res.status(401).json({ message: 'Token não fornecido' })

  jwt.verify(token, SECRET_KEY, (err, user: any) => {
    if (err) return res.status(403).json({ message: 'Token inválido' })
    if (user.role !== 'admin') return res.status(403).json({ message: 'Acesso negado' })
    req.user = user
    next()
  })
}

// === Rotas principais ===

// Login do cliente
app.post('/api/login', async (req: Request, res: Response) => {
  const { cpf, processNumber } = req.body

  if (!cpf || !processNumber) {
    return res.status(400).json({ message: 'CPF e número do processo são obrigatórios' })
  }

  const db = readDB()
  const user = db.users.find((u: any) => u.cpf === cpf)

  if (!user) return res.status(401).json({ message: 'CPF não encontrado' })

  const userProcesses = db.processes.filter((p: any) => p.clientCpf === cpf)
  const hasProcess = userProcesses.some((p: any) => p.number === processNumber)

  if (!hasProcess) return res.status(401).json({ message: 'Número do processo inválido para este CPF' })

  const token = jwt.sign({ cpf: user.cpf, role: 'client' }, SECRET_KEY, { expiresIn: '24h' })

  res.json({
    token,
    user: { cpf: user.cpf, name: user.name, role: 'client' }
  })
})

// Login do admin
app.post('/api/admin/login', async (req: Request, res: Response) => {
  const { username, password } = req.body

  if (!username || !password) return res.status(400).json({ message: 'Usuário e senha são obrigatórios' })

  const db = readDB()
  const admin = db.users.find((u: any) => u.username === username && u.role === 'admin')

  if (!admin) return res.status(401).json({ message: 'Credenciais inválidas' })

  const isValidPassword = await bcrypt.compare(password, admin.password)
  if (!isValidPassword) return res.status(401).json({ message: 'Credenciais inválidas' })

  const token = jwt.sign({ id: admin.id, username: admin.username, role: 'admin' }, SECRET_KEY, { expiresIn: '24h' })

  res.json({
    token,
    user: { id: admin.id, username: admin.username, role: 'admin' }
  })
})

// Consulta automática de processo
app.get('/api/process/:processNumber', async (req: Request, res: Response) => {
  const { processNumber } = req.params

  if (!processNumber) {
    return res.status(400).json({ message: 'Número do processo é obrigatório' })
  }

  try {
    // Simular dados de processo para demonstração
    // Em produção, isso seria integrado com APIs oficiais do TJCE ou outros tribunais

    // Dados simulados baseados no número do processo
    const mockData = {
      numero: processNumber,
      status: 'Em andamento',
      classe: 'Procedimento Comum Cível',
      assunto: 'Cobrança de dívida',
      orgaoJulgador: '1ª Vara Cível de Fortaleza',
      autor: 'João Silva Santos',
      reu: 'Empresa XYZ Ltda',
      advogado: 'Dr. Francisco Roney',
      dataDistribuicao: '15/03/2024',
      ultimaMovimentacao: '20/10/2024',
      prazo: '30 dias',
      movimentacoes: [
        {
          data: '20/10/2024',
          descricao: 'Recebidos os autos',
          detalhes: 'Autos recebidos da distribuição'
        },
        {
          data: '18/10/2024',
          descricao: 'Distribuído por sorteio',
          detalhes: 'Processo distribuído para 1ª Vara Cível'
        },
        {
          data: '15/10/2024',
          descricao: 'Autuado',
          detalhes: 'Processo autuado e registrado no sistema'
        }
      ],
      source: 'tjce_simulado',
      lastUpdate: new Date().toISOString()
    }

    // Pequeno delay para simular processamento
    await new Promise(resolve => setTimeout(resolve, 1000))

    res.json(mockData)

  } catch (error) {
    console.error('Erro na consulta:', error)
    return res.status(500).json({
      message: 'Erro interno do servidor',
      error: error.message
    })
  }
})

// === Rotas do Cliente ===

// Obter processos do cliente logado
app.get('/api/processes', authenticateToken, (req: AuthRequest, res: Response) => {
  const db = readDB()
  const userProcesses = db.processes.filter((p: any) => p.clientCpf === req.user.cpf)

  const processesWithUpdates = userProcesses.map((process: any) => {
    const latestUpdate = db.updates
      .filter((u: any) => u.processId === process.id)
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]

    return {
      ...process,
      latestUpdate: latestUpdate ? {
        date: latestUpdate.date,
        description: latestUpdate.description
      } : null
    }
  })

  res.json(processesWithUpdates)
})

// === Rotas do Admin ===

// Obter todos os clientes
app.get('/api/admin/clients', authenticateAdmin, (req: AuthRequest, res: Response) => {
  const db = readDB()
  res.json(db.users.filter((u: any) => u.role !== 'admin'))
})

// Criar novo cliente
app.post('/api/admin/clients', authenticateAdmin, async (req: AuthRequest, res: Response) => {
  const { name, cpf } = req.body

  if (!name || !cpf) {
    return res.status(400).json({ message: 'Nome e CPF são obrigatórios' })
  }

  const db = readDB()

  // Verifica se CPF já existe
  const existingUser = db.users.find((u: any) => u.cpf === cpf)
  if (existingUser) {
    return res.status(400).json({ message: 'CPF já cadastrado' })
  }

  const newClient = {
    id: `client-${Date.now()}`,
    name,
    cpf,
    role: 'client',
    createdAt: new Date().toISOString()
  }

  db.users.push(newClient)
  writeDB(db)

  res.status(201).json(newClient)
})

// Excluir cliente
app.delete('/api/admin/clients/:id', authenticateAdmin, (req: AuthRequest, res: Response) => {
  const { id } = req.params
  const db = readDB()

  const userIndex = db.users.findIndex((u: any) => u.id === id)
  if (userIndex === -1) {
    return res.status(404).json({ message: 'Cliente não encontrado' })
  }

  // Remove processos e updates relacionados
  db.processes = db.processes.filter((p: any) => p.clientCpf !== db.users[userIndex].cpf)
  db.updates = db.updates.filter((u: any) => {
    const process = db.processes.find((p: any) => p.id === u.processId)
    return process !== undefined
  })

  db.users.splice(userIndex, 1)
  writeDB(db)

  res.json({ message: 'Cliente excluído com sucesso' })
})

// Obter todos os processos
app.get('/api/admin/processes', authenticateAdmin, (req: AuthRequest, res: Response) => {
  const db = readDB()

  const processesWithClients = db.processes.map((process: any) => {
    const client = db.users.find((u: any) => u.cpf === process.clientCpf)
    const latestUpdate = db.updates
      .filter((u: any) => u.processId === process.id)
      .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]

    return {
      ...process,
      clientName: client ? client.name : 'Cliente não encontrado',
      latestUpdate: latestUpdate ? {
        date: latestUpdate.date,
        description: latestUpdate.description
      } : null
    }
  })

  res.json(processesWithClients)
})

// Criar novo processo
app.post('/api/admin/processes', authenticateAdmin, (req: AuthRequest, res: Response) => {
  const { number, clientCpf, status, description } = req.body

  if (!number || !clientCpf || !status || !description) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' })
  }

  const db = readDB()

  // Verifica se cliente existe
  const client = db.users.find((u: any) => u.cpf === clientCpf)
  if (!client) {
    return res.status(400).json({ message: 'Cliente não encontrado' })
  }

  // Verifica se processo já existe
  const existingProcess = db.processes.find((p: any) => p.number === number)
  if (existingProcess) {
    return res.status(400).json({ message: 'Número do processo já existe' })
  }

  const newProcess = {
    id: `process-${Date.now()}`,
    number,
    clientCpf,
    status,
    description,
    createdAt: new Date().toISOString()
  }

  db.processes.push(newProcess)
  writeDB(db)

  res.status(201).json(newProcess)
})

// Atualizar processo
app.put('/api/admin/processes/:id', authenticateAdmin, (req: AuthRequest, res: Response) => {
  const { id } = req.params
  const { status } = req.body

  if (!status) {
    return res.status(400).json({ message: 'Status é obrigatório' })
  }

  const db = readDB()
  const process = db.processes.find((p: any) => p.id === id)

  if (!process) {
    return res.status(404).json({ message: 'Processo não encontrado' })
  }

  process.status = status
  writeDB(db)

  res.json(process)
})

// Excluir processo
app.delete('/api/admin/processes/:id', authenticateAdmin, (req: AuthRequest, res: Response) => {
  const { id } = req.params
  const db = readDB()

  const processIndex = db.processes.findIndex((p: any) => p.id === id)
  if (processIndex === -1) {
    return res.status(404).json({ message: 'Processo não encontrado' })
  }

  // Remove updates relacionados
  db.updates = db.updates.filter((u: any) => u.processId !== id)

  db.processes.splice(processIndex, 1)
  writeDB(db)

  res.json({ message: 'Processo excluído com sucesso' })
})

// Adicionar atualização a um processo
app.post('/api/admin/processes/:id/updates', authenticateAdmin, (req: AuthRequest, res: Response) => {
  const { id } = req.params
  const { description } = req.body

  if (!description) {
    return res.status(400).json({ message: 'Descrição é obrigatória' })
  }

  const db = readDB()
  const process = db.processes.find((p: any) => p.id === id)

  if (!process) {
    return res.status(404).json({ message: 'Processo não encontrado' })
  }

  const newUpdate = {
    id: `update-${Date.now()}`,
    processId: id,
    description,
    date: new Date().toISOString()
  }

  db.updates.push(newUpdate)
  writeDB(db)

  res.status(201).json(newUpdate)
})

// Inicializa admin padrão se não existir
const initializeAdmin = async () => {
  const db = readDB()
  const adminExists = db.users.find((u: any) => u.role === 'admin')

  if (!adminExists) {
    const hashedPassword = await bcrypt.hash('admin123', 10)
    const admin = {
      id: 'admin-1',
      username: 'admin',
      password: hashedPassword,
      role: 'admin',
      createdAt: new Date().toISOString()
    }
    db.users.push(admin)
    writeDB(db)
    console.log('Admin criado: usuário=admin, senha=admin123')
  }
}

initializeAdmin()

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})
