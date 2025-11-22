import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-main)] text-[var(--color-text-main)] font-sans">
      <header className="border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]" style={{ padding: '12px' }}>
        <h1 className="text-lg font-bold text-[var(--color-text-gold)] text-center">
          NIGHTREIGN Boss Finder
        </h1>
      </header>

      <main className="flex-grow container mx-auto max-w-md" style={{ padding: '12px' }}>
        {children}
      </main>

      <footer className="text-center text-xs text-[var(--color-text-muted)] border-t border-[var(--color-border)]" style={{ padding: '12px' }}>
        <p>&copy; 2025 Boss Finder Project</p>
      </footer>
    </div>
  );
};
