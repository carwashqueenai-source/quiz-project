'use client';

import { FONT_FAMILIES, FONT_WEIGHTS } from '../../_lib/constants';

interface FontControlProps {
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  onFamilyChange: (v: string) => void;
  onWeightChange: (v: string) => void;
  onSizeChange: (v: number) => void;
}

export default function FontControl({
  fontFamily, fontWeight, fontSize,
  onFamilyChange, onWeightChange, onSizeChange,
}: FontControlProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-600">Font Family</span>
        <select
          value={fontFamily}
          onChange={(e) => onFamilyChange(e.target.value)}
          className="text-xs border border-gray-200 rounded px-2 py-1 bg-white"
        >
          {FONT_FAMILIES.map((f) => (
            <option key={f.value} value={f.value}>{f.label}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-600">Font Weight</span>
        <select
          value={fontWeight}
          onChange={(e) => onWeightChange(e.target.value)}
          className="text-xs border border-gray-200 rounded px-2 py-1 bg-white"
        >
          {FONT_WEIGHTS.map((w) => (
            <option key={w.value} value={w.value}>{w.label}</option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-600">Font Size</span>
        <div className="flex items-center border border-gray-200 rounded">
          <input
            type="number"
            value={fontSize}
            onChange={(e) => onSizeChange(Number(e.target.value))}
            className="w-12 text-center text-sm py-1 border-none outline-none bg-transparent"
          />
          <span className="text-xs text-gray-400 pr-1">px</span>
          <div className="flex flex-col border-l border-gray-200">
            <button onClick={() => onSizeChange(fontSize + 1)} className="px-1.5 text-xs text-gray-400 hover:text-gray-600">+</button>
            <button onClick={() => onSizeChange(Math.max(1, fontSize - 1))} className="px-1.5 text-xs text-gray-400 hover:text-gray-600">−</button>
          </div>
        </div>
      </div>
    </div>
  );
}
