'use client';

import { useState } from 'react';

interface UploadedImage {
  id: string;
  name: string;
  dataUrl: string;
  size: string;
}

export default function UploadsTab() {
  const [uploads, setUploads] = useState<UploadedImage[]>([]);

  const handleUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      const sizeKB = (file.size / 1024).toFixed(1);
      setUploads((prev) => [
        ...prev,
        { id: Date.now().toString(), name: file.name, dataUrl, size: `${sizeKB} KB` },
      ]);
    };
    reader.readAsDataURL(file);
  };

  const handleFileSelect = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.multiple = true;
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        Array.from(files).forEach(handleUpload);
      }
    };
    input.click();
  };

  const removeUpload = (id: string) => {
    setUploads((prev) => prev.filter((u) => u.id !== id));
  };

  return (
    <div className="p-3">
      <div
        className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center cursor-pointer hover:border-blue-300 hover:bg-blue-50 transition-colors mb-3"
        onClick={handleFileSelect}
        onDragOver={(e) => { e.preventDefault(); }}
        onDrop={(e) => {
          e.preventDefault();
          const files = e.dataTransfer.files;
          Array.from(files).forEach((f) => {
            if (f.type.startsWith('image/')) handleUpload(f);
          });
        }}
      >
        <div className="text-3xl mb-2">☁️</div>
        <p className="text-xs text-gray-500 font-medium">Drop files here or click to upload</p>
        <p className="text-[10px] text-gray-400 mt-1">PNG, JPG, GIF up to 5MB</p>
      </div>

      {uploads.length === 0 ? (
        <p className="text-xs text-gray-400 text-center py-4">No uploads yet</p>
      ) : (
        <div className="space-y-2">
          {uploads.map((upload) => (
            <div key={upload.id} className="flex items-center gap-2 p-2 border border-gray-200 rounded">
              <img src={upload.dataUrl} alt={upload.name} className="w-10 h-10 object-cover rounded" />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-700 truncate">{upload.name}</p>
                <p className="text-[10px] text-gray-400">{upload.size}</p>
              </div>
              <button
                onClick={() => navigator.clipboard.writeText(upload.dataUrl)}
                className="text-[10px] text-blue-500 hover:text-blue-600 px-1"
                title="Copy data URL"
              >Copy</button>
              <button
                onClick={() => removeUpload(upload.id)}
                className="text-[10px] text-red-400 hover:text-red-600 px-1"
              >✕</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
