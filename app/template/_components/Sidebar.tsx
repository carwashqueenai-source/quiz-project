'use client';

import { useState } from 'react';
import ContentTab from './sidebar/ContentTab';

const TABS = [
  { id: 'content', label: 'Content', icon: '⊿' },
  { id: 'blocks', label: 'Blocks', icon: '⊞' },
  { id: 'body', label: 'Body', icon: '☐' },
  { id: 'images', label: 'Images', icon: '🖼' },
  { id: 'uploads', label: 'Uploads', icon: '☁' },
];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('content');

  return (
    <div className="flex h-full">
      <div className="flex-1 overflow-y-auto">
        {activeTab === 'content' && <ContentTab />}
        {activeTab === 'blocks' && (
          <div className="p-4 text-sm text-gray-400 text-center">Pre-built blocks coming soon</div>
        )}
        {activeTab === 'body' && (
          <div className="p-4 text-sm text-gray-400 text-center">Body styles coming soon</div>
        )}
        {activeTab === 'images' && (
          <div className="p-4 text-sm text-gray-400 text-center">Image library coming soon</div>
        )}
        {activeTab === 'uploads' && (
          <div className="p-4 text-sm text-gray-400 text-center">Uploads coming soon</div>
        )}
      </div>
      <div className="flex flex-col items-center border-l border-gray-200 bg-gray-50 py-2 px-1 gap-1">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded text-xs transition-colors ${
              activeTab === tab.id
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            <span className="text-base leading-none">{tab.icon}</span>
            <span className="text-[10px]">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
