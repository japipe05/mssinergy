import { registerUser } from '@/services/authService';
import { NextResponse } from 'next/server';
import fs from 'fs';
import fsPromises from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
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

  // Verificar CAPTCHA
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

  // Guardar imagen si existe
  let filePath = '';

  if (file && file.size > 0) {
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');

    if (!fs.existsSync(uploadDir)) {
      await fsPromises.mkdir(uploadDir, { recursive: true });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const fileName = `${Date.now()}-${file.name}`;
    filePath = `/uploads/${fileName}`;

    await fsPromises.writeFile(path.join(uploadDir, fileName), buffer);
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

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ error: 'Ocurrió un error inesperado' }, { status: 500 });
  }
}
