import { sql } from '@vercel/postgres';
import { Comment, Post } from './definitions';
import { unstable_noStore as noStore } from 'next/cache';
import { FetchCommentsResult, FetchPostsResult } from './results';

export const fetchPosts = async () => {
  noStore();
  try {
    const data = await sql<FetchPostsResult>`SELECT * FROM posts`;
    const posts: Post[] = data.rows.map((post) => ({
      id: post.id,
      headline: post.headline,
      description: post.description,
      content: post.content,
      imagePath: post.image_path,
      categories: post.categories,
      publishmentDate: Number(post.publishment_date),
      lastEdited: post.last_edited ? Number(post.last_edited) : null
    }));

    return posts;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch comments.');
  }
};

export const fetchComments = async () => {
  noStore();
  try {
    const data = await sql<FetchCommentsResult>`SELECT * FROM comments`;
    const comments: Comment[] = data.rows.map((comment) => ({
      id: comment.id,
      writerName: comment.writer_name,
      content: comment.content,
      publishmentDate: Number(comment.publishment_date)
    }));

    return comments;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch comments.');
  }
};


