'use client';

import type { DividerProperties as DividerProps } from '../../_lib/types';
import SectionAccordion from '../controls/SectionAccordion';
import SliderInput from '../controls/SliderInput';
import StepperInput from '../controls/StepperInput';
import AlignmentButtons from '../controls/AlignmentButtons';
import GeneralSection from '../controls/GeneralSection';
import ResponsiveSection from '../controls/ResponsiveSection';
import { BORDER_STYLES } from '../../_lib/constants';

interface Props {
  properties: DividerProps & { type: 'divider' };
  onUpdate: (updates: Partial<DividerProps>) => void;
}

export default function DividerProperties({ properties: p, onUpdate }: Props) {
  return (
    <>
      <SectionAccordion title="Line" icon="—">
        <div className="space-y-3">
          <SliderInput label="Width" value={p.width} onChange={(v) => onUpdate({ width: v })} />
          <div>
            <span className="text-xs text-gray-600 block mb-1">Line</span>
            <select
              value={p.lineStyle}
              onChange={(e) => onUpdate({ lineStyle: e.target.value as DividerProps['lineStyle'] })}
              className="text-xs border border-gray-200 rounded px-2 py-1 bg-white w-full mb-2"
            >
              {BORDER_STYLES.filter((s) => s.value !== 'none').map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
            <StepperInput value={p.lineWidth} onChange={(v) => onUpdate({ lineWidth: v })} />
            <div className="mt-2">
              <input
                type="color"
                value={p.lineColor}
                onChange={(e) => onUpdate({ lineColor: e.target.value })}
                className="w-6 h-6 rounded border border-gray-200 cursor-pointer p-0"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Align</span>
            <AlignmentButtons value={p.alignment} onChange={(v) => onUpdate({ alignment: v as DividerProps['alignment'] })} />
          </div>
        </div>
      </SectionAccordion>
      <GeneralSection containerPadding={p.containerPadding} onPaddingChange={(v) => onUpdate({ containerPadding: v })} />
      <ResponsiveSection hideOnDesktop={p.hideOnDesktop} onHideChange={(v) => onUpdate({ hideOnDesktop: v })} />
    </>
  );
}
