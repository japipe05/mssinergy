'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import Image from "next/image";
import {  Button} from "flowbite-react";


const BlogListPage = () => {
  const { t } = useTranslation();
  const [blogs, setBlogs] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 👈 cantidad de blogs por página
  const router = useRouter();

  useEffect(() => {
    axios
      .get('/api/blog/all')
      .then(res => setBlogs(res.data))
      .catch(err => console.error('❌ Error al obtener blogs:', err));
  }, []);

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm(t("¿Deseas eliminar esta publicación?"));
    if (!confirmDelete) return;

    try {
      await axios.delete(`/api/blog?id=${id}`);
      setBlogs(prev => prev.filter(b => b.blg_id !== id));
    } catch (error) {
      console.error('❌ Error al eliminar blog:', error);
      alert(t("Ocurrió un error al eliminar la publicación."));
    }
  };

  // 🔹 Paginación
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  const handlePrevious = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const handlePageClick = (page: number) => setCurrentPage(page);

  return (
    <>
      {/* Grid de blogs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
       {paginatedBlogs.map(blog => (
  <div
    key={blog.blg_id}
    className="border rounded shadow 
               bg-white dark:bg-gray-800 
               text-black dark:text-white
               border-gray-200 dark:border-gray-700
               hover:shadow-lg dark:hover:shadow-blue-900/50 
               transition"
  >
    {/* Imagen de portada */}
    {blog.blg_coverImg && (
      <div className="mb-3">
        <Image
          src={blog.blg_coverImg}
          alt={blog.blg_title}
          width={600}
          height={300}
          className="w-full h-48 object-cover rounded"
        />
      </div>
    )}

    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{blog.blg_title}</h2>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {blog.blg_author} • {new Date(blog.blg_createdAt).toLocaleDateString()}
      </p>

      <p
        className="text-sm mb-4 line-clamp-3 dark:text-gray-300"
        dangerouslySetInnerHTML={{ __html: blog.blg_content }}
      />

      <div className="flex gap-2">
        <button
          onClick={() => router.push(`/ModulosMssinergy/apps/blog/${blog.blg_id}`)}
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          {t("Ver")}
        </button>
        <button
          onClick={() => router.push(`/ModulosMssinergy/apps/blog/${blog.blg_id}/editar`)}
          className="text-yellow-600 dark:text-yellow-400 hover:underline"
        >
          {t("Editar")}
        </button>
        <button
          onClick={() => handleDelete(blog.blg_id)}
          className="text-red-600 dark:text-red-400 hover:underline"
        >
          {t("Eliminar")}
        </button>
      </div>
    </div>
  </div>
))}
      </div>



      <div className="flex flex-wrap gap-2 items-center justify-center">
        <Button
          size="xs"
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="rounded-md bg-primary text-white hover:bg-primaryemphasis py-1"
        >
          {t("Anterior")}
        </Button>

        {[...Array(totalPages)].map((_, i) => (
          <Button
            key={i}
            size="xs"
            onClick={() => handlePageClick(i + 1)}
            color={currentPage === i + 1 ? "primary" : "gray"}
          >
            {i + 1}
          </Button>
        ))}

        <Button
          size="xs"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="rounded-md bg-primary text-white hover:bg-primaryemphasis py-1"
        >
          {t("Siguiente")}
        </Button>
      </div>



    </>
  );
};

export default BlogListPage;
