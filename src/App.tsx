import { useMemo, useState } from 'react';
import { BossSelector } from './components/BossSelector';
import { Layout } from './components/Layout';
import { ResultDisplay } from './components/ResultDisplay';
import { bosses } from './data/bosses';
import { routes } from './data/routes';

function App() {
  const [selectedDay1, setSelectedDay1] = useState<string | null>(null);
  const [selectedDay2, setSelectedDay2] = useState<string | null>(null);

  // Filter logic
  const day1Options = useMemo(() => {
    return bosses.filter(b => b.type === 'day1');
  }, []);

  const day2Options = useMemo(() => {
    if (!selectedDay1) return [];
    
    // Find all routes that start with selected Day 1 boss
    const validRoutes = routes.filter(r => r.day1Id === selectedDay1);
    const validDay2Ids = new Set(validRoutes.map(r => r.day2Id));
    
    return bosses.filter(b => b.type === 'day2' && validDay2Ids.has(b.id));
  }, [selectedDay1]);

  const day3Candidates = useMemo(() => {
    if (!selectedDay1) return [];
    
    let validRoutes = routes.filter(r => r.day1Id === selectedDay1);
    
    if (selectedDay2) {
      validRoutes = validRoutes.filter(r => r.day2Id === selectedDay2);
    }
    
    const validDay3Ids = new Set(validRoutes.map(r => r.day3Id));
    return bosses.filter(b => b.type === 'day3' && validDay3Ids.has(b.id));
  }, [selectedDay1, selectedDay2]);

  const handleDay1Select = (id: string) => {
    if (selectedDay1 === id) return; // No change
    setSelectedDay1(id);
    setSelectedDay2(null); // Reset Day 2 selection
  };

  const handleDay2Select = (id: string) => {
    setSelectedDay2(id);
  };

  const handleReset = () => {
    setSelectedDay1(null);
    setSelectedDay2(null);
  };

  const isDetermined = day3Candidates.length === 1 && !!selectedDay2;

  return (
    <Layout>
      <div className="space-y-8">
        <BossSelector
          stage="Day 1: The Beginning"
          options={day1Options}
          selectedId={selectedDay1}
          onSelect={handleDay1Select}
        />

        {selectedDay1 && (
          <BossSelector
            stage="Day 2: The Deepening"
            options={day2Options}
            selectedId={selectedDay2}
            onSelect={handleDay2Select}
          />
        )}

        {(selectedDay1 || selectedDay2) && (
          <ResultDisplay
            candidates={day3Candidates}
            isDetermined={isDetermined}
          />
        )}

        {(selectedDay1 || selectedDay2) && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleReset}
              className="px-6 py-2 text-sm text-[var(--color-text-muted)] border border-[var(--color-border)] rounded hover:bg-[var(--color-bg-hover)] transition-colors"
            >
              Reset Selection
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;
