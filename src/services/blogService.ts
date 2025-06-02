// src/services/blogService.ts
import pool from '@/config/db';

export const getBlogById = async (id: string) => {
  const [rows] = await pool.query('SELECT * FROM blogs WHERE blg_id = ?', [id]);
  return Array.isArray(rows) && rows.length ? rows[0] : null;
};

export const fetchAllBlogs = async () => {
  const [rows] = await pool.query('SELECT blg_id FROM blogs');
  return rows as { blg_id: number }[];
};
