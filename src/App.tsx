import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Hero />
      <Features />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;