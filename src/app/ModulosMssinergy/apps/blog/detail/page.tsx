// src/app/blog/create/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateBlog = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    content: '',
    category: '',
    coverImg: '',
    author: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (res.ok) {
      router.push('/blog'); // redirige al listado si lo tienes
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Crear Publicación</h1>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Título" className="w-full mb-3 p-2 border rounded" />
      <input name="category" value={form.category} onChange={handleChange} placeholder="Categoría" className="w-full mb-3 p-2 border rounded" />
      <input name="coverImg" value={form.coverImg} onChange={handleChange} placeholder="URL Imagen" className="w-full mb-3 p-2 border rounded" />
      <input name="author" value={form.author} onChange={handleChange} placeholder="Autor" className="w-full mb-3 p-2 border rounded" />
      <textarea name="content" value={form.content} onChange={handleChange} placeholder="Contenido" className="w-full mb-3 p-2 border rounded" rows={6} />
      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Publicar</button>
    </div>
  );
};

export default CreateBlog;
