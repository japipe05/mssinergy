// src/services/moduloService.ts
import pool from '@/config/db';
import { RowDataPacket } from 'mysql2';
import { DBModulo } from '@/models/moduloData';

// Obtener todos los módulos
export async function getAllModulos(): Promise<DBModulo[]> {
  const [rows] = await pool.query<DBModulo[]>(
    `SELECT mod_id, mod_nombre, mod_descripcion, mod_ruta, usr_usuario_aud, usr_fecha_aud 
     FROM modulos 
     ORDER BY mod_id`
  );
  return rows;
}
