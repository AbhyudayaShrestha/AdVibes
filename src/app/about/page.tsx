'use client';

import { useState } from 'react';
import { CheckCircle, Mail, Phone, MapPin, Send, Target, Eye, Heart } from 'lucide-react';

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
    <main className="about-page-wrapper" style={{ paddingTop: '100px' }}>
      {/* Inner Hero */}
      <section className="inner-hero" style={{ background: 'var(--gradient-hero)', color: 'white', padding: '120px 0 80px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
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

      {/* Interactive Contact Form Section */}
      <section id="contact-form" style={{ background: 'white', padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header" style={{ marginBottom: '4rem' }}>
            <span className="section-subtitle">Get In Touch</span>
            <h2 className="section-title">Ready To Accelerate Growth?</h2>
            <p>Fill out the form below. Our lead strategist will audit your domain and respond with a customized playbook in 24 hours.</p>
          </div>

          <div className="glass-card responsive-card" style={{ borderRadius: '24px', border: '1px solid rgba(0, 53, 102, 0.05)', boxShadow: '0 10px 40px rgba(0,0,0,0.02)' }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ width: '80px', height: '80px', background: 'var(--primary)', color: '#000814', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', fontSize: '2.5rem', fontWeight: 800 }}>
                  ✓
                </div>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary-dark)', fontWeight: 800, marginBottom: '1rem' }}>Playbook Requested!</h3>
                <p style={{ color: 'var(--text-muted)', maxWidth: '450px', margin: '0 auto', lineHeight: '1.6' }}>
                  Thank you! We've received your details. Our growth specialists have initiated your domain audit. Talk to you very soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div className="responsive-form-row">
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="name" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--secondary-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe"
                      style={{ padding: '14px 20px', borderRadius: '12px', border: '1px solid rgba(0,53,102,0.1)', fontSize: '0.95rem', outline: 'none', background: 'white' }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label htmlFor="email" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--secondary-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>Work Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. john@company.com"
                      style={{ padding: '14px 20px', borderRadius: '12px', border: '1px solid rgba(0,53,102,0.1)', fontSize: '0.95rem', outline: 'none', background: 'white' }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="company" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--secondary-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>Company Name / Website</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g. company.com"
                    style={{ padding: '14px 20px', borderRadius: '12px', border: '1px solid rgba(0,53,102,0.1)', fontSize: '0.95rem', outline: 'none', background: 'white' }}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label htmlFor="message" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--secondary-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>How can we scale your brand?</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Briefly describe your objectives or active traffic channels..."
                    style={{ padding: '14px 20px', borderRadius: '12px', border: '1px solid rgba(0,53,102,0.1)', fontSize: '0.95rem', outline: 'none', background: 'white', resize: 'vertical', fontFamily: 'inherit' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 700 }}>
                  <Send size={16} /> Request Custom Domain Audit
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
