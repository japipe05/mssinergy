'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const BlogDetailPublic = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`/api/blog/${id}`)
        .then(res => {
          if (!res.ok) {
            setNotFound(true);
            return null;
          }
          return res.json();
        })
        .then(data => {
          if (data) setBlog(data);
        });
    }
  }, [id]);

  if (notFound) return <div className="p-6 text-red-600">Publicación no encontrada</div>;
  if (!blog) return <div className="p-6">Cargando publicación...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{blog.blg_title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        {blog.blg_author} • {new Date(blog.blg_createdAt).toLocaleDateString()}
      </p>
      {blog.blg_coverImg && (
        <img src={blog.blg_coverImg} alt="Portada" className="w-full mb-6 rounded shadow" />
      )}
      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.blg_content }}
      />
    </div>
  );
};

export default BlogDetailPublic;
