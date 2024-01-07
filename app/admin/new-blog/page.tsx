'use client';
import { H1Icon, Alons } from '@/public/icons';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useCallback } from 'react';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      // Document,
      StarterKit,
      Highlight,
      Image,
      // Heading.configure({
      //   levels: [1, 2, 3, 4, 5, 6]
      // })
    ],
    onUpdate: (e) => console.log(editor?.getJSON())
    // content: '<p>Hello World! 🌎️</p>',
  });

  const addImage = useCallback(() => {
    const url = window.prompt('URL');

    if (url) {
      editor!.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <>
      <button onClick={addImage}>setImage</button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        // className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        H1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        // className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        <H1Icon/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        // className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        H3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        // className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        Bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={editor.isActive('highlight') ? 'is-active' : ''}
      >
       Highlight
      </button>
      <EditorContent editor={editor} />
      <Alons style={{fontSize: '16rem', lineHeight: 1}} />
    </>
  );
};

export default Tiptap;
