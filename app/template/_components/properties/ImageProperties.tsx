'use client';

import type { ImageProperties as ImageProps } from '../../_lib/types';
import SectionAccordion from '../controls/SectionAccordion';
import ActionSection from '../controls/ActionSection';
import AlignmentButtons from '../controls/AlignmentButtons';
import ToggleSwitch from '../controls/ToggleSwitch';
import SliderInput from '../controls/SliderInput';
import GeneralSection from '../controls/GeneralSection';
import ResponsiveSection from '../controls/ResponsiveSection';

interface Props {
  properties: ImageProps & { type: 'image' };
  onUpdate: (updates: Partial<ImageProps>) => void;
}

export default function ImageProperties({ properties: p, onUpdate }: Props) {
  return (
    <>
      <SectionAccordion title="Image" icon="🖼">
        <div className="space-y-3">
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 text-center">
            <div className="text-2xl mb-1">📤</div>
            <p className="text-xs text-gray-400">Drop a new image here, or click to select files to upload.</p>
          </div>
          <div>
            <span className="text-xs text-gray-600 block mb-1">Image URL</span>
            <input
              type="text"
              value={p.src}
              onChange={(e) => onUpdate({ src: e.target.value })}
              placeholder="https://"
              className="w-full text-xs border border-gray-200 rounded px-2 py-1.5 outline-none"
            />
          </div>
          <ToggleSwitch label="Width Auto" value={p.widthAuto} onChange={(v) => onUpdate({ widthAuto: v })} />
          {!p.widthAuto && (
            <SliderInput label="Width" value={p.widthPercent} onChange={(v) => onUpdate({ widthPercent: v })} />
          )}
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Align</span>
            <AlignmentButtons value={p.alignment} onChange={(v) => onUpdate({ alignment: v as ImageProps['alignment'] })} />
          </div>
          <div>
            <span className="text-xs text-gray-600 block mb-1">Alternate Text</span>
            <input
              type="text"
              value={p.altText}
              onChange={(e) => onUpdate({ altText: e.target.value })}
              className="w-full text-xs border border-gray-200 rounded px-2 py-1.5 outline-none"
            />
          </div>
        </div>
      </SectionAccordion>
      <ActionSection action={p.action} onChange={(v) => onUpdate({ action: v })} linkLabel="Image Link" />
      <GeneralSection containerPadding={p.containerPadding} onPaddingChange={(v) => onUpdate({ containerPadding: v })} />
      <ResponsiveSection hideOnDesktop={p.hideOnDesktop} onHideChange={(v) => onUpdate({ hideOnDesktop: v })} />
    </>
  );
}
