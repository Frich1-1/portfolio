import { useState, useEffect, useCallback } from 'react';
import './App.css';
import { useScrollReveal } from './hooks/useScrollReveal';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

import CustomCursor from './components/CustomCursor';
import ParticleBackground from './components/ParticleBackground';
import TerminalOverlay from './components/TerminalOverlay';
import IntroScreen from './components/IntroScreen';

function App() {
  useScrollReveal();
  
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [bodyVisible, setBodyVisible] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setIntroComplete(true);
    setTimeout(() => setBodyVisible(true), 50);
  }, []);

  return (
    <>
      {!introComplete && <IntroScreen onComplete={handleIntroComplete} />}
    <div className="app" style={{ opacity: bodyVisible ? 1 : 0, transition: 'opacity 0.6s ease' }}>
      <CustomCursor />
      <ParticleBackground />
      <TerminalOverlay isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} />
      
      {/* Floating CTF Button */}
      <button 
        className="ctf-trigger-btn clickable"
        onClick={() => setIsTerminalOpen(true)}
        title="Open Terminal CTF"
      >
        <span>&gt;<span className="blink-cursor">_</span></span> hey press me
      </button>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  );
}

export default App;
