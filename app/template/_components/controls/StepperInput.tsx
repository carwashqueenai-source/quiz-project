'use client';

interface StepperInputProps {
  label?: string;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  min?: number;
  max?: number;
  step?: number;
}

export default function StepperInput({
  label, value, onChange, unit = 'px', min = 0, max = 999, step = 1,
}: StepperInputProps) {
  return (
    <div className="flex items-center gap-2">
      {label && <span className="text-xs text-gray-500 min-w-[60px]">{label}</span>}
      <div className="flex items-center border border-gray-200 rounded">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Math.max(min, Math.min(max, Number(e.target.value))))}
          className="w-12 text-center text-sm py-1 border-none outline-none bg-transparent"
        />
        <span className="text-xs text-gray-400 pr-1">{unit}</span>
        <div className="flex flex-col border-l border-gray-200">
          <button
            onClick={() => onChange(Math.min(max, value + step))}
            className="px-1.5 py-0 text-xs text-gray-400 hover:text-gray-600 hover:bg-gray-50 leading-none"
          >
            +
          </button>
          <button
            onClick={() => onChange(Math.max(min, value - step))}
            className="px-1.5 py-0 text-xs text-gray-400 hover:text-gray-600 hover:bg-gray-50 leading-none"
          >
            −
          </button>
        </div>
      </div>
    </div>
  );
}
