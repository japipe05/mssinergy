'use client';
//blg_author
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

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null;
  return (
    <div className="flex flex-wrap gap-2 mb-3 border p-2 rounded bg-white">
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

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append('title', form.title);
      formData.append('content', form.content);
      formData.append('category', form.category);
      formData.append('author', form.author);

      if (coverFile) formData.append('coverImg', coverFile);
      else if (form.coverImg) formData.append('coverImgUrl', form.coverImg);

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
    }
  };

  return (
    <>
      <ThemeBreadcrumb title="Crear Publicación" />
      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Crear Publicación</h1>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Título"
          className="w-full mb-3 p-2 border rounded"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-3"
        >
          <option value="">Selecciona una categoría</option>
          <option value="tecnologia">Tecnología</option>
          <option value="desarrollo-web">Desarrollo Web</option>
          <option value="diseño">Diseño</option>
          <option value="emprendimiento">Emprendimiento</option>
          <option value="vida">Estilo de Vida</option>
          <option value="educacion">Educación</option>
          <option value="salud">Salud y Bienestar</option>
          <option value="viajes">Viajes</option>
          <option value="finanzas">Finanzas</option>
        </select>

        <div className="border rounded mb-3 p-2 bg-white">
          <MenuBar editor={editor} />
          <EditorContent editor={editor} className="min-h-[150px] prose prose-sm max-w-none" />
        </div>

        <input
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Autor"
          className="w-full mb-3 p-2 border rounded"
        />

        <label className="block font-medium mb-1">Imagen de portada</label>

        <input
          type="text"
          name="coverImg"
          value={form.coverImg}
          onChange={(e) => {
            setForm({ ...form, coverImg: e.target.value });
            setCoverPreview(e.target.value);
          }}
          placeholder="URL de la imagen o sube un archivo"
          className="w-full mb-2 p-2 border rounded"
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
          className="mb-2"
        />

        {coverPreview && (
          <img
            src={coverPreview}
            alt="Vista previa"
            className="w-full max-h-[250px] object-cover rounded shadow mb-4"
          />
        )}

        <label className="block font-medium mb-1 mt-4">Video</label>

        <input
          type="text"
          name="videoUrl"
          value={form.videoUrl}
          onChange={handleChange}
          placeholder="URL o sube video"
          className="w-full mb-2 p-2 border rounded"
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
          className="mb-2"
        />

        {(form.videoUrl || videoPreview) && (
          <div className="mb-4">
            {form.videoUrl.includes('youtube') ? (
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeId(form.videoUrl)}`}
                className="w-full aspect-video rounded border"
                allowFullScreen
              />
            ) : (
              videoPreview && (
                <video
                  controls
                  src={videoPreview}
                  className="w-full max-h-[250px] rounded border object-contain"
                />
              )
            )}
          </div>
        )}

        <button
          onClick={handleSubmit}
          className="rounded-md bg-primary text-white hover:bg-primaryemphasis py-2 px-4 text-sm"
        >
          Publicar
        </button>
      </div>
    </>
  );
};

export default Blog;
