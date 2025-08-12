// src/app/api/auth/users/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { updateUserById, getUserById , deleteUserById } from '@/services/userService';
import { uploadFileToS3, deleteFileFromS3 } from '@/services/s3Upload';
import { DBUser } from '@/models/usuarioData';

export async function PUT(req: NextRequest) {
  const url = req.nextUrl;
  const id = url.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "ID no válido" }, { status: 400 });
  }

  const formData = await req.formData();

  const fields: Record<string, any> = {};
  for (const [key, value] of formData.entries()) {
    if (typeof value === 'string') {
      fields[key] = value;
    }
  }

  // Subida de archivo si viene imagen
  let filePath = fields.usr_fotografia;
  const file = formData.get('file') as File | null;

  if (file && file.size > 0) {
    try {
      const currentUser = await getUserById(Number(id));

      if (currentUser?.usr_fotografia) {
        await deleteFileFromS3(currentUser.usr_fotografia);
      }
 
      filePath = await uploadFileToS3(file, "901408258/registro");
    } catch (err) {
      console.error('❌ Error subiendo o reemplazando imagen en S3:', err);
      return NextResponse.json({ error: 'Error al subir la imagen' }, { status: 500 });
    }
  }

  if (!filePath) {
    return NextResponse.json({ error: 'La imagen no se pudo procesar correctamente' }, { status: 400 });
  }

  const dataToUpdate = {
    usr_nombre: fields.usr_nombre,
    usr_correo: fields.usr_correo,
    usr_codigo_pais: fields.usr_codigo_pais,
    usr_celular: fields.usr_celular,
    usr_estado: fields.usr_estado,
    usr_ROL: fields.usr_ROL,
    usr_fotografia: filePath,
  };

  try {
    const updated = await updateUserById(Number(id), dataToUpdate as Partial<DBUser>);
    return NextResponse.json({ success: true, updated });
  } catch (error) {
    console.error("❌ Error al actualizar usuario:", error);
    return NextResponse.json({ error: "Error al actualizar usuario" }, { status: 500 });
  }
}


export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.pathname.split("/").pop();
  const foto = req.nextUrl.searchParams.get("foto");
  if (!id) {
    return NextResponse.json({ error: "ID no válido" }, { status: 400 });
  }

   if (foto) {
    await deleteFileFromS3(foto);
  }

  try {
    await deleteUserById(Number(id));
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("❌ Error al eliminar usuario:", err);
    return NextResponse.json({ error: "Error al eliminar usuario" }, { status: 500 });
  }
}