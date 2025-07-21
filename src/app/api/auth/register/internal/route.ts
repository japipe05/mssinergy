import { NextResponse } from 'next/server';
import { registerUser } from '@/services/userService';
import { createAccess } from '@/services/accessService';
import { uploadFileToS3, deleteFileFromS3 } from '@/services/s3Upload';
import logger from '@/utils/logger';
import { DBUser } from '@/models/usuarioData';
import { DBAccess } from '@/models/accesoData';

export async function POST(req: Request) {
  const formData = await req.formData();

  const usr_nombre = formData.get('usr_nombre') as string;
  const usr_correo = formData.get('usr_correo') as string;
  const usr_codigo_pais = formData.get('usr_codigo_pais') as string;
  const usr_celular = formData.get('usr_celular') as string;
  const usr_credencial = formData.get('usr_credencial') as string;
  const usr_estado = formData.get('usr_estado') as string;
  const usr_ROL = formData.get('usr_ROL') as string;
  const file = formData.get('file') as File | null;

  let filePath = '';

  if (file && file.size > 0) {
    try {
      filePath = (await uploadFileToS3(file, 'registro')) ?? '';
    } catch (err) {
      console.error('❌ Error al subir imagen:', err);
      return NextResponse.json({ error: 'Error al subir la imagen' }, { status: 500 });
    }
  }

  try {
    // ✅ Registrar usuario y obtener el ID generado
    const insertId = await registerUser({
      usr_nombre,
      usr_correo,
      usr_codigo_pais,
      usr_celular,
      usr_credencial,
      usr_fotografia: filePath,
      usr_fecha_creacion: new Date().toISOString(),
      usr_estado,
      usr_ROL,
    } as DBUser);

    // ✅ Crear accesos por defecto
    const defaultAccess: DBAccess[] = [
      {
        usr_id: insertId,
        usr_modulo: 'MI PERFIL',
        usr_descripcion: 'Acceso al perfil personal',
        mod_ruta: '/ModulosMssinergy/apps/user-profile/profile',
        usr_insertar: 'S',
        usr_actualizar: 'S',
        usr_eliminar: 'S',
        usr_lectura: 'S',
        usr_usuario_aud: usr_correo,
        usr_fecha_aud: new Date(),
        constructor: { name: "RowDataPacket" }
      },
    ];

    for (const acc of defaultAccess) {
      await createAccess(acc);
    }

    return NextResponse.json({ message: 'Usuario registrado correctamente' });

  } catch (error: any) {
    logger.error({ error }, '❌ Error al registrar usuario');

    if (filePath) {
      try {
        await deleteFileFromS3(filePath);
      } catch (deleteErr) {
        console.error("⚠️ No se pudo borrar la imagen de S3:", deleteErr);
      }
    }

    return NextResponse.json(
      { error: error?.message || 'Error inesperado' },
      { status: 500 }
    );
  }
}
