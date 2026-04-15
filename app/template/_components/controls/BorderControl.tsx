'use client';

import type { Border } from '../../_lib/types';
import { BORDER_STYLES } from '../../_lib/constants';
import StepperInput from './StepperInput';

interface BorderControlProps {
  value: Border;
  onChange: (value: Border) => void;
}

export default function BorderControl({ value, onChange }: BorderControlProps) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-600 font-medium">Border</span>
        <div className="flex items-center gap-1">
          <span className="text-[10px] text-gray-400">More Options</span>
          <button
            onClick={() => onChange({ ...value, allSides: !value.allSides })}
            className={`w-8 h-4 rounded-full relative transition-colors ${
              !value.allSides ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          >
            <div
              className={`w-3 h-3 bg-white rounded-full absolute top-0.5 transition-transform ${
                !value.allSides ? 'translate-x-4' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>
      </div>
      <div className="space-y-2">
        <span className="text-[10px] text-gray-400">All Sides</span>
        <select
          value={value.style}
          onChange={(e) => onChange({ ...value, style: e.target.value as Border['style'] })}
          className="text-xs border border-gray-200 rounded px-2 py-1 bg-white w-full"
        >
          {BORDER_STYLES.map((s) => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
        <StepperInput value={value.width} onChange={(w) => onChange({ ...value, width: w })} />
        <div className="flex items-center gap-2">
          <input
            type="color"
            value={value.color}
            onChange={(e) => onChange({ ...value, color: e.target.value })}
            className="w-6 h-6 rounded border border-gray-200 cursor-pointer p-0"
          />
        </div>
      </div>
    </div>
  );
}
