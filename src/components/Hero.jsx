import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import { ArrowDown, Download, MapPin, Mail, Sparkles, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const ROLES = portfolioData.personal.roles;

export default function Hero() {
  const { personal } = portfolioData;
  const [roleIdx, setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping]     = useState(true);
  const ref = useRef(null);

  /* Typing effect */
  useEffect(() => {
    const full = ROLES[roleIdx];
    let timer;
    if (typing) {
      if (displayed.length < full.length) {
        timer = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 55);
      } else {
        timer = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timer = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 28);
      } else {
        setRoleIdx(r => (r + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timer);
  }, [displayed, typing, roleIdx]);

  /* Fade-up */
  useEffect(() => {
    const t = setTimeout(() => ref.current?.classList.add('visible'), 120);
    return () => clearTimeout(t);
  }, []);

  const handleCV = () => {
    const txt = `=======================================================
CURRICULUM VITAE — ${personal.name.toUpperCase()} (@${personal.githubUsername})
Fullstack Web & Mobile Software Engineer
=======================================================
Email      : ${personal.email}
GitHub     : ${personal.githubUrl}
Lokasi     : ${personal.location}
Status     : ${personal.status}

RINGKASAN PROFESIONAL:
Mahasiswa Program Studi Sistem Informasi Universitas Malikussaleh (UNIMAL) yang berfokus pada rekayasa perangkat lunak Web & Mobile serta integrasi sistem enterprise. Memiliki pengalaman praktis dalam merancang sistem informasi 'Dashboard Monitoring Operasional' di Kantor Bandara UPBU Malikussaleh (Kemenhub) dan pemeliharaan infrastruktur TI. Memadukan analisis proses bisnis dengan standar Clean Architecture (Flutter, React, Laravel, C++), siap mendedikasikan kompetensi teknis dan disiplin profesional dalam mendukung akselerasi digital perusahaan.

KOMPETENSI TEKNOLOGI INTI:
• Bahasa Pemrograman : Dart, JavaScript (ES6+), PHP, C++, SQL, HTML5/CSS3
• Mobile Development : Flutter & Dart (Cross-Platform iOS & Android, State Management)
• Frontend Web       : React.js, Tailwind CSS, Bootstrap, Responsive Design
• Backend & API      : Laravel, PHP, RESTful API, Database Design, JSON
• Basis Data         : MySQL, Relational Database Modeling
• Tools & Cloud      : Git/GitHub, Vercel, Postman, VS Code, Figma
• IT Infrastructure  : Jaringan LAN, Hardware Troubleshooting, Sistem Operasional

PENGALAMAN KERJA & PROYEK UTAMA:
1. IT Support & System Developer (Magang Resmi)
   Kantor Bandara Malikussaleh (UPBU Kelas III Malikussaleh, Aceh Utara)
   - Merancang dan membangun aplikasi web 'Dashboard Monitoring Bandara' untuk memantau status operasional harian.
   - Mengelola dan memelihara jaringan LAN serta infrastruktur komputasi kantor bandara.
   - Melakukan troubleshooting perangkat keras dan sistem perangkat lunak secara responsif.

2. Fullstack & Mobile Open-Source Developer
   GitHub (@aplannst41) — (2024 - Sekarang)
   - Sistem Informasi Akademik Mobile (Flutter & Dart)
   - Smart App Utility Solution (Flutter, Cross-Platform)
   - ContactGuard Web App (JavaScript, Cloud Vercel)
   - Sistem Klasifikasi Adaptabilitas (Algoritma C++)

PENDIDIKAN FORMAL:
• S1 Sistem Informasi (Mahasiswa Aktif)
  Universitas Malikussaleh (UNIMAL), Aceh Utara / Lhokseumawe
  - Fokus: Analisis & Perancangan Sistem Informasi, Basis Data, Rekayasa Web & Mobile

NILAI TAMBAH UNTUK PERUSAHAAN:
• Pemecahan Masalah Berorientasi Solusi Bisnis & Analisis Sistem
• Kode Bersih, Modular, dan Mudah Di-maintain (Clean Architecture)
• Cepat Beradaptasi dengan Ekosistem & Tech Stack Baru
• Komunikasi Transparan dan Komitmen Tenggat Waktu

=======================================================`;
    const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement('a');
    a.href = url; a.download = `CV_Aplan_Software_Engineer.txt`; a.click();
    URL.revokeObjectURL(url);
  };

  const STATS = [
    { val: personal.experienceYears, label: 'Tahun Pengalaman Teknis' },
    { val: personal.completedProjects, label: 'Proyek Siap Uji di GitHub' },
    { val: 'UPBU Bandara', label: 'Pengalaman Instansi Riil' },
    { val: 'Clean Code', label: 'Standar Arsitektur Sistem' },
  ];

  return (
    <section id="hero" className="section" style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(3rem, 6vw, 5rem)' }}>
      <div className="container">
        <div ref={ref} className="fade-up" style={{ maxWidth: '820px' }}>

          {/* Avatar + Identity */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <img src={personal.avatarUrl} alt={personal.name} className="avatar-ring"
                style={{ width: '72px', height: '72px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--brand)', display: 'block' }} />
              <span style={{ position: 'absolute', bottom: 0, right: 0, width: '16px', height: '16px', borderRadius: '50%', background: '#10b981', border: '2px solid #fff' }} />
            </div>
            <div>
              <div className="font-display" style={{ fontWeight: 800, fontSize: '1.15rem', color: 'var(--text-primary)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.5rem' }}>
                <span>{personal.name}</span>
                <span className="badge badge-brand"><CheckCircle2 size={11} /> Verified Software Engineer</span>
              </div>
              <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '0.85rem', color: 'var(--brand)', fontFamily: 'var(--font-mono)', textDecoration: 'none', marginTop: '0.15rem' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--brand)'}>
                @{personal.githubUsername} <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Available Badge */}
          <div className="badge badge-green" style={{ marginBottom: '1.5rem', fontSize: '0.8rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', flexShrink: 0 }} />
            {personal.status}
          </div>

          {/* Main Heading */}
          <h1 className="font-display" style={{
            fontSize: 'clamp(2rem, 5.5vw, 3.5rem)',
            fontWeight: 900, lineHeight: 1.15,
            letterSpacing: '-0.03em', marginBottom: '0.85rem',
            color: 'var(--text-primary)'
          }}>
            Halo, saya <span className="grad-text">{personal.name}</span>
          </h1>
          <div className="font-display" style={{ fontSize: 'clamp(1.1rem, 2.8vw, 1.6rem)', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: '1.25rem', minHeight: '2rem' }}>
            {displayed}<span className="cursor-blink" />
          </div>

          {/* Bio */}
          <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.95rem, 2vw, 1.05rem)', lineHeight: 1.75, marginBottom: '1.5rem', maxWidth: '680px' }}>
            {personal.bio}
          </p>

          {/* Location + Email */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <MapPin size={14} color="var(--brand)" />
              {personal.location}
            </div>
            <a href={`mailto:${personal.email}`}
              style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
              <Mail size={14} color="var(--cyan)" />
              {personal.email}
            </a>
          </div>

          {/* Tech Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '2rem' }}>
            {['Flutter & Dart', 'React.js', 'PHP & Laravel', 'JavaScript ES6+', 'C++', 'MySQL', 'Figma', 'IT Infrastructure'].map(t => (
              <span key={t} className="tag-chip">{t}</span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="btn-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', alignItems: 'center', marginBottom: '3rem' }}>
            <a href="#projects" className="btn-primary">
              <Sparkles size={15} />
              Lihat Rekam Jejak Proyek
              <ArrowDown size={15} />
            </a>
            <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <GithubIcon size={15} />
              GitHub @{personal.githubUsername}
            </a>
            <button onClick={handleCV} className="btn-secondary">
              <Download size={15} />
              Unduh Resume (CV)
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1.5rem', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
            {STATS.map((s, i) => (
              <div key={i}>
                <div className="font-display stat-num" style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)', fontWeight: 900 }}>
                  {s.val}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
