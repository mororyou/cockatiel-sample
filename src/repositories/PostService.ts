import { API_DOMAIN } from '../constants';
import { Post, PostList } from '../types/post';

const getPosts = async () => {
  const res = await fetch(`${API_DOMAIN}/posts`);
  const posts: PostList = await res.json();
  return posts;
};

const getPost = async (id: number) => {
  const res = await fetch(`${API_DOMAIN}/posts/${id}`);
  const post: Post = await res.json();
  return post;
};

export default { getPost, getPosts };
