// src/app/api/blog/all/route.ts
import { NextResponse } from 'next/server';
import pool from '@/config/db';

export async function GET() {
  try {
    const [rows] = await pool.execute(`SELECT * FROM blogs ORDER BY blg_createdAt DESC`);
    return NextResponse.json(rows);
  } catch (error) {
    console.error('DB Error:', error);
    return NextResponse.json({ error: 'Error fetching blogs' }, { status: 500 });
  }
}
