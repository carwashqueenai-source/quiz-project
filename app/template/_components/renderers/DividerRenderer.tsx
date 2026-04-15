'use client';

import type { DividerProperties } from '../../_lib/types';

export default function DividerRenderer({ properties: p }: { properties: DividerProperties & { type: 'divider' } }) {
  const alignMap = { left: 'flex-start', center: 'center', right: 'flex-end', justify: 'center' };

  return (
    <div
      style={{
        padding: `${p.containerPadding.top}px ${p.containerPadding.right}px ${p.containerPadding.bottom}px ${p.containerPadding.left}px`,
        display: 'flex',
        justifyContent: alignMap[p.alignment],
      }}
    >
      <hr
        style={{
          width: `${p.width}%`,
          borderTop: `${p.lineWidth}px ${p.lineStyle} ${p.lineColor}`,
          borderBottom: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          margin: 0,
        }}
      />
    </div>
  );
}
