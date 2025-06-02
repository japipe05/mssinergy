'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
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

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    return data.url;
  };


  const router = useRouter();
  const [form, setForm] = useState({
      title: '',
      content: '',
      category: '',
      coverImg: '',
      author: 'user', // default
      videoUrl: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: false,
        orderedList: false,
        listItem: false,
      }),
      BulletList,
      OrderedList,
      ListItem,
      Underline,
      TextStyle,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: form.content,
    onUpdate({ editor }) {
      setForm((prev) => ({ ...prev, content: editor.getHTML() }));
    },
  });

  const extractYouTubeId = (url: string) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/
    );
    return match ? match[1] : '';
  };


  const handleSubmit = async () => {
    const res = await fetch('/api/blog', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();

    if (res.ok && data?.id) {
      router.push(`/ModulosMssinergy/apps/blog/${data.id}`); // Redirige al detalle del blog
    }
  };


  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Crear Publicación</h1>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Título" className="w-full mb-3 p-2 border rounded" />
      <div className="mb-3">
        <label htmlFor="category" className="block mb-1 font-medium">Categoría</label>
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
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
      </div>



      {/* Editor enriquecido */}
      <div className="border rounded mb-3 p-2 bg-white">
        <MenuBar editor={editor} />
        <EditorContent editor={editor} className="min-h-[150px] prose prose-sm max-w-none" />
      </div>
      <div className="mb-3">
        <label className="block font-medium mb-1">Imagen de portada</label>

        {/* URL manual */}
        <input
          type="text"
          name="coverImg"
          value={form.coverImg}
          onChange={handleChange}
          placeholder="URL Imagen (o sube una imagen abajo)"
          className="w-full mb-2 p-2 border rounded"
        />

        {/* Subida local */}
        <input
          type="file"
          accept="image/*"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (file) {
              const url = await uploadFile(file); // Subida a /api/upload
              setForm((prev) => ({ ...prev, coverImg: url }));
            }
          }}
          className="mb-2"
        />

        {form.coverImg && (
          <img
            src={form.coverImg}
            alt="Vista previa"
            className="max-w-full h-auto border rounded shadow"
          />
        )}




      </div>

      <div className="mb-3">
        <label className="block font-medium mb-1">Video</label>

        {/* URL manual */}
        <input
          type="text"
          name="videoUrl"
          value={form.videoUrl}
          onChange={handleChange}
          placeholder="URL del video (YouTube, Vimeo o MP4)"
          className="w-full mb-2 p-2 border rounded"
        />

        {/* Subida local */}
        <input
          type="file"
          accept="video/*"
          onChange={async (e) => {
            const file = e.target.files?.[0];
            if (file) {
              const url = await uploadFile(file);
              setForm((prev) => ({ ...prev, videoUrl: url }));
            }
          }}
          className="mb-2"
        />

        {form.videoUrl && (
          <>
            {form.videoUrl.includes('youtube.com') || form.videoUrl.includes('youtu.be') ? (
              <iframe
                src={`https://www.youtube.com/embed/${extractYouTubeId(form.videoUrl)}`}
                className="w-full aspect-video rounded border"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                controls
                src={form.videoUrl}
                className="w-full h-auto rounded border"
              />
            )}
          </>
        )}



      </div>





      <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Publicar</button>
    </div>
  );
};

export default Blog;
