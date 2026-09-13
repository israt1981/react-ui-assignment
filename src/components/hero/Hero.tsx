import bannerImg from '../../assets/banner-stack.png';

export const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Build Your Ideal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Development Stack
            </span>
          </h1>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#technologies" className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-6 py-3 rounded-lg shadow-sm transition">
              Explore Technologies
            </a>
            <button className="border border-gray-200 hover:border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg transition bg-white">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={bannerImg}
            alt="DevStack Banner"
            className="w-full max-w-md rounded-2xl shadow-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};