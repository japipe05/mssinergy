import { NextRequest, NextResponse } from 'next/server';


import pool from '@/config/db';

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const id = context.params.id;
  try {
    const [rows] = await pool.execute('SELECT * FROM blogs WHERE blg_id = ?', [id]);

    if ((rows as any[]).length === 0) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json((rows as any[])[0]);
  } catch (error) {
    console.error('DB Error:', error);
    return NextResponse.json({ error: 'Error fetching blog' }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, context: { params: { id: string } }) {
  const id = context.params.id;
  try {
    const { title, content, category, coverImg, author, videoUrl } = await req.json();

    await pool.execute(
      `UPDATE blogs SET blg_title=?, blg_content=?, blg_category=?, blg_coverImg=?, blg_author=?, blg_videoUrl=? WHERE blg_id = ?`,
      [title, content, category, coverImg, author, videoUrl, id]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DB Error:', error);
    return NextResponse.json({ error: 'Error updating blog' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  const id = context.params.id;
  try {
    await pool.execute('DELETE FROM blogs WHERE blg_id = ?', [id]);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('DB Error:', error);
    return NextResponse.json({ error: 'Error deleting blog' }, { status: 500 });
  }
}
