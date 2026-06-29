import { Code, Wrench, Brain, ClipboardList, Trophy, Users, MessageSquare, Layout, Globe, Cpu, Database, Server, GitBranch, Flame } from 'lucide-react';
import './Skills.css';

const techSkills = [
  { name: 'HTML & CSS', level: 85, icon: <Globe size={16} /> },
  { name: 'JavaScript', level: 75, icon: <Cpu size={16} /> },
  { name: 'Databases (MySQL & PostgreSQL)', level: 72, icon: <Database size={16} /> },
  { name: 'PHP', level: 70, icon: <Server size={16} /> },
  { name: 'Git Version Control', level: 70, icon: <GitBranch size={16} /> },
  { name: 'Laravel Framework', level: 65, icon: <Flame size={16} /> },
];

const tools = [
  'Figma', 'Canva', 'Notion', 'VSCode', 'Git', 'MySQL', 'PostgreSQL', 
  'Google Suite', 'MS Office', 'Zoom', 'Classroom'
];

const softSkills = [
  {
    title: 'Project Management',
    desc: 'Agile basics, task tracking, and coordinating workflows.',
    icon: <ClipboardList size={20} />
  },
  {
    title: 'Project Planning',
    desc: 'Setting milestones, defining scope, allocating resources.',
    icon: <Layout size={20} />
  },
  {
    title: 'Team Coordination',
    desc: 'Aligning team members and facilitating communication.',
    icon: <Users size={20} />
  },
  {
    title: 'Critical Thinking',
    desc: 'Problem solving and analyzing challenges with logical structure.',
    icon: <Brain size={20} />
  }
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="skills__container split-showcase animate-in">
        
        {/* Left Side Content */}
        <div className="split-showcase__left">
          <span className="section-label">Skills</span>
          <h2 className="split-showcase__title">My<br />Expertise</h2>
          
          <p className="split-showcase__desc">
            A balanced mix of software engineering implementation, database management, and structured project leadership principles.
          </p>

          {/* Tools & Platforms list moves to the left side */}
          <div className="skills__tools-box">
            <h3 className="skills__sub-title">
              <Wrench size={18} className="skills__icon-inline" /> Tools & Platforms
            </h3>
            <div className="skills__tags-left">
              {tools.map((tool) => (
                <span key={tool} className="skills__tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className="split-showcase__thumbnail" style={{ marginTop: '24px' }}>
            <div className="skills__mini-thumb">
              <span className="skills__mini-val">PostgreSQL</span>
              <span className="skills__mini-sub">Laravel & Git</span>
            </div>
          </div>
        </div>

        {/* Right Side: Skewed Glass Panel holding technical & soft skills */}
        <div className="split-showcase__right">
          <div className="split-showcase__skewed-wrapper">
            <div className="split-showcase__skewed-backdrop split-showcase__skewed-backdrop--top"></div>
            <div className="split-showcase__skewed-backdrop split-showcase__skewed-backdrop--bottom"></div>
            
            <div className="skills__glass-panel">
              {/* Technical Skills List */}
              <div className="skills__section-block">
                <h3 className="skills__sub-title">
                  <Code size={18} className="skills__icon-inline" /> Technical Skills
                </h3>
                <div className="skills__list stagger-children">
                  {techSkills.map((skill) => (
                    <div key={skill.name} className="skills__progress-item">
                      <div className="skills__progress-info">
                        <span className="skills__progress-name">
                          <span className="skills__progress-icon">{skill.icon}</span>
                          {skill.name}
                        </span>
                        <span className="skills__progress-percent">{skill.level}%</span>
                      </div>
                      <div className="skills__progress-bar-bg">
                        <div 
                          className="skills__progress-bar-fill" 
                          style={{ '--target-width': `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Soft Skills List */}
              <div className="skills__section-block" style={{ marginTop: '24px' }}>
                <h3 className="skills__sub-title">
                  <Brain size={18} className="skills__icon-inline" /> Soft & Management Skills
                </h3>
                <div className="skills__soft-grid stagger-children">
                  {softSkills.map((skill) => (
                    <div key={skill.title} className="skills__soft-card">
                      <div className="skills__soft-icon">{skill.icon}</div>
                      <div className="skills__soft-content">
                        <h4 className="skills__soft-title">{skill.title}</h4>
                        <p className="skills__soft-desc">{skill.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
