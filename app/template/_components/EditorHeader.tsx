'use client';

import { useEditor } from './TemplateEditor';

export default function EditorHeader() {
  const { state, dispatch } = useEditor();

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      <div className="flex items-center gap-3">
        <input
          type="text"
          value={state.templateName}
          onChange={(e) => dispatch({ type: 'SET_TEMPLATE_NAME', payload: e.target.value })}
          className="text-lg font-semibold border-none outline-none bg-transparent"
          placeholder="Template Name"
        />
        <span className="text-sm text-gray-400">- Email Template</span>
        <button className="p-1 text-gray-400 hover:text-gray-600">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
        </button>
      </div>
      <div className="flex items-center gap-3">
        <select className="text-sm border border-gray-300 rounded-md px-3 py-1.5 bg-white">
          <option>Dynamic content</option>
        </select>
        <button className="text-sm border border-gray-300 rounded-md px-4 py-1.5 hover:bg-gray-50">
          Show Preview
        </button>
        <button className="text-sm bg-blue-500 text-white rounded-md px-4 py-1.5 hover:bg-blue-600">
          Save &amp; Continue
        </button>
        <button className="text-sm bg-blue-600 text-white rounded-md px-4 py-1.5 hover:bg-blue-700">
          Save &amp; Exit
        </button>
      </div>
    </div>
  );
}
