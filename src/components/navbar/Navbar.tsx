import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
              DS
            </div>
            <span className="font-bold text-xl text-gray-900">
              Dev<span className="text-pink-500">Stack</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
            <a href="#home" className="text-pink-500">Home</a>
            <a href="#technologies" className="hover:text-pink-500 transition">Technologies</a>
            <a href="#projects" className="hover:text-pink-500 transition">Projects</a>
            <a href="#about" className="hover:text-pink-500 transition">About</a>
            <a href="#contact" className="hover:text-pink-500 transition">Contact</a>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-sm font-medium px-5 py-2 rounded-full transition shadow-sm">
              Sign Up
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-2 text-sm font-medium text-gray-600">
          <a href="#home" className="block text-pink-500 py-1">Home</a>
          <a href="#technologies" className="block hover:text-pink-500 py-1">Technologies</a>
          <a href="#projects" className="block hover:text-pink-500 py-1">Projects</a>
          <a href="#about" className="block hover:text-pink-500 py-1">About</a>
          <a href="#contact" className="block hover:text-pink-500 py-1">Contact</a>
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
            <button className="w-full text-left font-medium text-gray-700 py-1">Sign In</button>
            <button className="w-full bg-pink-500 text-white py-2 rounded-full font-medium">Sign Up</button>
          </div>
        </div>
      )}
    </nav>
  );
};