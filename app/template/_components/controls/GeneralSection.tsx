'use client';

import type { Padding } from '../../_lib/types';
import SectionAccordion from './SectionAccordion';
import PaddingControl from './PaddingControl';

interface GeneralSectionProps {
  containerPadding: Padding;
  onPaddingChange: (padding: Padding) => void;
}

export default function GeneralSection({ containerPadding, onPaddingChange }: GeneralSectionProps) {
  return (
    <SectionAccordion title="General" icon="⚙">
      <PaddingControl label="Container Padding" value={containerPadding} onChange={onPaddingChange} />
    </SectionAccordion>
  );
}
