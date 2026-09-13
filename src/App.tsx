import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;