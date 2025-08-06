// src/utils/aws/s3Upload.ts
import { S3Client, PutObjectCommand ,DeleteObjectCommand} from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});
 
/**
 * Sube un archivo a S3 y devuelve su URL pública
 * @param file El archivo tipo File (desde formData)
 * @param folder Carpeta dentro del bucket (ej: 'registro', 'perfil', etc)
 */
export async function uploadFileToS3(file: File, folder: string = "registro") {
  const buffer = Buffer.from(await file.arrayBuffer());
  const ext = file.name.split('.').pop();
  const key = `${folder}/${Date.now()}-${randomUUID()}.${ext}`;
try{
  const command = new PutObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET!,
    Key: key,
    Body: buffer,
    ContentType: file.type,
  });
 
  await s3.send(command);

  const url = `https://${process.env.AWS_S3_BUCKET}.s3.amazonaws.com/${key}`;
  
  return url;
    
} catch (error) {
  console.error("❌ Error al crear archivo de S3:", error);
}
}



/**
 * Borra un archivo de S3 dado su URL pública o key
 * @param fileUrl URL completa o solo el key del archivo en S3
 */
export async function deleteFileFromS3(fileUrlOrKey: string) {
  let key = fileUrlOrKey;

  // Si es una URL completa, extraemos el key
  if (fileUrlOrKey.startsWith("http")) {
    const url = new URL(fileUrlOrKey);
    key = decodeURIComponent(url.pathname.slice(1)); // remove leading slash
  }
 
 try {
  const command = new DeleteObjectCommand({
    Bucket: process.env.AWS_S3_BUCKET!,
    Key: key,
  });

  const response = await s3.send(command);
  
} catch (error) {
  console.error("❌ Error al eliminar archivo de S3:", error);
}

}