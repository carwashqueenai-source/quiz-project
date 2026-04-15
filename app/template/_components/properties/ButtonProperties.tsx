'use client';

import type { ButtonProperties as ButtonProps } from '../../_lib/types';
import SectionAccordion from '../controls/SectionAccordion';
import ActionSection from '../controls/ActionSection';
import ColorPicker from '../controls/ColorPicker';
import FontControl from '../controls/FontControl';
import StepperInput from '../controls/StepperInput';
import AlignmentButtons from '../controls/AlignmentButtons';
import PaddingControl from '../controls/PaddingControl';
import BorderControl from '../controls/BorderControl';
import ToggleSwitch from '../controls/ToggleSwitch';
import SliderInput from '../controls/SliderInput';
import GeneralSection from '../controls/GeneralSection';
import ResponsiveSection from '../controls/ResponsiveSection';

interface Props {
  properties: ButtonProps & { type: 'button' };
  onUpdate: (updates: Partial<ButtonProps>) => void;
}

export default function ButtonProperties({ properties: p, onUpdate }: Props) {
  return (
    <>
      <ActionSection action={p.action} onChange={(v) => onUpdate({ action: v })} />
      <SectionAccordion title="Button Options" icon="☐">
        <div className="space-y-3">
          <ColorPicker label="Background Color" value={p.bgColor} onChange={(v) => onUpdate({ bgColor: v })} />
          <ColorPicker label="Text Color" value={p.textColor} onChange={(v) => onUpdate({ textColor: v })} />
          <ToggleSwitch label="Width Auto" value={p.widthAuto} onChange={(v) => onUpdate({ widthAuto: v })} />
          {!p.widthAuto && (
            <SliderInput label="Width" value={p.widthPercent} onChange={(v) => onUpdate({ widthPercent: v })} />
          )}
          <FontControl
            fontFamily={p.fontFamily} fontWeight={p.fontWeight} fontSize={p.fontSize}
            onFamilyChange={(v) => onUpdate({ fontFamily: v })}
            onWeightChange={(v) => onUpdate({ fontWeight: v })}
            onSizeChange={(v) => onUpdate({ fontSize: v })}
          />
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
      <SectionAccordion title="Spacing" icon="↔">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Alignment</span>
            <AlignmentButtons value={p.alignment} onChange={(v) => onUpdate({ alignment: v as ButtonProps['alignment'] })} />
          </div>
          <PaddingControl label="Padding" value={p.padding} onChange={(v) => onUpdate({ padding: v })} />
          <BorderControl value={p.border} onChange={(v) => onUpdate({ border: v })} />
          <div>
            <span className="text-xs text-gray-600 font-medium block mb-2">Rounded Border</span>
            <StepperInput
              label="All Sides"
              value={p.roundedBorder.topLeft}
              onChange={(v) => onUpdate({ roundedBorder: { ...p.roundedBorder, topLeft: v, topRight: v, bottomLeft: v, bottomRight: v } })}
            />
          </div>
        </div>
      </SectionAccordion>
      <GeneralSection containerPadding={p.containerPadding} onPaddingChange={(v) => onUpdate({ containerPadding: v })} />
      <ResponsiveSection hideOnDesktop={p.hideOnDesktop} onHideChange={(v) => onUpdate({ hideOnDesktop: v })} />
    </>
  );
}
