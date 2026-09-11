import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Server, Wrench, Palette, BookOpen, ChevronRight } from 'lucide-react';

const CAT_ICONS = {
  'Bahasa Pemrograman':       <Code2 size={18} />,
  'Framework & Library':      <BookOpen size={18} />,
  'Backend & Database':       <Server size={18} />,
  'Tools & Infrastruktur IT': <Wrench size={18} />,
  'UI/UX & Desain':           <Palette size={18} />,
};

const SKILL_LEVEL = {
  'Dart': 85, 'JavaScript (ES6+)': 82, 'PHP': 80, 'C++': 72, 'SQL': 78, 'HTML5 & CSS3': 90,
  'Flutter': 85, 'React.js': 78, 'Laravel / Blade': 76, 'Tailwind CSS': 80, 'Bootstrap': 75,
  'MySQL': 78, 'RESTful API': 75, 'Database Design': 72, 'JSON Data Modeling': 70,
  'Git & GitHub': 85, 'IT Networking & LAN': 72, 'Hardware Troubleshooting': 68,
  'Vercel': 80, 'VS Code': 90, 'Postman': 75,
  'Figma': 75, 'UI/UX Prototyping': 70, 'Responsive Web Design': 85,
};

export default function Skills() {
  const { skillCategories } = portfolioData;
  const [active, setActive] = useState(0);
  const cat = skillCategories[active];

  return (
    <section id="skills" className="section">
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-label">Tech Stack & Kompetensi Teknis</div>
          <h2 className="section-title">Teknologi yang <span className="grad-text">Dikuasai</span></h2>
          <p className="section-desc">Framework, bahasa pemrograman, dan alat infrastruktur yang digunakan aktif untuk membangun aplikasi production-ready.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>

          {/* Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
            {skillCategories.map((c, i) => (
              <button key={c.name} onClick={() => setActive(i)} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.8rem 1rem', borderRadius: '10px', cursor: 'pointer',
                border: active === i ? '1px solid var(--border-hover)' : '1px solid var(--border)',
                background: active === i ? 'var(--brand-light)' : '#ffffff',
                color: active === i ? 'var(--brand)' : 'var(--text-secondary)',
                fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.875rem',
                textAlign: 'left', transition: 'all 0.2s ease',
                boxShadow: active === i ? 'var(--shadow-brand)' : 'var(--shadow-sm)'
              }}>
                <span style={{ color: active === i ? 'var(--brand)' : 'var(--text-muted)', flexShrink: 0 }}>
                  {CAT_ICONS[c.name] || <Code2 size={18} />}
                </span>
                <span style={{ flexGrow: 1 }}>{c.name}</span>
                {active === i && <ChevronRight size={15} />}
              </button>
            ))}
          </div>

          {/* Skills Detail */}
          <div className="pro-card" style={{ padding: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
              <span style={{ color: 'var(--brand)' }}>{CAT_ICONS[cat.name]}</span>
              <h3 className="font-display" style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                {cat.name}
              </h3>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.6, marginBottom: '1.4rem' }}>
              {cat.description}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cat.skills.map(skill => {
                const level = SKILL_LEVEL[skill] || 70;
                return (
                  <div key={skill}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)' }}>{skill}</span>
                      <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--brand)' }}>{level}%</span>
                    </div>
                    <div className="skill-bar-wrap">
                      <div className="skill-bar-fill" style={{ width: `${level}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* All Skills Cloud */}
        <div style={{
          marginTop: '2.5rem', padding: '1.5rem', borderRadius: '14px',
          background: 'var(--bg-secondary)', border: '1px solid var(--border)',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
            Semua Teknologi
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
            {skillCategories.flatMap(c => c.skills).map(s => (
              <span key={s} className="tag-chip" style={{ fontSize: '0.8rem', padding: '0.3rem 0.65rem' }}>{s}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
