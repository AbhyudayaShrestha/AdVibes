'use client';

import { useState } from 'react';
import { CheckCircle, Mail, Phone, MapPin, Send, Target, Eye, Heart, Quote, Star, TrendingUp } from 'lucide-react';
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

  const caseStudies = [
    {
      tag: "Social Growth Revolution",
      title: "How we increased engagement by 400% for a luxury fashion brand.",
      client: "Vespera Luxe",
      results: "+400% Engagement | 3.5x Purchase ROI | +50k New Followers",
      challenge: "Vespera Luxe was struggles to connect with gen-Z audiences using generic image campaigns. Organic social performance was stagnant.",
      solution: "We deployed custom AI-driven short video assets, restructured their Meta pixel tracking, and launched targeted, cohort-specific retargeting sequences.",
      metric: "400%",
      metricLabel: "Engagement Lift"
    },
    {
      tag: "SEO Dominance",
      title: "Dominating search results for a high-growth fintech startup.",
      client: "CentraPay",
      results: "#1 Ranks for Core Keywords | 280% organic leads growth | 0 to 120k monthly search views",
      challenge: "CentraPay was paying exorbitant fees in competitive PPC Google search auctions, resulting in extremely high customer acquisition costs.",
      solution: "We executed an in-depth semantic query map, restructured their site hierarchy for lightning-fast speeds, and published 40 authority-building landing pages.",
      metric: "280%",
      metricLabel: "Lead Growth"
    },
    {
      tag: "AI Funnel Integration",
      title: "Automating lead scoring and nurturing for a SaaS market leader.",
      client: "DataFlow AI",
      results: "60% reduction in sales response time | +45% conversion optimization | 4.8x ROI in 90 days",
      challenge: "DataFlow's sales representatives were bogged down by low-quality, unqualified inbound leads, missing premium opportunities due to delay.",
      solution: "We integrated a customized OpenAI workflow to scrape, score, and instantly respond to inbound forms with highly relevant dynamic PDF assets.",
      metric: "60%",
      metricLabel: "Faster Close"
    }
  ];

  const testimonials = [
    {
      text: "AdVibes completely transformed our digital footprint. Their proprietary AI-driven content framework is truly revolutionary. We've seen a massive surge in active user engagement and direct website conversions within the first 60 days.",
      author: "Sarah Johnson",
      role: "CEO, TechPulse",
      stars: 5
    },
    {
      text: "The performance and tracking results were beyond our highest expectations. A highly analytical and technical team that consistently delivers on their promises. I strongly recommend them to any serious founder looking to scale.",
      author: "Michael Chen",
      role: "Marketing Director, Bloom",
      stars: 5
    },
    {
      text: "Their strategic SEO blueprint put us on the first page of Google search results for all our high-value organic search terms. Our monthly inbound leads have doubled while our PPC ad spends dropped significantly.",
      author: "Elena Rostova",
      role: "VP of Growth, FinLyft",
      stars: 5
    },
    {
      text: "What sets them apart is their dedication to custom strategies. They built an AI automated response flow that now takes care of 75% of our front-line customer questions while converting leads automatically.",
      author: "David Miller",
      role: "Operations Head, SwiftSaaS",
      stars: 5
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

      {/* Case Studies Section */}
      <section id="case-studies-list" className="premium-gradient-bg" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '5rem' }}>
            <span className="section-subtitle">Deep Dives</span>
            <h2 className="section-title">Success Stories</h2>
            <p>Read exactly how we solve real corporate roadblocks and create sustainable scale engines.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {caseStudies.map((study, index) => (
              <div key={index} className="case-study-item card glass-card card-glow-hover responsive-card case-study-grid" style={{ alignItems: 'center' }}>
                {/* Metric Graphic Block */}
                <div style={{ background: 'var(--secondary-dark)', color: 'white', padding: '3rem 2rem', borderRadius: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                  <TrendingUp size={44} style={{ color: 'var(--primary)', marginBottom: '1.5rem' }} />
                  <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', lineHeight: '1' }}>{study.metric}</div>
                  <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600, marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{study.metricLabel}</div>
                </div>

                {/* Content Block */}
                <div>
                  <span style={{ display: 'inline-block', padding: '6px 14px', background: 'rgba(255, 214, 10, 0.1)', color: 'var(--primary-dark)', borderRadius: '50px', fontSize: '0.85rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem' }}>
                    {study.tag}
                  </span>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary-dark)', fontWeight: 800, marginBottom: '1.5rem', lineHeight: '1.3' }}>{study.title}</h3>
                  
                  <div className="responsive-two-col" style={{ gap: '2rem', marginBottom: '2rem', borderBottom: '1px solid #f1f5f9', paddingBottom: '2rem' }}>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.5rem' }}>The Challenge</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{study.challenge}</p>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--secondary)', marginBottom: '0.5rem' }}>The Solution</h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{study.solution}</p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                      <span style={{ fontSize: '0.85rem', color: 'rgba(0,0,0,0.4)', fontWeight: 600 }}>Client Partner: </span>
                      <span style={{ fontSize: '0.9rem', color: 'var(--secondary-dark)', fontWeight: 700 }}>{study.client}</span>
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--primary-dark)', fontWeight: 700, background: 'rgba(255, 214, 10, 0.05)', padding: '8px 16px', borderRadius: '8px', border: '1px dashed rgba(255, 214, 10, 0.3)' }}>
                      Key Result: {study.results}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{ background: 'var(--secondary-dark)', color: 'white', padding: '100px 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '5rem' }}>
            <span className="section-subtitle" style={{ color: 'var(--primary)' }}>Client Reviews</span>
            <h2 className="section-title" style={{ color: 'white' }}>What Our Partners Say</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Read verified reviews from digital brands and growth-focused founders who chose AdVibes.</p>
          </div>

          <div className="testimonials-grid" style={{ gap: '2.5rem' }}>
            {testimonials.map((test, index) => (
              <div key={index} className="testimonial-card responsive-card" style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '1.5rem' }}>
                    {[...Array(test.stars)].map((_, idx) => (
                      <Star key={idx} size={18} fill="var(--primary)" color="var(--primary)" />
                    ))}
                  </div>
                  <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.95)', fontWeight: 500, lineHeight: '1.8', marginBottom: '2rem', position: 'relative' }}>
                    <Quote size={40} style={{ position: 'absolute', top: '-15px', left: '-15px', opacity: '0.08', transform: 'rotate(180deg)', fill: 'white' }} />
                    "{test.text}"
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
                  <div style={{ width: '45px', height: '45px', background: 'var(--primary)', color: '#000814', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem' }}>
                    {test.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'white' }}>{test.author}</h4>
                    <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)' }}>{test.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Certifications Section */}
      <section id="student-gallery" style={{ padding: '100px 0', backgroundColor: 'var(--bg-soft)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '5rem' }}>
            <span className="section-subtitle">Certified Graduates</span>
            <h2 className="section-title">Cohort <span style={{ color: 'var(--primary-dark)' }}>Success</span></h2>
            <p>Meet some of our successful students holding their industry-accredited certifications after completing our training cohorts.</p>
          </div>

          <div className="responsive-three-col">
            <div className="card glass-card card-glow-hover" style={{ padding: '1.25rem', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '240px', width: '100%', position: 'relative' }}>
                <img src="/student-cert-1.jpg" alt="Meta Ads Scale Cohort Graduates" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} className="gallery-img" />
              </div>
              <div style={{ padding: '1.5rem 0.5rem 0.5rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--secondary-dark)', marginBottom: '0.75rem' }}>Meta Ads Scale Cohort</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Graduates holding their certificates after successfully completing our advanced 6-week Meta scaling program.</p>
              </div>
            </div>

            <div className="card glass-card card-glow-hover" style={{ padding: '1.25rem', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '240px', width: '100%', position: 'relative' }}>
                <img src="/student-cert-2.jpg" alt="Digital Marketing Masterclass Graduates" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} className="gallery-img" />
              </div>
              <div style={{ padding: '1.5rem 0.5rem 0.5rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--secondary-dark)', marginBottom: '0.75rem' }}>Digital Marketing Masterclass</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Our successful graduating class celebrating their completion of the comprehensive digital strategy roadmap program.</p>
              </div>
            </div>

            <div className="card glass-card card-glow-hover" style={{ padding: '1.25rem', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', height: '240px', width: '100%', position: 'relative' }}>
                <img src="/student-cert-3.png" alt="AI in Marketing Cohort Graduates" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} className="gallery-img" />
              </div>
              <div style={{ padding: '1.5rem 0.5rem 0.5rem 0.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--secondary-dark)', marginBottom: '0.75rem' }}>AI in Marketing Cohort</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>Professionals holding their credentials showing expertise in generative AI marketing models and workflow automations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
