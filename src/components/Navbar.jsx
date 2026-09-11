import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import { Menu, X, Send } from 'lucide-react';

const LINKS = [
  { name: 'Tentang',     href: '#about' },
  { name: 'Keahlian',   href: '#skills' },
  { name: 'Proyek',     href: '#projects' },
  { name: 'Pengalaman', href: '#experience' },
  { name: 'Kontak',     href: '#contact' },
];

export default function Navbar() {
  const { personal } = portfolioData;
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`nav-root${scrolled ? ' nav-glass' : ''}`}
      style={{ borderBottom: scrolled ? '' : '1px solid transparent', background: scrolled ? '' : 'rgba(255,255,255,0.85)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.7rem 0' }}>

          {/* Brand */}
          <a href="#hero" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <img src={personal.avatarUrl} alt={personal.name} className="avatar-ring"
              style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--brand)', flexShrink: 0 }} />
            <div>
              <div className="font-display" style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                {personal.name}
              </div>
              <div className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: 1 }}>
                @{personal.githubUsername}
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            {LINKS.map(l => (
              <a key={l.name} href={l.href}
                style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--brand)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >{l.name}</a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary"
              style={{ padding: '0.45rem 0.85rem', minHeight: '38px', fontSize: '0.8rem', gap: '0.35rem' }}>
              <GithubIcon size={15} />
              <span className="hide-mobile">GitHub</span>
            </a>
            <a href="#contact" className="btn-primary hide-mobile"
              style={{ padding: '0.45rem 1rem', minHeight: '38px', fontSize: '0.8rem' }}>
              Hubungi
            </a>
            <button onClick={() => setOpen(p => !p)} className="hide-desktop"
              style={{ background: '#f8fafc', border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.45rem', display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: '40px', minHeight: '40px' }}
              aria-label="Menu navigasi">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mobile-nav" style={{ padding: '0.75rem 0 1rem' }}>
            {LINKS.map(l => (
              <a key={l.name} href={l.href} onClick={close}
                style={{ display: 'block', padding: '0.7rem 0.5rem', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)', borderRadius: '8px', transition: 'color 0.2s, background 0.2s' }}
                onMouseEnter={e => { e.target.style.color = 'var(--brand)'; e.target.style.background = 'var(--brand-light)'; }}
                onMouseLeave={e => { e.target.style.color = 'var(--text-secondary)'; e.target.style.background = 'transparent'; }}
              >{l.name}</a>
            ))}
            <div style={{ borderTop: '1px solid var(--border)', marginTop: '0.75rem', paddingTop: '0.75rem' }}>
              <a href="#contact" onClick={close} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={15} /> Hubungi Saya
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
