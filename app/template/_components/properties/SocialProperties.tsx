'use client';

import type { SocialProperties as SocialProps } from '../../_lib/types';
import { SOCIAL_PLATFORMS } from '../../_lib/constants';
import SectionAccordion from '../controls/SectionAccordion';
import AlignmentButtons from '../controls/AlignmentButtons';
import StepperInput from '../controls/StepperInput';
import GeneralSection from '../controls/GeneralSection';
import ResponsiveSection from '../controls/ResponsiveSection';

interface Props {
  properties: SocialProps & { type: 'social' };
  onUpdate: (updates: Partial<SocialProps>) => void;
}

export default function SocialProperties({ properties: p, onUpdate }: Props) {
  const toggleIcon = (platformId: string) => {
    const existing = p.icons.find((i) => i.platform === platformId);
    if (existing) {
      onUpdate({ icons: p.icons.filter((i) => i.platform !== platformId) });
    } else {
      onUpdate({ icons: [...p.icons, { platform: platformId, url: '', enabled: true }] });
    }
  };

  return (
    <>
      <SectionAccordion title="Icons" icon="👥">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Icon Type</span>
            <select
              value={p.iconType}
              onChange={(e) => onUpdate({ iconType: e.target.value as SocialProps['iconType'] })}
              className="text-xs border border-gray-200 rounded px-2 py-1 bg-white"
            >
              <option value="circle">Circle</option>
              <option value="square">Square</option>
              <option value="rounded">Rounded</option>
            </select>
          </div>
          <div>
            <span className="text-[10px] text-gray-400 block mb-1">Click the icons to add</span>
            <div className="flex flex-wrap gap-1.5">
              {SOCIAL_PLATFORMS.map((platform) => {
                const isActive = p.icons.some((i) => i.platform === platform.id);
                return (
                  <button
                    key={platform.id}
                    onClick={() => toggleIcon(platform.id)}
                    className={`w-8 h-8 rounded-full text-sm flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-gray-800 text-white ring-2 ring-blue-400'
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }`}
                    title={platform.label}
                  >
                    {platform.icon}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Align</span>
            <AlignmentButtons value={p.alignment} onChange={(v) => onUpdate({ alignment: v as SocialProps['alignment'] })} options={['left', 'center', 'right']} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Icon Size</span>
            <StepperInput value={p.iconSize} onChange={(v) => onUpdate({ iconSize: v })} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Icon Spacing</span>
            <StepperInput value={p.iconSpacing} onChange={(v) => onUpdate({ iconSpacing: v })} />
          </div>
        </div>
      </SectionAccordion>
      <GeneralSection containerPadding={p.containerPadding} onPaddingChange={(v) => onUpdate({ containerPadding: v })} />
      <ResponsiveSection hideOnDesktop={p.hideOnDesktop} onHideChange={(v) => onUpdate({ hideOnDesktop: v })} />
    </>
  );
}
