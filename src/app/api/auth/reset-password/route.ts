
// src/app/api/auth/reset-password/route.ts
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { hashPassword } from '@/utils/hash';
import pool from '@/config/db';

const JWT_SECRET = process.env.JWT_SECRET || 'secreto_dev';

export async function POST(req: Request) {
  const { token, password } = await req.json();

  try {
    const payload = jwt.verify(token, JWT_SECRET) as { email: string };
    const hashed = await hashPassword(password);

    await pool.query(
      'UPDATE usuarios SET usr_credencial = ? WHERE usr_correo = ?',
      [hashed, payload.email]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Token inválido o expirado' }, { status: 400 });
  }
}
