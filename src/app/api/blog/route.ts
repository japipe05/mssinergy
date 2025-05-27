// src/app/api/blog/route.ts
import { NextResponse } from 'next/server';
import pool from '@/config/db';

export async function POST(req: Request) {
  try {
    const { title, content, category, coverImg, author, videoUrl } = await req.json();

const [result] = await pool.execute(
  `INSERT INTO blogs (blg_title, blg_content, blg_category, blg_coverImg, blg_author, blg_videoUrl)
   VALUES (?, ?, ?, ?, ?, ?)`,
  [title, content, category, coverImg, author, videoUrl]
);


    return NextResponse.json({ success: true, id: (result as any).insertId });
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ success: false, error: "Database insert failed" }, { status: 500 });
  }
}
