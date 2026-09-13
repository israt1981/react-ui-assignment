import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { TechnologyCard } from './components/cards/TechnologyCard';
import { YourStack } from './components/stack/Stack';
import { Footer } from './components/common/Footer';
import type { Technology } from './types/technology';

function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTechs, setSelectedTechs] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Dynamic Fetching from Public Data Folder
  useEffect(() => {
    fetch('/data/technologies.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch technologies data');
        }
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error loading technologies:', err);
        setLoading(false);
      });
  }, []);

  // Toast Alerts Logic
  const handleSelectTech = (tech: Technology) => {
    if (selectedTechs.some((t) => t.id === tech.id)) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: 'bottom-right',
      });
      return;
    }
    setSelectedTechs([...selectedTechs, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      position: 'bottom-right',
    });
  };

  const handleRemoveTech = (id: string) => {
    const techToRemove = selectedTechs.find((t) => t.id === id);
    setSelectedTechs(selectedTechs.filter((t) => t.id !== id));
    if (techToRemove) {
      toast.error(`Removed ${techToRemove.name} from stack`, {
        position: 'bottom-right',
      });
    }
  };

  const handleClearAll = () => {
    setSelectedTechs([]);
    toast.info('Cleared all items from your stack!', {
      position: 'bottom-right',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50/30 flex flex-col justify-between">
      <div>
        <Navbar />
        <Hero />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="technologies">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Explore the <span className="text-pink-500">Technologies</span>
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Pick your ideal technologies for your next project.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500"></div>
              <span className="ml-3 text-gray-600 font-medium text-sm">Loading technologies...</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech) => (
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
          )}
        </main>
      </div>

      <Footer />
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default App;