'use client';

import { useDroppable } from '@dnd-kit/core';
import { useEditor } from './TemplateEditor';
import CanvasBlock from './CanvasBlock';

export default function Canvas() {
  const { state, dispatch } = useEditor();
  const { setNodeRef, isOver } = useDroppable({ id: 'canvas-drop-zone' });

  return (
    <div
      ref={setNodeRef}
      className={`min-h-[300px] transition-colors ${
        isOver ? 'bg-blue-50' : ''
      }`}
    >
      {state.blocks.length === 0 ? (
        <div
          className={`min-h-[300px] flex items-center justify-center border-2 border-dashed rounded-lg transition-colors ${
            isOver ? 'border-blue-400 bg-blue-50' : 'border-gray-300 bg-gray-50'
          }`}
        >
          <p className="text-blue-400 text-sm">No content here. Drag content from right.</p>
        </div>
      ) : (
        <>
          {state.blocks.map((block) => (
            <CanvasBlock
              key={block.id}
              block={block}
              isSelected={state.selectedBlockId === block.id}
              onSelect={() => dispatch({ type: 'SELECT_BLOCK', payload: { id: block.id } })}
            />
          ))}
          {/* Extra drop zone at the bottom */}
          <div className={`h-16 transition-colors ${isOver ? 'bg-blue-100 border-2 border-dashed border-blue-300 rounded' : ''}`} />
        </>
      )}
    </div>
  );
}
