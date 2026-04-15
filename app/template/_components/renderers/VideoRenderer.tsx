'use client';

import type { VideoProperties } from '../../_lib/types';

export default function VideoRenderer({ properties: p }: { properties: VideoProperties & { type: 'video' } }) {
  return (
    <div
      style={{
        padding: `${p.containerPadding.top}px ${p.containerPadding.right}px ${p.containerPadding.bottom}px ${p.containerPadding.left}px`,
      }}
    >
      <div
        style={{
          width: '100%',
          aspectRatio: '16 / 9',
          backgroundColor: '#f3f4f6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '1px solid #e5e7eb',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span style={{ fontSize: '24px', color: '#9ca3af' }}>▶</span>
        </div>
      </div>
    </div>
  );
}
