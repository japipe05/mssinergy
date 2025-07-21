'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const POSTS_PER_PAGE = 6;

const BlogPublicPage = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/blog/all')
      .then(res => res.json())
      .then(setBlogs);
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
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Publicaciones del Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedBlogs.map(blog => (
          <div
            key={blog.blg_id}
            onClick={() => router.push(`/blog/${blog.blg_id}`)}
            className="border p-4 rounded shadow bg-white hover:cursor-pointer hover:shadow-md transition"
          >
            {blog.blg_coverImg && (
              <img
                src={blog.blg_coverImg}
                alt={blog.blg_title}
                className="mb-3 rounded w-full h-40 object-cover"
              />
            )}
            <h2 className="text-xl font-semibold mb-2">{blog.blg_title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              {blog.blg_author} • {new Date(blog.blg_createdAt).toLocaleDateString()}
            </p>
            <div
              className="line-clamp-3 text-sm"
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
            className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-green-200 hover:bg-green-300'}`}
          >
            Anterior
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`w-8 h-8 rounded-full ${
                currentPage === i + 1
                  ? 'bg-green-500 text-white'
                  : 'bg-white border hover:bg-green-100'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-green-200 hover:bg-green-300'}`}
          >
            Siguiente
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogPublicPage;
