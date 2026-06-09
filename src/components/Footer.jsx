import { Mail, Heart, Code } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import './Footer.css';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Blog', href: '#blog' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' }
];

export default function Footer() {
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__info">
            <a href="#home" className="footer__logo" onClick={handleLogoClick}>
              <span className="footer__logo-bold">Richie</span>
              <span className="footer__logo-light">Frederico</span>
            </a>
            <p className="footer__tagline">
              Connecting code and coordination. Informatics student focused on Web Development & Project Management.
            </p>
          </div>

          <div className="footer__nav">
            <h4 className="footer__title">Navigation</h4>
            <div className="footer__nav-links">
              {links.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="footer__nav-link"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer__socials-section">
            <h4 className="footer__title">Let's Connect</h4>
            <p className="footer__connect-text">Feel free to connect on professional platforms or reach out via email.</p>
            <div className="footer__social-links">
              <a href="https://github.com/Frich1-1" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/richiewong1101" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:richiewong110107@gmail.com" className="footer__social-link" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">
            &copy; {new Date().getFullYear()} Richie Frederico Wong. All rights reserved.
          </p>
          <p className="footer__built">
            Built with 
            <span className="footer__heart"><Heart size={12} fill="currentColor" /></span> 
            using React, Vite & Vanilla CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
