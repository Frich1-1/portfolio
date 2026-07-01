import { GraduationCap, Briefcase, Award, Users } from 'lucide-react';
import './Resume.css';

const education = [
  {
    title: 'Candidate for B.Informatics in Computer Science',
    institution: 'President University',
    period: '2024 - Present',
    gpa: 'GPA: 3.76/4.00',
    achievements: [
      '2x 1st Place Team CTF President University 2025-2026',
      '4x National Debate Finalist/Champion 2025'
    ]
  }
];

const workExperience = [
  {
    role: 'Team Leader of Student Ambassador',
    company: 'Marketing Team, President University',
    period: 'Sep 2024 - Present',
    details: [
      'Represented the university at 5+ education fairs, engaging 200+ prospective students.',
      'Coordinated logistics, schedules, and on-site support across multiple stakeholders.'
    ]
  },
  {
    role: 'English Tutor',
    company: 'ELLC, President University',
    period: 'July 2025 - Feb 2026',
    details: [
      'Facilitated customized English lessons for 20+ students per week across speaking, reading, and writing.',
      'Utilized digital tools (Canva, Google Classroom, Zoom) to create learning materials.'
    ]
  },
  {
    role: 'Content Production Intern',
    company: 'President University',
    period: 'Feb 2025 - June 2025',
    details: [
      'Monitored TikTok video performance metrics across 10+ videos, analyzing engagement trends.',
      'Contributed to writing scripts tailored to the rector\'s TikTok account.'
    ]
  }
];

const leadership = [
  {
    role: 'Chairperson',
    organization: 'President University Debating Society',
    period: 'Aug 2025 - Present',
    details: [
      'Managed a 31-person organization to deliver 45+ weekly training sessions and 5 tournaments.',
      'Monitored membership growth and attendance data via spreadsheet tracking.'
    ]
  }
];

export default function Resume() {
  return (
    <section className="resume section" id="resume">
      <div className="resume__container split-showcase animate-in">
        
        {/* Left Side Content: Academic summary and details */}
        <div className="split-showcase__left">
          <span className="section-label">Resume</span>
          <h2 className="split-showcase__title">My<br />Journey</h2>
          
          <p className="split-showcase__desc">
            A comprehensive look at my professional experiences, leadership coordinate roles, and education milestones.
          </p>

          <div className="resume__education-box">
            <h3 className="resume__sub-title">
              <GraduationCap size={18} className="resume__icon-inline" /> Education
            </h3>
            {education.map((edu, idx) => (
              <div key={idx} className="resume__education-card">
                <span className="resume__edu-period">{edu.period}</span>
                <h4 className="resume__edu-title">{edu.title}</h4>
                <p className="resume__edu-meta">{edu.institution} | <strong>{edu.gpa}</strong></p>
                <ul className="resume__edu-achievements">
                  {edu.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="resume__edu-ach"><Award size={12} style={{ color: 'var(--color-primary-400)', marginRight: '6px' }} /> {ach}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Skewed Glass Panel Timeline of work experience */}
        <div className="split-showcase__right">
          <div className="split-showcase__skewed-wrapper">
            <div className="split-showcase__skewed-backdrop split-showcase__skewed-backdrop--top"></div>
            <div className="split-showcase__skewed-backdrop split-showcase__skewed-backdrop--bottom"></div>
            
            <div className="resume__glass-timeline">
              <h3 className="resume__section-title">
                <Briefcase size={18} className="resume__icon-inline" /> Work Experience
              </h3>
              
              <div className="resume__timeline-list">
                {workExperience.map((work, idx) => (
                  <div key={idx} className="resume__timeline-card">
                    <span className="resume__card-period">{work.period}</span>
                    <h4 className="resume__card-role">{work.role}</h4>
                    <h5 className="resume__card-company">{work.company}</h5>
                    <ul className="resume__card-bullet-list">
                      {work.details.map((detail, dIdx) => (
                        <li key={dIdx} className="resume__card-bullet">{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <h3 className="resume__section-title" style={{ marginTop: '24px' }}>
                <Users size={18} className="resume__icon-inline" /> Leadership & Projects
              </h3>
              
              <div className="resume__timeline-list">
                {leadership.map((lead, idx) => (
                  <div key={idx} className="resume__timeline-card">
                    <span className="resume__card-period">{lead.period}</span>
                    <h4 className="resume__card-role">{lead.role}</h4>
                    <h5 className="resume__card-company">{lead.organization}</h5>
                    <ul className="resume__card-bullet-list">
                      {lead.details.map((detail, dIdx) => (
                        <li key={dIdx} className="resume__card-bullet">{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
