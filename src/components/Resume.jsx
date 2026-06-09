import { GraduationCap, Briefcase, Award, Users } from 'lucide-react';
import './Resume.css';

const education = [
  {
    title: 'Candidate for B.Informatics in Computer Science',
    institution: 'President University',
    period: '2024 - Present',
    gpa: 'GPA: 3.78/4.00',
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
      'Coordinated logistics, schedules, and on-site support across multiple stakeholders.',
      'Briefed and onboarded new ambassadors on outreach procedures and communication standards.'
    ]
  },
  {
    role: 'English Tutor',
    company: 'English Learning and Literacy Center, President University',
    period: 'July 2025 - Feb 2026',
    details: [
      'Designed and facilitated customized English lessons for 20+ students per week across speaking, reading, and writing.',
      'Achieved a 90% learner satisfaction rate based on post-session feedback.',
      'Utilized digital tools (e.g., Canva, Google Classroom, Zoom, interactive worksheets) to create learning materials.'
    ]
  },
  {
    role: 'Content Production Intern (Video Editing)',
    company: 'President University',
    period: 'Feb 2025 - June 2025',
    details: [
      'Monitored TikTok video performance metrics across 10+ videos, analyzing engagement trends.',
      'Contributed to a 15% increase in audience engagement.',
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
      'Managed a 31-person organization to deliver 45+ weekly training sessions and 5 tournaments at university level.',
      'Drove 30% membership growth through a structured recruitment pipeline.',
      'Monitored membership growth and attendance data via spreadsheet tracking to support data-driven decisions.'
    ]
  },
  {
    role: 'Programmer / Project Coordinator',
    organization: 'Security Risk Management & Audit Project',
    period: 'Feb 2026 - March 2026',
    details: [
      'Coordinated sprint tasks and documentation across a 3-person dev team, ensuring on-time delivery of project milestones.',
      'Designed and queried relational databases using PostgreSQL to support data storage and retrieval.'
    ]
  }
];

export default function Resume() {
  return (
    <section className="resume section" id="resume">
      <div className="resume__container animate-in">
        <div className="resume__header">
          <span className="section-label">Resume</span>
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">
            A comprehensive look at my professional experiences, education, and leadership roles.
          </p>
        </div>

        <div className="resume__grid-columns">
          {/* Work Experience Column */}
          <div className="resume__col">
            <h3 className="resume__section-title">
              <Briefcase size={20} className="resume__icon-inline" /> Work Experience
            </h3>
            <div className="resume__list">
              {workExperience.map((work, idx) => (
                <div key={idx} className="resume__card-item">
                  <div className="resume__card-badge">Work</div>
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
          </div>

          {/* Education & Leadership Column */}
          <div className="resume__col">
            <h3 className="resume__section-title">
              <GraduationCap size={20} className="resume__icon-inline" /> Education
            </h3>
            <div className="resume__list">
              {education.map((edu, idx) => (
                <div key={idx} className="resume__card-item resume__card-item--edu">
                  <div className="resume__card-badge resume__card-badge--edu">Education</div>
                  <span className="resume__card-period">{edu.period}</span>
                  <h4 className="resume__card-role">{edu.title}</h4>
                  <h5 className="resume__card-company">{edu.institution} | <strong style={{ color: 'var(--color-primary)' }}>{edu.gpa}</strong></h5>
                  <div className="resume__card-awards">
                    <span className="resume__awards-title"><Award size={14} /> Key Achievements:</span>
                    <ul className="resume__card-bullet-list">
                      {edu.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="resume__card-bullet">{ach}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <h3 className="resume__section-title resume__section-title--space">
              <Users size={20} className="resume__icon-inline" /> Leadership & Projects
            </h3>
            <div className="resume__list">
              {leadership.map((lead, idx) => (
                <div key={idx} className="resume__card-item resume__card-item--lead">
                  <div className="resume__card-badge resume__card-badge--lead">Leadership</div>
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
    </section>
  );
}
