// scripts/init-db.ts
import mysql from 'mysql2/promise';
import fs from 'fs/promises';
import dotenv from 'dotenv';

// Cargar variables desde el archivo .env
dotenv.config();

async function initDB() {
  try {
    console.log("ingresando a la base de datos...");
    const sql = await fs.readFile('scripts/init.sql', 'utf-8');

    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      multipleStatements: true
    });

    await connection.query(sql);
    console.log('Tabla creada con éxito.');

    await connection.end();
  } catch (error) {
    console.error('Error al ejecutar el script SQL:', error);
  }
}

initDB();

//> npx tsx .\scripts\init-db.ts
