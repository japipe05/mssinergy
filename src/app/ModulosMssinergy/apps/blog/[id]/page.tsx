import { notFound } from 'next/navigation';
import { getBlogById } from '@/services/blogService';

type Props = {
  params: {
    id: string;
  };
};

// Define el tipo para el blog (opcional pero recomendado)
type Blog = {
  blg_id: number;
  blg_title: string;
  blg_content: string;
  blg_category: string;
  blg_coverImg: string;
  blg_author: string;
  blg_videoUrl: string;
  blg_createdAt: string;
};

const BlogDetailPage = async ({ params }: Props) => {
  const result = await getBlogById(params.id);
const blog = Array.isArray(result) ? (result[0] as Blog) : null;


  if (!blog) return notFound();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{blog.blg_title}</h1>
      <p className="text-sm text-gray-600 mb-4">
        {blog.blg_author} • {blog.blg_category} • {new Date(blog.blg_createdAt).toLocaleDateString()}
      </p>

     

      <article
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.blg_content }}
      />
      
      {blog.blg_coverImg && (
        <img
          src={blog.blg_coverImg}
          alt="Portada"
          className="w-full h-auto rounded shadow mb-6"
        />
      )}
      {blog.blg_videoUrl && (
        <div className="mt-6">
          {isYouTubeUrl(blog.blg_videoUrl) ? (
            <iframe
              src={`https://www.youtube.com/embed/${extractYouTubeId(blog.blg_videoUrl)}`}
              className="w-full aspect-video rounded border"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              controls
              src={blog.blg_videoUrl}
              className="w-full h-auto rounded border"
            />
          )}
        </div>
      )}
    </div>
  );
};

// Extra: extrae YouTube ID si es necesario
const extractYouTubeId = (url: string) => {
  const match = url.match(
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/
  );
  return match ? match[1] : '';
};

const isYouTubeUrl = (url: string) => {
  return url.includes('youtube.com') || url.includes('youtu.be');
};

export default BlogDetailPage;
