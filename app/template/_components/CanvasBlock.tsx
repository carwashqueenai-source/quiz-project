'use client';

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import type { Block } from '../_lib/types';
import { useEditor } from './TemplateEditor';
import BlockRenderer from './renderers/BlockRenderer';

interface CanvasBlockProps {
  block: Block;
  isSelected: boolean;
  onSelect: () => void;
}

export default function CanvasBlock({ block, isSelected, onSelect }: CanvasBlockProps) {
  const { dispatch } = useEditor();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: block.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`relative group ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
    >
      {/* Drag handle + label */}
      <div
        {...attributes}
        {...listeners}
        className={`absolute -right-3 top-1/2 -translate-y-1/2 z-10 cursor-grab opacity-0 group-hover:opacity-100 transition-opacity ${
          isSelected ? 'opacity-100' : ''
        }`}
      >
        <div className="bg-blue-500 text-white p-1.5 rounded-full shadow-md">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="5" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="19" r="2" />
            <circle cx="5" cy="5" r="2" />
            <circle cx="5" cy="12" r="2" />
            <circle cx="5" cy="19" r="2" />
            <circle cx="19" cy="5" r="2" />
            <circle cx="19" cy="12" r="2" />
            <circle cx="19" cy="19" r="2" />
          </svg>
        </div>
      </div>

      {/* Block type label */}
      {isSelected && (
        <div className="absolute -bottom-5 right-2 bg-blue-500 text-white text-xs px-2 py-0.5 rounded z-10 capitalize">
          {block.type}
        </div>
      )}

      {/* Action buttons (delete / duplicate) */}
      {isSelected && (
        <div className="absolute -bottom-6 right-20 flex gap-1 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: 'REMOVE_BLOCK', payload: { id: block.id } });
            }}
            className="bg-white border border-gray-300 p-1 rounded shadow-sm hover:bg-red-50"
            title="Delete"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              dispatch({ type: 'DUPLICATE_BLOCK', payload: { id: block.id } });
            }}
            className="bg-white border border-gray-300 p-1 rounded shadow-sm hover:bg-blue-50"
            title="Duplicate"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          </button>
        </div>
      )}

      {/* + buttons above and below */}
      {isSelected && (
        <>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs cursor-pointer hover:bg-blue-600">+</div>
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs cursor-pointer hover:bg-blue-600">+</div>
          </div>
        </>
      )}

      <BlockRenderer block={block} />
    </div>
  );
}
