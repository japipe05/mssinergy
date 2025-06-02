// ✅ Página para editar blog con TipTap, igual a la vista de creación
// src/app/ModulosMssinergy/apps/blog/[id]/editar/page.tsx

'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Underline from '@tiptap/extension-underline';
import TextStyle from '@tiptap/extension-text-style';
import BulletList from '@tiptap/extension-bullet-list';
import OrderedList from '@tiptap/extension-ordered-list';
import ListItem from '@tiptap/extension-list-item';
import ThemeBreadcrumb from '@/app/ModulosMssinergy/layout/shared/breadcrumb/ThemeBreadcrumb';

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

const EditarBlogPage = () => {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [form, setForm] = useState<any>(null);
  const [initialContent, setInitialContent] = useState('');

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
      setForm((prev: any) => ({ ...prev, content: editor.getHTML() }));
    },
  });

  useEffect(() => {
    if (id) {
      fetch(`/api/blog/${id}`)
        .then(res => res.json())
        .then(data => {
          if (!data || data.error) return;
          setForm({
            title: data.blg_title,
            content: data.blg_content,
            category: data.blg_category,
            coverImg: data.blg_coverImg,
            author: data.blg_author,
            videoUrl: data.blg_videoUrl,
          });
          setInitialContent(data.blg_content);
        });
    }
  }, [id]);

  useEffect(() => {
    if (editor && form?.content) {
      editor.commands.setContent(form.content);
    }
  }, [editor, form?.content]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    await fetch(`/api/blog/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    router.push(`/ModulosMssinergy/apps/blog/${id}`);
  };

  const extractYouTubeId = (url: string) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
    return match ? match[1] : '';
  };

  if (!form) return <div className="p-6">Cargando publicación...</div>;

  return (
    <>
      <ThemeBreadcrumb title="Editar Publicación" />

      <div className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Editar Publicación</h1>
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
          className="w-full mb-3 p-2 border rounded"
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
          name="coverImg"
          value={form.coverImg}
          onChange={handleChange}
          placeholder="URL Imagen de portada"
          className="w-full mb-3 p-2 border rounded"
        />

        {form.coverImg && (
          <img
            src={form.coverImg}
            alt="Vista previa"
            className="max-w-full h-auto border rounded shadow mb-3"
          />
        )}

        <input
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Autor"
          className="w-full mb-3 p-2 border rounded"
        />

       

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

        <button onClick={handleUpdate} className="bg-blue-600 text-white px-4 py-2 rounded">
          Guardar cambios
        </button>
      </div>
    </>
  );
};

export default EditarBlogPage;