import React, { useEffect } from 'react';
import { X, ArrowUpRight, Check } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '740px',
          maxHeight: '88vh',
          overflowY: 'auto',
          borderRadius: '16px',
          background: '#121215',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.8)',
          position: 'relative',
          padding: '2rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            width: '32px',
            height: '32px',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            color: '#a1a1aa',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          aria-label="Tutup"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span
            style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: '#a1a1aa',
              marginBottom: '0.5rem',
              display: 'inline-block'
            }}
          >
            {project.category}
          </span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 600, color: '#fafafa', lineHeight: 1.25 }}>
            {project.title}
          </h2>
        </div>

        {/* Image */}
        <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', background: '#09090b', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <img src={project.image} alt={project.title} style={{ width: '100%', maxHeight: '320px', objectFit: 'cover', display: 'block' }} />
        </div>

        {/* Description */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fafafa', marginBottom: '0.5rem' }}>
            Ikhtisar & Pendekatan Teknis
          </h3>
          <p style={{ color: '#a1a1aa', fontSize: '0.9rem', lineHeight: 1.7 }}>
            {project.longDesc}
          </p>
        </div>

        {/* Features Checklist */}
        {project.features && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: '#fafafa', marginBottom: '0.6rem' }}>
              Fitur & Kemampuan
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.5rem' }}>
              {project.features.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d4d4d8', fontSize: '0.85rem' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#fafafa' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.8rem', color: '#71717a', marginBottom: '0.5rem', fontWeight: 500 }}>
            Stack yang Digunakan:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.6rem',
                  borderRadius: '6px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#d4d4d8',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-clean-primary"
            style={{ flex: 1, minWidth: '160px' }}
          >
            <span>Buka Live Demo</span>
            <ArrowUpRight size={15} />
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-clean-secondary"
            style={{ flex: 1, minWidth: '160px' }}
          >
            <GithubIcon size={16} />
            <span>Lihat Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
}
