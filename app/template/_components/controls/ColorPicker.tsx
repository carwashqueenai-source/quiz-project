'use client';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export default function ColorPicker({ label, value, onChange }: ColorPickerProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-xs text-gray-600">{label}</span>
      <div className="relative">
        <input
          type="color"
          value={value || '#ffffff'}
          onChange={(e) => onChange(e.target.value)}
          className="w-8 h-8 rounded border border-gray-200 cursor-pointer p-0.5"
        />
        {!value && (
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="w-6 h-6 rounded border border-gray-200 bg-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent">
                <div className="absolute top-0 left-0 w-full h-full border-b border-red-400 origin-bottom-left -rotate-45" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
