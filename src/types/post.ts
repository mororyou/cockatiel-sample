export type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
  commentCount?: number;
};

export type PostList = Post[];
