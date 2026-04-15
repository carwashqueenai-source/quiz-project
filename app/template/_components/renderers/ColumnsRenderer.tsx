'use client';

import type { ColumnsProperties } from '../../_lib/types';
import { COLUMN_PRESETS } from '../../_lib/constants';

export default function ColumnsRenderer({ properties: p }: { properties: ColumnsProperties & { type: 'columns' } }) {
  const preset = COLUMN_PRESETS.find((pr) => pr.id === p.preset) ?? COLUMN_PRESETS[0];

  return (
    <div
      style={{
        backgroundColor: p.rowBgColor || undefined,
        backgroundImage: p.rowBgImageUrl ? `url(${p.rowBgImageUrl})` : undefined,
        backgroundSize: 'cover',
        padding: `${p.rowPadding.top}px ${p.rowPadding.right}px ${p.rowPadding.bottom}px ${p.rowPadding.left}px`,
      }}
    >
      <div
        style={{
          backgroundColor: p.rowContentBgColor || undefined,
          display: 'flex',
        }}
      >
        {preset.widths.map((width, i) => {
          const col = p.columns[i];
          return (
            <div
              key={i}
              style={{
                width: `${width}%`,
                backgroundColor: col?.bgColor || undefined,
                padding: col ? `${col.padding.top}px ${col.padding.right}px ${col.padding.bottom}px ${col.padding.left}px` : undefined,
                borderWidth: col?.border.width ? `${col.border.width}px` : undefined,
                borderStyle: col?.border.style,
                borderColor: col?.border.color,
                minHeight: '60px',
              }}
              className="border border-dashed border-gray-300 flex items-center justify-center"
            >
              <span className="text-xs text-blue-400">No content here. Drag content from right.</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
