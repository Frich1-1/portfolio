import { useEffect, useState } from 'react';
import './IntroScreen.css';

export default function IntroScreen({ onComplete }) {
  const [phase, setPhase] = useState('initial'); // initial -> reveal -> exit -> done

  useEffect(() => {
    // Phase 1: Start reveal animation
    const t1 = setTimeout(() => setPhase('reveal'), 100);

    // Phase 2: Start exit animation
    const t2 = setTimeout(() => setPhase('exit'), 3200);

    // Phase 3: Done — remove overlay
    const t3 = setTimeout(() => {
      setPhase('done');
      onComplete?.();
    }, 4000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className={`intro ${phase}`} aria-hidden="true">
      {/* Animated background grid */}
      <div className="intro__grid" />

      {/* Scanning line */}
      <div className="intro__scan-line" />

      {/* Corner accents */}
      <div className="intro__corner intro__corner--tl" />
      <div className="intro__corner intro__corner--tr" />
      <div className="intro__corner intro__corner--bl" />
      <div className="intro__corner intro__corner--br" />

      {/* Center content */}
      <div className="intro__center">

        {/* Monogram / Logo mark */}
        <div className="intro__logo-wrap">
          <svg className="intro__ring" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" r="88" stroke="url(#ring-grad)" strokeWidth="1.5" strokeDasharray="6 4" />
            <circle cx="100" cy="100" r="72" stroke="rgba(37,99,235,0.25)" strokeWidth="1" />
            <defs>
              <linearGradient id="ring-grad" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="50%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          <div className="intro__monogram">RF</div>

          {/* Orbiting dot */}
          <div className="intro__orbit">
            <div className="intro__orbit-dot" />
          </div>
        </div>

        {/* Location tag */}
        <p className="intro__location">
          <span className="intro__dot-pulse" />
          President University · Indonesia
        </p>

        {/* Main name */}
        <h1 className="intro__name">
          <span className="intro__name-line">Richie</span>
          <span className="intro__name-line intro__name-line--accent">Frederico</span>
          <span className="intro__name-line">Wong</span>
        </h1>

        {/* Role / tagline */}
        <div className="intro__roles">
          <span className="intro__role">Informatics Student</span>
          <span className="intro__role-sep">·</span>
          <span className="intro__role">Tech Enthusiast</span>
          <span className="intro__role-sep">·</span>
          <span className="intro__role">Software Engineer</span>
        </div>

        {/* Progress bar */}
        <div className="intro__loader">
          <div className="intro__loader-track">
            <div className="intro__loader-fill" />
          </div>
          <span className="intro__loader-text">Loading portfolio…</span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="intro__bottom-bar">
        <span className="intro__bottom-left">rfwong.dev</span>
        <span className="intro__bottom-right">v1.0 · 2025</span>
      </div>
    </div>
  );
}
