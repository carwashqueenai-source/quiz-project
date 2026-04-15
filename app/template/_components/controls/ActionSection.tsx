'use client';

import type { ActionConfig } from '../../_lib/types';
import { ACTION_TYPES, TARGET_OPTIONS } from '../../_lib/constants';
import SectionAccordion from './SectionAccordion';

interface ActionSectionProps {
  action: ActionConfig;
  onChange: (action: ActionConfig) => void;
  linkLabel?: string;
}

export default function ActionSection({ action, onChange, linkLabel = 'Action Type' }: ActionSectionProps) {
  return (
    <SectionAccordion title="Action" icon="🔗">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-600">{linkLabel}</span>
          <select
            value={action.actionType}
            onChange={(e) => onChange({ ...action, actionType: e.target.value as ActionConfig['actionType'] })}
            className="text-xs border border-gray-200 rounded px-2 py-1 bg-white"
          >
            {ACTION_TYPES.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
        <div>
          <div className="flex items-center border border-gray-200 rounded">
            <span className="text-xs text-gray-500 px-2 bg-gray-50 py-1.5 border-r border-gray-200">URL</span>
            <input
              type="text"
              value={action.url}
              onChange={(e) => onChange({ ...action, url: e.target.value })}
              className="flex-1 text-xs py-1.5 px-2 outline-none bg-transparent"
              placeholder="https://"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center border border-gray-200 rounded w-full">
            <span className="text-xs text-gray-500 px-2 bg-gray-50 py-1.5 border-r border-gray-200">Target</span>
            <select
              value={action.target}
              onChange={(e) => onChange({ ...action, target: e.target.value as ActionConfig['target'] })}
              className="flex-1 text-xs py-1.5 px-2 bg-transparent outline-none"
            >
              {TARGET_OPTIONS.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </SectionAccordion>
  );
}
