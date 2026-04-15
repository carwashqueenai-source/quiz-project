'use client';

interface AlignmentButtonsProps {
  value: string;
  onChange: (value: string) => void;
  options?: string[];
}

const ICONS: Record<string, string> = {
  left: '≡',
  center: '≡',
  right: '≡',
  justify: '≡',
};

export default function AlignmentButtons({ value, onChange, options = ['left', 'center', 'right', 'justify'] }: AlignmentButtonsProps) {
  return (
    <div className="flex items-center gap-1">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onChange(opt)}
          className={`p-1.5 rounded text-sm ${
            value === opt ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
          title={opt.charAt(0).toUpperCase() + opt.slice(1)}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {opt === 'left' && (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="15" y2="12" />
                <line x1="3" y1="18" x2="18" y2="18" />
              </>
            )}
            {opt === 'center' && (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="6" y1="12" x2="18" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
              </>
            )}
            {opt === 'right' && (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="9" y1="12" x2="21" y2="12" />
                <line x1="6" y1="18" x2="21" y2="18" />
              </>
            )}
            {opt === 'justify' && (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      ))}
    </div>
  );
}
