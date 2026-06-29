import { GraduationCap, Target, Languages, Trophy } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container split-showcase animate-in">
        
        {/* Left Side Info */}
        <div className="split-showcase__left">
          <span className="section-label">About Me</span>
          <h2 className="split-showcase__title">Get to<br />Know Me</h2>
          
          <div className="about__text-column">
            <p className="split-showcase__desc">
              I am an Informatics student at <strong>President University</strong> with hands-on experience managing multi-stakeholder projects, participant registration, and coordinating workflows under tight deadlines.
            </p>
            <p className="split-showcase__desc" style={{ marginTop: '-12px', fontSize: '0.95rem', opacity: 0.85 }}>
              My technical background in Computer Science allows me to professionally manage database systems and understand technical development flows.
            </p>
            
            <a href="#resume" className="split-showcase__link">
              View Experience Timeline &rarr;
            </a>

            {/* Showcase Mini Thumbnail */}
            <div className="split-showcase__thumbnail">
              <div className="about__mini-thumb">
                <span className="about__mini-badge">3.76 GPA</span>
                <span className="about__mini-detail">Informatics CS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Skewed Glass Card Stack */}
        <div className="split-showcase__right">
          <div className="split-showcase__skewed-wrapper">
            <div className="split-showcase__skewed-backdrop split-showcase__skewed-backdrop--top"></div>
            <div className="split-showcase__skewed-backdrop split-showcase__skewed-backdrop--bottom"></div>
            
            {/* The main container holding the cards */}
            <div className="about__glass-card-stack">
              <div className="about__cards-column stagger-children">
                <div className="about__card">
                  <div className="about__card-icon-wrapper about__card-icon-wrapper--education">
                    <GraduationCap size={24} />
                  </div>
                  <div className="about__card-content">
                    <h4 className="about__card-title">Academic Excellence</h4>
                    <p className="about__card-desc">B.Informatics with 3.76/4.00 GPA at President University</p>
                  </div>
                </div>

                <div className="about__card">
                  <div className="about__card-icon-wrapper about__card-icon-wrapper--skills">
                    <Target size={24} />
                  </div>
                  <div className="about__card-content">
                    <h4 className="about__card-title">Leadership Focus</h4>
                    <p className="about__card-desc">Leading Student Ambassadors & Debating Society (31-people)</p>
                  </div>
                </div>

                <div className="about__card">
                  <div className="about__card-icon-wrapper about__card-icon-wrapper--languages">
                    <Languages size={24} />
                  </div>
                  <div className="about__card-content">
                    <h4 className="about__card-title">Communication</h4>
                    <p className="about__card-desc">Indonesian (Native), English (IELTS 6.0 certified)</p>
                  </div>
                </div>

                <div className="about__card">
                  <div className="about__card-icon-wrapper about__card-icon-wrapper--interests">
                    <Trophy size={24} />
                  </div>
                  <div className="about__card-content">
                    <h4 className="about__card-title">Achievements</h4>
                    <p className="about__card-desc">4x National Debate Champion/Finalist & 2x CTF 1st Place</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
