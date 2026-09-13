export const Hero = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text & Buttons */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#technologies"
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition"
            >
              Explore Technologies
            </a>
            <button className="border border-gray-200 hover:border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column: 3D Illustration / Graphic */}
        <div className="flex justify-center md:justify-end">
          <div className="w-full max-w-md relative">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
              alt="Development Stack Illustration"
              className="w-full h-auto rounded-2xl shadow-xl border border-gray-100 object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};