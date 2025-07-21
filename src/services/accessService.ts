import pool from '@/config/db';
import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { DBAccess } from '@/models/accesoData';
// ➕ Crear un acceso
export async function createAccess(access: DBAccess) {
  const {
    usr_id,
    usr_modulo,
    usr_descripcion,
    mod_ruta,
    usr_insertar = 'N',
    usr_actualizar = 'N',
    usr_eliminar = 'N',
    usr_lectura = 'N',
    usr_usuario_aud,
  } = access;

  const [result] = await pool.query<ResultSetHeader>(
    `INSERT INTO accesos (
      usr_id, usr_modulo, usr_descripcion,mod_ruta,
      usr_insertar, usr_actualizar, usr_eliminar, usr_lectura,
      usr_usuario_aud
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      usr_id,
      usr_modulo,
      usr_descripcion,
      mod_ruta,
      usr_insertar,
      usr_actualizar,
      usr_eliminar,
      usr_lectura,
      usr_usuario_aud,
    ]
  );

  return result;
}

// ❌ Eliminar un acceso
export async function deleteAccessById(acc_id: number) {
  const [result] = await pool.query<ResultSetHeader>(
    'DELETE FROM accesos WHERE acc_id = ?',
    [acc_id]
  );
  return result;
}

// 📄 Obtener accesos por ID de usuario
export async function getAccessByUserId(usr_id: number) {
  const [rows] = await pool.query<DBAccess[]>(
    `SELECT acc_id, usr_modulo, usr_descripcion, mod_ruta,
            usr_insertar, usr_actualizar, usr_eliminar, usr_lectura,
            usr_usuario_aud, usr_fecha_aud
     FROM accesos
     WHERE usr_id = ?
     ORDER BY acc_id`,
    [usr_id]
  );

  return rows;
}
