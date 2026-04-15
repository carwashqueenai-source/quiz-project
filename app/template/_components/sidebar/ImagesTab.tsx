'use client';

import { useState } from 'react';

const STOCK_IMAGES = [
  { id: '1', url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400', label: 'Business' },
  { id: '2', url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400', label: 'Technology' },
  { id: '3', url: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400', label: 'Team' },
  { id: '4', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400', label: 'Data' },
  { id: '5', url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400', label: 'Collaboration' },
  { id: '6', url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400', label: 'Workspace' },
];

export default function ImagesTab() {
  const [search, setSearch] = useState('');

  const filtered = STOCK_IMAGES.filter((img) =>
    img.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-3">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search images..."
        className="w-full text-xs border border-gray-200 rounded px-2 py-1.5 outline-none mb-3"
      />
      <p className="text-[10px] text-gray-400 mb-2">Drag an image to the canvas or click to copy URL</p>
      <div className="grid grid-cols-2 gap-2">
        {filtered.map((img) => (
          <button
            key={img.id}
            onClick={() => navigator.clipboard.writeText(img.url)}
            className="relative group rounded overflow-hidden border border-gray-200 hover:border-blue-300 aspect-video"
            title={`Click to copy URL: ${img.label}`}
          >
            <img src={img.url} alt={img.label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <span className="text-white text-xs opacity-0 group-hover:opacity-100 font-medium">{img.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
