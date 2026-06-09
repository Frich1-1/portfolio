import { Calendar, User, ExternalLink } from 'lucide-react';
import { Github } from './BrandIcons';
import './Portfolio.css';

const projects = [
  {
    title: 'Security Risk Management & Audit Project',
    role: 'Programmer / PM Coordinator',
    period: 'Feb 2026 - March 2026',
    description: 'Coordinated sprint tasks and documentation across a 3-person dev team, ensuring on-time delivery of project milestones. Designed and queried relational databases using PostgreSQL to support data storage and retrieval for the audit system.',
    tags: ['PostgreSQL', 'Agile/Scrum', 'Sprint Planning', 'Database Design', 'Security Audit'],
    links: {},
    gradient: 'linear-gradient(135deg, #0891B2 0%, #06B6D4 100%)'
  },
  {
    title: 'WMP Event Management App',
    role: 'Mobile Developer',
    period: 'Academic Project',
    description: 'An event management application for university students developed under the Wireless and Mobile Programming course. Designed to help students browse, register, and organize campus events efficiently with user-friendly mobile interfaces.',
    tags: ['Android Studio', 'Java/Kotlin', 'Mobile Programming', 'UX Design', 'Event Tracking'],
    links: {
      github: 'https://github.com/Frich1-1/wmpproject'
    },
    gradient: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)'
  }
];

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="portfolio__container animate-in">
        <div className="portfolio__header">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my projects blending software programming skills with team coordination and task planning.
          </p>
        </div>

        <div className="portfolio__grid stagger-children">
          {projects.map((project) => (
            <div key={project.title} className="portfolio__card">
              <div 
                className="portfolio__card-header"
                style={{ background: project.gradient }}
              >
                <div className="portfolio__meta">
                  <div className="portfolio__meta-item">
                    <Calendar size={14} />
                    <span>{project.period}</span>
                  </div>
                  <div className="portfolio__meta-item">
                    <User size={14} />
                    <span>{project.role}</span>
                  </div>
                </div>
                <h3 className="portfolio__card-title">{project.title}</h3>
              </div>

              <div className="portfolio__card-body">
                <p className="portfolio__card-desc">{project.description}</p>
                
                <div className="portfolio__tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="portfolio__tag">{tag}</span>
                  ))}
                </div>

                <div className="portfolio__actions">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="portfolio__btn portfolio__btn--github"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="portfolio__btn portfolio__btn--demo"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                  {!project.links.github && !project.links.demo && (
                    <span className="portfolio__btn-disabled">Internal Academic Project</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
