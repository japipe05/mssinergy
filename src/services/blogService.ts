// src/services/blogService.ts
import pool from '@/config/db';

export interface Blog {
  blg_id?: number;
  blg_title: string;
  blg_content: string;
  blg_category: string;
  blg_coverImg: string;
  blg_author: string;
  blg_videoUrl?: string;
  blg_createdAt?: Date;
}
 
// Insertar nuevo blog
export async function createBlog(blog: Blog): Promise<number> {
  const [result]: any = await pool.query(
    `INSERT INTO blogs (blg_title, blg_content, blg_category, blg_coverImg, blg_author, blg_videoUrl)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [
      blog.blg_title,
      blog.blg_content,
      blog.blg_category,
      blog.blg_coverImg,
      blog.blg_author,
      blog.blg_videoUrl
    ]
  );
  return result.insertId;
} 

// Obtener todos los blogs
export async function getAllBlogs(): Promise<Blog[]> {
  const [rows]: any = await pool.query(`SELECT * FROM blogs ORDER BY blg_createdAt DESC`);
  return rows;
}

// Obtener un blog por ID
export async function getBlogById(id: number): Promise<Blog | null> {
  const [rows]: any = await pool.query(`SELECT * FROM blogs WHERE blg_id = ?`, [id]);
  return rows[0] || null;
}

// Actualizar blog existente
export async function updateBlog(id: number, blog: Blog): Promise<void> {
  await pool.query(
    `UPDATE blogs SET blg_title = ?, blg_content = ?, blg_category = ?, blg_coverImg = ?, blg_author = ?, blg_videoUrl = ? WHERE blg_id = ?`,
    [
      blog.blg_title,
      blog.blg_content,
      blog.blg_category,
      blog.blg_coverImg,
      blog.blg_author,
      blog.blg_videoUrl,
      id,
    ]
  );
}

// Eliminar blog por ID
export async function deleteBlog(id: number): Promise<void> {
  await pool.query(`DELETE FROM blogs WHERE blg_id = ?`, [id]);
}
