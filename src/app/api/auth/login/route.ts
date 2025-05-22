import { loginUser } from '@/services/authService';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'secreto_dev';

export async function POST(req: Request) {
  const { usr_correo, usr_credencial} = await req.json();
console.log("api auth login")
  try {
    const user = await loginUser(usr_correo, usr_credencial);

    const token = jwt.sign(
      { userId: user.usr_id, email: user.usr_correo },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // ✅ Creamos la respuesta personalizada
    const response = NextResponse.json({ success: true });

    // ✅ Establecemos la cookie usando `response.cookies.set` 
    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 3600,
      path: '/',
    });

    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error desconocido';
    return NextResponse.json({ error: message }, { status: 401 });
  }
}
