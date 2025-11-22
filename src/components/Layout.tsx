import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-main)] text-[var(--color-text-main)] font-sans">
      <header className="p-4 border-b border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
        <h1 className="text-xl font-bold text-[var(--color-text-gold)] text-center">
          NIGHTREIGN Boss Finder
        </h1>
      </header>
      
      <main className="flex-grow p-4 container mx-auto max-w-md">
        {children}
      </main>
      
      <footer className="p-4 text-center text-sm text-[var(--color-text-muted)] border-t border-[var(--color-border)]">
        <p>&copy; 2025 Boss Finder Project</p>
      </footer>
    </div>
  );
};
