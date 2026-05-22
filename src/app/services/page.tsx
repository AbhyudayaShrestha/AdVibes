'use client';

import Link from 'next/link';
import {
  Users,
  Globe,
  Cpu,
  Search,
  Target,
  PlayCircle,
  Palette,
  PenTool,
  Lightbulb,
  Zap
} from 'lucide-react';
import { ServiceCard } from '@/components/Cards';
import CTASection from '@/components/CTASection';

export default function ServicesPage() {
  const allServices = [
    {
      icon: <Users />,
      title: "Social Media Management",
      desc: "Engage your audience with platform-specific content, real-time community management, organic growth tactics, and interactive engagement strategies."
    },
    {
      icon: <Globe />,
      title: "Website Development",
      desc: "High-performance, responsive websites built with Next.js, React, and modern tech stacks. Optimized for search engines, speed, and high conversion rates."
    },
    {
      icon: <Cpu />,
      title: "AI video, audio, music, Image",
      desc: "Cutting-edge AI-generated multimedia content. Leverage next-gen models for realistic voices, high-fidelity sound, and stunning photorealistic marketing visual assets."
    },
    {
      icon: <Search />,
      title: "SEO Optimization",
      desc: "Data-driven search engine optimization. Thorough keyword research, technical on-page audits, strategic content writing, and link-building for long-term organic success."
    },
    {
      icon: <Target />,
      title: "Meta Ads",
      desc: "Strategic Facebook and Instagram advertising. Customized audience funnel targeting, continuous A/B creative testing, and analytical scaling focused on maximum ROI."
    },
    {
      icon: <PlayCircle />,
      title: "Google Ads",
      desc: "Targeted PPC search, display, and YouTube campaigns that capture high-intent keywords and place your brand directly in front of ready-to-buy customers."
    },
    {
      icon: <Palette />,
      title: "Graphic Designing",
      desc: "Visual storytelling through professional graphic design. Creative branding guides, modern pitch decks, beautiful ad designs, and stunning corporate collateral."
    },
    {
      icon: <PenTool />,
      title: "Content Creation",
      desc: "Compelling copywriting, educational script writing, and high-production content assets built to captivate, educate, and convert your target audience."
    },
    {
      icon: <Lightbulb />,
      title: "Branding & Strategy",
      desc: "Comprehensive brand positioning and market research. Build a cohesive visual and verbal identity to establish long-term authority in your space."
    },
    {
      icon: <Zap />,
      title: "AI-integrated Marketing",
      desc: "Transform your operations. Deploy custom LLMs, automate routine tasks, implement predictive lead scoring, and run algorithmic marketing campaigns."
    }
  ];

  return (
    <main className="services-page-wrapper" style={{ paddingTop: '100px' }}>
      {/* Inner Page Hero */}
      <section className="inner-hero" style={{ background: 'var(--gradient-hero)', color: 'white', padding: '120px 0 80px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--primary)', letterSpacing: '2px' }}>Expert Solutions</span>
          <h1 className="line-bottom" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '1.5rem', background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Our Professional Services
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
            We design, build, and optimize complete digital ecosystems that accelerate business growth using cutting-edge marketing technologies.
          </p>
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '130%', height: '130%', background: 'radial-gradient(circle, rgba(255, 214, 10, 0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }}></div>
      </section>

      {/* Grid of All Services */}
      <section className="all-services-grid-section premium-gradient-bg" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="services-grid">
            {allServices.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                desc={service.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ or Value Prop section */}
      <section className="service-features" style={{ background: 'white', padding: '100px 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '5rem' }}>
            <span className="section-subtitle">How We Deliver</span>
            <h2 className="section-title">Engineered For Performance</h2>
            <p>Every campaign and asset we develop is guided by strict criteria to guarantee optimal performance.</p>
          </div>

          <div className="why-stats deliver-stats-grid">
            <div className="stat-card glass-card responsive-card" style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary)', marginBottom: '1rem' }}>AI-Accelerated</h3>
              <p style={{ color: 'var(--text-muted)' }}>We leverage the latest AI models to produce assets 5x faster, giving your brand an unparalleled speed-to-market advantage.</p>
            </div>
            <div className="stat-card glass-card responsive-card" style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary)', marginBottom: '1rem' }}>100% Data-Driven</h3>
              <p style={{ color: 'var(--text-muted)' }}>We map every click, view, and conversion back to hard analytics so you know exactly where your marketing spend yields results.</p>
            </div>
            <div className="stat-card glass-card responsive-card" style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary)', marginBottom: '1rem' }}>Tailored Strategy</h3>
              <p style={{ color: 'var(--text-muted)' }}>No generic copy-paste templates. We formulate a completely unique funnel optimized specifically for your target audience.</p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
