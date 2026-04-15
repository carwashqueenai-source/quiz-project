'use client';

import type { Padding } from '../../_lib/types';
import StepperInput from './StepperInput';

interface PaddingControlProps {
  label?: string;
  value: Padding;
  onChange: (value: Padding) => void;
}

export default function PaddingControl({ label = 'Padding', value, onChange }: PaddingControlProps) {
  const toggleMore = () => {
    if (value.allSides) {
      onChange({ ...value, allSides: false });
    } else {
      const v = value.top;
      onChange({ top: v, right: v, bottom: v, left: v, allSides: true });
    }
  };

  const updateAll = (v: number) => {
    onChange({ top: v, right: v, bottom: v, left: v, allSides: true });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-600 font-medium">{label}</span>
        <div className="flex items-center gap-1">
          <span className="text-[10px] text-gray-400">More Options</span>
          <button
            onClick={toggleMore}
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
      {value.allSides ? (
        <div>
          <span className="text-[10px] text-gray-400 block mb-1">All Sides</span>
          <StepperInput value={value.top} onChange={updateAll} />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          <StepperInput label="Top" value={value.top} onChange={(v) => onChange({ ...value, top: v })} />
          <StepperInput label="Right" value={value.right} onChange={(v) => onChange({ ...value, right: v })} />
          <StepperInput label="Left" value={value.left} onChange={(v) => onChange({ ...value, left: v })} />
          <StepperInput label="Bottom" value={value.bottom} onChange={(v) => onChange({ ...value, bottom: v })} />
        </div>
      )}
    </div>
  );
}
