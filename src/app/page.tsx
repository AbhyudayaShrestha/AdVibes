'use client';

import { useState, useEffect } from 'react';
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
  Users,
  ChevronLeft,
  ChevronRight,
  Clock
} from 'lucide-react';
import CTASection from '@/components/CTASection';
import { ServiceCard, TrainingCard, TestimonialCard } from '@/components/Cards';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const coursesData = [
    {
      slug: "digital-marketing-training",
      icon: <GraduationCap size={36} />,
      title: "Digital Marketing Training",
      subtitle: "Beginner to Advanced",
      desc: "Master the core fundamentals and advanced optimization methodologies of modern digital marketing. Ideal for founders and aspiring marketing directors.",
      duration: "8 Weeks",
      students: "1,200+ Enrolled",
      syllabus: ["Audience Intelligence & Profiling", "Copywriting & Landing Page Architecture", "Multi-Channel Funnel Planning", "Performance Tracking & Reporting"]
    },
    {
      slug: "ai-marketing-training",
      icon: <Cpu size={36} />,
      title: "AI in Marketing Training",
      subtitle: "Future-Ready Skills",
      desc: "Learn how to leverage AI tools to transform your marketing efficiency and results. Understand generative models, workflow automations, and AI agents.",
      duration: "4 Weeks",
      students: "850+ Enrolled",
      syllabus: ["Prompt Engineering & Automation", "AI Video & Imagery Production", "Copy & SEO Automation Workflows", "AI Agents for Lead Generation"]
    },
    {
      slug: "workshops-certifications",
      icon: <Award size={36} />,
      title: "Workshops & Certifications",
      subtitle: "Hands-on Experience",
      desc: "Practical interactive cohort workshops that issue industry-accredited certifications. Designed to get teams hands-on experience solving real-world case studies.",
      duration: "2 Weeks",
      students: "500+ Enrolled",
      syllabus: ["Live Cohort Strategy Build", "Campaign Auditing Lab", "Interactive Dynamic Playbooks", "Final Certification Exam Prep"]
    },
    {
      slug: "meta-ads-scale-blueprint",
      icon: <Target size={36} />,
      title: "Meta Ads Scale Blueprint",
      subtitle: "Professional Masterclass",
      desc: "An advanced masterclass dedicated strictly to Facebook, Instagram, and WhatsApp marketing. Learn the scaling formulas used by multi-million dollar brands.",
      duration: "6 Weeks",
      students: "920+ Enrolled",
      syllabus: ["Pixel & Conversions API Setup", "A/B Testing Frameworks", "CBO/ABO Bid Strategy Management", "Lookalike & Retargeting Setup"]
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % coursesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, coursesData.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + coursesData.length) % coursesData.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % coursesData.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero-new">
        {/* Decorative background grid and circles */}
        <div className="hero-wireframe-grid"></div>
        <div className="hero-circle-outline outline-1" style={{ transform: `translateY(${scrollY * 0.04}px)` }}></div>
        <div className="hero-circle-outline outline-2" style={{ transform: `translateY(${scrollY * 0.08}px)` }}></div>
        
        <div className="container hero-grid-new">
          {/* Left Column */}
          <div className="hero-content-new">
            <div className="hero-badge-pill reveal" style={{ animationDelay: '0.1s' }}>
              <span className="star-icon">★</span> Awards Winning Agency
            </div>
            
            <h1 className="hero-title-new reveal" style={{ animationDelay: '0.2s' }}>
              CONSTRUCTING <br />
              THE FUTURE WITH <br />
              <span className="highlight-text">CONFIDENCE</span>
            </h1>
            
            <p className="hero-description-new reveal" style={{ animationDelay: '0.3s' }}>
              Your trusted partner in digital growth—from innovative marketing strategies to expert brand management that delivers excellence.
            </p>
            
            <div className="hero-actions-new reveal" style={{ animationDelay: '0.4s' }}>
              <Link href="/services" className="btn btn-primary-new">
                Explore Services <span className="arrow-icon">→</span>
              </Link>
              <Link href="/about" className="btn btn-outline-new">
                Learn More <span className="arrow-icon">→</span>
              </Link>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="hero-visual-new reveal" style={{ animationDelay: '0.5s' }}>
            <div className="hero-arch-container">
              {/* The Arch background shape */}
              <div className="hero-arch-bg"></div>
              {/* Person image cut-out */}
              <img src="/heroPicture.png" alt="AdVibes Team Expert" className="hero-person-img" />
            </div>

            {/* Widget 1: 100% Clients Are Happy */}
            <div 
              className="floating-widget widget-satisfaction" 
              style={{ transform: `translateY(${scrollY * -0.15}px)` }}
            >
              <div className="widget-grid-pattern"></div>
              <div className="widget-content">
                <span className="percent-text">100%</span>
                <span className="label-text">Clients Are<br />happy</span>
              </div>
            </div>

            {/* Widget 2: 25k+ Reviews */}
            <div 
              className="floating-widget widget-reviews" 
              style={{ transform: `translateY(${scrollY * -0.08}px)` }}
            >
              <span className="reviews-count">25k+ reviews</span>
              <div className="stars-container">
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
                <span className="star">★</span>
              </div>
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
              slug="social-media-management"
              icon={<Users />}
              title="Social Media Management"
              desc="Engage your audience with platform-specific content and community management."
            />
            <ServiceCard
              slug="website-development"
              icon={<Globe />}
              title="Website Development"
              desc="High-performance, responsive websites built for conversion and speed."
            />
            <ServiceCard
              slug="ai-multimedia-content"
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

          <div className="training-slider-wrapper">
            <button 
              className="slider-arrow arrow-left" 
              onClick={handlePrev} 
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>

            <div className="training-slider-container">
              <div 
                className="training-slider-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {coursesData.map((course, index) => (
                  <Link key={index} href={`/courses/${course.slug}`} className="training-slide" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="training-slider-card" style={{ cursor: 'pointer' }}>
                      <div className="card-left">
                        <div className="slider-icon-box">
                          {course.icon}
                        </div>
                        <div className="card-stats">
                          <div className="stat-item">
                            <Clock size={16} />
                            <span>{course.duration}</span>
                          </div>
                          <div className="stat-item">
                            <Users size={16} />
                            <span>{course.students}</span>
                          </div>
                        </div>
                      </div>

                      <div className="card-right">
                        <span className="course-badge">{course.subtitle}</span>
                        <h3 className="course-title">{course.title}</h3>
                        <p className="course-desc">{course.desc}</p>
                        
                        <div className="syllabus-section">
                          <h4 className="syllabus-title">Syllabus Highlights</h4>
                          <ul className="syllabus-list">
                            {course.syllabus.map((topic, i) => (
                              <li key={i} className="syllabus-item">
                                <span className="bullet"></span>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <span className="btn btn-primary slider-enroll-btn">
                          View Details
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <button 
              className="slider-arrow arrow-right" 
              onClick={handleNext} 
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="slider-dots">
            {coursesData.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
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
            <Link href="/blog/10-ai-tools-to-transform-your-marketing-in-2026" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="blog-card card" style={{ overflow: 'hidden', cursor: 'pointer' }}>
                <div className="blog-image" style={{ backgroundImage: 'url(/blog-ai-tools.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '240px' }}></div>
                <div className="blog-content">
                  <span className="blog-date">May 12, 2026</span>
                  <h3>10 AI Tools to Transform Your Marketing in 2026</h3>
                  <p>Discover the most powerful AI tools that are redefining how brands engage with customers.</p>
                  <span className="link-btn">Read Article <ArrowRight className="icon-sm" /></span>
                </div>
              </div>
            </Link>
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
