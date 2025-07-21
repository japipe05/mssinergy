// scripts/init-db.ts
import mysql from 'mysql2/promise';
import fs from 'fs/promises';
import dotenv from 'dotenv';

dotenv.config();

async function initDB() {
  try {
    console.log("🔌 Conectando a la base de datos...");
    const sql = await fs.readFile('scripts/3db_tablas.sql', 'utf-8');

    const pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 5, // suficiente para un script de inicialización
      queueLimit: 0,
      multipleStatements: true,
    });

    const connection = await pool.getConnection();
    await connection.query(sql);
    console.log('✅ Tablas creadas correctamente.');

    connection.release(); // libera la conexión al pool
    await pool.end(); // cierra todo el pool correctamente
  } catch (error) {
    console.error('❌ Error al ejecutar el script SQL:', error);
  }
}

initDB();


//> npx tsx .\scripts\1db_ejecuta_sql.ts
//npx tsx scripts/1db_ejecuta_sql.ts  gitpod