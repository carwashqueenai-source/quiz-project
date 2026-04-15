'use client';

import type { HeadingProperties } from '../../_lib/types';

export default function HeadingRenderer({ properties: p }: { properties: HeadingProperties & { type: 'heading' } }) {
  const sizeMap = { h1: 32, h2: 26, h3: 22, h4: 18 };
  const fontSize = p.fontSize || sizeMap[p.headingType] || 22;
  const style = {
    fontFamily: p.fontFamily,
    fontWeight: p.fontWeight,
    fontSize: `${fontSize}px`,
    color: p.color || undefined,
    textAlign: p.textAlign as React.CSSProperties['textAlign'],
    lineHeight: `${p.lineHeight}%`,
    letterSpacing: `${p.letterSpacing}px`,
    margin: 0,
  };

  return (
    <div
      style={{
        padding: `${p.containerPadding.top}px ${p.containerPadding.right}px ${p.containerPadding.bottom}px ${p.containerPadding.left}px`,
      }}
    >
      {p.headingType === 'h1' && <h1 style={style} dangerouslySetInnerHTML={{ __html: p.text }} />}
      {p.headingType === 'h2' && <h2 style={style} dangerouslySetInnerHTML={{ __html: p.text }} />}
      {p.headingType === 'h3' && <h3 style={style} dangerouslySetInnerHTML={{ __html: p.text }} />}
      {p.headingType === 'h4' && <h4 style={style} dangerouslySetInnerHTML={{ __html: p.text }} />}
    </div>
  );
}
