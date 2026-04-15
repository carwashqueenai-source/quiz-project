'use client';

import { useEditor } from './TemplateEditor';

export default function EditorToolbar() {
  const { state, dispatch } = useEditor();

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
      <div className="flex items-center gap-2">
        <button
          onClick={() => dispatch({ type: 'UNDO' })}
          disabled={state.history.past.length === 0}
          className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
          title="Undo"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 10h10a5 5 0 0 1 0 10H9" /><polyline points="7 14 3 10 7 6" /></svg>
        </button>
        <button
          onClick={() => dispatch({ type: 'REDO' })}
          disabled={state.history.future.length === 0}
          className="p-1.5 rounded hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
          title="Redo"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10H11a5 5 0 0 0 0 10h4" /><polyline points="17 14 21 10 17 6" /></svg>
        </button>
      </div>
      <div className="flex items-center gap-1 bg-gray-100 rounded-md p-0.5">
        <button
          onClick={() => dispatch({ type: 'SET_PREVIEW_MODE', payload: 'desktop' })}
          className={`p-1.5 rounded ${state.previewMode === 'desktop' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
          title="Desktop"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
        </button>
        <button
          onClick={() => dispatch({ type: 'SET_PREVIEW_MODE', payload: 'mobile' })}
          className={`p-1.5 rounded ${state.previewMode === 'mobile' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
          title="Mobile"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18" /></svg>
        </button>
      </div>
    </div>
  );
}
