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
      </div>
    </div>
  );
};
