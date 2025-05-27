import { writeFile, mkdir } from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from 'next/server';
import { existsSync } from 'fs';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file received' }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const ext = file.name.split('.').pop();
    const filename = `${uuidv4()}.${ext}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'blogs');

    if (!existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true }); // crea si no existe
    }

    const filepath = path.join(uploadDir, filename);
    await writeFile(filepath, buffer);

    const url = `/uploads/blogs/${filename}`;
    return NextResponse.json({ success: true, url });
  } catch (err) {
    console.error('Upload error:', err);
    return NextResponse.json({ success: false, error: 'Upload failed' }, { status: 500 });
  }
}
