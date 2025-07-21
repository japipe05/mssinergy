// src/config/db.ts
import mysql from 'mysql2/promise';

let pool: mysql.Pool;

declare global {
  // ✅ Evita recrear el pool en cada cambio con HMR (solo en desarrollo)
  var mysqlPool: mysql.Pool | undefined;
}

if (!global.mysqlPool) {
  global.mysqlPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    idleTimeout: 60000, // 1 minuto de inactividad
  });
}

pool = global.mysqlPool;

export default pool;
