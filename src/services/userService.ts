
import pool from '@/config/db';
import { DBUser } from '@/models/usuarioData';
import { hashPassword, comparePasswords } from '@/utils/hash';
import logger from '@/utils/logger';
import { ResultSetHeader } from 'mysql2';

  
export async function getUserById(id: number) {
  const [rows] = await pool.query<DBUser[]>(
    'SELECT usr_id, usr_nombre, usr_correo, usr_fotografia, usr_codigo_pais, usr_celular,usr_estado, usr_ROL , usr_fecha_creacion FROM usuarios WHERE usr_id = ?',
    [id]
  );
  return rows[0];
}
 
// src/services/userService.ts
export async function getAllUsers() {
  const [rows] = await pool.query<DBUser[]>(
    'SELECT usr_id, usr_nombre, usr_correo, usr_fotografia, usr_codigo_pais, usr_celular, usr_estado, usr_ROL, usr_fecha_creacion FROM usuarios order by usr_fecha_creacion desc'
  );
  return rows;
}


export async function updateUserById(id: number, data: Partial<DBUser>) {
  const { usr_nombre, usr_correo, usr_fotografia, usr_codigo_pais, usr_celular, usr_estado, usr_ROL } = data;

  const [result] = await pool.query(
    `UPDATE usuarios SET usr_nombre= ?, usr_correo= ?, usr_fotografia= ?, usr_codigo_pais= ?, usr_celular= ?, usr_estado= ?, usr_ROL = ? WHERE usr_id = ?`,
    [usr_nombre, usr_correo, usr_fotografia, usr_codigo_pais, usr_celular, usr_estado, usr_ROL, id]
  );

  return result;
}

export async function deleteUserById(id: number) {
  const [result] = await pool.query('DELETE FROM usuarios WHERE usr_id = ?', [id]);
  return result;
}

export async function registerUser(user: DBUser): Promise<number> {
  const seg = 'src\\services\\authService.ts';

  try {
    const [existingUser]: any[] = await pool.query(
      `SELECT usr_id FROM usuarios WHERE usr_correo = ? LIMIT 1`,
      [user.usr_correo]
    );

    if (existingUser.length > 0) {
      throw new Error('El correo ya está registrado');
    }

    const hashedPassword = await hashPassword(user.usr_credencial);

    const [result] = await pool.query<ResultSetHeader>(
      `INSERT INTO usuarios (
        usr_fotografia, usr_nombre, usr_correo, usr_codigo_pais, usr_celular,
        usr_credencial, usr_fecha_creacion, usr_estado, usr_ROL
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.usr_fotografia || null,
        user.usr_nombre,
        user.usr_correo,
        user.usr_codigo_pais,
        user.usr_celular,
        hashedPassword,
        user.usr_fecha_creacion,
        user.usr_estado || 'ACTIVO',
        user.usr_ROL || 'USER',
      ]
    );

    return result.insertId; // 👈 AQUÍ ahora tienes el ID correctamente
  } catch (err) {
    logger.error({ err }, `❌ ERROR EN registerUser ${seg}`);
    throw err;
  }
}


export async function loginUser(email: string, password: string) {
  const seg = 'src\\services\\authService.ts';
  
  try {
    //logger.info(`🛠️ Conectando a MySQL... <1> ${seg}`);

    const [rows] = await pool.query<DBUser[]>(
      'SELECT * FROM usuarios WHERE usr_correo = ?',
      [email]
    );


    const user = rows[0];

    //logger.info(`🛠️ Validando correo <2> ${seg}`);
    if (!user) {
      //logger.warn(`📛 Usuario no encontrado: ${email} <3> ${seg}`);
      throw new Error('Usuario no encontrado');
    }

    //logger.info(`🛠️ Validando credenciales hash MySQL... <4> ${seg}`);
    const isMatch = await comparePasswords(password, user.usr_credencial);
    if (!isMatch) {
      //logger.warn(`🔐 Contraseña inválida para: ${email} <5> ${seg}`);
      throw new Error('Credenciales inválidas');
    }

    //logger.info(`✅ Usuario autenticado correctamente: ${email} <6> ${seg}`);
    return user;
  } catch (err) {
    logger.error({ err, email }, `❌ ERROR en loginUser ${seg}`);
    throw err;
  }
}
