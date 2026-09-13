import { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { TechnologyCard } from './components/cards/TechnologyCard';
import { YourStack } from './components/stack/Stack';
import technologiesData from './data/technologies.json';
import type { Technology } from './types/technology';

function App() {
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);

  const handleSelectTech = (tech: Technology) => {
    // ডুপ্লিকেট যুক্ত করার চেষ্টা করলে alert মেসেজ দেখাবে
    if (selectedTechs.some((t) => t.id === tech.id)) {
      alert(`${tech.name} is already added to your stack!`);
      return;
    }
    setSelectedTechs([...selectedTechs, tech]);
  };

  const handleRemoveTech = (id: string) => {
    setSelectedTechs(selectedTechs.filter((t) => t.id !== id));
  };

  const handleClearAll = () => {
    setSelectedTechs([]);
  };

  return (
    <div className="min-h-screen bg-gray-50/30">
      <Navbar />
      <Hero />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="technologies">
        <div className="mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Explore the <span className="text-pink-500">Technologies</span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">Pick your ideal technologies for your next project.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(technologiesData as Technology[]).map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                onSelect={handleSelectTech}
                isSelected={selectedTechs.some((t) => t.id === tech.id)}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <YourStack
              selectedTechs={selectedTechs}
              onRemove={handleRemoveTech}
              onClearAll={handleClearAll}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;