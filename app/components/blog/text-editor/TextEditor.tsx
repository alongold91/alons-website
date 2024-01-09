'use client';
import {
  BoldIcon,
  Header2Icon,
  Header3Icon,
  ImageIcon,
  HighlighterIcon,
  ItalicIcon,
  CodeIcon,
  UnderlineIcon,
  BulletlistIcon
} from '@/public/icons';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import Image from '@tiptap/extension-image';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { useCallback } from 'react';
import IconToggler from '../../buttons/IconToggler';
import style from './TextEditor.module.css';

const Tiptap = () => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class: style.tiptap
      }
    },
    extensions: [
      StarterKit.configure({
        codeBlock: {
          HTMLAttributes: {
            class: style.code
          }
        },
        bulletList: {
          HTMLAttributes: {
            class: style['bullet-list']
          }
        }
      }),
      Highlight,
      Image,
      Underline,
      Table.configure({
        resizable: true
      }),
      TableRow,
      TableHeader,
      TableCell
    ]
    // onUpdate: (e) => console.log(editor?.getJSON())
  });

  const addImage = useCallback(() => {
    const url = window.prompt('URL');

    if (url) {
      editor!.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const createTable = useCallback(() => {
    const isNumber = (str: string): boolean => {
      return !isNaN(Number(str));
    };

    const rows = window.prompt('How many rows?');
    const cols = window.prompt('How many columns?');

    if (rows && isNumber(rows) && cols && isNumber(cols)) {
      editor!
        .chain()
        .focus()
        .insertTable({
          rows: Number(rows),
          cols: Number(cols),
          withHeaderRow: true
        })
        .run();
    }
  }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className={style.wrapper}>
      <div className={style['button-container']}>
        <IconToggler onClick={addImage}>
          <ImageIcon />
        </IconToggler>
        <IconToggler
          isActive={editor.isActive('heading', { level: 2 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          <Header2Icon />
        </IconToggler>
        <IconToggler
          isActive={editor.isActive('heading', { level: 3 })}
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          <Header3Icon />
        </IconToggler>
        <IconToggler
          isActive={editor.isActive('bold')}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <BoldIcon />
        </IconToggler>
        <IconToggler
          isActive={editor.isActive('italic')}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <ItalicIcon />
        </IconToggler>
        <IconToggler
          isActive={editor.isActive('highlight')}
          onClick={() => editor.chain().focus().toggleHighlight().run()}
        >
          <HighlighterIcon />
        </IconToggler>
        <IconToggler
          isActive={editor.isActive('code')}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <CodeIcon />
        </IconToggler>
        <IconToggler
          isActive={editor.isActive('underline')}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <UnderlineIcon />
        </IconToggler>
        <IconToggler
          isActive={editor.isActive('bulletList')}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <BulletlistIcon />
        </IconToggler>
        <IconToggler
          disabled={!editor.can().liftListItem('listItem')}
          onClick={() => editor.chain().focus().liftListItem('listItem').run()}
        >
          Lift LI
        </IconToggler>
      </div>
      <div className={style['button-container']}>
        <IconToggler
          onClick={createTable}
        >
          Insert Table
        </IconToggler>
        <IconToggler
          onClick={() => editor.chain().focus().addColumnBefore().run()}
        >
          Add Column Before
        </IconToggler>
        <IconToggler
          onClick={() => editor.chain().focus().addColumnAfter().run()}
        >
          Add Column After
        </IconToggler>
        <IconToggler
          onClick={() => editor.chain().focus().deleteColumn().run()}
        >
          Delete Column
        </IconToggler>
      </div>
      <div className={style['button-container']}>
        <IconToggler
          onClick={() => editor.chain().focus().addRowBefore().run()}
        >
          Add Row Before
        </IconToggler>
        <IconToggler onClick={() => editor.chain().focus().addRowAfter().run()}>
          Add Row After
        </IconToggler>
        <IconToggler onClick={() => editor.chain().focus().deleteRow().run()}>
          Delete Row
        </IconToggler>
      </div>
      <div className={style['button-container']}>
        <IconToggler onClick={() => editor.chain().focus().deleteRow().run()}>
          Delete Table
        </IconToggler>
        <IconToggler onClick={() => editor.chain().focus().mergeCells().run()}>
          Merge Cells
        </IconToggler>
        <IconToggler onClick={() => editor.chain().focus().splitCell().run()}>
          Split Cell
        </IconToggler>
        <IconToggler
          onClick={() => editor.chain().focus().toggleHeaderCell().run()}
        >
          Toggle Header Cell
        </IconToggler>
      </div>

      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
