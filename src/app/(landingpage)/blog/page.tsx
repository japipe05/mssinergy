'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const BlogPublicPage = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/blog/all')
      .then(res => res.json())
      .then(setBlogs);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Publicaciones del Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <div
            key={blog.blg_id}
            onClick={() => router.push(`/landingpage/general/blog/${blog.blg_id}`)}
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
    </div>
  );
};

export default BlogPublicPage;
