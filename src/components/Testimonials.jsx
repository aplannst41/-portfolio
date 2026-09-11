import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Star, Quote, Award, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const { testimonials } = portfolioData;

  const certs = [
    { title: "AWS Certified Solutions Architect", issuer: "Amazon Web Services", date: "2023 - 2026", id: "AWS-98124" },
    { title: "Google UX Design Professional", issuer: "Google Career Certificates", date: "Verified", id: "GGL-55291" },
    { title: "Meta Senior React Specialization", issuer: "Meta Open Source", date: "Verified", id: "META-77182" }
  ];

  return (
    <section style={{ padding: '5rem 0', position: 'relative' }}>
      <div className="site-container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="badge-glow" style={{ marginBottom: '0.75rem' }}>
            <span>TESTIMONI & SERTIFIKASI</span>
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 800,
              color: '#ffffff',
              marginBottom: '1rem',
              letterSpacing: '-0.02em'
            }}
          >
            Dipercaya Oleh Para <span className="text-gradient-emerald">Pemimpin Industri</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="glass-card"
              style={{
                padding: '2rem',
                borderRadius: '20px',
                background: 'rgba(15, 20, 31, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                position: 'relative'
              }}
            >
              <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.15 }}>
                <Quote size={48} color="#00f2fe" />
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '1.25rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                ))}
              </div>

              <p style={{ color: '#cbd5e1', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                "{test.content}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src={test.avatar}
                  alt={test.name}
                  style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #00f2fe' }}
                />
                <div>
                  <div style={{ fontWeight: 700, color: '#ffffff', fontSize: '1rem' }}>{test.name}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{test.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certified Badges Row */}
        <div
          style={{
            padding: '1.75rem',
            borderRadius: '18px',
            background: 'rgba(9, 13, 22, 0.7)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center'
          }}
        >
          {certs.map((cert, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#34d399',
                  flexShrink: 0
                }}
              >
                <ShieldCheck size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>{cert.title}</div>
                <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{cert.issuer} • {cert.date}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
