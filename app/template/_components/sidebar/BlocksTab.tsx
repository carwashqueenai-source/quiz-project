'use client';

import { useEditor } from '../TemplateEditor';
import { createBlock } from '../../_lib/blockFactory';
import type { BlockType } from '../../_lib/types';

interface BlockTemplate {
  id: string;
  label: string;
  description: string;
  icon: string;
  blockTypes: BlockType[];
}

const BLOCK_TEMPLATES: BlockTemplate[] = [
  {
    id: 'hero',
    label: 'Hero Section',
    description: 'Image + Heading + Paragraph',
    icon: '🖼',
    blockTypes: ['image', 'heading', 'paragraph'],
  },
  {
    id: 'cta',
    label: 'Call to Action',
    description: 'Heading + Paragraph + Button',
    icon: '📢',
    blockTypes: ['heading', 'paragraph', 'button'],
  },
  {
    id: 'feature-2col',
    label: '2-Column Feature',
    description: 'Columns with content areas',
    icon: '⊞',
    blockTypes: ['columns'],
  },
  {
    id: 'text-block',
    label: 'Text Block',
    description: 'Heading + Paragraph',
    icon: '📝',
    blockTypes: ['heading', 'paragraph'],
  },
  {
    id: 'image-text',
    label: 'Image + Text',
    description: 'Image followed by text',
    icon: '🖼',
    blockTypes: ['image', 'paragraph'],
  },
  {
    id: 'divider-text',
    label: 'Section Break',
    description: 'Divider + Heading',
    icon: '—',
    blockTypes: ['divider', 'heading'],
  },
  {
    id: 'social-footer',
    label: 'Social Footer',
    description: 'Divider + Social + Paragraph',
    icon: '👥',
    blockTypes: ['divider', 'social', 'paragraph'],
  },
  {
    id: 'nav-header',
    label: 'Navigation Header',
    description: 'Menu + Divider',
    icon: '☰',
    blockTypes: ['menu', 'divider'],
  },
];

export default function BlocksTab() {
  const { state, dispatch } = useEditor();

  const addBlockTemplate = (template: BlockTemplate) => {
    template.blockTypes.forEach((type, i) => {
      const block = createBlock(type);
      dispatch({
        type: 'ADD_BLOCK',
        payload: { block, index: state.blocks.length + i },
      });
    });
  };

  return (
    <div className="p-3 space-y-2">
      <p className="text-xs text-gray-400 mb-2">Click to add pre-built content blocks</p>
      {BLOCK_TEMPLATES.map((template) => (
        <button
          key={template.id}
          onClick={() => addBlockTemplate(template)}
          className="w-full flex items-center gap-3 p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors text-left"
        >
          <span className="text-2xl">{template.icon}</span>
          <div>
            <div className="text-sm font-medium text-gray-700">{template.label}</div>
            <div className="text-[10px] text-gray-400">{template.description}</div>
          </div>
        </button>
      ))}
    </div>
  );
}
