import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  // Intersection Observer untuk animasi fade-up
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)', color: 'var(--text-primary)', position: 'relative' }}>
      {/* Subtle dot pattern background */}
      <div className="bg-dots" />

      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <div className="grad-divider" />
        <About />
        <div className="grad-divider" />
        <Skills />
        <div className="grad-divider" />
        <Projects />
        <div className="grad-divider" />
        <Experience />
        <div className="grad-divider" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
