
import { fetchComments } from '@/app/lib/data';
import { Comment } from '@/app/lib/definitions';
import React from 'react';

const Comments = async () => {
  const comments: Comment[] = await fetchComments();
  return (
    <div>
      {comments.map((comment) => {
        return (
          <>
            <h3>{comment.writerName}</h3>
            <p>{comment.content}</p>
            <p>{comment.publishmentDate}</p>
          </>
        );
      })}
    </div>
  );
};

export default Comments;
