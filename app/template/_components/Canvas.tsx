'use client';

import { useDroppable } from '@dnd-kit/core';
import { useEditor } from './TemplateEditor';
import CanvasBlock from './CanvasBlock';

export default function Canvas() {
  const { state, dispatch } = useEditor();
  const { setNodeRef, isOver } = useDroppable({ id: 'canvas-drop-zone' });

  if (state.blocks.length === 0) {
    return (
      <div
        ref={setNodeRef}
        className={`min-h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg transition-colors ${
          isOver ? 'border-blue-400 bg-blue-50' : 'border-gray-300 bg-gray-50'
        }`}
      >
        <p className="text-blue-400 text-sm">No content here. Drag content from right.</p>
      </div>
    );
  }

  return (
    <div ref={setNodeRef} className="min-h-[200px]">
      {state.blocks.map((block) => (
        <CanvasBlock
          key={block.id}
          block={block}
          isSelected={state.selectedBlockId === block.id}
          onSelect={() => dispatch({ type: 'SELECT_BLOCK', payload: { id: block.id } })}
        />
      ))}
      {/* Drop zone at the end */}
      <div
        className={`h-8 transition-colors ${isOver ? 'bg-blue-100' : ''}`}
      />
    </div>
  );
}
