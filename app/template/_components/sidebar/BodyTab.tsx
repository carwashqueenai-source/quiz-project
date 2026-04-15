'use client';

import ColorPicker from '../controls/ColorPicker';
import FontControl from '../controls/FontControl';
import StepperInput from '../controls/StepperInput';
import SectionAccordion from '../controls/SectionAccordion';

export default function BodyTab() {
  // These are global styles that would apply to the entire email body
  // For now, they are visual placeholders that match Quivio's Body tab
  return (
    <div>
      <SectionAccordion title="General" icon="⚙">
        <div className="space-y-3">
          <ColorPicker label="Background Color" value="#f7f7f7" onChange={() => {}} />
          <ColorPicker label="Content Area Background" value="#ffffff" onChange={() => {}} />
          <div className="flex items-center justify-between">
            <span className="text-xs text-gray-600">Content Width</span>
            <StepperInput value={600} onChange={() => {}} />
          </div>
        </div>
      </SectionAccordion>
      <SectionAccordion title="Email Settings" icon="✉">
        <div className="space-y-3">
          <div>
            <span className="text-xs text-gray-600 block mb-1">Preheader Text</span>
            <input
              type="text"
              placeholder="Add a preheader text..."
              className="w-full text-xs border border-gray-200 rounded px-2 py-1.5 outline-none"
            />
          </div>
        </div>
      </SectionAccordion>
      <SectionAccordion title="Font" icon="T">
        <div className="space-y-3">
          <FontControl
            fontFamily="inherit"
            fontWeight="400"
            fontSize={14}
            onFamilyChange={() => {}}
            onWeightChange={() => {}}
            onSizeChange={() => {}}
          />
          <ColorPicker label="Text Color" value="#333333" onChange={() => {}} />
        </div>
      </SectionAccordion>
      <SectionAccordion title="Links" icon="🔗">
        <div className="space-y-3">
          <ColorPicker label="Link Color" value="#3b82f6" onChange={() => {}} />
        </div>
      </SectionAccordion>
    </div>
  );
}
