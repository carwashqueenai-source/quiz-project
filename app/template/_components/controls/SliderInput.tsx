'use client';

interface SliderInputProps {
  label?: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  unit?: string;
}

export default function SliderInput({ label, value, onChange, min = 0, max = 100, unit = '%' }: SliderInputProps) {
  return (
    <div>
      {label && <span className="text-xs text-gray-600 block mb-1">{label}</span>}
      <div className="flex items-center gap-2">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
        />
        <span className="text-xs text-gray-500 w-12 text-right">{value}{unit}</span>
      </div>
    </div>
  );
}
