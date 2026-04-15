'use client';

import type { ColumnsProperties as ColumnsProps } from '../../_lib/types';
import { COLUMN_PRESETS } from '../../_lib/constants';
import { defaultPadding, defaultBorder } from '../../_lib/defaults';
import SectionAccordion from '../controls/SectionAccordion';
import ColorPicker from '../controls/ColorPicker';
import PaddingControl from '../controls/PaddingControl';
import BorderControl from '../controls/BorderControl';
import GeneralSection from '../controls/GeneralSection';
import ResponsiveSection from '../controls/ResponsiveSection';

interface Props {
  properties: ColumnsProps & { type: 'columns' };
  onUpdate: (updates: Partial<ColumnsProps>) => void;
}

export default function ColumnsProperties({ properties: p, onUpdate }: Props) {
  const selectPreset = (presetId: string) => {
    const preset = COLUMN_PRESETS.find((pr) => pr.id === presetId);
    if (!preset) return;
    const cols = preset.widths.map((_, i) => p.columns[i] || {
      blocks: [], bgColor: '', padding: defaultPadding(0), border: defaultBorder(),
    });
    onUpdate({ preset: presetId, columns: cols.slice(0, preset.widths.length) });
  };

  return (
    <>
      <SectionAccordion title="Columns" icon="⊞">
        <div className="grid grid-cols-2 gap-2">
          {COLUMN_PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => selectPreset(preset.id)}
              className={`border rounded p-2 flex gap-0.5 h-10 ${
                p.preset === preset.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              {preset.widths.map((w, i) => (
                <div
                  key={i}
                  className={`h-full rounded-sm ${p.preset === preset.id ? 'bg-blue-200' : 'bg-gray-200'}`}
                  style={{ width: `${w}%` }}
                />
              ))}
            </button>
          ))}
        </div>
      </SectionAccordion>

      <SectionAccordion title="Column Properties" icon="⊞">
        <div className="space-y-3">
          <div className="flex items-center gap-1 border-b border-gray-100 pb-2">
            {p.columns.map((_, i) => (
              <span key={i} className="text-xs text-gray-600 px-2 py-1 bg-gray-100 rounded">
                Column {i + 1}
              </span>
            ))}
          </div>
          {p.columns[0] && (
            <>
              <ColorPicker
                label="Background Color"
                value={p.columns[0].bgColor}
                onChange={(v) => {
                  const cols = [...p.columns];
                  cols[0] = { ...cols[0], bgColor: v };
                  onUpdate({ columns: cols });
                }}
              />
              <PaddingControl
                label="Padding"
                value={p.columns[0].padding}
                onChange={(v) => {
                  const cols = [...p.columns];
                  cols[0] = { ...cols[0], padding: v };
                  onUpdate({ columns: cols });
                }}
              />
              <BorderControl
                value={p.columns[0].border}
                onChange={(v) => {
                  const cols = [...p.columns];
                  cols[0] = { ...cols[0], border: v };
                  onUpdate({ columns: cols });
                }}
              />
            </>
          )}
        </div>
      </SectionAccordion>

      <SectionAccordion title="Row Properties" icon="≡">
        <div className="space-y-3">
          <ColorPicker label="Background Color" value={p.rowBgColor} onChange={(v) => onUpdate({ rowBgColor: v })} />
          <ColorPicker label="Content Background Color" value={p.rowContentBgColor} onChange={(v) => onUpdate({ rowContentBgColor: v })} />
          <div>
            <span className="text-xs text-gray-600 block mb-1">Image URL</span>
            <input
              type="text"
              value={p.rowBgImageUrl}
              onChange={(e) => onUpdate({ rowBgImageUrl: e.target.value })}
              placeholder="https://"
              className="w-full text-xs border border-gray-200 rounded px-2 py-1.5 outline-none"
            />
          </div>
          <PaddingControl label="Padding" value={p.rowPadding} onChange={(v) => onUpdate({ rowPadding: v })} />
        </div>
      </SectionAccordion>

      <ResponsiveSection hideOnDesktop={p.hideOnDesktop} onHideChange={(v) => onUpdate({ hideOnDesktop: v })} />
    </>
  );
}
