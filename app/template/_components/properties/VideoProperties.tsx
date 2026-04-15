'use client';

import type { VideoProperties as VideoProps } from '../../_lib/types';
import SectionAccordion from '../controls/SectionAccordion';
import ActionSection from '../controls/ActionSection';
import GeneralSection from '../controls/GeneralSection';
import ResponsiveSection from '../controls/ResponsiveSection';

interface Props {
  properties: VideoProps & { type: 'video' };
  onUpdate: (updates: Partial<VideoProps>) => void;
}

export default function VideoProperties({ properties: p, onUpdate }: Props) {
  return (
    <>
      <SectionAccordion title="Link" icon="🔗">
        <div className="space-y-2">
          <span className="text-xs text-gray-600">Video URL</span>
          <textarea
            value={p.videoUrl}
            onChange={(e) => onUpdate({ videoUrl: e.target.value })}
            className="w-full text-xs border border-gray-200 rounded px-2 py-1.5 outline-none resize-none h-16"
            placeholder="Add a YouTube or Vimeo URL..."
          />
          <p className="text-[10px] text-gray-400">Add a YouTube or Vimeo URL to automatically generate a preview image. The image will link to the provided URL.</p>
        </div>
      </SectionAccordion>
      <ActionSection action={p.action} onChange={(v) => onUpdate({ action: v })} />
      <GeneralSection containerPadding={p.containerPadding} onPaddingChange={(v) => onUpdate({ containerPadding: v })} />
      <ResponsiveSection hideOnDesktop={p.hideOnDesktop} onHideChange={(v) => onUpdate({ hideOnDesktop: v })} />
    </>
  );
}
