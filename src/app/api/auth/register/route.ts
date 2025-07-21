import { registerUser } from '@/services/userService';
import { createAccess } from '@/services/accessService';
import { NextResponse } from 'next/server';
import logger from '@/utils/logger';
import { uploadFileToS3, deleteFileFromS3 } from '@/services/s3Upload';
import { DBUser } from '@/models/usuarioData'; // Asegúrate que DBAccess esté disponible
import {  DBAccess } from '@/models/accesoData'; 
export async function POST(req: Request) {
  const seg = 'src\\app\\api\\auth\\register\\route.ts';
  const formData = await req.formData();

  const usr_nombre = formData.get('usr_nombre') as string;
  const usr_correo = formData.get('usr_correo') as string;
  const usr_codigo_pais = formData.get('usr_codigo_pais') as string;
  const usr_celular = formData.get('usr_celular') as string;
  const usr_credencial = formData.get('usr_credencial') as string;
  const file = formData.get('file') as File | null;
  const captchaToken = formData.get('captchaToken') as string;

  if (!captchaToken) {
    return NextResponse.json({ error: 'Captcha token es requerido' }, { status: 400 });
  }

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: 'Clave secreta CAPTCHA no configurada' }, { status: 500 });
  }

  const verifyRes = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`,
    { method: 'POST' }
  );
  const verifyJson = await verifyRes.json();

  if (!verifyJson.success) {
    return NextResponse.json({ error: 'Captcha inválido' }, { status: 400 });
  }

  // 🖼 Subir imagen
  let filePath = '';
  if (file && file.size > 0) {
    try {
      filePath = (await uploadFileToS3(file, 'registro')) ?? '';
    } catch (err) {
      console.error('❌ Error subiendo imagen a S3:', err);
      return NextResponse.json({ error: 'Error al subir la imagen' }, { status: 500 });
    }
  }

  if (!filePath) {
    return NextResponse.json({ error: 'La imagen no se pudo procesar correctamente' }, { status: 400 });
  }

  try {
    // ✅ Registrar usuario y obtener ID
    const insertId = await registerUser({
      usr_nombre,
      usr_correo,
      usr_codigo_pais,
      usr_celular,
      usr_credencial,
      usr_fotografia: filePath,
      usr_fecha_creacion: new Date().toISOString(),
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

  } catch (error: unknown) {
    console.error('Error en registro:', error);

    if (filePath) {
      try {
        await deleteFileFromS3(filePath);
      } catch (deleteErr) {
        console.error("⚠️ No se pudo borrar la imagen de S3:", deleteErr);
      }
    }

    if (error instanceof Error) {
      logger.info(`❌ Error... <1> ${seg} ${error.message}`);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: 'Ocurrió un error inesperado' }, { status: 500 });
  }
}
