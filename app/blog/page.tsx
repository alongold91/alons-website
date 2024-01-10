import React from 'react';
import { fetchPosts } from '../lib/data';
import { Post } from '../lib/definitions';

const Page = async () => {
  const posts: Post[] = await fetchPosts();
  return (
    <div>
      {posts.map((post) => {
        return (
          <>
            <h3>{post.headline}</h3>
            <p>Published {post.publishmentDate}</p>
            {post.lastEdited && <p>Edited: {post.lastEdited}</p>}
            {post.description && <p>{post.description}</p>}
            <p>{post.content}</p>
          </>
        );
      })}
    </div>
  );
};

export default Page;
