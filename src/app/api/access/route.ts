import { NextRequest, NextResponse } from 'next/server';
import { createAccess, deleteAccessById, getAccessByUserId } from '@/services/accessService';
import { DBAccess } from '@/models/accesoData';

// POST /api/auth/access → crear nuevo acceso
// POST /api/auth/access → crear nuevo acceso
export async function POST(req: NextRequest) {
  try {
    const body: DBAccess = await req.json();

    if (!body.usr_id || !body.usr_modulo || !body.usr_descripcion || !body.usr_usuario_aud) {
      return NextResponse.json({ error: 'Faltan campos requeridos' }, { status: 400 });
    }

    const result = await createAccess(body);
    return NextResponse.json({ success: true, insertId: result.insertId });

  } catch (error: any) {
    // 🛑 Captura error de clave duplicada (MySQL: ER_DUP_ENTRY)
    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json(
        { error: 'Duplicado: ya existe acceso a este módulo para el usuario' },
        { status: 409 }
      );
    }

    console.error('❌ Error en POST /access:', error);
    return NextResponse.json({ error: 'Error al crear acceso' }, { status: 500 });
  }
}


// DELETE /api/auth/access?acc_id=123 → eliminar acceso por ID
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const acc_id = Number(searchParams.get('acc_id'));

    if (!acc_id) {
      return NextResponse.json({ error: 'acc_id es requerido' }, { status: 400 });
    }

    await deleteAccessById(acc_id);
    return NextResponse.json({ success: true, message: 'Acceso eliminado correctamente' });
  } catch (error) {
    console.error('❌ Error en DELETE /access:', error);
    return NextResponse.json({ error: 'Error al eliminar acceso' }, { status: 500 });
  }
}

// GET /api/auth/access?usr_id=123 → obtener accesos por usuario
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const usr_id = Number(searchParams.get('usr_id'));

    if (!usr_id) {
      return NextResponse.json({ error: 'usr_id es requerido' }, { status: 400 });
    }
    
    const accesos = await getAccessByUserId(usr_id);
    return NextResponse.json({ accesos });
  } catch (error) {
    console.error('❌ Error en GET /access:', error);
    return NextResponse.json({ error: 'Error al obtener accesos' }, { status: 500 });
  }
}