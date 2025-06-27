import { registerUser } from '@/services/authService';
import { NextResponse } from 'next/server';
import { s3 } from '@/lib/s3';
import logger from '@/utils/logger';
import { uploadFileToS3, deleteFileFromS3 } from '@/services/s3Service';
import { verifyCaptchaToken } from '@/utils/captcha';

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
  const bucket = process.env.AWS_S3_BUCKET;
  const region = process.env.AWS_REGION;

  if (!secretKey || !bucket || !region) {
    return NextResponse.json({ error: 'Configuración del entorno incompleta' }, { status: 500 });
  }

  const captchaOk = await verifyCaptchaToken(captchaToken);
  if (!captchaOk) {
    return NextResponse.json({ error: 'Captcha inválido' }, { status: 400 });
  }

  let filePath = '';
  let fileKey = '';

  if (file && file.size > 0) {
    try {
      filePath = await uploadFileToS3(file, 'uploads/registro');
      fileKey = filePath.replace(`https://${bucket}.s3.${region}.amazonaws.com/`, '');
    } catch (err) {
      return NextResponse.json({ error: 'Error al subir el archivo' }, { status: 500 });
    }
  }

  try {
    await registerUser({
      usr_nombre,
      usr_correo,
      usr_codigo_pais,
      usr_celular,
      usr_credencial,
      usr_fotografia: filePath,
      usr_fecha_creacion: new Date().toISOString(),
    });

    return NextResponse.json({ message: 'Usuario registrado correctamente' });
  } catch (error: unknown) {
    console.error('Error en registro:', error);

    // ❌ Si hubo un archivo subido, eliminarlo
    if (fileKey) {
      try {
        await deleteFileFromS3(fileKey);
      } catch (deleteError) {
        logger.error(`Error eliminando archivo fallido: ${fileKey}`, deleteError);
      }
    }

    if (error instanceof Error) {
      logger.info(`❌ Error... <1> ${seg} ${error.message}`);

      if (
        error.message.includes('Access denied') ||
        error.message.includes('ER_ACCESS_DENIED_ERROR')
      ) {
        return NextResponse.json({ error: 'Error de conexión' }, { status: 500 });
      }

      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: 'Ocurrió un error inesperado' }, { status: 500 });
  }
}
