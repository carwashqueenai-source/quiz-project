'use client';

import type { MenuProperties } from '../../_lib/types';

export default function MenuRenderer({ properties: p }: { properties: MenuProperties & { type: 'menu' } }) {
  const alignMap = { left: 'flex-start', center: 'center', right: 'flex-end', justify: 'center' };

  if (p.items.length === 0) {
    return (
      <div
        style={{
          padding: `${p.containerPadding.top}px ${p.containerPadding.right}px ${p.containerPadding.bottom}px ${p.containerPadding.left}px`,
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: '32px', color: '#9ca3af' }}>☰</div>
        <div style={{ fontSize: '14px', color: '#9ca3af' }}>Menu</div>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: `${p.containerPadding.top}px ${p.containerPadding.right}px ${p.containerPadding.bottom}px ${p.containerPadding.left}px`,
        display: 'flex',
        flexDirection: p.layout === 'vertical' ? 'column' : 'row',
        justifyContent: alignMap[p.alignment],
        flexWrap: 'wrap',
      }}
    >
      {p.items.map((item, i) => (
        <span key={item.id}>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            style={{
              fontFamily: p.fontFamily,
              fontWeight: p.fontWeight,
              fontSize: `${p.fontSize}px`,
              letterSpacing: `${p.letterSpacing}px`,
              color: p.linkColor,
              textDecoration: 'none',
              padding: `${p.padding.top}px ${p.padding.right}px ${p.padding.bottom}px ${p.padding.left}px`,
            }}
          >
            {item.text}
          </a>
          {p.separator && i < p.items.length - 1 && p.layout === 'horizontal' && (
            <span style={{ color: p.textColor }}>{p.separator}</span>
          )}
        </span>
      ))}
    </div>
  );
}
