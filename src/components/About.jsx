import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Code2, Layout, Zap, Database, CheckCircle2, ShieldCheck, Building2, GitBranch, Clock } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: <Code2 size={20} color="var(--brand)" />,
    title: 'Clean Architecture & OOP',
    desc: 'Menulis kode modular, terstruktur, dan mudah dipahami tim pengembang lain.',
    bg: 'var(--brand-light)',
  },
  {
    icon: <Building2 size={20} color="#0284c7" />,
    title: 'Pengalaman Instansi Riil',
    desc: 'Terbukti membangun sistem monitoring di Bandara UPBU Malikussaleh (Kemenhub).',
    bg: '#e0f2fe',
  },
  {
    icon: <Zap size={20} color="#d97706" />,
    title: 'Performa Cepat & Responsif',
    desc: 'Optimasi rendering 60 FPS di mobile dan web load-time super cepat.',
    bg: '#fef3c7',
  },
  {
    icon: <Database size={20} color="#059669" />,
    title: 'Backend & Integrasi API',
    desc: 'Arsitektur database relasional MySQL, Laravel, dan integrasi RESTful API stabil.',
    bg: '#d1fae5',
  },
];

export default function About() {
  const { companyTrustPillars } = portfolioData;

  return (
    <section id="about" className="section section-alt">
      <div className="container">

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-label">Profil Profesional</div>
          <h2 className="section-title">
            Membangun Rekayasa Software yang <span className="grad-text">Siap untuk Industri</span>
          </h2>
          <p className="section-desc">
            Menggabungkan keahlian teknis modern dengan disiplin eksekusi untuk menghasilkan solusi digital bernilai bisnis tinggi.
          </p>
        </div>

        {/* Bio + Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '2.5rem', alignItems: 'center', marginBottom: '3.5rem' }}>
          {/* Bio Text */}
          <div>
            <p style={{ color: 'var(--text-primary)', fontSize: '1.02rem', lineHeight: 1.8, marginBottom: '1rem', fontWeight: 500 }}>
              Sebagai mahasiswa Program Studi Sistem Informasi Universitas Malikussaleh (UNIMAL) yang berfokus pada rekayasa perangkat lunak, saya memandang teknologi bukan sekadar penulisan kode, melainkan sarana strategis untuk memecahkan hambatan operasional dan mempercepat efisiensi organisasi.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Dengan penguasaan ekosistem <strong>Flutter/Dart, PHP/Laravel, React.js, dan C++</strong>, saya telah menguji kompetensi analitis dan teknis melalui proyek instansi nyata—khususnya sistem <em>Dashboard Monitoring Bandara UPBU Malikussaleh (Kemenhub)</em> yang mendigitalisasi pemantauan operasional harian.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                'Teruji mengimplementasikan sistem nyata di lingkungan instansi penerbangan',
                'Mengutamakan Clean Architecture agar kode minim bug dan mudah di-scale',
                'Berpengalaman full-cycle: dari rancangan UI di Figma hingga database & deployment',
                'Komunikatif, disiplin deadline, dan transparan dalam pelaporan kemajuan proyek',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-primary)', fontSize: '0.88rem' }}>
                  <CheckCircle2 size={17} color="var(--emerald)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 4 Highlight Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.85rem' }}>
            {HIGHLIGHTS.map((h, i) => (
              <div key={i} className="pro-card" style={{ padding: '1.2rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: h.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                  {h.icon}
                </div>
                <h3 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>{h.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.55 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Company Trust Section / Mengapa Perusahaan Percaya */}
        {companyTrustPillars && (
          <div style={{
            background: '#ffffff',
            border: '1px solid var(--border)',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
              <ShieldCheck size={20} color="var(--brand)" />
              <span className="font-display" style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-primary)' }}>
                Mengapa Perusahaan Anda Dapat Mengandalkan Saya?
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem', maxWidth: '720px' }}>
              Nilai tambah dan komitmen profesional yang saya bawa untuk memastikan setiap proyek memberikan hasil maksimal tanpa risiko teknis.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
              {companyTrustPillars.map((p) => (
                <div key={p.id} style={{
                  padding: '1.25rem',
                  borderRadius: '12px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                    <span className="badge badge-brand" style={{ fontSize: '0.72rem' }}>{p.metric}</span>
                  </div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                    {p.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
