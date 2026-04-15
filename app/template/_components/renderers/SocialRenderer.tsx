'use client';

import type { SocialProperties } from '../../_lib/types';
import { SOCIAL_PLATFORMS } from '../../_lib/constants';

export default function SocialRenderer({ properties: p }: { properties: SocialProperties & { type: 'social' } }) {
  const alignMap = { left: 'flex-start', center: 'center', right: 'flex-end' };
  const enabledIcons = p.icons.filter((i) => i.enabled);

  return (
    <div
      style={{
        padding: `${p.containerPadding.top}px ${p.containerPadding.right}px ${p.containerPadding.bottom}px ${p.containerPadding.left}px`,
        display: 'flex',
        justifyContent: alignMap[p.alignment],
        gap: `${p.iconSpacing}px`,
        flexWrap: 'wrap',
      }}
    >
      {enabledIcons.map((icon) => {
        const platform = SOCIAL_PLATFORMS.find((sp) => sp.id === icon.platform);
        return (
          <div
            key={icon.platform}
            style={{
              width: `${p.iconSize}px`,
              height: `${p.iconSize}px`,
              borderRadius: p.iconType === 'circle' ? '50%' : p.iconType === 'rounded' ? '6px' : '0',
              backgroundColor: '#333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: `${p.iconSize * 0.5}px`,
              cursor: 'pointer',
            }}
            title={platform?.label}
          >
            {platform?.icon || '?'}
          </div>
        );
      })}
    </div>
  );
}
