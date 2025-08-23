'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import ThemeBreadcrumb from '@/app/ModulosMssinergy/layout/shared/breadcrumb/ThemeBreadcrumb';
import { useTranslation } from "react-i18next";
import "@/utils/i18n";

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null;
  return (
    <div className="flex flex-wrap gap-2 mb-3 border p-2 rounded 
             bg-white text-black dark:bg-gray-800 dark:text-white 
             border-gray-300 dark:border-gray-600">
      <button onClick={() => editor.chain().focus().toggleBold().run()} className="font-bold">B</button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} className="italic">I</button>
      <button onClick={() => editor.chain().focus().toggleUnderline().run()} className="underline">U</button>
      <button onClick={() => editor.chain().focus().setTextAlign('left').run()}>⯇</button>
      <button onClick={() => editor.chain().focus().setTextAlign('center').run()}>≡</button>
      <button onClick={() => editor.chain().focus().setTextAlign('right').run()}>⯈</button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()}>• Lista</button>
      <button onClick={() => editor.chain().focus().toggleOrderedList().run()}>1. Lista</button>
    </div>
  );
};

const EditarBlogPage = () => {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [form, setForm] = useState({
    title: '',
    content: '',
    category: '',
    coverImg: '',
    author: '',
    videoUrl: '',
  });

  const [initialContent, setInitialContent] = useState('');
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({ bulletList: false, orderedList: false, listItem: false }),
      BulletList,
      OrderedList,
      ListItem,
      Underline,
      TextStyle,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: initialContent,
    onUpdate({ editor }) {
      setForm((prev) => ({ ...prev, content: editor.getHTML() }));
    },
  });

  useEffect(() => {
    if (id) {
      axios.get(`/api/blog?id=${id}`)
        .then((res) => {
          const data = res.data;
          setForm({
            title: data.blg_title || '',
            content: data.blg_content || '',
            category: data.blg_category || '',
            coverImg: data.blg_coverImg || '',
            author: data.blg_author || '',
            videoUrl: data.blg_videoUrl || '',
          });
          setInitialContent(data.blg_content || '');
        })
        .catch((err) => {
          console.error('❌ Error al obtener blog:', err);
        });
    }
  }, [id]);

  useEffect(() => {
    if (editor && form.content) {
      editor.commands.setContent(form.content);
    }
  }, [editor, form.content]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const extractYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
    return match ? match[1] : '';
  };

  const handleUpdate = async () => {
    if (
      !form.title.trim() ||
      !form.content.trim() ||
      !form.category.trim() ||
      !form.author.trim()
    ) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('content', form.content);
      formData.append('category', form.category);
      formData.append('author', form.author);

      if (coverFile) {
        formData.append('coverImg', coverFile);
      } else {
        formData.append('coverImgUrl', form.coverImg); // URL si no cambia la imagen
      }

      if (videoFile) {
        formData.append('video', videoFile);
      } else {
        formData.append('videoUrl', form.videoUrl); // URL si no cambia el video
      }

      const res = await axios.put(`/api/blog?id=${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setLoading(true);
      if (res.status === 200) {
        router.push(`/ModulosMssinergy/apps/blog/${id}`);
      } else {
        alert(res.data.error || 'Error al actualizar publicación');
      }

    } catch (error: any) {
      console.error('❌ Error al actualizar:', error);
      setLoading(true);
      alert(error?.response?.data?.error || 'Error inesperado');
    }
  };

  if (!editor) return <div className="p-6">Cargando editor...</div>;

  return (
    <>
      <ThemeBreadcrumb title={t("Editar Publicación")} />
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">{t("Editar Publicación")}</h1>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder={t("Título")}
          className="w-full mb-3 p-2 border rounded 
             bg-white text-black border-gray-300 
             dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />

        <select
          name="category"
          value={form.category || ''}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded 
             bg-white text-black border-gray-300 
             dark:bg-gray-800 dark:text-white dark:border-gray-600"
        >
          <option value="">{t("Selecciona una categoría")}</option>
              <option value="tecnologia">{t("Tecnología")}</option>
              <option value="desarrollo-web">{t("Desarrollo Web")}</option>
              <option value="diseño">{t("Diseño")}</option>
              <option value="emprendimiento">{t("Emprendimiento")}</option>
              <option value="vida">{t("Estilo de Vida")}</option>
              <option value="educacion">{t("Educación")}</option>
              <option value="salud">{t("Salud y Bienestar")}</option>
              <option value="viajes">{t("Viajes")}</option>
              <option value="finanzas">{t("Finanzas")}</option>
              <option value="marketing">{t("Marketing Digital")}</option>
        </select>

        <div className="w-full mb-3 p-2 border rounded 
             bg-white text-black border-gray-300 
             dark:bg-gray-800 dark:text-white dark:border-gray-600">
          <MenuBar editor={editor} />
          <EditorContent editor={editor} className="min-h-[150px] prose prose-sm max-w-none" />
        </div>

        <input
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder={t("Autor")}
            className="w-full mb-3 p-2 border rounded 
             bg-white text-black border-gray-300 
             dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />
        <input
          name="coverImg"
          value={form.coverImg}
          onChange={handleChange}
          placeholder={t("URL de la imagen o sube un archivo")}
            className="w-full mb-3 p-2 border rounded 
             bg-white text-black border-gray-300 
             dark:bg-gray-800 dark:text-white dark:border-gray-600"
        />

        {form.coverImg && (
          <img
            src={form.coverImg}
            alt="Vista previa"
            className="max-w-full h-auto border rounded shadow mb-3"
          />
        )}

        <div className="mb-3">
          <label className="block mb-1 font-medium">Cambiar imagen de portada</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setCoverFile(file);
                const imageUrl = URL.createObjectURL(file);
                setForm((prev) => ({ ...prev, coverImg: imageUrl }));
              }
            }}
            className="w-full border rounded p-2"
          />
        </div>


        {form.videoUrl && (
          <div className="mb-4">
            {form.videoUrl.includes('youtube.com') || form.videoUrl.includes('youtu.be') ? (
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeId(form.videoUrl)}`}
                className="w-full aspect-video rounded border"
                allowFullScreen
              />
            ) : (
              <video controls src={form.videoUrl} className="w-full h-auto rounded border" />
            )}
          </div>
        )}

        <div className="mb-3">
          <label className="block mb-1 font-medium">Cambiar video</label>
          <input
            type="file"
            accept="video/*"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setVideoFile(file);
                const videoUrl = URL.createObjectURL(file);
                setForm((prev) => ({ ...prev, videoUrl }));
              }
            }}
            className="w-full border rounded p-2"
          />
        </div>

        {/* Botón */}
        <button
          onClick={handleUpdate}
          type="submit"
          disabled={loading}
          className={`rounded-md bg-primary text-white py-2 px-4 text-sm 
                ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-primaryemphasis dark:hover:bg-primary/80"}`}
        >
          {loading ? t("Cargando...") : t("Publicar")}
        </button>
      </div>
    </>
  );
};

export default EditarBlogPage;
