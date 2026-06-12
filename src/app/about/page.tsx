'use client';

import { useState } from 'react';
import { CheckCircle, Mail, Phone, MapPin, Send, Target, Eye, Heart } from 'lucide-react';
import CTASection from '@/components/CTASection';

export default function AboutPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API request
    setTimeout(() => {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 800);
  };

  const values = [
    {
      icon: <Target size={32} style={{ color: 'var(--primary)' }} />,
      title: "Precision Execution",
      desc: "No fluff, no vanity metrics. We construct campaigns guided strictly by analytics and cold database insights to generate definitive scaling returns."
    },
    {
      icon: <Eye size={32} style={{ color: 'var(--primary)' }} />,
      title: "Unrivaled Transparency",
      desc: "Our client dashboard provides continuous, unedited real-time access to actual growth metrics, ensuring you always know where your budget operates."
    },
    {
      icon: <Heart size={32} style={{ color: 'var(--primary)' }} />,
      title: "Obsessive Innovation",
      desc: "We relentlessly build and test advanced custom LLMs and automated AI agents to keep our partner brands months ahead of normal competitors."
    }
  ];

  return (
    <main className="about-page-wrapper">
      {/* Inner Hero */}
      <section className="inner-hero" style={{ background: 'var(--gradient-hero)', color: 'white', padding: '160px 0 80px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--primary)', letterSpacing: '2px' }}>Our Identity</span>
          <h1 className="line-bottom" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '1.5rem', background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            About AdVibes
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
            We are a hybrid team of data scientists, automation scripts architects, and creative directors focused on scaling elite digital footprints.
          </p>
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '130%', height: '130%', background: 'radial-gradient(circle, rgba(255, 214, 10, 0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }}></div>
      </section>

      {/* Main Narrative & Stats */}
      <section style={{ background: 'white', padding: '100px 0' }}>
        <div className="container">
          <div className="why-container">
            <div>
              <span className="section-subtitle" style={{ textAlign: 'left' }}>The Mission</span>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem', fontWeight: 800 }}>Pioneering Performance Marketing</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-dark)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                AdVibes was founded under a simple premise: modern agencies have become too slow and relying on outdated marketing playbooks.
              </p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
                By integrating generative media tools, proprietary analytics systems, and technical performance funnels, we remove the creative production bottleneck. We allow modern founders to deploy campaigns and capture target audiences at 10x velocity.
              </p>
              <ul className="why-list" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                  <CheckCircle size={18} style={{ color: 'var(--primary)' }} /> Proprietary cohort lead nurturing agents.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                  <CheckCircle size={18} style={{ color: 'var(--primary)' }} /> Enterprise server-side Conversions API systems.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 600 }}>
                  <CheckCircle size={18} style={{ color: 'var(--primary)' }} /> Award-winning creative direction team.
                </li>
              </ul>
            </div>

            <div className="why-stats" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }}>
              <div className="stat-card" style={{ background: 'var(--bg-soft)', padding: '2.5rem', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '0.25rem' }}>250+</h3>
                  <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Projects Completed</p>
                </div>
                <div style={{ fontSize: '2.5rem' }}>💼</div>
              </div>
              <div className="stat-card" style={{ background: 'var(--bg-soft)', padding: '2.5rem', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '0.25rem' }}>98%</h3>
                  <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Client Retention Rate</p>
                </div>
                <div style={{ fontSize: '2.5rem' }}>📈</div>
              </div>
              <div className="stat-card" style={{ background: 'var(--bg-soft)', padding: '2.5rem', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '0.25rem' }}>120%</h3>
                  <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Average Campaign ROI</p>
                </div>
                <div style={{ fontSize: '2.5rem' }}>🚀</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section style={{ background: 'var(--bg-soft)', padding: '100px 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '5rem' }}>
            <span className="section-subtitle">Our DNA</span>
            <h2 className="section-title">Core Operating Values</h2>
            <p>Our decisions, campaigns, and corporate alignments are bound by three foundational rules.</p>
          </div>

          <div className="responsive-three-col">
            {values.map((val, idx) => (
              <div key={idx} className="glass-card card-glow-hover responsive-card">
                <div style={{ marginBottom: '1.5rem', display: 'inline-block', background: 'rgba(255, 214, 10, 0.08)', padding: '1rem', borderRadius: '16px' }}>
                  {val.icon}
                </div>
                <h4 style={{ fontSize: '1.25rem', color: 'var(--secondary-dark)', fontWeight: 800, marginBottom: '1rem' }}>{val.title}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
