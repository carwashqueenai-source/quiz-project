'use client';

import type { HtmlProperties } from '../../_lib/types';

export default function HtmlRenderer({ properties: p }: { properties: HtmlProperties & { type: 'html' } }) {
  return (
    <div
      style={{
        padding: `${p.containerPadding.top}px ${p.containerPadding.right}px ${p.containerPadding.bottom}px ${p.containerPadding.left}px`,
      }}
    >
      <div dangerouslySetInnerHTML={{ __html: p.code }} />
    </div>
  );
}
