'use client';

import { useDraggable } from '@dnd-kit/core';
import { CONTENT_TOOLS } from '../../_lib/constants';

function ContentToolCard({ type, label, icon }: { type: string; label: string; icon: string }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `palette-${type}`,
    data: { source: 'palette', blockType: type },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`flex flex-col items-center justify-center gap-1.5 p-4 border border-gray-200 rounded-lg cursor-grab hover:border-blue-300 hover:bg-blue-50 transition-colors ${
        isDragging ? 'opacity-50' : ''
      }`}
    >
      <span className="text-2xl leading-none">{icon}</span>
      <span className="text-xs text-gray-600 font-medium">{label}</span>
    </div>
  );
}

export default function ContentTab() {
  return (
    <div className="grid grid-cols-3 gap-2 p-3">
      {CONTENT_TOOLS.map((tool) => (
        <ContentToolCard key={tool.type} {...tool} />
      ))}
    </div>
  );
}
