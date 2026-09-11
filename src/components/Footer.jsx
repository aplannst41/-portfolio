import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { personal } = portfolioData;
  const year = new Date().getFullYear();

  const links = [
    { name: 'Tentang',      href: '#about' },
    { name: 'Keahlian',    href: '#skills' },
    { name: 'Proyek',      href: '#projects' },
    { name: 'Pengalaman',  href: '#experience' },
    { name: 'Kontak',      href: '#contact' },
  ];

  return (
    <footer className="footer-root">
      <div className="container">

        {/* Top row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.25rem' }}>
          {/* Brand */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-primary)' }}>
            <img src={personal.avatarUrl} alt={personal.name}
              style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--brand)' }} />
            <span className="font-display" style={{ fontWeight: 800, fontSize: '0.9rem' }}>{personal.name}</span>
          </a>

          {/* Nav Links */}
          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
            {links.map(l => (
              <a key={l.name} href={l.href}
                style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--brand)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
              >{l.name}</a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="grad-divider" style={{ marginBottom: '1.25rem' }} />

        {/* Bottom row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', fontSize: '0.8rem' }}>
          <p style={{ color: 'var(--text-muted)' }}>
            © {year} <strong style={{ color: 'var(--text-secondary)' }}>{personal.name}</strong> — Fullstack Web & Mobile Developer. Dibuat dengan <Heart size={12} color="var(--rose)" style={{ display: 'inline', verticalAlign: 'middle' }} /> di Aceh, Indonesia.
          </p>
          <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', textDecoration: 'none', fontWeight: 600, transition: 'color 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--brand)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
            <GithubIcon size={13} />
            @{personal.githubUsername}
          </a>
        </div>
      </div>
    </footer>
  );
}
