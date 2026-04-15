'use client';

import type { ParagraphProperties } from '../../_lib/types';

export default function ParagraphRenderer({ properties: p }: { properties: ParagraphProperties & { type: 'paragraph' } }) {
  return (
    <div
      style={{
        padding: `${p.containerPadding.top}px ${p.containerPadding.right}px ${p.containerPadding.bottom}px ${p.containerPadding.left}px`,
      }}
    >
      <div
        style={{
          fontFamily: p.fontFamily,
          fontWeight: p.fontWeight,
          fontSize: `${p.fontSize}px`,
          color: p.color || undefined,
          textAlign: p.textAlign,
          lineHeight: `${p.lineHeight}%`,
          letterSpacing: `${p.letterSpacing}px`,
        }}
        dangerouslySetInnerHTML={{ __html: p.text }}
      />
    </div>
  );
}
