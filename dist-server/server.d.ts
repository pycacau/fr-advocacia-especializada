declare const express: any;
declare const cors: any;
declare const bodyParser: any;
declare const jwt: any;
declare const bcrypt: any;
declare const fs: any;
declare const path: any;
interface AuthRequest {
    user?: any;
}
declare const app: any;
declare const PORT = 3001;
declare const SECRET_KEY = "your-secret-key";
declare const DB_PATH: any;
declare const readDB: () => any;
declare const writeDB: (data: any) => void;
declare const authenticateToken: (req: any, res: any, next: any) => any;
declare const authenticateAdmin: (req: any, res: any, next: any) => any;
declare const initializeAdmin: () => Promise<void>;
//# sourceMappingURL=server.d.ts.map