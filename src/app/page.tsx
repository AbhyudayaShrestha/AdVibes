'use client';

import Link from 'next/link';
import {
  Globe,
  Cpu,
  Search,
  Target,
  PlayCircle,
  Palette,
  PenTool,
  Lightbulb,
  Zap,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Award,
  Users
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import { ServiceCard, TrainingCard, TestimonialCard } from '@/components/Cards';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="hero-tag reveal" style={{ animationDelay: '0.1s' }}>
              <span className="tag-line">Future of Marketing</span>
            </div>
            <h1 className="hero-title reveal" style={{ animationDelay: '0.2s' }}>
              <span className="line-top">Digital Marketing</span>
              <span className="line-middle">Powered by</span>
              <span className="line-bottom">AI & Real Strategy</span>
            </h1>
            <p className="hero-description reveal" style={{ color: 'rgba(255,255,255,0.8)', animationDelay: '0.3s' }}>
              We combine data science with creative intuition to unlock your brand's full potential in a digital-first world.
            </p>
            <div className="hero-btns reveal" style={{ animationDelay: '0.4s' }}>
              <Link href="/about#contact-form" className="btn btn-primary">Get Started Today</Link>
              <Link href="/case-studies" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>View Our Work</Link>
            </div>
          </div>
          <div className="hero-image-container reveal" style={{ animationDelay: '0.5s' }}>
            <div className="image-wrapper">
              <img src="/hero-bg.webp" alt="Modern AdVibes Office" className="floating-img" />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Showcase Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Expert Solutions</span>
            <h2 className="section-title">Innovate with <span style={{ color: '#fed803ff' }}>Purpose</span></h2>
            <p>Our service ecosystem is built to scale your impact across all digital touchpoints.</p>
          </div>

          <div className="services-grid">
            <ServiceCard
              icon={<Users />}
              title="Social Media Management"
              desc="Engage your audience with platform-specific content and community management."
            />
            <ServiceCard
              icon={<Globe />}
              title="Website Development"
              desc="High-performance, responsive websites built for conversion and speed."
            />
            <ServiceCard
              icon={<Cpu />}
              title="AI video, audio, music, Image"
              className="hide-mobile"
              desc="Cutting-edge AI-generated multimedia content for modern brands."
            />
          </div>

          <div className="see-more-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <Link href="/services" className="see-more-btn" style={{ background: 'var(--secondary-dark)', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              See all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Preview */}
      <section id="about" className="why-us">
        <div className="container why-container">
          <div className="why-content">
            <span className="section-subtitle">About Us</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Why Choose AdVibes?</h2>
            <p className="mb-2">We don't just provide services; we partner with you to achieve measurable success.</p>
            <ul className="why-list" style={{ marginBottom: '2rem' }}>
              <li><CheckCircle className="icon" style={{ color: 'var(--primary)', marginRight: '8px' }} /> Data-Driven decision making</li>
              <li><CheckCircle className="icon" style={{ color: 'var(--primary)', marginRight: '8px' }} /> Cutting-edge AI technology integration</li>
              <li><CheckCircle className="icon" style={{ color: 'var(--primary)', marginRight: '8px' }} /> Dedicated team of specialists</li>
            </ul>
            <Link href="/about" className="btn btn-outline" style={{ border: '2px solid var(--secondary)', color: 'var(--secondary)' }}>
              Read Our Story
            </Link>
          </div>
          <div className="why-stats">
            <div className="stat-card">
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-card">
              <h3>250+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3>120%</h3>
              <p>Average ROI Increase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Showcase Section */}
      <section id="training" className="training">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Empower Your Team</span>
            <h2 className="section-title">Marketing Master<span style={{ color: 'var(--primary)' }}>classes</span></h2>
            <p>Practical training programs designed to keep you ahead of the digital curve.</p>
          </div>

          <div className="training-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '800px', margin: '0 auto' }}>
            <TrainingCard
              icon={<GraduationCap />}
              title="Digital Marketing Training"
              subtitle="Beginner to Advanced"
              desc="Master the fundamentals and advanced techniques of modern digital marketing."
            />
            <TrainingCard
              icon={<Cpu />}
              title="AI in Marketing Training"
              subtitle="Future-Ready Skills"
              desc="Learn how to leverage AI tools to transform your marketing efficiency and results."
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <Link href="/courses" className="see-more-btn" style={{ background: 'var(--secondary-dark)', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              See all courses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Work</span>
            <h2 className="section-title">Success Stories</h2>
          </div>
          <div className="portfolio-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '650px', margin: '0 auto' }}>
            <div className="portfolio-item card">
              <div className="portfolio-tag" style={{ background: 'rgba(255, 214, 10, 0.15)', color: 'var(--primary-dark)' }}>Case Study</div>
              <h3>Social Growth Revolution</h3>
              <p>How we increased engagement by 400% for a luxury fashion brand.</p>
              <Link href="/case-studies" className="link-btn">Read Case Study <ArrowRight className="icon-sm" /></Link>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <Link href="/case-studies" className="see-more-btn" style={{ background: 'var(--secondary-dark)', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              See all case studies & testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '650px', margin: '0 auto' }}>
            <TestimonialCard
              text="AdVibes transformed our digital presence. Their AI-driven approach is truly revolutionary."
              author="Sarah Johnson"
              role="CEO, TechPulse"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <Link href="/case-studies#testimonials" className="see-more-btn" style={{ background: 'var(--primary)', color: '#000814', padding: '14px 32px', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              See all testimonials <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="blog">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Insights</span>
            <h2 className="section-title">Latest From Our Blog</h2>
            <p>Stay ahead with our latest tips, trends, and strategies in digital marketing.</p>
          </div>
          <div className="blog-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '600px', margin: '0 auto' }}>
            <div className="blog-card card">
              <div className="blog-image"></div>
              <div className="blog-content">
                <span className="blog-date">May 12, 2026</span>
                <h3>10 AI Tools to Transform Your Marketing in 2026</h3>
                <p>Discover the most powerful AI tools that are redefining how brands engage with customers.</p>
                <Link href="/blog" className="link-btn">Read Article <ArrowRight className="icon-sm" /></Link>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <Link href="/blog" className="see-more-btn" style={{ background: 'var(--secondary-dark)', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              See all articles <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">How We Work</span>
            <h2 className="section-title">Our Strategic Process</h2>
          </div>
          <div className="process-steps">
            <div className="step">
              <div className="step-num">01</div>
              <h4>Discovery</h4>
              <p>We dive deep into your brand and goals.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <h4>Strategy</h4>
              <p>Tailored roadmap for your growth.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <h4>Execution</h4>
              <p>Deploying our specialist teams.</p>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <h4>Optimization</h4>
              <p>Constant refinement based on data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
