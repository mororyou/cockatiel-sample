import { bulkheadPolicy } from '../policies/bulkhead';
import CommentService from '../repositories/CommentService';
import PostService from '../repositories/PostService';

export const getPostService = async () => {
  console.timeLog('getPostService');
  console.group('getPostService');
  const posts = await PostService.getPosts();
  console.log('posts:', posts);

  await Promise.all(
    posts.map(async (post) => {
      bulkheadPolicy
        .execute(async () => {
          const comments = await CommentService.getComments(post.id);
          console.log('post id:', post.id);
          console.log('comments:', comments);
        })
        .finally(() => {
          console.log('bulkheadPolicy finally');
        });
    }),
  ).finally(() => {
    console.log('promise all finally');
  });

  console.groupEnd();
  return posts;
};
