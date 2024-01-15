import { Post } from '@/app/lib/definitions';
import React from 'react';

interface PostCardProps {
  headline: Post['headline'];
  description: Post['description'];
  publishmentDate: Post['publishmentDate'];
  imagePath: Post['imagePath'];
}

const PostCard = ({
  headline,
  description,
  publishmentDate,
  imagePath
}: PostCardProps) => {
  const style: React.CSSProperties = { 
    cursor: 'pointer',
    border: '1px solid var(--color-borderColor)',
    color: 'var(--color-textDark)',
    height: '250px',
    width: '180px',
    backgroundImage: `url("/static-images/${imagePath}"), url("/static-images/blogpost-fallback-image.jpg")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  };
  return (
    <button style={style}>
      <h3>{headline}</h3>
      <p>Published {publishmentDate}</p>
      {description && <p>{description}</p>}
    </button>
  );
};

export default PostCard;
