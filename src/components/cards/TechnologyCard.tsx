import { Star } from 'lucide-react';
import type { Technology } from '../../types/technology';

interface TechnologyCardProps {
  tech: Technology;
  onSelect: (tech: Technology) => void;
  isSelected: boolean;
}

export const TechnologyCard = ({ tech, onSelect, isSelected }: TechnologyCardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between relative">
      <div>
        <div className="flex justify-between items-start mb-4">
          <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
          {tech.badge && (
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              tech.badge === 'Popular' ? 'bg-cyan-50 text-cyan-500' :
              tech.badge === 'Versatile' ? 'bg-emerald-50 text-emerald-500' :
              tech.badge === 'Fast' || tech.badge === 'Cache' ? 'bg-orange-50 text-orange-500' :
              'bg-blue-50 text-blue-500'
            }`}>
              {tech.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-4 h-12 overflow-hidden">{tech.description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-500 border-t border-gray-50 pt-3 mb-4">
          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{tech.category}</span>
          <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded">{tech.experienceLevel}</span>
          <div className="flex items-center text-amber-500 font-semibold gap-1">
            <Star className="w-3.5 h-3.5 fill-amber-400 stroke-amber-400" />
            <span>{tech.rating}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => onSelect(tech)}
        disabled={isSelected}
        className={`w-full py-2.5 rounded-lg font-medium text-sm transition ${
          isSelected 
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
            : 'bg-[#0b0f19] hover:bg-gray-800 text-white'
        }`}
      >
        {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
};