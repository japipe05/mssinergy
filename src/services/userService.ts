
import pool from '@/config/db';
import { DBUser } from '@/models/usuarioData';


export async function getUserById(id: number) {
  const [rows] = await pool.query<DBUser[]>(
    'SELECT usr_id, usr_nombre, usr_correo, usr_fotografia FROM usuarios WHERE usr_id = ?',
    [id]
  );
  return rows[0];
}
