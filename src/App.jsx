import { useState, useEffect } from 'react';
import './App.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import TerminalOverlay from './components/TerminalOverlay';

function App() {
  useScrollReveal();
  
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <div className="app">
      <CustomCursor />
      <ParticleBackground />
      <TerminalOverlay isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      
      {/* Floating CTF Button */}
      <button 
        className="ctf-trigger-btn clickable"
        onClick={() => setIsTerminalOpen(true)}
        title="Open Terminal CTF"
      >
        <span>&gt;_</span> hey press me
      </button>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Blog />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
