'use client';

import SectionAccordion from './SectionAccordion';
import ToggleSwitch from './ToggleSwitch';

interface ResponsiveSectionProps {
  hideOnDesktop: boolean;
  onHideChange: (value: boolean) => void;
}

export default function ResponsiveSection({ hideOnDesktop, onHideChange }: ResponsiveSectionProps) {
  return (
    <SectionAccordion title="Responsive Design" icon="📱">
      <ToggleSwitch label="Hide on Desktop" value={hideOnDesktop} onChange={onHideChange} />
    </SectionAccordion>
  );
}
