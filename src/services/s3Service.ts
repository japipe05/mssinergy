// src/services/s3Service.ts

import { PutObjectCommand } from '@aws-sdk/client-s3';
import { s3 } from '@/lib/s3';
import { v4 as uuidv4 } from 'uuid';
import { DeleteObjectCommand } from '@aws-sdk/client-s3';
/**
 * Sube un archivo a S3 renombrándolo con un UUID
 *
 * @param file - Archivo recibido desde el formData
 * @param folder - Ruta dentro del bucket (ej. 'uploads/registro')
 * @returns URL pública del archivo subido
 */
export async function uploadFileToS3(file: File, folder: string): Promise<string> {
  const bucket = process.env.AWS_S3_BUCKET;
  const region = process.env.AWS_REGION;

  if (!bucket || !region) {
    throw new Error('Faltan configuraciones S3');
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  // Obtener extensión del archivo original
  const ext = file.name.split('.').pop()?.toLowerCase() || 'bin';

  // Generar nombre único con UUID
  const uniqueName = `${uuidv4()}.${ext}`;
  const key = `${folder}/${uniqueName}`;

  await s3.send(
    new PutObjectCommand({
      Bucket: bucket,
      Key: key,
      Body: buffer,
      ContentType: file.type,
    })
  );

  return `https://${bucket}.s3.${region}.amazonaws.com/${key}`;
}


export async function deleteFileFromS3(key: string) {
  const bucket = process.env.AWS_S3_BUCKET!;
  const command = new DeleteObjectCommand({
    Bucket: bucket,
    Key: key,
  });
  await s3.send(command);
}
