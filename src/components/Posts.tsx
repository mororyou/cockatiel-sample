
import { useEffect, useState } from 'react';
import { PostList } from '../types/post';
import { getPostService } from '../services/getPostService';

const Posts = () => {
  const [data, setData] = useState<PostList>([]);

  useEffect(() => {
    getPostService().then((res) => {
      setData(res);
    });
  }, []);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '10px',
    }}>
      {data.map(post => (
        <div key={post.id}>{post.id}. {post.title}</div>
      ))}
    </div>
  );

};



export default Posts;
