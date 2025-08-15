'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

const BlogDetailPublic = () => {
  const { id } = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<any>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/blog/${id}`)
        .then(res => setBlog(res.data))
        .catch(err => {
          console.error('Error al cargar blog:', err);
          setNotFound(true);
        });
    }
  }, [id]);

  const extractYouTubeId = (url: string) => {
    const match = url?.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/
    );
    return match ? match[1] : '';
  };

  if (notFound) {
    return (
      <section className="min-h-screen py-12 px-4 dark:bg-dark transition-colors">
        <div className="max-w-2xl mx-auto text-red-600 dark:text-red-400">
          Publicación no encontrada
        </div>
      </section>
    );
  }

  if (!blog) {
    return (
      <section className="min-h-screen py-12 px-4 dark:bg-dark transition-colors">
        <div className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
          Cargando publicación...
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-12 px-4 dark:bg-dark transition-colors">
      <div className="max-w-2xl mx-auto">
        <button
          onClick={() => router.push('/blog')}
          className="mb-4 text-blue-600 dark:text-blue-400 hover:underline text-sm"
        >
          ← Volver al blog
        </button>

        <h1 className="text-2xl sm:text-3xl font-bold mb-2 dark:text-white">
          {blog.blg_title}
        </h1>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-4">
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
          className="prose prose-sm sm:prose lg:prose-lg max-w-none mb-6 text-gray-800 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: blog.blg_content }}
        />

        {blog.blg_videoUrl && (
          <div className="w-full mb-6">
            {blog.blg_videoUrl.includes('youtube') ? (
              <div className="aspect-video rounded overflow-hidden border dark:border-gray-700">
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
                className="w-full max-h-[250px] rounded border dark:border-gray-700 object-contain"
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogDetailPublic;
