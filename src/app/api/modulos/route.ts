// src/app/api/modulos/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getAllModulos } from '@/services/modulosService';

export async function GET(req: NextRequest) {
  try {
    const modulos = await getAllModulos();
    return NextResponse.json({ modulos });
  } catch (error) {
    console.error('❌ Error en GET /modulos:', error);
    return NextResponse.json({ error: 'Error al obtener los módulos' }, { status: 500 });
  }
}
