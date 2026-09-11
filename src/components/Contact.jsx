import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon } from './SocialIcons';
import { Mail, Copy, Check, Send, ExternalLink } from 'lucide-react';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [form, setForm]     = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleCopy = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 800);
  };

  const labelStyle = { display: 'block', fontSize: '0.825rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>

          {/* Left */}
          <div>
            <div className="section-label">Hubungi Saya</div>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>
              Siap Berkontribusi untuk <span className="grad-text">Perusahaan Anda</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Sedang mencari Software Engineer yang disiplin, menguasai Web & Mobile (Flutter, React, Laravel), dan siap langsung berkontribusi? Saya terbuka untuk posisi Full-Time, Kontrak Proyek, maupun konsultasi teknis.
            </p>

            {/* SLA / Commitments */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--emerald)' }}>⚡</span>
                <span><strong>Respons Cepat:</strong> Email dibalas dalam waktu &lt; 24 jam kerja.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--brand)' }}>📍</span>
                <span><strong>Fleksibilitas:</strong> Terbuka untuk Remote, On-Site, maupun Relokasi kerja.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                <span style={{ color: '#0284c7' }}>🤝</span>
                <span><strong>Integritas Profesional:</strong> Menjunjung tinggi NDA, etika kerja, dan SLA proyek.</span>
              </div>
            </div>

            {/* Email Card */}
            <div className="pro-card" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.25rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <Mail size={18} color="var(--brand)" />
              <div style={{ flexGrow: 1, minWidth: 0 }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Email Resmi</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)', wordBreak: 'break-all' }}>{personal.email}</div>
              </div>
              <button onClick={handleCopy} className="btn-secondary"
                style={{ padding: '0.35rem 0.7rem', fontSize: '0.75rem', gap: '0.3rem', minHeight: '34px' }}>
                {copied ? <Check size={13} color="var(--emerald)" /> : <Copy size={13} />}
                {copied ? 'Tersalin!' : 'Salin'}
              </button>
            </div>

            {/* GitHub Card */}
            <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer"
              className="pro-card"
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.25rem', color: 'var(--text-primary)', textDecoration: 'none' }}>
              <GithubIcon size={20} />
              <div style={{ flexGrow: 1 }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Audit Kode & Repositori</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>github.com/{personal.githubUsername}</div>
              </div>
              <ExternalLink size={14} color="var(--text-muted)" />
            </a>
          </div>

          {/* Right: Form */}
          <div className="pro-card" style={{ padding: '2rem' }}>
            <h3 className="font-display" style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
              Kirim Tawaran atau Pesan
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '1.5rem' }}>
              Silakan sertakan detail posisi, kebutuhan proyek, atau pertanyaan kerja sama Anda.
            </p>

            {status === 'sent' && (
              <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', padding: '0.75rem 1rem', borderRadius: '8px', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                ✅ Pesan berhasil dikirim! Terima kasih.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={labelStyle}>Nama Lengkap</label>
                <input type="text" required placeholder="Nama Anda" value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="form-input" />
              </div>
              <div>
                <label style={labelStyle}>Alamat Email</label>
                <input type="email" required placeholder="nama@email.com" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  className="form-input" />
              </div>
              <div>
                <label style={labelStyle}>Pesan</label>
                <textarea rows={4} required placeholder="Detail proyek atau pertanyaan yang ingin Anda diskusikan..."
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  className="form-input" style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" disabled={status === 'sending'} className="btn-primary"
                style={{ width: '100%', padding: '0.8rem', marginTop: '0.25rem', justifyContent: 'center' }}>
                <Send size={15} />
                {status === 'sending' ? 'Mengirimkan...' : 'Kirim Pesan Sekarang'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
