import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import './Blog.css';

const posts = [
  {
    title: 'My Journey into Project Management',
    category: 'Career Focus',
    date: 'Coming Soon',
    excerpt: 'How I discovered my passion for organizing teams, coordinating tasks, and delivering project milestones on time as an Informatics student.',
    color: 'var(--color-primary)'
  },
  {
    title: 'Agile Basics for Development Teams',
    category: 'Management',
    date: 'Coming Soon',
    excerpt: 'An introduction to Agile methodologies from a student developer\'s perspective—dealing with sprints, user stories, and databases.',
    color: 'var(--color-accent)'
  },
  {
    title: 'Building a Portfolio with Vite & React',
    category: 'Tech Stack',
    date: 'Coming Soon',
    excerpt: 'Behind the scenes of developing this personal portfolio website using React, vanilla CSS, and hosting platforms.',
    color: 'var(--color-success)'
  }
];

export default function Blog() {
  return (
    <section className="blog section" id="blog">
      <div className="blog__container animate-in">
        <div className="blog__header">
          <span className="section-label">Blog</span>
          <h2 className="section-title">Latest Articles</h2>
          <p className="section-subtitle">
            Sharing my learning experiences, insights into project management, and developer stories.
          </p>
        </div>

        <div className="blog__grid stagger-children">
          {posts.map((post) => (
            <article key={post.title} className="blog__card">
              <div className="blog__card-top" style={{ borderColor: post.color }}>
                <span className="blog__category" style={{ backgroundColor: `${post.color}15`, color: post.color }}>
                  {post.category}
                </span>
                <span className="blog__date">
                  <Clock size={12} />
                  {post.date}
                </span>
              </div>
              
              <div className="blog__card-body">
                <h3 className="blog__card-title">{post.title}</h3>
                <p className="blog__card-excerpt">{post.excerpt}</p>
              </div>

              <div className="blog__card-footer">
                <span className="blog__btn">
                  Read More
                  <ArrowRight size={14} className="blog__btn-arrow" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
