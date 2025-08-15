'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const POSTS_PER_PAGE = 6;

const BlogPublicPage = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    axios
      .get('/api/blog/all')
      .then(res => setBlogs(res.data))
      .catch(err => {
        console.error('Error al cargar blogs:', err);
      });
  }, []);

  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);

  const paginatedBlogs = blogs.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="min-h-screen py-12 px-4 dark:bg-dark transition-colors">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 dark:text-white">
          Publicaciones del Blog
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedBlogs.map(blog => (
            <div
              key={blog.blg_id}
              onClick={() => router.push(`/blog/${blog.blg_id}`)}
              className="border border-gray-200 dark:border-gray-700 p-4 rounded shadow bg-white dark:bg-gray-800 hover:cursor-pointer hover:shadow-md dark:hover:shadow-lg transition"
            >
              {blog.blg_coverImg && (
                <img
                  src={blog.blg_coverImg}
                  alt={blog.blg_title}
                  className="mb-3 rounded w-full h-40 object-cover"
                />
              )}
              <h2 className="text-xl font-semibold mb-2 dark:text-white">
                {blog.blg_title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {blog.blg_author} •{' '}
                {new Date(blog.blg_createdAt).toLocaleDateString()}
              </p>
              <div
                className="line-clamp-3 text-sm text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: blog.blg_content }}
              />
            </div>
          ))}
        </div>

        {/* Paginación */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-2 items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded transition-colors ${
                currentPage === 1
                  ? 'bg-gray-300 dark:bg-gray-700 text-gray-500'
                  : 'bg-green-200 dark:bg-green-700 hover:bg-green-300 dark:hover:bg-green-600 text-black dark:text-white'
              }`}
            >
              Anterior
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`w-8 h-8 rounded-full transition-colors ${
                  currentPage === i + 1
                    ? 'bg-green-500 text-white'
                    : 'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:bg-green-100 dark:hover:bg-green-700 text-black dark:text-white'
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded transition-colors ${
                currentPage === totalPages
                  ? 'bg-gray-300 dark:bg-gray-700 text-gray-500'
                  : 'bg-green-200 dark:bg-green-700 hover:bg-green-300 dark:hover:bg-green-600 text-black dark:text-white'
              }`}
            >
              Siguiente
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPublicPage;
