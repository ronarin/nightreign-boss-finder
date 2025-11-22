import React from 'react';
import type { Boss } from '../data/types';

interface BossSelectorProps {
  stage: string; // e.g., "Day 1", "Day 2"
  options: Boss[];
  selectedId: string | null;
  onSelect: (bossId: string) => void;
  disabled?: boolean;
  defaultLabel?: string;
}

export const BossSelector: React.FC<BossSelectorProps> = ({
  stage,
  options,
  selectedId,
  onSelect,
  disabled = false,
  defaultLabel = "Select a boss...",
}) => {
  if (options.length === 0) {
    return null;
  }

  return (
    <div className="fade-in">
      <h2
        className="text-lg font-semibold text-[var(--color-text-gold)] border-l-4 border-[var(--color-accent)] pl-2"
        style={{ marginBottom: '4px' }}
      >
        {stage}
      </h2>
      <div className="relative">
        <select
          value={selectedId || ''}
          onChange={(e) => onSelect(e.target.value)}
          disabled={disabled}
          className={`
            w-full p-3 appearance-none border rounded transition-all duration-200
            bg-[var(--color-bg-card)] border-[var(--color-border)] text-[var(--color-text-main)]
            focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]
            ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:border-[var(--color-text-muted)]'}
          `}
        >
          <option value="" disabled>
            {defaultLabel}
          </option>
          {options.map((boss) => (
            <option key={boss.id} value={boss.id}>
              {boss.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-[var(--color-text-muted)]">
          <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
