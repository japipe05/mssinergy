// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

// Tu clave secreta
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'secreto_dev');

// Rutas protegidas
const protectedRoutes = ['/ModulosMssinergy'];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Solo proteger rutas definidas
  if (!protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  const token = req.cookies.get('token')?.value;

  if (!token) {
    // Redirigir a login si no hay token
    return NextResponse.redirect(new URL('/auth/auth2/login', req.url));
  }

  try {
    await jwtVerify(token, JWT_SECRET);
    return NextResponse.next(); // Token válido, continúa
  } catch (err) {
    return NextResponse.redirect(new URL('/auth/auth2/login', req.url));
  }
}


// 👇 Esto siempre debe ir fuera de la función y al final del archivo
export const config = {
  matcher: ['/ModulosMssinergy/:path*'],
};