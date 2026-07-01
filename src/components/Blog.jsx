import { Trophy, Mic2, Star, Users, ArrowRight } from 'lucide-react';
import './Blog.css';

const journey = [
  {
    year: '2024',
    tag: 'The Beginning',
    icon: Star,
    color: 'var(--color-accent)',
    title: 'From Freshman to Trophy',
    excerpt:
      'It all started in my very first year at President University. As a freshman stepping into the world of competitive debate, I had no idea what I was getting into — just curiosity and a willingness to speak my mind. That year, I won the Freshman Trophy at President University, a moment that lit a fire I didn\'t know I had. It proved that even the newest voice in the room can make an impact.',
    badge: '🏆 Freshmen Trophy — President University',
  },
  {
    year: '2024 – 2025',
    tag: 'Going National',
    icon: Mic2,
    color: 'var(--color-primary)',
    title: 'Competing on the National Stage',
    excerpt:
      'From campus halls to national arenas — I competed across some of Indonesia\'s most prestigious debate tournaments including UGM, ALSA-UI, ITB, and UNSRI. Each competition was a new lesson in argument construction, rebuttal strategy, and grace under pressure. The culmination was breaking as N1 (1st Novice) at NUDC National 2025, one of the biggest collegiate debate championships in Indonesia. That moment validated every sleepless night spent prepping cases.',
    badge: '🎤 Breaking N1 — NUDC National 2025',
  },
  {
    year: '2025',
    tag: 'Leading the Community',
    icon: Users,
    color: 'var(--color-success)',
    title: 'Chairperson of PUDS',
    excerpt:
      'Debate gave me more than trophies — it gave me leadership. In 2025, I was elected as Chairperson of PUDS (President University Debating Society). Leading a community of passionate debaters taught me how to nurture talent, build team culture, and keep people motivated even through losses. It was one of the most humbling and rewarding responsibilities I\'ve ever taken on.',
    badge: '👥 Chairperson — President University Debating Society',
  },
  {
    year: '2026',
    tag: 'Peak Performance',
    icon: Trophy,
    color: 'var(--color-primary)',
    title: 'Champion & Overall Best Speaker at EUFORIA 2026',
    excerpt:
      'EUFORIA 2026 was where everything clicked. My team took home the Champion title, and I was awarded Overall Best Speaker — a recognition that every debater dreams of. On top of that, I placed 5th Novice Best Speaker at the UGM-GME Debating Competition, showing consistency at the highest level. These achievements aren\'t just trophies on a shelf — they represent years of deliberate practice, intellectual growth, and an unshakeable belief that I belonged on that stage.',
    badge: '🥇 Champion + Overall Best Speaker — EUFORIA 2026',
  },
];

export default function Blog() {
  return (
    <section className="blog section" id="blog">
      <div className="blog__container animate-in">

        {/* Header */}
        <div className="blog__header">
          <span className="section-label">Debating Journey</span>
          <h2 className="section-title">The Art of Argument</h2>
          <p className="section-subtitle">
            How competitive debate shaped my thinking, my confidence, and who I am today.
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="blog__grid stagger-children">
          {journey.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="blog__card">
                <div className="blog__card-accent" style={{ background: item.color }} />

                <div className="blog__card-top">
                  <div className="blog__card-icon" style={{ background: `${item.color}20`, color: item.color }}>
                    <Icon size={18} />
                  </div>
                  <div className="blog__card-meta">
                    <span className="blog__category" style={{ color: item.color }}>
                      {item.tag}
                    </span>
                    <span className="blog__date">{item.year}</span>
                  </div>
                </div>

                <div className="blog__card-body">
                  <h3 className="blog__card-title">{item.title}</h3>
                  <p className="blog__card-excerpt">{item.excerpt}</p>
                </div>

                <div className="blog__card-footer">
                  <span className="blog__badge">{item.badge}</span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
