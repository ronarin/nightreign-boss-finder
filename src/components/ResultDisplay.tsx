import React from 'react';
import type { Boss } from '../data/types';

interface ResultDisplayProps {
  candidates: Boss[];
  isDetermined: boolean;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ candidates, isDetermined }) => {
  if (candidates.length === 0) {
    return (
      <div className="mt-4 p-4 text-center text-[var(--color-text-muted)] border border-dashed border-[var(--color-border)] rounded">
        <p>候補が見つかりません。選択内容を確認してください。</p>
      </div>
    );
  }

  return (
    <div className="fade-in" style={{ marginTop: '16px' }}>
      <h2
        className="text-lg font-semibold text-[var(--color-text-gold)] border-l-4 border-[var(--color-accent)] pl-2"
        style={{ marginBottom: '4px' }}
      >
        3日目: 夜の王
      </h2>

      <div
        className={`
          rounded-lg border text-center transition-all duration-300
          ${isDetermined
            ? 'bg-[var(--color-bg-highlight)] border-[var(--color-border-highlight)] shadow-[0_0_20px_var(--color-glow-gold)]'
            : 'bg-[var(--color-bg-card)] border-[var(--color-border)]'
          }
        `}
        style={{ padding: '16px' }}
      >
        {isDetermined ? (
          <div>
            <p className="text-sm text-[var(--color-text-gold)] uppercase tracking-widest mb-2">特定完了！</p>
            <h3 className="text-2xl font-bold text-[var(--color-text-highlight)] mb-1">
              {candidates[0].name}
            </h3>
          </div>
        ) : (
          <div>
            <p className="text-sm text-[var(--color-text-muted)] mb-3">出現候補:</p>
            <ul className="space-y-2">
              {candidates.map((boss) => (
                <li key={boss.id} className="text-lg font-medium text-[var(--color-text-main)]">
                  {boss.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
