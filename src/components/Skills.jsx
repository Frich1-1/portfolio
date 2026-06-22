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
  'Google Suite (Sheets, Slides, Drive)', 'Microsoft Office (Excel, Word, PowerPoint)', 'Zoom', 'Classroom'
];

const softSkills = [
  {
    title: 'Project Management',
    desc: 'Agile basics, task tracking, and coordinating project workflows.',
    icon: <ClipboardList size={22} />
  },
  {
    title: 'Project Planning',
    desc: 'Setting project milestones, defining scope, and allocating resources.',
    icon: <Layout size={22} />
  },
  {
    title: 'Team Coordination',
    desc: 'Aligning team members and facilitating communication for successful delivery.',
    icon: <Users size={22} />
  },
  {
    title: 'Critical Thinking',
    desc: 'Problem solving and analyzing challenges with logical structure.',
    icon: <Brain size={22} />
  },
  {
    title: 'Leadership',
    desc: 'Inspiring teams and driving collaboration to achieve project goals.',
    icon: <Trophy size={22} />
  },
  {
    title: 'English Communication',
    desc: 'Comfortable writing and speaking (IELTS 6.0 certificate).',
    icon: <MessageSquare size={22} />
  }
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="skills__container animate-in">
        <div className="skills__header">
          <span className="section-label">Skills</span>
          <h2 className="section-title">My Expertise</h2>
          <p className="section-subtitle">
            A blend of technical implementation, collaboration tools, and project management skills.
          </p>
        </div>

        <div className="skills__grid">
          {/* Tech Skills Column */}
          <div className="skills__column">
            <h3 className="skills__sub-title">
              <Code size={20} className="skills__icon-inline" /> Technical Skills
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

          {/* Soft/Management Skills Column */}
          <div className="skills__column">
            <h3 className="skills__sub-title">
              <Brain size={20} className="skills__icon-inline" /> Management & Soft Skills
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

        {/* Full Width Tools Section */}
        <div className="skills__tools-section">
          <h3 className="skills__sub-title skills__sub-title--tools">
            <Wrench size={20} className="skills__icon-inline" /> Tools & Platforms
          </h3>
          <div className="skills__tags">
            {tools.map((tool) => (
              <span key={tool} className="skills__tag">{tool}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
