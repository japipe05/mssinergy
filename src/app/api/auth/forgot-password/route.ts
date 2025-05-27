// src/app/api/auth/forgot-password/route.ts
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { sendPasswordResetEmail } from '@/utils/mailer'; // crea esta utilidad

const JWT_SECRET = process.env.JWT_SECRET || 'secreto_dev';

export async function POST(req: Request) {
  const { email } = await req.json();

  try {
    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '15m' });
    const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/auth2/reset-password?token=${token}`;

    await sendPasswordResetEmail(email, resetLink);

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'No se pudo enviar el correo' }, { status: 500 });
  }
}
