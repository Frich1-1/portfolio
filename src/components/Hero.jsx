import { ArrowDown, Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero__title">
            Hi, I'm <span className="gradient-text">Richie</span>
            <br />
            <span className="hero__title-sub">Frederico Wong</span>
          </h1>

          <p className="hero__description">
            Informatics student at <strong>President University</strong> with a passion
            for <strong>project management</strong>. Blending technical expertise with
            leadership to deliver impactful digital solutions.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="hero__btn hero__btn--primary">
              <Mail size={18} />
              Get in Touch
            </a>
            <a href="#portfolio" className="hero__btn hero__btn--secondary">
              View My Work
            </a>
          </div>

          <div className="hero__socials">
            <a href="https://github.com/Frich1-1" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/richiewong1101" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="mailto:richiewong110107@gmail.com" className="hero__social-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="hero__image-wrapper">
          <div className="hero__image-frame">
            <img src="/richie-photo.png" alt="Richie Frederico Wong" className="hero__image" />
          </div>
          <div className="hero__image-badge">
            <span>🎓</span>
            <span>Informatics Student</span>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll-indicator" aria-label="Scroll to About section">
        <span>Scroll Down</span>
        <ArrowDown size={16} className="hero__scroll-arrow" />
      </a>
    </section>
  );
}
