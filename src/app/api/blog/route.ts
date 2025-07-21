import { NextRequest, NextResponse } from 'next/server';
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from '@/services/blogService';

import { deleteFileFromS3, uploadFileToS3 } from '@/services/s3Upload';

// POST: Crear nuevo blog 
// src/app/api/blog/route.ts

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const blg_title = form.get('title') as string;
    const blg_content = form.get('content') as string;
    const blg_category = form.get('category') as string;
    const blg_author = form.get('author') as string;
    const videoUrlManual = form.get('videoUrl') as string;
    const coverImgFile = form.get('coverImg') as File | null;
    const videoFile = form.get('video') as File | null;

    // ✅ Subir archivos a S3 si existen
    const coverImgUrl = coverImgFile ? await uploadFileToS3(coverImgFile, 'blogs') : '';
    const videoUrl = videoFile
      ? await uploadFileToS3(videoFile, 'blogs')
      : videoUrlManual || '';

    // ✅ Insertar en base de datos
    const insertId = await createBlog({
      blg_title,
      blg_content,
      blg_category,
      blg_coverImg: coverImgUrl ?? '',
      blg_author,
      blg_videoUrl: videoUrl,
    });

    return NextResponse.json({ message: 'Blog creado', id: insertId });
  } catch (error) {
    console.error('❌ Error al crear blog:', error);
    return NextResponse.json({ error: 'Error al crear blog' }, { status: 500 });
  }
}



// GET: Obtener uno o todos los blogs
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
      const blog = await getBlogById(Number(id));
      if (!blog) {
        return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
      }
      return NextResponse.json(blog);
    } else {
      const blogs = await getAllBlogs();
      return NextResponse.json(blogs);
    }
  } catch (error: any) {
    console.error('❌ Error al obtener blogs:', error);
    return NextResponse.json({ error: 'Error al obtener blogs' }, { status: 500 });
  }
}

// PUT: Actualizar blog por ID (con manejo de archivos)
export async function PUT(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get('id'));
    if (!id) return NextResponse.json({ error: 'ID requerido' }, { status: 400 });

    const form = await req.formData();

    const blg_title = form.get('title') as string;
    const blg_content = form.get('content') as string;
    const blg_category = form.get('category') as string;
    const blg_author = form.get('author') as string;

    const coverImgFile = form.get('coverImg') as File | null;
    const coverImgUrlManual = form.get('coverImgUrl') as string;
    const videoFile = form.get('video') as File | null;
    const videoUrlManual = form.get('videoUrl') as string;

    if (!blg_title || !blg_content || !blg_category || !blg_author) {
      return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 });
    }

    const existingBlog = await getBlogById(id);
    if (!existingBlog) {
      return NextResponse.json({ error: 'Blog no encontrado' }, { status: 404 });
    }

    let newCoverImgUrl = existingBlog.blg_coverImg;
    if (coverImgFile instanceof File) {
      if (existingBlog.blg_coverImg) {
        await deleteFileFromS3(existingBlog.blg_coverImg);
      }
      newCoverImgUrl = await uploadFileToS3(coverImgFile, 'blogs') ?? '';
    } else if (coverImgUrlManual) {
      newCoverImgUrl = coverImgUrlManual;
    }

    let newVideoUrl = existingBlog.blg_videoUrl;
    if (videoFile instanceof File) {
      if (existingBlog.blg_videoUrl) {
        await deleteFileFromS3(existingBlog.blg_videoUrl);
      }
      newVideoUrl = await uploadFileToS3(videoFile, 'blogs') ?? '';
    } else if (videoUrlManual) {
      newVideoUrl = videoUrlManual;
    }

    await updateBlog(id, {
      blg_title,
      blg_content,
      blg_category,
      blg_author,
      blg_coverImg: newCoverImgUrl,
      blg_videoUrl: newVideoUrl,
    });

    return NextResponse.json({ message: 'Blog actualizado correctamente' });
  } catch (error: any) {
    console.error('❌ Error al actualizar blog:', error);
    return NextResponse.json({ error: error.message || 'Error al actualizar blog' }, { status: 500 });
  }
}




// DELETE: Eliminar blog por ID
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = Number(searchParams.get('id'));
    if (!id) {
      return NextResponse.json({ error: 'ID requerido' }, { status: 400 });
    }

    // 🚨 Obtener el blog antes de eliminarlo para poder borrar sus archivos
    const blog = await getBlogById(id);
    if (!blog) {
      return NextResponse.json({ error: 'Blog no encontrado' }, { status: 404 });
    }

    // 🧹 Eliminar archivos de S3 si existen
    if (blog.blg_coverImg) await deleteFileFromS3(blog.blg_coverImg);
    if (blog.blg_videoUrl && !blog.blg_videoUrl.includes('youtube.com')) {
      await deleteFileFromS3(blog.blg_videoUrl);
    }

    // 🗑️ Eliminar blog de la base de datos
    await deleteBlog(id);

    return NextResponse.json({ message: 'Blog eliminado correctamente' });
  } catch (error: any) {
    console.error('❌ Error al eliminar blog:', error);
    return NextResponse.json({ error: 'Error al eliminar blog' }, { status: 500 });
  }
}

