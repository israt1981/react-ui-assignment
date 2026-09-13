import logoText from '../../assets/logo-text.png';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8">
          
          <div className="space-y-4">
            <img src={logoText} alt="DevStack Logo" className="h-8 object-contain" />
            <p className="text-xs text-gray-500 leading-relaxed">
              Explore technologies, compare options, and build your ideal development stack effortlessly.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3">Product</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#technologies" className="hover:text-pink-500 transition">Technologies</a></li>
              <li><a href="#stack" className="hover:text-pink-500 transition">Stack Builder</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3">Company</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#about" className="hover:text-pink-500 transition">About Us</a></li>
              <li><a href="#contact" className="hover:text-pink-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-3">Legal</h4>
            <ul className="space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-pink-500 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-pink-500 transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-100 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} DevStack. All rights reserved.
        </div>
      </div>
    </footer>
  );
};