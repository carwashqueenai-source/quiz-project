'use client';

import type { TableProperties as TableProps } from '../../_lib/types';
import SectionAccordion from '../controls/SectionAccordion';
import StepperInput from '../controls/StepperInput';
import BorderControl from '../controls/BorderControl';
import ToggleSwitch from '../controls/ToggleSwitch';
import FontControl from '../controls/FontControl';
import ColorPicker from '../controls/ColorPicker';
import AlignmentButtons from '../controls/AlignmentButtons';
import PaddingControl from '../controls/PaddingControl';
import GeneralSection from '../controls/GeneralSection';
import ResponsiveSection from '../controls/ResponsiveSection';

interface Props {
  properties: TableProps & { type: 'table' };
  onUpdate: (updates: Partial<TableProps>) => void;
}

export default function TableProperties({ properties: p, onUpdate }: Props) {
  const updateColumns = (n: number) => {
    const headerData = [...p.headerData];
    const cellData = p.cellData.map((row) => [...row]);
    while (headerData.length < n) headerData.push('');
    while (cellData.some((row) => row.length < n)) {
      cellData.forEach((row) => { while (row.length < n) row.push(''); });
    }
    onUpdate({ columns: n, headerData: headerData.slice(0, n), cellData: cellData.map((r) => r.slice(0, n)) });
  };

  const updateRows = (n: number) => {
    const cellData = [...p.cellData];
    while (cellData.length < n) cellData.push(Array(p.columns).fill(''));
    onUpdate({ rows: n, cellData: cellData.slice(0, n) });
  };

  return (
    <>
      <SectionAccordion title="Layout" icon="⊞">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Columns</span>
            <StepperInput value={p.columns} onChange={updateColumns} min={1} max={10} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Rows</span>
            <StepperInput value={p.rows} onChange={updateRows} min={1} max={50} />
          </div>
          <BorderControl value={p.border} onChange={(v) => onUpdate({ border: v })} />
          <ToggleSwitch label="Striped Rows" value={p.stripedRows} onChange={(v) => onUpdate({ stripedRows: v })} />
        </div>
      </SectionAccordion>

      <SectionAccordion title="Header" icon="⊞">
        <div className="space-y-3">
          <ToggleSwitch label="Enable Header" value={p.enableHeader} onChange={(v) => onUpdate({ enableHeader: v })} />
          {p.enableHeader && (
            <>
              <FontControl
                fontFamily={p.headerStyle.fontFamily}
                fontWeight={p.headerStyle.fontWeight}
                fontSize={p.headerStyle.fontSize}
                onFamilyChange={(v) => onUpdate({ headerStyle: { ...p.headerStyle, fontFamily: v } })}
                onWeightChange={(v) => onUpdate({ headerStyle: { ...p.headerStyle, fontWeight: v } })}
                onSizeChange={(v) => onUpdate({ headerStyle: { ...p.headerStyle, fontSize: v } })}
              />
              <ColorPicker label="Background Color" value={p.headerStyle.bgColor} onChange={(v) => onUpdate({ headerStyle: { ...p.headerStyle, bgColor: v } })} />
              <ColorPicker label="Text Color" value={p.headerStyle.textColor} onChange={(v) => onUpdate({ headerStyle: { ...p.headerStyle, textColor: v } })} />
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Text Align</span>
                <AlignmentButtons value={p.headerStyle.textAlign} onChange={(v) => onUpdate({ headerStyle: { ...p.headerStyle, textAlign: v as TableProps['headerStyle']['textAlign'] } })} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-600">Vertical Align</span>
                <div className="flex gap-0.5">
                  {(['top', 'middle', 'bottom'] as const).map((va) => (
                    <button
                      key={va}
                      onClick={() => onUpdate({ headerStyle: { ...p.headerStyle, verticalAlign: va } })}
                      className={`px-2 py-1 text-xs rounded ${p.headerStyle.verticalAlign === va ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-600'}`}
                    >
                      {va === 'top' ? '⬆' : va === 'middle' ? '⬛' : '⬇'}
                    </button>
                  ))}
                </div>
              </div>
              <PaddingControl label="Padding" value={p.headerStyle.padding} onChange={(v) => onUpdate({ headerStyle: { ...p.headerStyle, padding: v } })} />
            </>
          )}
        </div>
      </SectionAccordion>

      <SectionAccordion title="Content" icon="✏">
        <div className="space-y-3">
          <FontControl
            fontFamily={p.contentStyle.fontFamily}
            fontWeight={p.contentStyle.fontWeight}
            fontSize={p.contentStyle.fontSize}
            onFamilyChange={(v) => onUpdate({ contentStyle: { ...p.contentStyle, fontFamily: v } })}
            onWeightChange={(v) => onUpdate({ contentStyle: { ...p.contentStyle, fontWeight: v } })}
            onSizeChange={(v) => onUpdate({ contentStyle: { ...p.contentStyle, fontSize: v } })}
          />
          <ColorPicker label="Background Color" value={p.contentStyle.bgColor} onChange={(v) => onUpdate({ contentStyle: { ...p.contentStyle, bgColor: v } })} />
          <ColorPicker label="Text Color" value={p.contentStyle.textColor} onChange={(v) => onUpdate({ contentStyle: { ...p.contentStyle, textColor: v } })} />
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Text Align</span>
            <AlignmentButtons value={p.contentStyle.textAlign} onChange={(v) => onUpdate({ contentStyle: { ...p.contentStyle, textAlign: v as TableProps['contentStyle']['textAlign'] } })} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Line Height</span>
            <StepperInput value={p.contentStyle.lineHeight} onChange={(v) => onUpdate({ contentStyle: { ...p.contentStyle, lineHeight: v } })} unit="%" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Letter Spacing</span>
            <StepperInput value={p.contentStyle.letterSpacing} onChange={(v) => onUpdate({ contentStyle: { ...p.contentStyle, letterSpacing: v } })} />
          </div>
          <PaddingControl label="Padding" value={p.contentStyle.padding} onChange={(v) => onUpdate({ contentStyle: { ...p.contentStyle, padding: v } })} />
        </div>
      </SectionAccordion>

      <SectionAccordion title="Footer" icon="⊞" defaultOpen={false}>
        <ToggleSwitch label="Enable Footer" value={p.enableFooter} onChange={(v) => onUpdate({ enableFooter: v })} />
      </SectionAccordion>

      <SectionAccordion title="Links" icon="🔗">
        <div className="space-y-3">
          <ColorPicker label="Color" value={p.linkColor} onChange={(v) => onUpdate({ linkColor: v })} />
          <ToggleSwitch label="Underline" value={p.linkUnderline} onChange={(v) => onUpdate({ linkUnderline: v })} />
        </div>
      </SectionAccordion>

      <GeneralSection containerPadding={p.containerPadding} onPaddingChange={(v) => onUpdate({ containerPadding: v })} />
      <ResponsiveSection hideOnDesktop={p.hideOnDesktop} onHideChange={(v) => onUpdate({ hideOnDesktop: v })} />
    </>
  );
}
