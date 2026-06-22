import { Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Dark blue angled background shape */}
      <div className="hero__bg-shape"></div>

      <div className="hero__container">
        
        {/* Left Column */}
        <div className="hero__col hero__col--left">
          <div className="hero__logo">
            <span className="hero__logo-icon">RF</span>
            <img src="/frederico-jukebox-bg-removed.png" alt="R Element" className="hero__logo-element" />
          </div>
          <h1 className="hero__title">
            Informatics<br/>Student
          </h1>
          <h2 className="hero__subtitle">The Professional Portfolio</h2>
          <p className="hero__description">
            Informatics student at President University with a passion for project management. Blending technical expertise with leadership to deliver impactful digital solutions.
          </p>
        </div>

        {/* Center Column */}
        <div className="hero__col hero__col--center">
          <div className="hero__image-circle">
            <img src="/richie-photo.png" alt="Richie Frederico Wong" />
          </div>
        </div>

        {/* Right Column */}
        <div className="hero__col hero__col--right">
          <h2 className="hero__name">Richie F. Wong</h2>
          <p className="hero__location">President University, Indonesia</p>
          
          <div className="hero__tags">
            <p>👨🏻‍💻 Informatics Student + Project Manager + Tech Enthusiast</p>
            <p>Leader + Problem Solver + Digital Innovator</p>
            <p>+ Software Engineer ⚡🚀</p>
          </div>

          <p className="hero__skills-text">
            project management, agile, scrum, software engineering, web development, leadership, problem solving
          </p>

          <div className="hero__socials">
            <a href="https://github.com/Frich1-1" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/richiewong1101" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>

          <div className="hero__actions">
            <a href="mailto:richiewong110107@gmail.com" className="hero__btn hero__btn--hire">
              <Mail size={18} /> Hire Me
            </a>
            <a href="#portfolio" className="hero__btn hero__btn--support">
              $ View Work
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
