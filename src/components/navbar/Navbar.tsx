import { useState } from 'react';
import logoText from '../../assets/logo-text.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* লোগো সেকশন */}
          <div className="flex items-center gap-2">
            <img 
              src={logoText} 
              alt="DevStack Logo" 
              className="h-8 w-auto object-contain" 
            />
          </div>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#home" className="text-pink-500">Home</a>
            <a href="#technologies" className="hover:text-pink-500 transition">Technologies</a>
            <a href="#projects" className="hover:text-pink-500 transition">Projects</a>
            <a href="#about" className="hover:text-pink-500 transition">About</a>
            <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
              Sign In
            </button>
            <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium px-5 py-2 rounded-full transition shadow-sm">
              Sign Up
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};