// src/types/blog.ts
export interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: string;
  coverImg: string;
  view: number;
  createdAt: string;
  author: {
    name: string;
    avatar: string;
  };
  comments: CommentType[];
}

export interface CommentType {
  id: string;
  profile: {
    id: string;
    name: string;
    avatar: string;
    time: string;
  };
  comment: string;
  replies: CommentType[];
  postId: string;
}
