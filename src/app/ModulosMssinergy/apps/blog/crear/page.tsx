'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import ThemeBreadcrumb from '@/app/ModulosMssinergy/layout/shared/breadcrumb/ThemeBreadcrumb';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import { useTranslation } from "react-i18next";
import "@/utils/i18n";
import TitleCard from "@/app/components/shared/TitleBorderCard";

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

const Blog = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const [form, setForm] = useState({
    title: '',
    category: '',
    content: '',
    author: '',
    videoUrl: '',
    coverImg: '',
  });

  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

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
    content: form.content,
    onUpdate: ({ editor }) =>
      setForm((prev) => ({ ...prev, content: editor.getHTML() })),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const extractYouTubeId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
    return match ? match[1] : '';
  };

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};

    if (!form.content || form.content === "<p></p>") {
      newErrors.content = t("");
    }
    if (!form.coverImg && !coverFile) {
      newErrors.coverImg = t("");
    }

     if (!form.videoUrl && !coverFile) {
      newErrors.videoUrl = t("");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('content', form.content);
      formData.append('category', form.category);
      formData.append('author', form.author);

      if (coverFile) formData.append('imagen', coverFile);
      else if (form.coverImg) formData.append('coverImg', form.coverImg);

      if (videoFile) formData.append('video', videoFile);
      else if (form.videoUrl) formData.append('videoUrl', form.videoUrl);

      const { data } = await axios.post('/api/blog', formData);
      if (data?.id) {
        router.push(`/ModulosMssinergy/apps/blog/${data.id}`);
      } else {
        alert(data.error || 'Error al crear publicación');
      }
    } catch (err: any) {
      console.error('❌ Error al crear blog:', err);
      alert(err?.response?.data?.error || 'Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ThemeBreadcrumb title={t("Crear Publicación")} />
      <TitleCard>
        <div className="max-w-2xl mx-auto p-6 flex flex-col min-h-screen">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            
            {/* Título */}
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder={t("Título")}
              required
              className={`w-full p-2 border rounded 
                bg-white text-black dark:bg-gray-800 dark:text-white 
                border-gray-300 dark:border-gray-600 ${errors.title && "border-red-500"}`}
            />

            {/* Categoría */}
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              required
              className={`w-full p-2 border rounded
                bg-white text-black dark:bg-gray-800 dark:text-white 
                border-gray-300 dark:border-gray-600 ${errors.category && "border-red-500"}`}
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

            {/* Editor */}
            <div className={`border rounded p-2 
                    bg-white dark:bg-gray-900 
                    border-gray-300 dark:border-gray-600 ${errors.content && "border-red-500"}`}>
              <MenuBar editor={editor} />
              <EditorContent
                editor={editor}
                className="min-h-[150px] prose prose-sm max-w-none dark:prose-invert"
              />
            </div>
            {errors.content && <p className="text-red-500 text-sm">{errors.content}</p>}

            {/* Autor */}
            <input
              name="author"
              value={form.author}
              onChange={handleChange}
              placeholder={t("Autor")}
              required
              className={`w-full p-2 border rounded 
                bg-white text-black dark:bg-gray-800 dark:text-white 
                border-gray-300 dark:border-gray-600 ${errors.author && "border-red-500"}`}
            />

            {/* Imagen de portada */}
            <label className="block font-medium dark:text-white">{t("Imagen de portada *")}</label>
            <input
              type="text"
              name="coverImg"
              value={form.coverImg}
              onChange={(e) => {
                setForm({ ...form, coverImg: e.target.value });
                setCoverPreview(e.target.value);
              }}
              placeholder={t("URL de la imagen o sube un archivo")}
              className={`w-full p-2 border rounded 
                bg-white text-black dark:bg-gray-800 dark:text-white 
                border-gray-300 dark:border-gray-600 ${errors.coverImg && "border-red-500"}`}
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setCoverFile(file);
                  setCoverPreview(URL.createObjectURL(file));
                }
              }}
              className="dark:text-white"
            />

            {coverPreview && (
              <img
                src={coverPreview}
                alt="Vista previa"
                className="w-full max-h-[250px] object-cover rounded shadow"
              />
            )}

            {/* Video opcional */}
            <label className="block font-medium mt-4 dark:text-white">{t("Video (opcional)")}</label>
            <input
              type="text"
              name="videoUrl"
              value={form.videoUrl}
              onChange={handleChange}
              placeholder={t("URL o sube video")}
              className="w-full p-2 border rounded 
                bg-white text-black dark:bg-gray-800 dark:text-white 
                border-gray-300 dark:border-gray-600"
            />

            <input
              type="file"
              accept="video/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setVideoFile(file);
                  setVideoPreview(URL.createObjectURL(file));
                }
              }}
              className="dark:text-white"
            />

            {(form.videoUrl || videoPreview) && (
              <div>
                {form.videoUrl.includes("youtube") ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${extractYouTubeId(form.videoUrl)}`}
                    className="w-full aspect-video rounded border 
                      border-gray-300 dark:border-gray-600"
                    allowFullScreen
                  />
                ) : (
                  videoPreview && (
                    <video
                      controls
                      src={videoPreview}
                      className="w-full max-h-[250px] rounded border object-contain
                        border-gray-300 dark:border-gray-600"
                    />
                  )
                )}
              </div>
            )}

            {/* Botón */}
            <button
              type="submit"
              disabled={loading}
              className={`rounded-md bg-primary text-white py-2 px-4 text-sm 
                ${loading ? "opacity-70 cursor-not-allowed" : "hover:bg-primaryemphasis dark:hover:bg-primary/80"}`}
            >
              {loading ? t("Cargando...") : t("Publicar")}
            </button>
          </form>
        </div>
      </TitleCard>
    </>
  );
};

export default Blog;
