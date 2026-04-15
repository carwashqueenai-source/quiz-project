'use client';

import type { ButtonProperties } from '../../_lib/types';

export default function ButtonRenderer({ properties: p }: { properties: ButtonProperties & { type: 'button' } }) {
  const alignMap = { left: 'flex-start', center: 'center', right: 'flex-end', justify: 'center' };

  return (
    <div
      style={{
        padding: `${p.containerPadding.top}px ${p.containerPadding.right}px ${p.containerPadding.bottom}px ${p.containerPadding.left}px`,
        display: 'flex',
        justifyContent: alignMap[p.alignment],
      }}
    >
      <a
        href="#"
        onClick={(e) => e.preventDefault()}
        style={{
          display: 'inline-block',
          backgroundColor: p.bgColor,
          color: p.textColor,
          fontFamily: p.fontFamily,
          fontWeight: p.fontWeight,
          fontSize: `${p.fontSize}px`,
          lineHeight: `${p.lineHeight}%`,
          letterSpacing: `${p.letterSpacing}px`,
          padding: `${p.padding.top}px ${p.padding.right}px ${p.padding.bottom}px ${p.padding.left}px`,
          borderWidth: `${p.border.width}px`,
          borderStyle: p.border.style,
          borderColor: p.border.color,
          borderRadius: p.roundedBorder.allSides
            ? `${p.roundedBorder.topLeft}px`
            : `${p.roundedBorder.topLeft}px ${p.roundedBorder.topRight}px ${p.roundedBorder.bottomRight}px ${p.roundedBorder.bottomLeft}px`,
          textDecoration: 'none',
          cursor: 'pointer',
          width: p.widthAuto ? 'auto' : `${p.widthPercent}%`,
          textAlign: 'center',
        }}
      >
        {p.text}
      </a>
    </div>
  );
}
