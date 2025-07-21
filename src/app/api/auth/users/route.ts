// src/app/api/users/route.ts
import { NextResponse } from 'next/server';
import { getAllUsers } from '@/services/userService';

export async function GET() {
  try {
    const users = await getAllUsers();
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener usuarios' }, { status: 500 });
  }
}
