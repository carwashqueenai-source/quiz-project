'use client';

import { v4 as uuid } from 'uuid';
import type { MenuProperties as MenuProps } from '../../_lib/types';
import SectionAccordion from '../controls/SectionAccordion';
import FontControl from '../controls/FontControl';
import ColorPicker from '../controls/ColorPicker';
import AlignmentButtons from '../controls/AlignmentButtons';
import StepperInput from '../controls/StepperInput';
import PaddingControl from '../controls/PaddingControl';
import GeneralSection from '../controls/GeneralSection';
import ResponsiveSection from '../controls/ResponsiveSection';

interface Props {
  properties: MenuProps & { type: 'menu' };
  onUpdate: (updates: Partial<MenuProps>) => void;
}

export default function MenuProperties({ properties: p, onUpdate }: Props) {
  const addItem = () => {
    onUpdate({ items: [...p.items, { id: uuid(), text: 'New Item', url: '' }] });
  };

  const removeItem = (id: string) => {
    onUpdate({ items: p.items.filter((i) => i.id !== id) });
  };

  const updateItem = (id: string, field: 'text' | 'url', value: string) => {
    onUpdate({
      items: p.items.map((i) => (i.id === id ? { ...i, [field]: value } : i)),
    });
  };

  return (
    <>
      <SectionAccordion title="Menu Items" icon="☰">
        <div className="space-y-2">
          {p.items.map((item) => (
            <div key={item.id} className="flex items-center gap-1 bg-gray-50 rounded p-1.5">
              <input
                type="text"
                value={item.text}
                onChange={(e) => updateItem(item.id, 'text', e.target.value)}
                className="flex-1 text-xs border border-gray-200 rounded px-1.5 py-1 outline-none"
                placeholder="Label"
              />
              <input
                type="text"
                value={item.url}
                onChange={(e) => updateItem(item.id, 'url', e.target.value)}
                className="flex-1 text-xs border border-gray-200 rounded px-1.5 py-1 outline-none"
                placeholder="URL"
              />
              <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600 text-xs px-1">✕</button>
            </div>
          ))}
          <button onClick={addItem} className="flex items-center gap-1 text-xs text-blue-500 hover:text-blue-600">
            <span className="text-lg leading-none">⊕</span> Add New Item
          </button>
        </div>
      </SectionAccordion>
      <SectionAccordion title="Styles" icon="🎨">
        <div className="space-y-3">
          <FontControl
            fontFamily={p.fontFamily} fontWeight={p.fontWeight} fontSize={p.fontSize}
            onFamilyChange={(v) => onUpdate({ fontFamily: v })}
            onWeightChange={(v) => onUpdate({ fontWeight: v })}
            onSizeChange={(v) => onUpdate({ fontSize: v })}
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Letter Spacing</span>
            <StepperInput value={p.letterSpacing} onChange={(v) => onUpdate({ letterSpacing: v })} />
          </div>
          <ColorPicker label="Text Color" value={p.textColor} onChange={(v) => onUpdate({ textColor: v })} />
          <ColorPicker label="Link Color" value={p.linkColor} onChange={(v) => onUpdate({ linkColor: v })} />
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Align</span>
            <AlignmentButtons value={p.alignment} onChange={(v) => onUpdate({ alignment: v as MenuProps['alignment'] })} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Layout</span>
            <select
              value={p.layout}
              onChange={(e) => onUpdate({ layout: e.target.value as MenuProps['layout'] })}
              className="text-xs border border-gray-200 rounded px-2 py-1 bg-white"
            >
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Separator</span>
            <input
              type="text"
              value={p.separator}
              onChange={(e) => onUpdate({ separator: e.target.value })}
              className="w-16 text-xs border border-gray-200 rounded px-2 py-1 outline-none text-center"
            />
          </div>
          <PaddingControl label="Padding" value={p.padding} onChange={(v) => onUpdate({ padding: v })} />
        </div>
      </SectionAccordion>
      <GeneralSection containerPadding={p.containerPadding} onPaddingChange={(v) => onUpdate({ containerPadding: v })} />
      <ResponsiveSection hideOnDesktop={p.hideOnDesktop} onHideChange={(v) => onUpdate({ hideOnDesktop: v })} />
    </>
  );
}
