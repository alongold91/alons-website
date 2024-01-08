'use client';
import {
  BoldIcon,
  Header2Icon,
  Header3Icon,
  ImageIcon,
  HighlighterIcon,
  ItalicIcon
} from '@/public/icons';
import Highlight from '@tiptap/extension-highlight';
import Image from '@tiptap/extension-image';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useCallback } from 'react';
import IconToggler from '../buttons/IconToggler';
import style from './TextEditor.module.css';

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit.configure({
      codeBlock: {
        HTMLAttributes: {
          class: style.code,
        }
      }
    }), Highlight, Image]
    // onUpdate: (e) => console.log(editor?.getJSON())
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
      <div style={{ display: 'flex', marginTop: '1rem' }}>
        <IconToggler isActive={false} onClick={addImage}>
          <ImageIcon style={{ fontSize: '1.5rem' }} />
        </IconToggler>
        <IconToggler
          isActive={editor.isActive('heading', { level: 2 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Header2Icon style={{ fontSize: '1.5rem' }} />
        </IconToggler>
        <IconToggler
          isActive={editor.isActive('heading', { level: 3 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Header3Icon style={{ fontSize: '1.5rem' }} />
        </IconToggler>
        <IconToggler
          isActive={editor.isActive('bold')}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <BoldIcon style={{ fontSize: '1.5rem' }} />
        </IconToggler>
        <IconToggler
          isActive={editor.isActive('italic')}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <ItalicIcon style={{ fontSize: '1.5rem' }} />
        </IconToggler>
        <IconToggler
          isActive={editor.isActive('highlight')}
          onClick={() => editor.chain().focus().toggleHighlight().run()}
        >
          <HighlighterIcon style={{ fontSize: '1.5rem' }} />
        </IconToggler>
        <IconToggler
          isActive={editor.isActive('code')}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <p>Code</p>
        </IconToggler>
          
      </div>
      <EditorContent editor={editor} />
    </>
  );
};

export default Tiptap;
