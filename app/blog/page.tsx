import React from 'react';
import { fetchPosts } from '../lib/data';
import { Post } from '../lib/definitions';
import PostCard from '../components/blog/post-card/PostCard';

const style: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  rowGap: 'var(--spacing-large)',
  margin: 'var(--spacing-medium) 0 0 var(--spacing-medium)'
};

const Page = async () => {
  const posts: Post[] = await fetchPosts();
  return (
    <div style={style}>
      {posts.map((post, index) => (
        <PostCard
          headline={post.headline}
          description={post.description}
          imagePath={post.imagePath}
          publishmentDate={post.publishmentDate}
          key={`post-card-${index}`}
        />
      ))}
    </div>
  );
};

export default Page;
