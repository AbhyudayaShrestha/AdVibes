'use client';

import { useState, useEffect } from 'react';
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
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const upcomingClasses = [
    {
      title: "Digital Marketing Masterclass",
      offer: "Special Launch Offer: 20% OFF",
      desc: "Master SEO, SEM, Meta Ads, and content marketing in this hands-on 8-week certification course.",
      image: "/digital-marketing-training.png",
      badge: "Limited Seats",
      link: "/enquiry?course=digital-marketing"
    },
    {
      title: "AI-Integrated Marketing Workshop",
      offer: "Exclusive Bonus: AI Tools Kit Free",
      desc: "Learn to leverage ChatGPT, Midjourney, and automated workflow pipelines to scale your campaigns.",
      image: "/ai-marketing-training.png",
      badge: "Trending",
      link: "/enquiry?course=ai-marketing"
    },
    {
      title: "Workshops & Certifications BootCamp",
      offer: "Get Certified: Job Placement Support",
      desc: "Deep-dive practical labs designed for teams and professionals aiming for industry-recognized credentials.",
      image: "/workshops-certifications.png",
      badge: "Hot Offer",
      link: "/enquiry?course=certifications"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % upcomingClasses.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setActiveSlideIndex((prev) => (prev + 1) % upcomingClasses.length);
  };

  const prevSlide = () => {
    setActiveSlideIndex((prev) => (prev - 1 + upcomingClasses.length) % upcomingClasses.length);
  };

  const allServices = [
    {
      slug: "social-media-management",
      icon: <Users />,
      title: "Social Media Management",
      desc: "Engage your audience with platform-specific content, real-time community management, organic growth tactics, and interactive engagement strategies."
    },
    {
      slug: "website-development",
      icon: <Globe />,
      title: "Website Development",
      desc: "High-performance, responsive websites built with Next.js, React, and modern tech stacks. Optimized for search engines, speed, and high conversion rates."
    },
    {
      slug: "ai-multimedia-content",
      icon: <Cpu />,
      title: "AI video, audio, music, Image",
      desc: "Cutting-edge AI-generated multimedia content. Leverage next-gen models for realistic voices, high-fidelity sound, and stunning photorealistic marketing visual assets."
    },
    {
      slug: "seo-optimization",
      icon: <Search />,
      title: "SEO Optimization",
      desc: "Data-driven search engine optimization. Thorough keyword research, technical on-page audits, strategic content writing, and link-building for long-term organic success."
    },
    {
      slug: "meta-ads",
      icon: <Target />,
      title: "Meta Ads",
      desc: "Strategic Facebook and Instagram advertising. Customized audience funnel targeting, continuous A/B creative testing, and analytical scaling focused on maximum ROI."
    },
    {
      slug: "google-ads",
      icon: <PlayCircle />,
      title: "Google Ads",
      desc: "Targeted PPC search, display, and YouTube campaigns that capture high-intent keywords and place your brand directly in front of ready-to-buy customers."
    },
    {
      slug: "graphic-designing",
      icon: <Palette />,
      title: "Graphic Designing",
      desc: "Visual storytelling through professional graphic design. Creative branding guides, modern pitch decks, beautiful ad designs, and stunning corporate collateral."
    },
    {
      slug: "content-creation",
      icon: <PenTool />,
      title: "Content Creation",
      desc: "Compelling copywriting, educational script writing, and high-production content assets built to captivate, educate, and convert your target audience."
    },
    {
      slug: "branding-strategy",
      icon: <Lightbulb />,
      title: "Branding & Strategy",
      desc: "Comprehensive brand positioning and market research. Build a cohesive visual and verbal identity to establish long-term authority in your space."
    },
    {
      slug: "ai-integrated-marketing",
      icon: <Zap />,
      title: "AI-integrated Marketing",
      desc: "Transform your operations. Deploy custom LLMs, automate routine tasks, implement predictive lead scoring, and run algorithmic marketing campaigns."
    }
  ];

  return (
    <main className="services-page-wrapper">
      {/* Inner Page Hero */}
      <section className="inner-hero" style={{ background: 'var(--gradient-hero)', color: 'white', padding: '160px 0 80px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
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

      {/* Upcoming Classes Slider Section */}
      <section className="upcoming-classes-slider" style={{ background: '#000814', color: 'white', padding: '40px 0', borderBottom: '1px solid rgba(255, 214, 10, 0.15)' }}>
        <div className="container">
          <div className="upcoming-slider-wrapper">
            <div className="upcoming-slider-grid">
              
              {/* Left Side Content */}
              <div className="upcoming-slider-info">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                  <span className="upcoming-slider-badge">
                    {upcomingClasses[activeSlideIndex].badge}
                  </span>
                  <span className="upcoming-slider-offer">
                    🔥 {upcomingClasses[activeSlideIndex].offer}
                  </span>
                </div>
                
                <h3 className="upcoming-slider-title">
                  {upcomingClasses[activeSlideIndex].title}
                </h3>
                
                <p className="upcoming-slider-desc">
                  {upcomingClasses[activeSlideIndex].desc}
                </p>

                <div style={{ marginTop: '10px' }}>
                  <Link href={upcomingClasses[activeSlideIndex].link} className="btn btn-primary" style={{ textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '1.5px', padding: '14px 32px' }}>
                    Lock Offer Now
                  </Link>
                </div>
              </div>

              {/* Right Side Image */}
              <div className="upcoming-slider-image-box">
                <img 
                  src={upcomingClasses[activeSlideIndex].image} 
                  alt={upcomingClasses[activeSlideIndex].title}
                  className="upcoming-slider-img"
                  key={activeSlideIndex}
                />
              </div>

            </div>

            {/* Slider Controls */}
            <div className="upcoming-slider-controls">
              <div className="upcoming-slider-dots">
                {upcomingClasses.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveSlideIndex(idx)}
                    className={`upcoming-slider-dot ${activeSlideIndex === idx ? 'active' : ''}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="upcoming-slider-navigation">
                <button 
                  onClick={prevSlide}
                  className="upcoming-slider-btn"
                  aria-label="Previous Slide"
                >
                  ←
                </button>
                <button 
                  onClick={nextSlide}
                  className="upcoming-slider-btn"
                  aria-label="Next Slide"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of All Services */}
      <section className="all-services-grid-section premium-gradient-bg" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="services-grid">
            {allServices.map((service, index) => (
              <ServiceCard
                key={index}
                slug={service.slug}
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
