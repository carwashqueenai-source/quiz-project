'use client';

import { useEditor as useTiptap, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import { Highlight } from '@tiptap/extension-highlight';
import { useEffect } from 'react';
import type { ParagraphProperties } from '../../_lib/types';
import { useEditor } from '../TemplateEditor';

interface Props {
  properties: ParagraphProperties & { type: 'paragraph' };
  blockId: string;
}

export default function ParagraphRenderer({ properties: p, blockId }: Props) {
  const { dispatch } = useEditor();

  const editor = useTiptap({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({ heading: false, codeBlock: false }),
      Underline,
      Link.configure({ openOnClick: false }),
      Subscript,
      Superscript,
      TextStyle,
      Color,
      Highlight.configure({ multicolor: true }),
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
        style: `font-family: ${p.fontFamily}; font-weight: ${p.fontWeight}; font-size: ${p.fontSize}px; color: ${p.color || 'inherit'}; text-align: ${p.textAlign}; line-height: ${p.lineHeight}%; letter-spacing: ${p.letterSpacing}px; outline: none;`,
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
      {/* Full toolbar */}
      <div
        className="flex flex-wrap items-center gap-0.5 mb-1 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity"
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
        <span className="w-px h-4 bg-gray-300 mx-0.5" />
        <label className="px-1.5 py-0.5 rounded text-xs hover:bg-gray-100 cursor-pointer" title="Text Color">
          A
          <input
            type="color"
            className="w-0 h-0 opacity-0 absolute"
            onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
          />
        </label>
        <label className="px-1.5 py-0.5 rounded text-xs hover:bg-gray-100 cursor-pointer" title="Highlight">
          🖍
          <input
            type="color"
            className="w-0 h-0 opacity-0 absolute"
            onChange={(e) => editor.chain().focus().toggleHighlight({ color: e.target.value }).run()}
          />
        </label>
        <span className="w-px h-4 bg-gray-300 mx-0.5" />
        <button
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          className={`px-1.5 py-0.5 rounded text-[10px] ${editor.isActive('subscript') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
        >X<sub>2</sub></button>
        <button
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          className={`px-1.5 py-0.5 rounded text-[10px] ${editor.isActive('superscript') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
        >X<sup>2</sup></button>
        <span className="w-px h-4 bg-gray-300 mx-0.5" />
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`px-1.5 py-0.5 rounded text-xs ${editor.isActive('bulletList') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
        >• List</button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`px-1.5 py-0.5 rounded text-xs ${editor.isActive('orderedList') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
        >1. List</button>
        <span className="w-px h-4 bg-gray-300 mx-0.5" />
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
