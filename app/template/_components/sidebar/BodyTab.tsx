'use client';

import { useEditor } from '../TemplateEditor';
import ColorPicker from '../controls/ColorPicker';
import FontControl from '../controls/FontControl';
import StepperInput from '../controls/StepperInput';
import SectionAccordion from '../controls/SectionAccordion';

export default function BodyTab() {
  const { state, dispatch } = useEditor();
  const bs = state.bodyStyles;

  const update = (changes: Partial<typeof bs>) => {
    dispatch({ type: 'UPDATE_BODY_STYLES', payload: changes });
  };

  return (
    <div>
      <SectionAccordion title="General" icon="⚙">
        <div className="space-y-3">
          <ColorPicker label="Background Color" value={bs.bgColor} onChange={(v) => update({ bgColor: v })} />
          <ColorPicker label="Content Area Background" value={bs.contentBgColor} onChange={(v) => update({ contentBgColor: v })} />
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Content Width</span>
            <StepperInput value={bs.contentWidth} onChange={(v) => update({ contentWidth: v })} min={300} max={900} />
          </div>
        </div>
      </SectionAccordion>
      <SectionAccordion title="Email Settings" icon="✉">
        <div className="space-y-3">
          <div>
            <span className="text-xs text-gray-600 block mb-1">Preheader Text</span>
            <input
              type="text"
              value={bs.preheaderText}
              onChange={(e) => update({ preheaderText: e.target.value })}
              placeholder="Add a preheader text..."
              className="w-full text-xs border border-gray-200 rounded px-2 py-1.5 outline-none"
            />
          </div>
        </div>
      </SectionAccordion>
      <SectionAccordion title="Font" icon="T">
        <div className="space-y-3">
          <FontControl
            fontFamily={bs.fontFamily}
            fontWeight={bs.fontWeight}
            fontSize={bs.fontSize}
            onFamilyChange={(v) => update({ fontFamily: v })}
            onWeightChange={(v) => update({ fontWeight: v })}
            onSizeChange={(v) => update({ fontSize: v })}
          />
          <ColorPicker label="Text Color" value={bs.textColor} onChange={(v) => update({ textColor: v })} />
        </div>
      </SectionAccordion>
      <SectionAccordion title="Links" icon="🔗">
        <div className="space-y-3">
          <ColorPicker label="Link Color" value={bs.linkColor} onChange={(v) => update({ linkColor: v })} />
        </div>
      </SectionAccordion>
    </div>
  );
}
