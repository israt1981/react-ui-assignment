import { Trash2 } from 'lucide-react';
import type { Technology } from '../../types/technology';

interface StackProps {
  selectedTechs: Technology[];
  onRemove: (id: string) => void;
  onClearAll: () => void;
}

export const YourStack = ({ selectedTechs, onRemove, onClearAll }: StackProps) => {
  const count = selectedTechs.length;

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm sticky top-20">
      <div className="flex justify-between items-center mb-4 pb-3 border-b border-gray-100">
        <div>
          <h3 className="text-lg font-bold text-gray-900">Your Stack</h3>
          <p className="text-xs text-pink-500 font-medium">
            {count} {count === 1 ? 'Technology' : 'Technologies'} Selected
          </p>
        </div>
        {count > 0 && (
          <button
            onClick={onClearAll}
            className="text-xs text-red-500 hover:text-red-700 font-medium transition"
          >
            Remove All
          </button>
        )}
      </div>

      {count === 0 ? (
        <div className="text-center py-8">
          <p className="text-xs text-gray-400">Your stack is empty.</p>
          <p className="text-[11px] text-gray-400 mt-1">
            Click "Add to Stack" on any card to add it here.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {selectedTechs.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <img src={tech.icon} alt={tech.name} className="w-6 h-6 object-contain" />
                <div>
                  <h4 className="text-xs font-bold text-gray-800">{tech.name}</h4>
                  <span className="text-[10px] text-gray-400 block">{tech.category}</span>
                </div>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                className="text-gray-400 hover:text-red-500 text-base font-bold px-1 transition"
                title="Remove"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};