import React from 'react';
import type { Boss } from '../data/types';

interface BossSelectorProps {
  stage: string; // e.g., "Day 1", "Day 2"
  options: Boss[];
  selectedId: string | null;
  onSelect: (bossId: string) => void;
  disabled?: boolean;
}

export const BossSelector: React.FC<BossSelectorProps> = ({
  stage,
  options,
  selectedId,
  onSelect,
  disabled = false,
}) => {
  if (options.length === 0) {
    return null;
  }

  return (
    <div className="mb-6 fade-in">
      <h2 className="text-lg font-semibold mb-3 text-[var(--color-text-gold)] border-l-4 border-[var(--color-accent)] pl-2">
        {stage}
      </h2>
      <div className="grid grid-cols-1 gap-2">
        {options.map((boss) => (
          <button
            key={boss.id}
            onClick={() => onSelect(boss.id)}
            disabled={disabled}
            className={`
              p-3 text-left border rounded transition-all duration-200
              ${
                selectedId === boss.id
                  ? 'bg-[var(--color-bg-selected)] border-[var(--color-border-selected)] text-[var(--color-text-selected)] shadow-[0_0_10px_var(--color-glow)]'
                  : 'bg-[var(--color-bg-card)] border-[var(--color-border)] text-[var(--color-text-main)] hover:bg-[var(--color-bg-hover)]'
              }
              ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
            `}
          >
            <span className="font-medium">{boss.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
