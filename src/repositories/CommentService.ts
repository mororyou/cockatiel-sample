import { API_DOMAIN } from '../constants';
import { CommentList } from '../types/comment';

const getComments = async (id: number) => {
  const res = await fetch(`${API_DOMAIN}/posts/${id}/comments`);
  const comments: CommentList = await res.json();
  return comments;
};

export default { getComments };
