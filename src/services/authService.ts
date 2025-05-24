import { RowDataPacket } from 'mysql2';
import pool from '@/config/db';
import { userData } from '@/models/userData';
import { hashPassword, comparePasswords } from '@/utils/hash';
import logger from '@/utils/logger';

interface DBUser extends RowDataPacket {
  usr_id?: number;
  usr_fotografia: string;
  usr_nombre: string;
  usr_correo: string;
  usr_codigo_pais: string;
  usr_celular: string;
  usr_credencial: string;
  usr_fecha_creacion: string;
}

export async function registerUser(user: userData) {
  const seg = 'src\\services\\authService.ts';
  try {
    logger.info(`🛠️ Conectando a MySQL... <1> ${seg}`);

    // Opcional: validar que no exista usuario con ese correo antes
// 🔍 Validar que no exista un usuario con ese correo
    const [existingUser]: any[] = await pool.query(
      `SELECT usr_id FROM usuarios WHERE usr_correo = ? LIMIT 1`,
      [user.usr_correo]
    );

    if (existingUser.length > 0) {
      logger.warn(`⚠️ El correo ya está registrado: ${user.usr_correo} <1.1> ${seg}`);
      throw new Error('El correo ya está registrado');
    }
    
    const hashedPassword = await hashPassword(user.usr_credencial);
    logger.info(`🔐 Password hasheado <2> ${seg}`);

    const [rows] = await pool.query(
      `INSERT INTO usuarios (
        usr_fotografia, usr_nombre, usr_correo, usr_codigo_pais, usr_celular, usr_credencial, usr_fecha_creacion
      ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.usr_fotografia || null,
        user.usr_nombre,
        user.usr_correo,
        user.usr_codigo_pais,
        user.usr_celular,
        hashedPassword,
        user.usr_fecha_creacion,
      ]
    );

    logger.info(`✅ Usuario insertado <3> ${seg}`);
    return rows;
  } catch (err) {
    logger.error({ err }, `❌ ERROR EN registerUser ${seg}`);
    throw err;
  }
}

export async function loginUser(email: string, password: string) {
  const seg = 'src\\services\\authService.ts';
  try {
    logger.info(`🛠️ Conectando a MySQL... <1> ${seg}`);

    const [rows] = await pool.query<DBUser[]>(
      'SELECT * FROM usuarios WHERE usr_correo = ?',
      [email]
    );

    const user = rows[0];

    logger.info(`🛠️ Validando correo <2> ${seg}`);
    if (!user) {
      logger.warn(`📛 Usuario no encontrado: ${email} <3> ${seg}`);
      throw new Error('Usuario no encontrado');
    }

    logger.info(`🛠️ Validando credenciales hash MySQL... <4> ${seg}`);
    const isMatch = await comparePasswords(password, user.usr_credencial);
    if (!isMatch) {
      logger.warn(`🔐 Contraseña inválida para: ${email} <5> ${seg}`);
      throw new Error('Credenciales inválidas');
    }

    logger.info(`✅ Usuario autenticado correctamente: ${email} <6> ${seg}`);
    return user;
  } catch (err) {
    logger.error({ err, email }, `❌ ERROR en loginUser ${seg}`);
    throw err;
  }
}
