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
  const [activeSection, setActiveSection] = useState('home');

  const SECTIONS = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Projects' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    if (!bodyVisible) return;

    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [bodyVisible]);

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
      
      {/* Scroll Spy Vertical Navigation Tracker */}
      {bodyVisible && (
        <div className="scroll-spy-nav" aria-label="Vertical navigation tracker">
          {SECTIONS.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className={`scroll-spy-nav__dot ${activeSection === sec.id ? 'scroll-spy-nav__dot--active' : ''}`}
              aria-label={`Scroll to ${sec.label}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="scroll-spy-nav__tooltip">{sec.label}</span>
            </a>
          ))}
        </div>
      )}
      
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
