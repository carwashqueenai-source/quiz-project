'use client';

import type { TableProperties } from '../../_lib/types';

export default function TableRenderer({ properties: p }: { properties: TableProperties & { type: 'table' } }) {
  return (
    <div
      style={{
        padding: `${p.containerPadding.top}px ${p.containerPadding.right}px ${p.containerPadding.bottom}px ${p.containerPadding.left}px`,
      }}
    >
      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          borderWidth: `${p.border.width}px`,
          borderStyle: p.border.style,
          borderColor: p.border.color,
        }}
      >
        {p.enableHeader && (
          <thead>
            <tr>
              {Array.from({ length: p.columns }).map((_, ci) => (
                <th
                  key={ci}
                  style={{
                    backgroundColor: p.headerStyle.bgColor,
                    fontFamily: p.headerStyle.fontFamily,
                    fontWeight: p.headerStyle.fontWeight,
                    fontSize: `${p.headerStyle.fontSize}px`,
                    color: p.headerStyle.textColor || undefined,
                    textAlign: p.headerStyle.textAlign,
                    verticalAlign: p.headerStyle.verticalAlign,
                    padding: `${p.headerStyle.padding.top}px ${p.headerStyle.padding.right}px ${p.headerStyle.padding.bottom}px ${p.headerStyle.padding.left}px`,
                    borderWidth: `${p.border.width}px`,
                    borderStyle: p.border.style,
                    borderColor: p.border.color,
                  }}
                >
                  {p.headerData[ci] || ''}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {Array.from({ length: p.rows }).map((_, ri) => (
            <tr
              key={ri}
              style={{
                backgroundColor: p.stripedRows && ri % 2 === 1 ? '#f9fafb' : p.contentStyle.bgColor,
              }}
            >
              {Array.from({ length: p.columns }).map((_, ci) => (
                <td
                  key={ci}
                  style={{
                    fontFamily: p.contentStyle.fontFamily,
                    fontWeight: p.contentStyle.fontWeight,
                    fontSize: `${p.contentStyle.fontSize}px`,
                    color: p.contentStyle.textColor || undefined,
                    textAlign: p.contentStyle.textAlign,
                    verticalAlign: p.contentStyle.verticalAlign,
                    lineHeight: `${p.contentStyle.lineHeight}%`,
                    letterSpacing: `${p.contentStyle.letterSpacing}px`,
                    padding: `${p.contentStyle.padding.top}px ${p.contentStyle.padding.right}px ${p.contentStyle.padding.bottom}px ${p.contentStyle.padding.left}px`,
                    borderWidth: `${p.border.width}px`,
                    borderStyle: p.border.style,
                    borderColor: p.border.color,
                  }}
                >
                  {p.cellData[ri]?.[ci] || ''}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
