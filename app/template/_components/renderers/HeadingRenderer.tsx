'use client';

import { useEditor as useTiptap, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import { useEffect } from 'react';
import type { HeadingProperties } from '../../_lib/types';
import { useEditor } from '../TemplateEditor';

interface Props {
  properties: HeadingProperties & { type: 'heading' };
  blockId: string;
}

export default function HeadingRenderer({ properties: p, blockId }: Props) {
  const { dispatch } = useEditor();
  const sizeMap = { h1: 32, h2: 26, h3: 22, h4: 18 };
  const fontSize = p.fontSize || sizeMap[p.headingType] || 22;

  const editor = useTiptap({
    extensions: [
      StarterKit.configure({ heading: false, codeBlock: false, blockquote: false, bulletList: false, orderedList: false, listItem: false, horizontalRule: false }),
      Underline,
      Link.configure({ openOnClick: false }),
      Subscript,
      Superscript,
    ],
    content: p.text,
    onUpdate: ({ editor: e }) => {
      dispatch({
        type: 'UPDATE_BLOCK_PROPS',
        payload: { id: blockId, properties: { text: e.getHTML() } },
      });
    },
    editorProps: {
      attributes: {
        style: `font-family: ${p.fontFamily}; font-weight: ${p.fontWeight}; font-size: ${fontSize}px; color: ${p.color || 'inherit'}; text-align: ${p.textAlign}; line-height: ${p.lineHeight}%; letter-spacing: ${p.letterSpacing}px; margin: 0; outline: none;`,
      },
    },
  });

  useEffect(() => {
    if (editor && !editor.isFocused) {
      editor.commands.setContent(p.text, false);
    }
  }, [p.text, editor]);

  if (!editor) return null;

  return (
    <div
      style={{
        padding: `${p.containerPadding.top}px ${p.containerPadding.right}px ${p.containerPadding.bottom}px ${p.containerPadding.left}px`,
      }}
    >
      {/* Toolbar */}
      <div
        className="flex items-center gap-0.5 mb-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`px-1.5 py-0.5 rounded text-xs font-bold ${editor.isActive('bold') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
        >B</button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`px-1.5 py-0.5 rounded text-xs italic ${editor.isActive('italic') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
        >I</button>
        <button
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`px-1.5 py-0.5 rounded text-xs underline ${editor.isActive('underline') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
        >U</button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`px-1.5 py-0.5 rounded text-xs line-through ${editor.isActive('strike') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
        >S</button>
        <button
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          className={`px-1.5 py-0.5 rounded text-[10px] ${editor.isActive('subscript') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
        >X<sub>2</sub></button>
        <button
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          className={`px-1.5 py-0.5 rounded text-[10px] ${editor.isActive('superscript') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
        >X<sup>2</sup></button>
        <button
          onClick={() => {
            const url = window.prompt('URL');
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }}
          className={`px-1.5 py-0.5 rounded text-xs ${editor.isActive('link') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
        >🔗</button>
        <button
          onClick={() => editor.chain().focus().unsetLink().run()}
          className="px-1.5 py-0.5 rounded text-xs hover:bg-gray-100"
        >🔗̸</button>
      </div>
      <EditorContent editor={editor} />
    </div>
  );
}
