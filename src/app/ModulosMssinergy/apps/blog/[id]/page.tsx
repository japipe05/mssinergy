'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const VerBlogPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/blog/${id}`)
        .then(res => res.json())
        .then(data => {
          if (!data || data.error) return setBlog(undefined);
          setBlog(data);
        });
    }
  }, [id]);

  if (blog === undefined) return <div className="p-6 text-red-500">Publicación no encontrada</div>;
  if (!blog) return <div className="p-6">Cargando publicación...</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{blog.blg_title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {blog.blg_author} • {blog.blg_category} • {new Date(blog.blg_createdAt).toLocaleDateString()}
      </p>

      {blog.blg_coverImg && (
        <div className="max-w-xs mb-6">
          <img
            src={blog.blg_coverImg}
            alt="Portada"
            className="w-full h-auto rounded shadow"
          />
        </div>
      )}


      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.blg_content }}
      />

      {blog.blg_videoUrl && (
        <div className="mt-6 mx-auto">
          {blog.blg_videoUrl.includes('youtube.com') || blog.blg_videoUrl.includes('youtu.be') ? (
            <iframe
              src={`https://www.youtube.com/embed/${blog.blg_videoUrl.split('v=')[1]}`}
              className="w-full aspect-video rounded border"
              allowFullScreen
            />
          ) : (
            <video controls src={blog.blg_videoUrl} className="w-full h-auto rounded border" />
          )}
        </div>
      )}
    </div>
  );
};

export default VerBlogPage;
