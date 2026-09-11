import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section">
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-label">Rekam Jejak Profesional</div>
          <h2 className="section-title">Pengalaman Kerja & <span className="grad-text">Kredibilitas Teknis</span></h2>
          <p className="section-desc">
            Pengalaman nyata dalam digitalisasi operasional instansi pemerintah (Bandara Kemenhub UPBU), rekayasa sistem open-source, dan pendidikan informatika terstruktur.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '820px' }}>
          {experience.map((item, idx) => (
            <div key={item.id} className="pro-card" style={{ padding: '1.65rem' }}>

              {/* Role + Period */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    background: 'var(--brand-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                  }}>
                    {idx < 2 ? <Briefcase size={16} color="var(--brand)" /> : <GraduationCap size={16} color="var(--brand)" />}
                  </div>
                  <h3 className="font-display" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.3 }}>
                    {item.role}
                  </h3>
                </div>
                <div className="font-mono" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: 'var(--text-muted)', flexShrink: 0 }}>
                  <Calendar size={12} />
                  {item.period}
                </div>
              </div>

              {/* Company + Location */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand)' }}>{item.company}</span>
                <span style={{ color: 'var(--border)', fontSize: '1rem' }}>•</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <MapPin size={12} />
                  {item.location}
                </span>
              </div>

              {/* Description */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '0.85rem' }}>
                {item.description}
              </p>

              {/* Points */}
              {item.points && (
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.1rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {item.points.map((pt, pi) => (
                    <li key={pi} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.845rem', lineHeight: 1.55 }}>
                      <CheckCircle2 size={14} color="var(--emerald)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Skill Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {item.skills.map((s, si) => (
                  <span key={si} className="tag-chip">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
