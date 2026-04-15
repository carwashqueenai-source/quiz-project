'use client';

import type { ParagraphProperties as ParagraphProps } from '../../_lib/types';
import SectionAccordion from '../controls/SectionAccordion';
import FontControl from '../controls/FontControl';
import ColorPicker from '../controls/ColorPicker';
import AlignmentButtons from '../controls/AlignmentButtons';
import StepperInput from '../controls/StepperInput';
import ToggleSwitch from '../controls/ToggleSwitch';
import GeneralSection from '../controls/GeneralSection';
import ResponsiveSection from '../controls/ResponsiveSection';

interface Props {
  properties: ParagraphProps & { type: 'paragraph' };
  onUpdate: (updates: Partial<ParagraphProps>) => void;
}

export default function ParagraphProperties({ properties: p, onUpdate }: Props) {
  return (
    <>
      <SectionAccordion title="Text" icon="¶">
        <div className="space-y-3">
          <FontControl
            fontFamily={p.fontFamily} fontWeight={p.fontWeight} fontSize={p.fontSize}
            onFamilyChange={(v) => onUpdate({ fontFamily: v })}
            onWeightChange={(v) => onUpdate({ fontWeight: v })}
            onSizeChange={(v) => onUpdate({ fontSize: v })}
          />
          <ColorPicker label="Color" value={p.color} onChange={(v) => onUpdate({ color: v })} />
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Text Align</span>
            <AlignmentButtons value={p.textAlign} onChange={(v) => onUpdate({ textAlign: v as ParagraphProps['textAlign'] })} />
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
