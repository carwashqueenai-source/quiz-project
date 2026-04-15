'use client';

import type { Block, BlockProperties } from '../_lib/types';
import { useEditor } from './TemplateEditor';
import ColumnsProperties from './properties/ColumnsProperties';
import ButtonProperties from './properties/ButtonProperties';
import DividerProperties from './properties/DividerProperties';
import HeadingProperties from './properties/HeadingProperties';
import ParagraphProperties from './properties/ParagraphProperties';
import ImageProperties from './properties/ImageProperties';
import VideoProperties from './properties/VideoProperties';
import SocialProperties from './properties/SocialProperties';
import MenuProperties from './properties/MenuProperties';
import HtmlProperties from './properties/HtmlProperties';
import TableProperties from './properties/TableProperties';

interface PropertiesPanelProps {
  block: Block;
}

export default function PropertiesPanel({ block }: PropertiesPanelProps) {
  const { dispatch } = useEditor();

  const onUpdate = (updates: Partial<BlockProperties>) => {
    dispatch({
      type: 'UPDATE_BLOCK_PROPS',
      payload: { id: block.id, properties: updates },
    });
  };

  const handleDelete = () => dispatch({ type: 'REMOVE_BLOCK', payload: { id: block.id } });
  const handleDuplicate = () => dispatch({ type: 'DUPLICATE_BLOCK', payload: { id: block.id } });
  const handleClose = () => dispatch({ type: 'SELECT_BLOCK', payload: { id: null } });

  const p = block.properties;

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <span className="text-sm font-semibold capitalize">{block.type}</span>
        <div className="flex items-center gap-1">
          <button onClick={handleDelete} className="p-1.5 hover:bg-red-50 rounded" title="Delete">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
          </button>
          <button onClick={handleDuplicate} className="p-1.5 hover:bg-blue-50 rounded" title="Duplicate">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          </button>
          <button onClick={handleClose} className="p-1.5 hover:bg-gray-100 rounded" title="Close">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
      </div>

      {/* Properties */}
      <div className="flex-1 overflow-y-auto">
        {p.type === 'columns' && <ColumnsProperties properties={p} onUpdate={onUpdate} />}
        {p.type === 'button' && <ButtonProperties properties={p} onUpdate={onUpdate} />}
        {p.type === 'divider' && <DividerProperties properties={p} onUpdate={onUpdate} />}
        {p.type === 'heading' && <HeadingProperties properties={p} onUpdate={onUpdate} />}
        {p.type === 'paragraph' && <ParagraphProperties properties={p} onUpdate={onUpdate} />}
        {p.type === 'image' && <ImageProperties properties={p} onUpdate={onUpdate} />}
        {p.type === 'video' && <VideoProperties properties={p} onUpdate={onUpdate} />}
        {p.type === 'social' && <SocialProperties properties={p} onUpdate={onUpdate} />}
        {p.type === 'menu' && <MenuProperties properties={p} onUpdate={onUpdate} />}
        {p.type === 'html' && <HtmlProperties properties={p} onUpdate={onUpdate} />}
        {p.type === 'table' && <TableProperties properties={p} onUpdate={onUpdate} />}
      </div>
    </div>
  );
}
