'use client';

import type { HeadingProperties as HeadingProps } from '../../_lib/types';
import SectionAccordion from '../controls/SectionAccordion';
import FontControl from '../controls/FontControl';
import ColorPicker from '../controls/ColorPicker';
import AlignmentButtons from '../controls/AlignmentButtons';
import StepperInput from '../controls/StepperInput';
import ToggleSwitch from '../controls/ToggleSwitch';
import GeneralSection from '../controls/GeneralSection';
import ResponsiveSection from '../controls/ResponsiveSection';

interface Props {
  properties: HeadingProps & { type: 'heading' };
  onUpdate: (updates: Partial<HeadingProps>) => void;
}

export default function HeadingProperties({ properties: p, onUpdate }: Props) {
  return (
    <>
      <SectionAccordion title="Text" icon="T">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Heading Type</span>
            <div className="flex gap-0.5">
              {(['h1', 'h2', 'h3', 'h4'] as const).map((h) => (
                <button
                  key={h}
                  onClick={() => onUpdate({ headingType: h })}
                  className={`px-2 py-1 text-xs rounded ${
                    p.headingType === h ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {h.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <FontControl
            fontFamily={p.fontFamily} fontWeight={p.fontWeight} fontSize={p.fontSize}
            onFamilyChange={(v) => onUpdate({ fontFamily: v })}
            onWeightChange={(v) => onUpdate({ fontWeight: v })}
            onSizeChange={(v) => onUpdate({ fontSize: v })}
          />
          <ColorPicker label="Color" value={p.color} onChange={(v) => onUpdate({ color: v })} />
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Text Align</span>
            <AlignmentButtons value={p.textAlign} onChange={(v) => onUpdate({ textAlign: v as HeadingProps['textAlign'] })} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Line Height</span>
            <StepperInput value={p.lineHeight} onChange={(v) => onUpdate({ lineHeight: v })} unit="%" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Letter Spacing</span>
            <StepperInput value={p.letterSpacing} onChange={(v) => onUpdate({ letterSpacing: v })} />
          </div>
        </div>
      </SectionAccordion>
      <SectionAccordion title="Links" icon="🔗">
        <ToggleSwitch label="Inherit Body Styles" value={p.inheritBodyStyles} onChange={(v) => onUpdate({ inheritBodyStyles: v })} />
      </SectionAccordion>
      <GeneralSection containerPadding={p.containerPadding} onPaddingChange={(v) => onUpdate({ containerPadding: v })} />
      <ResponsiveSection hideOnDesktop={p.hideOnDesktop} onHideChange={(v) => onUpdate({ hideOnDesktop: v })} />
    </>
  );
}
