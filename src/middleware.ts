// src/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import { extractModuleFromPath } from '@/lib/auth/extractModule'; // ✅ importar helper

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || 'secreto_dev');

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(new URL("/auth/auth2/login", req.url));
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    const userModules = (payload.accesos || []) as string[];

    const requiredModule = extractModuleFromPath(pathname);

    if (requiredModule === "*" ) {
      return NextResponse.next();
    }

    if (!requiredModule || !userModules.includes(requiredModule)) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
  } catch (err) {
    console.error("⛔ Middleware error:", err);
    return NextResponse.redirect(new URL("/auth/auth2/login", req.url));
  }
}

export const config = {
  matcher: ["/ModulosMssinergy/:path*"], // ✅ protege todo bajo esta ruta
};
