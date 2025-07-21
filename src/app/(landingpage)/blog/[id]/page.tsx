'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

const BlogDetailPublic = () => {
  const { id } = useParams();
  const router = useRouter();
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

  const extractYouTubeId = (url: string) => {
    const match = url?.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/
    );
    return match ? match[1] : '';
  };

  if (notFound) return <div className="p-6 text-red-600">Publicación no encontrada</div>;
  if (!blog) return <div className="p-6">Cargando publicación...</div>;

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 max-w-2xl mx-auto py-6">
      <button
        onClick={() => router.push('/blog')}
        className="mb-4 text-blue-600 hover:underline text-sm"
      >
        ← Volver al blog
      </button>

      <h1 className="text-2xl sm:text-3xl font-bold mb-2">{blog.blg_title}</h1>
      <p className="text-xs sm:text-sm text-gray-600 mb-4">
        {blog.blg_author} • {new Date(blog.blg_createdAt).toLocaleDateString()}
      </p>

      {blog.blg_coverImg && (
        <img
          src={blog.blg_coverImg}
          alt="Portada"
          className="w-full max-h-[250px] object-cover mb-4 rounded-md shadow"
        />
      )}

      <article
        className="prose prose-sm sm:prose lg:prose-lg max-w-none mb-6"
        dangerouslySetInnerHTML={{ __html: blog.blg_content }}
      />

      {blog.blg_videoUrl && (
        <div className="w-full mb-6">
          {blog.blg_videoUrl.includes('youtube') ? (
            <div className="aspect-video rounded overflow-hidden border">
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeId(blog.blg_videoUrl)}`}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          ) : (
            <video
              controls
              src={blog.blg_videoUrl}
              className="w-full max-h-[250px] rounded border object-contain"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default BlogDetailPublic;
