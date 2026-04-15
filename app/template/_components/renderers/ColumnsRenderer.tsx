'use client';

import { useDroppable } from '@dnd-kit/core';
import type { ColumnsProperties, Block } from '../../_lib/types';
import { COLUMN_PRESETS } from '../../_lib/constants';
import { useEditor } from '../TemplateEditor';
import { createBlock } from '../../_lib/blockFactory';
import type { BlockType } from '../../_lib/types';
import BlockRenderer from './BlockRenderer';

function ColumnCell({
  parentId,
  columnIndex,
  blocks,
  bgColor,
  padding,
  border,
  width,
}: {
  parentId: string;
  columnIndex: number;
  blocks: Block[];
  bgColor: string;
  padding: { top: number; right: number; bottom: number; left: number };
  border: { style: string; width: number; color: string };
  width: number;
}) {
  const { dispatch } = useEditor();
  const droppableId = `column-${parentId}-${columnIndex}`;
  const { setNodeRef, isOver } = useDroppable({
    id: droppableId,
    data: { type: 'column-cell', parentId, columnIndex },
  });

  return (
    <div
      ref={setNodeRef}
      style={{
        width: `${width}%`,
        backgroundColor: bgColor || undefined,
        padding: `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px`,
        borderWidth: border.width ? `${border.width}px` : undefined,
        borderStyle: border.style,
        borderColor: border.color,
        minHeight: '60px',
        transition: 'background-color 0.2s',
      }}
      className={`relative ${isOver ? 'ring-2 ring-blue-400 ring-inset' : ''}`}
    >
      {blocks.length === 0 ? (
        <div className={`flex items-center justify-center h-full min-h-[60px] border border-dashed rounded ${isOver ? 'border-blue-400 bg-blue-50' : 'border-gray-300'}`}>
          <span className="text-xs text-blue-400">Drop here</span>
        </div>
      ) : (
        blocks.map((block) => (
          <div key={block.id} className="relative group">
            <div className="absolute top-0 right-0 z-10 opacity-0 group-hover:opacity-100 flex gap-0.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  dispatch({ type: 'REMOVE_NESTED_BLOCK', payload: { parentId, columnIndex, blockId: block.id } });
                }}
                className="bg-white border border-gray-200 rounded p-0.5 shadow-sm hover:bg-red-50 text-[10px]"
              >✕</button>
            </div>
            <BlockRenderer block={block} />
          </div>
        ))
      )}
    </div>
  );
}

export default function ColumnsRenderer({ properties: p, parentId }: { properties: ColumnsProperties & { type: 'columns' }; parentId?: string }) {
  const preset = COLUMN_PRESETS.find((pr) => pr.id === p.preset) ?? COLUMN_PRESETS[0];

  return (
    <div
      style={{
        backgroundColor: p.rowBgColor || undefined,
        backgroundImage: p.rowBgImageUrl ? `url(${p.rowBgImageUrl})` : undefined,
        backgroundSize: 'cover',
        padding: `${p.rowPadding.top}px ${p.rowPadding.right}px ${p.rowPadding.bottom}px ${p.rowPadding.left}px`,
      }}
    >
      <div
        style={{
          backgroundColor: p.rowContentBgColor || undefined,
          display: 'flex',
        }}
      >
        {preset.widths.map((width, i) => {
          const col = p.columns[i];
          if (!col) return null;
          return (
            <ColumnCell
              key={i}
              parentId={parentId || ''}
              columnIndex={i}
              blocks={col.blocks}
              bgColor={col.bgColor}
              padding={col.padding}
              border={col.border}
              width={width}
            />
          );
        })}
      </div>
    </div>
  );
}
