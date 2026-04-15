'use client';

import { useState } from 'react';
import { useEditor } from './TemplateEditor';
import BlockRenderer from './renderers/BlockRenderer';

export default function PreviewModal({ onClose }: { onClose: () => void }) {
  const { state } = useEditor();
  const [mode, setMode] = useState<'desktop' | 'mobile'>('desktop');

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-auto py-8">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h3 className="font-semibold">Preview: {state.templateName}</h3>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-gray-100 rounded-md p-0.5">
              <button
                onClick={() => setMode('desktop')}
                className={`px-3 py-1 rounded text-xs ${mode === 'desktop' ? 'bg-white shadow-sm' : ''}`}
              >Desktop</button>
              <button
                onClick={() => setMode('mobile')}
                className={`px-3 py-1 rounded text-xs ${mode === 'mobile' ? 'bg-white shadow-sm' : ''}`}
              >Mobile</button>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-gray-100 rounded"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>
        </div>

        {/* Preview content */}
        <div className="p-6 bg-gray-100 overflow-auto" style={{ maxHeight: '80vh' }}>
          <div
            className="mx-auto bg-white shadow-sm"
            style={{ maxWidth: mode === 'desktop' ? '600px' : '375px', transition: 'max-width 0.3s' }}
          >
            {state.blocks.length === 0 ? (
              <div className="p-12 text-center text-gray-400 text-sm">No content to preview</div>
            ) : (
              state.blocks.map((block) => (
                <BlockRenderer key={block.id} block={block} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
