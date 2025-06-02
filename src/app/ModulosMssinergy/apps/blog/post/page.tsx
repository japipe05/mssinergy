
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const BlogListPage = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/blog/all')
      .then(res => res.json())
      .then(setBlogs);
  }, []);

  const handleDelete = async (id: number) => {
    if (confirm('¿Deseas eliminar esta publicación?')) {
      await fetch(`/api/blog/${id}`, { method: 'DELETE' });
      setBlogs(prev => prev.filter(b => b.blg_id !== id));
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {blogs.map(blog => (
        <div key={blog.blg_id} className="border p-4 rounded shadow bg-white">
          <h2 className="text-xl font-bold mb-2">{blog.blg_title}</h2>
          <p className="text-sm text-gray-500 mb-2">{blog.blg_author} • {new Date(blog.blg_createdAt).toLocaleDateString()}</p>
          <p className="text-sm mb-4 line-clamp-3" dangerouslySetInnerHTML={{ __html: blog.blg_content }} />
          <div className="flex gap-2">
            <button onClick={() => router.push(`/ModulosMssinergy/apps/blog/${blog.blg_id}`)} className="text-blue-600">Ver</button>
            <button onClick={() => router.push(`/ModulosMssinergy/apps/blog/${blog.blg_id}/editar`)} className="text-yellow-600">Editar</button>
            <button onClick={() => handleDelete(blog.blg_id)} className="text-red-600">Eliminar</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogListPage;
