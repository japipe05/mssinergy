import { NextRequest, NextResponse } from 'next/server';
import { getBlogById, updateBlog, deleteBlog, Blog } from '@/services/blogService';
import { deleteFileFromS3 } from '@/services/s3Upload';

// ✅ GET /api/blog/:id
export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params; // 👈 aquí va el await
  const blogId = Number(id);

  if (isNaN(blogId)) {
    return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
  }

  try {
    const blog = await getBlogById(blogId);
    if (!blog) {
      return NextResponse.json({ error: 'No encontrado' }, { status: 404 });
    }
    return NextResponse.json(blog);
  } catch (error) {
    console.error('❌ Error al obtener blog:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

// ✅ PUT /api/blog/:id
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const blogId = Number(id);

  if (isNaN(blogId)) {
    return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
  }

  try {
    const body: Blog = await req.json();
    await updateBlog(blogId, body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Error al actualizar blog:', error);
    return NextResponse.json({ error: 'Error al actualizar blog' }, { status: 500 });
  }
}

// ✅ DELETE /api/blog/:id
export async function DELETE(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const blogId = Number(id);

  if (!blogId) {
    return NextResponse.json({ error: 'ID requerido' }, { status: 400 });
  }

  try {
    const blog = await getBlogById(blogId);
    if (!blog) {
      return NextResponse.json({ error: 'Blog no encontrado' }, { status: 404 });
    }

    if (blog.blg_coverImg) await deleteFileFromS3(blog.blg_coverImg);
    if (blog.blg_videoUrl && !blog.blg_videoUrl.includes('youtube.com')) {
      await deleteFileFromS3(blog.blg_videoUrl);
    }

    await deleteBlog(blogId);

    return NextResponse.json({ message: 'Blog eliminado correctamente' });
  } catch (error: any) {
    console.error('❌ Error al eliminar blog:', error);
    return NextResponse.json({ error: 'Error al eliminar blog' }, { status: 500 });
  }
}
