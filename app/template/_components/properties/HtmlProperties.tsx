'use client';

import type { HtmlProperties as HtmlProps } from '../../_lib/types';
import SectionAccordion from '../controls/SectionAccordion';
import GeneralSection from '../controls/GeneralSection';
import ResponsiveSection from '../controls/ResponsiveSection';

interface Props {
  properties: HtmlProps & { type: 'html' };
  onUpdate: (updates: Partial<HtmlProps>) => void;
}

export default function HtmlProperties({ properties: p, onUpdate }: Props) {
  const lines = p.code.split('\n');

  return (
    <>
      <SectionAccordion title="HTML" icon="</>">
        <div className="border border-gray-200 rounded overflow-hidden">
          <div className="flex bg-gray-50">
            <div className="flex flex-col items-end pr-2 py-2 bg-gray-100 text-gray-400 text-xs select-none min-w-[30px]">
              {lines.map((_, i) => (
                <span key={i} className="leading-5">{i + 1}</span>
              ))}
            </div>
            <textarea
              value={p.code}
              onChange={(e) => onUpdate({ code: e.target.value })}
              className="flex-1 p-2 text-xs font-mono outline-none resize-y min-h-[100px] bg-white leading-5"
              spellCheck={false}
            />
          </div>
        </div>
      </SectionAccordion>
      <GeneralSection containerPadding={p.containerPadding} onPaddingChange={(v) => onUpdate({ containerPadding: v })} />
      <ResponsiveSection hideOnDesktop={p.hideOnDesktop} onHideChange={(v) => onUpdate({ hideOnDesktop: v })} />
    </>
  );
}
