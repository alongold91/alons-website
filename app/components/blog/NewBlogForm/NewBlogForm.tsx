'use client';
import { createNewPost } from '@/app/lib/actions';
import React, { useState } from 'react';
import TextEditor from '../text-editor/TextEditor';

const NewBlogForm = () => {
  const [editorText, setEditorText] = useState<string>('');

  const setContent = (text: string) => setEditorText(text);

  const handleCreateNewPost = (formData: FormData) => {
    const categories = (formData.get('categories') as string).replace(/\s/g, "").split(',');
    const formDataProperties = {
      headline: formData.get('headline') as string || '',
      description: formData.get('description') as string,
      imagePath: formData.get('image_path') as string,
      categories,
      content: editorText
    }
    createNewPost(formDataProperties)
  }

  return (
    <form action={handleCreateNewPost}>
      <label htmlFor='headline'>Headline</label>
      <input type='text' name='description' />
      <br />
      <label htmlFor='description'>Description</label>
      <input type='text' name='headline' />
      <br />
      <label htmlFor='image_path'>Image Path</label>
      <input type='text' name='image_path' />
      <br />
      <label htmlFor='categories'>Categories</label>
      <input type='text' name='categories' />
      <br />
      <label htmlFor='content'>Content</label>
      <TextEditor name='content' onChange={setContent} />
      <button type='submit'>Create a new post</button>
    </form>
  );
};

export default NewBlogForm;
