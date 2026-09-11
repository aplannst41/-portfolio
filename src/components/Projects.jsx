import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import { ExternalLink, Sparkles } from 'lucide-react';

const CATS = ['Semua', 'Web Application', 'Mobile App'];

import confetti from 'canvas-confetti';

/* ============================================================
   SPIDER-MAN MASCOT — Authentic Top-Hanging Upside-Down Hero
   ============================================================ */
function SpideyMascot({ show }) {
  const [quoteIdx, setQuoteIdx] = useState(0);
  const [showBubble, setShowBubble] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  const QUOTES = [
    "Thwip! 🕸️ Sedang mencari dev handal?",
    "Aplan menguasai Web, Flutter, & Laravel! 🚀",
    "Kode di GitHub sudah teruji lho! 🕷️",
    "Klik tombol 'Audit Kode' di bawah ya! 💻",
    "Spider-Sense saya bilang: Anda di tempat yang tepat! ✨"
  ];

  const handleSpideyClick = (e) => {
    e.stopPropagation();
    setIsBouncing(true);
    setQuoteIdx((prev) => (prev + 1) % QUOTES.length);
    setShowBubble(true);

    // Festive Spider-Man Web Confetti (Red, Blue, White, Cyan)
    try {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { x, y },
        colors: ['#ef4444', '#3b82f6', '#ffffff', '#06b6d4'],
        ticks: 150,
        gravity: 1.2
      });
    } catch {
      // fallback if canvas-confetti fails
    }

    setTimeout(() => setIsBouncing(false), 500);
    setTimeout(() => setShowBubble(false), 4500);
  };

  return (
    <div
      className={`spidey-container ${show ? 'spidey-swinging' : ''}`}
      style={{
        transform: show ? (isBouncing ? 'translateY(18px) scale(1.06)' : 'translateY(0)') : 'translateY(-300px)',
        opacity: show ? 1 : 0,
        cursor: 'pointer'
      }}
      onClick={handleSpideyClick}
      title="Klik Spidey untuk menembak jaring! 🕷️"
    >
      {/* Speech Bubble */}
      {showBubble && (
        <div className="spidey-bubble">
          {QUOTES[quoteIdx]}
        </div>
      )}

      {/* Unified Web + Hanging Spider SVG */}
      <svg
        viewBox="0 0 160 270"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: 'clamp(95px, 12vw, 130px)',
          height: 'auto',
          overflow: 'visible',
          filter: 'drop-shadow(0 12px 20px rgba(0,0,0,0.4))'
        }}
      >
        <defs>
          {/* Shimmering Silk Gradient */}
          <linearGradient id="silkWeb" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#cbd5e1" stopOpacity="0.4"/>
            <stop offset="30%" stopColor="#ffffff" stopOpacity="0.95"/>
            <stop offset="70%" stopColor="#93c5fd" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1"/>
          </linearGradient>

          {/* Spider Suit Red Gradient */}
          <radialGradient id="spideyRed" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#ef4444"/>
            <stop offset="70%" stopColor="#dc2626"/>
            <stop offset="100%" stopColor="#991b1b"/>
          </radialGradient>

          {/* Spider Suit Blue Gradient */}
          <linearGradient id="spideyBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563eb"/>
            <stop offset="100%" stopColor="#1e3a8a"/>
          </linearGradient>

          {/* Eye Glow */}
          <filter id="eyeGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>

        {/* ========================================================
            1. SPIDERWEB THREAD (Connects from ceiling to hands/feet)
            ======================================================== */}
        {/* Main Silk Line */}
        <line x1="80" y1="0" x2="80" y2="92" stroke="url(#silkWeb)" strokeWidth="2.5" strokeLinecap="round"/>
        {/* Silk glow duplicate */}
        <line x1="80" y1="0" x2="80" y2="92" stroke="#ffffff" strokeWidth="1" opacity="0.9"/>
        {/* Silk Droplets / Nodes */}
        <circle cx="80" cy="25" r="1.5" fill="#ffffff" opacity="0.8"/>
        <circle cx="80" cy="55" r="1.8" fill="#ffffff" opacity="0.9"/>
        <circle cx="80" cy="82" r="2" fill="#ffffff"/>

        {/* Web wrap around feet */}
        <ellipse cx="80" cy="92" rx="7" ry="3.5" fill="none" stroke="#ffffff" strokeWidth="1.8"/>

        {/* ========================================================
            2. SPIDER-SENSE TINGLE RAYS (Animated Radar Waves)
            ======================================================== */}
        <g style={{ animation: 'spideySenseGlow 2.2s ease-in-out infinite', transformOrigin: '80px 225px' }}>
          {/* Left Rays */}
          <path d="M48 200 Q40 215 48 230" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <path d="M40 195 Q30 215 40 235" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
          <path d="M32 190 Q20 215 32 240" stroke="#fef08a" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
          {/* Right Rays */}
          <path d="M112 200 Q120 215 112 230" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" fill="none"/>
          <path d="M120 195 Q130 215 120 235" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
          <path d="M128 190 Q140 215 128 240" stroke="#fef08a" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        </g>

        {/* ========================================================
            3. HANGING LEGS & FEET (Acrobatic Upside-Down Hook)
            ======================================================== */}
        <g style={{ animation: 'legSway 4s ease-in-out infinite alternate', transformOrigin: '80px 92px' }}>
          {/* Left Foot & Boot */}
          <path d="M78 92 Q72 88 64 96 L70 108 L78 96 Z" fill="url(#spideyRed)"/>
          {/* Right Foot & Boot */}
          <path d="M82 92 Q88 88 96 96 L90 108 L82 96 Z" fill="url(#spideyRed)"/>

          {/* Left Leg (Thigh + Knee bent outward) */}
          <path d="M70 108 Q52 115 46 135 Q56 142 66 128 L72 112 Z" fill="url(#spideyBlue)"/>
          {/* Right Leg (Thigh + Knee bent outward) */}
          <path d="M90 108 Q108 115 114 135 Q104 142 94 128 L88 112 Z" fill="url(#spideyBlue)"/>

          {/* Knees Red Patches */}
          <ellipse cx="48" cy="132" rx="7" ry="6" fill="url(#spideyRed)"/>
          <ellipse cx="112" cy="132" rx="7" ry="6" fill="url(#spideyRed)"/>
        </g>

        {/* ========================================================
            4. TORSO (Upside-Down Chest & Abs)
            ======================================================== */}
        {/* Blue Side Panels */}
        <path d="M62 120 Q56 145 58 172 L102 172 Q104 145 98 120 Z" fill="url(#spideyBlue)"/>
        {/* Red Center Vest */}
        <path d="M67 118 Q62 142 64 175 L96 175 Q98 142 93 118 Z" fill="url(#spideyRed)"/>

        {/* Torso Muscle Shading */}
        <ellipse cx="80" cy="148" rx="14" ry="20" fill="#b91c1c" opacity="0.35"/>

        {/* Black Spider Chest Logo */}
        <g transform="translate(80, 150) rotate(180)">
          {/* Spider Body */}
          <ellipse cx="0" cy="0" rx="3" ry="5.5" fill="#0f172a"/>
          {/* Spider Head */}
          <circle cx="0" cy="-6" r="2" fill="#0f172a"/>
          {/* Top Legs */}
          <path d="M-2 -3 Q-10 -9 -14 -4" stroke="#0f172a" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
          <path d="M2 -3 Q10 -9 14 -4" stroke="#0f172a" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
          <path d="M-2 -1 Q-12 -5 -16 1" stroke="#0f172a" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
          <path d="M2 -1 Q12 -5 16 1" stroke="#0f172a" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
          {/* Bottom Legs */}
          <path d="M-2 2 Q-12 7 -14 14" stroke="#0f172a" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
          <path d="M2 2 Q12 7 14 14" stroke="#0f172a" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
          <path d="M-2 4 Q-9 11 -10 18" stroke="#0f172a" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
          <path d="M2 4 Q9 11 10 18" stroke="#0f172a" strokeWidth="1.4" fill="none" strokeLinecap="round"/>
        </g>

        {/* Webbing Lines on Chest */}
        <line x1="80" y1="120" x2="80" y2="175" stroke="#7f1d1d" strokeWidth="1" opacity="0.5"/>
        <path d="M68 132 Q80 137 92 132" stroke="#7f1d1d" strokeWidth="1" fill="none" opacity="0.5"/>
        <path d="M66 146 Q80 152 94 146" stroke="#7f1d1d" strokeWidth="1" fill="none" opacity="0.5"/>
        <path d="M65 160 Q80 166 95 160" stroke="#7f1d1d" strokeWidth="1" fill="none" opacity="0.5"/>

        {/* ========================================================
            5. ARMS (One Holding Web, One "Thwip" Web Shooter!)
            ======================================================== */}
        {/* Left Arm: Resting across waist */}
        <path d="M58 145 Q44 158 54 175 Q62 178 68 170" fill="url(#spideyRed)" stroke="#991b1b" strokeWidth="0.8"/>

        {/* Right Arm: Extended with Thwip Web-Shooter Gesture! */}
        <path d="M102 145 Q118 158 122 178 L114 184 Q106 168 96 156 Z" fill="url(#spideyRed)"/>
        {/* Right Hand: 🤟 Gesture */}
        <g transform="translate(118, 180) rotate(15)">
          <ellipse cx="0" cy="0" rx="4" ry="4" fill="url(#spideyRed)"/>
          {/* Extended Index & Pinky */}
          <line x1="-3" y1="0" x2="-6" y2="7" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
          <line x1="3" y1="0" x2="6" y2="7" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
          {/* Curled Middle & Ring */}
          <ellipse cx="0" cy="2" rx="2.5" ry="1.8" fill="#991b1b"/>
          {/* Web-Shooter nozzle spark */}
          <circle cx="0" cy="4" r="1.5" fill="#38bdf8" filter="url(#eyeGlow)"/>
        </g>

        {/* ========================================================
            6. HEAD (Hanging Upside Down with Blinking Mask Eyes)
            ======================================================== */}
        {/* Neck */}
        <rect x="74" y="172" width="12" height="8" fill="url(#spideyRed)"/>

        {/* Head Contour */}
        <g transform="translate(80, 212)">
          {/* Main Mask Base */}
          <ellipse cx="0" cy="0" rx="21" ry="26" fill="url(#spideyRed)"/>

          {/* Mask Webbing Lines converging at center */}
          <line x1="0" y1="-26" x2="0" y2="26" stroke="#7f1d1d" strokeWidth="1" opacity="0.45"/>
          <line x1="-21" y1="0" x2="21" y2="0" stroke="#7f1d1d" strokeWidth="1" opacity="0.45"/>
          <path d="M-15 -14 Q0 -8 15 -14" stroke="#7f1d1d" strokeWidth="0.9" fill="none" opacity="0.45"/>
          <path d="M-19 -4 Q0 2 19 -4" stroke="#7f1d1d" strokeWidth="0.9" fill="none" opacity="0.45"/>
          <path d="M-19 8 Q0 14 19 8" stroke="#7f1d1d" strokeWidth="0.9" fill="none" opacity="0.45"/>
          <path d="M-14 18 Q0 22 14 18" stroke="#7f1d1d" strokeWidth="0.9" fill="none" opacity="0.45"/>

          {/* Mask Highlight */}
          <ellipse cx="-7" cy="8" rx="8" ry="14" fill="#ffffff" opacity="0.12" transform="rotate(-15)"/>

          {/* ── Expressive Eyes with EyeBlink Animation ── */}
          <g style={{ animation: 'eyeBlink 3.8s ease-in-out infinite', transformOrigin: '0px 2px' }}>
            {/* Left Eye (Upside-down perspective) */}
            {/* Black Rim */}
            <path d="M-4 -2 Q-14 -6 -18 7 Q-11 12 -4 4 Z" fill="#0f172a" stroke="#0f172a" strokeWidth="1.5" strokeLinejoin="round"/>
            {/* White Lens */}
            <path d="M-5 0 Q-13 -3 -15 6 Q-10 9 -5 4 Z" fill="#ffffff" filter="url(#eyeGlow)"/>
            {/* Subtle Eye Inner Glow */}
            <ellipse cx="-10" cy="3" rx="2.5" ry="1.5" fill="#e0f2fe"/>

            {/* Right Eye */}
            {/* Black Rim */}
            <path d="M4 -2 Q14 -6 18 7 Q11 12 4 4 Z" fill="#0f172a" stroke="#0f172a" strokeWidth="1.5" strokeLinejoin="round"/>
            {/* White Lens */}
            <path d="M5 0 Q13 -3 15 6 Q10 9 5 4 Z" fill="#ffffff" filter="url(#eyeGlow)"/>
            {/* Subtle Eye Inner Glow */}
            <ellipse cx="10" cy="3" rx="2.5" ry="1.5" fill="#e0f2fe"/>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter]         = useState('Semua');
  const [showSpidey, setShowSpidey] = useState(false);
  const sectionRef = useRef(null);

  const filtered = filter === 'Semua' ? projects
    : projects.filter(p => filter === 'Mobile App' ? p.category.includes('Mobile') : p.category.includes('Web'));

  /* Tampilkan Spidey setelah halaman siap atau saat scroll */
  useEffect(() => {
    const timer = setTimeout(() => setShowSpidey(true), 700);
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setShowSpidey(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => {
      clearTimeout(timer);
      obs.disconnect();
    };
  }, []);

  /* Fade-up project cards */
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.proj-fade').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [filtered]);

  return (
    <>
      <SpideyMascot show={showSpidey} />

      <section id="projects" ref={sectionRef} className="section section-alt">
        <div className="container">

          {/* Header */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <div className="section-label">Portofolio Proyek</div>
              <h2 className="section-title">
                Rekam Jejak <span className="grad-text">Produk & Sistem</span>
              </h2>
              <p className="section-desc">
                Kumpulan aplikasi skala riil, implementasi sistem instansi, dan kontribusi open-source dengan kode yang dapat diaudit langsung.
              </p>
            </div>

            {/* Filter Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {CATS.map(c => (
                <button key={c} onClick={() => setFilter(c)} style={{
                  padding: '0.45rem 1rem', borderRadius: '8px', fontSize: '0.825rem',
                  fontWeight: filter === c ? 700 : 500, cursor: 'pointer',
                  background: filter === c ? 'var(--grad-brand)' : '#ffffff',
                  color: filter === c ? '#fff' : 'var(--text-secondary)',
                  border: filter === c ? 'none' : '1px solid var(--border)',
                  transition: 'all 0.2s ease',
                  boxShadow: filter === c ? 'var(--shadow-brand)' : 'var(--shadow-sm)'
                }}>{c}</button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 310px), 1fr))', gap: '1.5rem' }}>
            {filtered.map((proj, i) => (
              <div key={proj.id} className="proj-fade fade-up pro-card"
                style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', transitionDelay: `${i * 0.07}s` }}>

                {/* Image */}
                <div className="proj-img-wrap">
                  <img src={proj.image} alt={proj.title}
                    onError={e => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'linear-gradient(135deg,#ede9fe,#e0f2fe)';
                    }} />
                  {proj.highlight && (
                    <span style={{
                      position: 'absolute', top: '0.65rem', left: '0.65rem',
                      display: 'flex', alignItems: 'center', gap: '4px',
                      padding: '0.25rem 0.6rem', borderRadius: '6px',
                      background: 'rgba(15,23,42,0.85)', color: '#fff',
                      fontSize: '0.72rem', fontWeight: 700, backdropFilter: 'blur(6px)'
                    }}>
                      <Sparkles size={11} color="#a5b4fc" />
                      {proj.highlight}
                    </span>
                  )}
                </div>

                {/* Body */}
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span className="badge badge-cyan" style={{ alignSelf: 'flex-start', marginBottom: '0.6rem', fontSize: '0.7rem' }}>
                    {proj.category}
                  </span>
                  <h3 className="font-display" style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem', lineHeight: 1.3 }}>
                    {proj.title}
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.845rem', lineHeight: 1.65, marginBottom: '0.75rem' }}>
                    {proj.description}
                  </p>

                  {/* Impact Highlight */}
                  {proj.impact && (
                    <div style={{
                      background: '#f8fafc',
                      borderLeft: '3px solid var(--brand)',
                      padding: '0.45rem 0.65rem',
                      borderRadius: '0 6px 6px 0',
                      fontSize: '0.76rem',
                      color: 'var(--text-secondary)',
                      marginBottom: '0.85rem'
                    }}>
                      <strong style={{ color: 'var(--text-primary)' }}>Dampak: </strong>
                      {proj.impact}
                    </div>
                  )}

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1rem', marginTop: 'auto' }}>
                    {proj.tags.map(t => <span key={t} className="tag-chip">{t}</span>)}
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '0.6rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border)' }}>
                    <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"
                      style={{ flex: 1, padding: '0.5rem', fontSize: '0.8rem', gap: '0.4rem' }}>
                      <GithubIcon size={14} />
                      Audit Kode
                    </a>
                    {proj.liveUrl && proj.liveUrl !== proj.githubUrl && (
                      <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary"
                        style={{ padding: '0.5rem 0.75rem', fontSize: '0.8rem', gap: '0.3rem' }}>
                        <ExternalLink size={14} />
                        Aplikasi Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All */}
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href={portfolioData.personal.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <GithubIcon size={16} />
              Semua Repositori @{portfolioData.personal.githubUsername}
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
