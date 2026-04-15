'use client';

import React, { useReducer, createContext, useContext, useCallback } from 'react';
import {
  DndContext,
  DragOverlay,
  pointerWithin,
  PointerSensor,
  useSensor,
  useSensors,
  type DragStartEvent,
  type DragEndEvent,
} from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { editorReducer, initialEditorState } from '../_lib/editorReducer';
import { createBlock } from '../_lib/blockFactory';
import type { EditorState, EditorAction, BlockType } from '../_lib/types';
import EditorHeader from './EditorHeader';
import EditorToolbar from './EditorToolbar';
import Sidebar from './Sidebar';
import Canvas from './Canvas';
import PropertiesPanel from './PropertiesPanel';

interface EditorContextType {
  state: EditorState;
  dispatch: React.Dispatch<EditorAction>;
}

const EditorContext = createContext<EditorContextType | null>(null);

export function useEditor() {
  const ctx = useContext(EditorContext);
  if (!ctx) throw new Error('useEditor must be used inside TemplateEditor');
  return ctx;
}

export default function TemplateEditor() {
  const [state, dispatch] = useReducer(editorReducer, initialEditorState);
  const [activeId, setActiveId] = React.useState<string | null>(null);
  const [activePaletteType, setActivePaletteType] = React.useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const handleDragStart = useCallback((event: DragStartEvent) => {
    const { active } = event;
    const data = active.data.current;
    if (data?.source === 'palette') {
      setActivePaletteType(data.blockType as string);
      setActiveId(null);
    } else {
      setActiveId(active.id as string);
      setActivePaletteType(null);
    }
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);
    setActivePaletteType(null);

    if (!over) return;

    const activeData = active.data.current;

    // Dragging from palette
    if (activeData?.source === 'palette') {
      const blockType = activeData.blockType as BlockType;
      const newBlock = createBlock(blockType);
      const overIndex = state.blocks.findIndex((b) => b.id === over.id);
      const insertIndex = overIndex >= 0 ? overIndex : state.blocks.length;
      dispatch({ type: 'ADD_BLOCK', payload: { block: newBlock, index: insertIndex } });
      return;
    }

    // Reordering within canvas
    const fromIndex = state.blocks.findIndex((b) => b.id === active.id);
    const toIndex = state.blocks.findIndex((b) => b.id === over.id);
    if (fromIndex !== -1 && toIndex !== -1 && fromIndex !== toIndex) {
      dispatch({ type: 'MOVE_BLOCK', payload: { fromIndex, toIndex } });
    }
  }, [state.blocks]);

  const selectedBlock = state.selectedBlockId
    ? state.blocks.find((b) => b.id === state.selectedBlockId) ?? null
    : null;

  return (
    <EditorContext value={{ state, dispatch }}>
      <div className="flex flex-col h-screen bg-gray-100">
        <EditorHeader />
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 flex flex-col overflow-hidden">
            <EditorToolbar />
            <DndContext
              sensors={sensors}
              collisionDetection={pointerWithin}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            >
              <div className="flex-1 overflow-auto p-6 bg-gray-200">
                <div
                  className="mx-auto bg-white shadow-sm"
                  style={{
                    maxWidth: state.previewMode === 'desktop' ? '800px' : '375px',
                    transition: 'max-width 0.3s ease',
                  }}
                >
                  <SortableContext
                    items={state.blocks.map((b) => b.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    <Canvas />
                  </SortableContext>
                </div>
              </div>
              <DragOverlay>
                {activePaletteType && (
                  <div className="bg-white border-2 border-blue-400 rounded-lg px-4 py-2 shadow-lg opacity-80 text-sm font-medium">
                    {activePaletteType}
                  </div>
                )}
              </DragOverlay>
            </DndContext>
          </div>
          <div className="w-80 border-l border-gray-200 bg-white overflow-y-auto flex-shrink-0">
            {selectedBlock ? <PropertiesPanel block={selectedBlock} /> : <Sidebar />}
          </div>
        </div>
      </div>
    </EditorContext>
  );
}
