import { GraduationCap, Target, Languages, Trophy } from 'lucide-react';
import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container animate-in">
        <div className="about__header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Get to Know Me</h2>
          <p className="section-subtitle">
            Bridging technical knowledge with hands-on project management and leadership.
          </p>
        </div>

        <div className="about__grid">
          <div className="about__text-column">
            <h3 className="about__subtitle">Who is Richie?</h3>
            <p className="about__paragraph">
              I am an Informatics student at <strong>President University</strong> with hands-on experience managing multi-stakeholder projects, participant registration, and coordinating workflows under tight deadlines. 
              I seek opportunities to utilize my organizational skills and interpersonal interest in a fast-paced project management environment.
            </p>
            <p className="about__paragraph">
              My technical background in Computer Science allows me to professionally manage database systems and understand technical development flows. 
              At the same time, my active involvement as the <strong>Chairperson of the President University Debating Society</strong> and a <strong>Student Ambassador Team Leader</strong> has built my leadership, team coordination, and communication skills.
            </p>
            
            <div className="about__details">
              <div className="about__detail-item">
                <span className="about__detail-label">Location:</span>
                <span className="about__detail-value">Indonesia</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">Study:</span>
                <span className="about__detail-value">President University (Computer Science)</span>
              </div>
              <div className="about__detail-item">
                <span className="about__detail-label">Current GPA:</span>
                <span className="about__detail-value">3.78 / 4.00</span>
              </div>
            </div>
          </div>

          <div className="about__cards-column stagger-children">
            <div className="about__card">
              <div className="about__card-icon-wrapper about__card-icon-wrapper--education">
                <GraduationCap size={24} />
              </div>
              <div className="about__card-content">
                <h4 className="about__card-title">Academic Excellence</h4>
                <p className="about__card-desc">B.Informatics with 3.78/4.00 GPA at President University</p>
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
    </section>
  );
}
