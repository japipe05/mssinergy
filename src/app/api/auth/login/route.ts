import { loginUser } from '@/services/userService';
import { getAccessByUserId } from '@/services/accessService';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import logger from '@/utils/logger';

const JWT_SECRET = process.env.JWT_SECRET || 'secreto_dev';

export async function POST(req: Request) {
  const seg = 'src\\app\\api\\auth\\login\\route.ts';
  
  const { usr_correo, usr_credencial } = await req.json();

  try {
    // 🔐 Validar credenciales
    const user = await loginUser(usr_correo, usr_credencial);

    // 📥 Obtener accesos (modulos)
    if (typeof user.usr_id !== 'number') {
      throw new Error('El ID de usuario no es válido.');
    }
    const accesos = await getAccessByUserId(user.usr_id);
    const modulos = accesos.map((a) => a.usr_modulo.toUpperCase()); // ['PERFILES', 'ACCESOS', ...]

    // 🔐 Generar token con accesos embebidos
    const token = jwt.sign(
      {
        userId: user.usr_id,
        email: user.usr_correo,
        accesos: modulos, // 👈 incluimos accesos en el payload
      },
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // ✅ Respuesta y seteo de cookie
    const response = NextResponse.json({ success: true });

    response.cookies.set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 3600, // 1 hora
      path: '/',
    });

    return response;
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Error desconocido';
    logger.info(`❌ Error... <1> ${seg} ${message}`);

    return NextResponse.json({ error: message }, { status: 401 });
  }
}
