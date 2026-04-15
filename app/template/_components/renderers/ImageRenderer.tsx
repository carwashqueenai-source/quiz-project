'use client';

import type { ImageProperties } from '../../_lib/types';

export default function ImageRenderer({ properties: p }: { properties: ImageProperties & { type: 'image' } }) {
  const alignMap = { left: 'flex-start', center: 'center', right: 'flex-end', justify: 'center' };

  return (
    <div
      style={{
        padding: `${p.containerPadding.top}px ${p.containerPadding.right}px ${p.containerPadding.bottom}px ${p.containerPadding.left}px`,
        display: 'flex',
        justifyContent: alignMap[p.alignment],
      }}
    >
      {p.src ? (
        <img
          src={p.src}
          alt={p.altText}
          style={{
            width: p.widthAuto ? '100%' : `${p.widthPercent}%`,
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '150px',
            backgroundColor: '#f3f4f6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #e5e7eb',
          }}
        >
          <span style={{ fontSize: '48px', color: '#9ca3af' }}>🖼</span>
        </div>
      )}
    </div>
  );
}
