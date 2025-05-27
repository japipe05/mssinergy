// src/app/api/blog/route.ts
import { NextResponse } from 'next/server';
import pool from '@/lib/mysql';

export async function POST(req: Request) {
  try {
    const { title, content, category, coverImg, author } = await req.json();

    const [result] = await pool.execute(
      `INSERT INTO blogs (title, content, category, coverImg, author)
       VALUES (?, ?, ?, ?, ?)`,
      [title, content, category, coverImg, author]
    );

    return NextResponse.json({ success: true, id: (result as any).insertId });
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json({ success: false, error: "Database insert failed" }, { status: 500 });
  }
}
