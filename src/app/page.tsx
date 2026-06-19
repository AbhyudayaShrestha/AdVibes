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
  Clock,
  Calendar,
  FileText,
  BookOpen
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
      slug: "content-creation-mastery",
      title: "Content Creation Mastery Course (Photoshoot + Video)",
      bannerDuration: "2 Months",
      bannerSubject: "Content Creation",
      bannerPill: "Mastery Course + Video",
      duration: "2 Months",
      format: "Practical + AI-Enhanced",
      level: "Beginner to Intermediate",
      students: "850+ Enrolled",
      syllabus: [
        "Audience Intent & Viral Hook Design",
        "Camera Settings, Lighting & Photoshoot Layout",
        "Video Editing & Color Grading Workflows",
        "AI-Enhanced Asset Generation Tools"
      ]
    },
    {
      slug: "digital-marketing-beginners",
      title: "Digital Marketing Course for Beginners",
      bannerDuration: "2 Months",
      bannerSubject: "Digital Marketing",
      bannerPill: "Course for Beginners",
      duration: "2 Months",
      format: "Practical + AI-Enhanced",
      level: "Beginner to Intermediate",
      students: "1,200+ Enrolled",
      syllabus: [
        "Digital Marketing Foundations & Channels",
        "Organic SEO & Content Funnel Strategy",
        "Social Media Management & Community Setup",
        "Intro to Meta & Google Ads Scaling"
      ]
    },
    {
      slug: "graphics-designing",
      title: "Graphics Designing for Digital Marketing Course",
      bannerDuration: "2 Months",
      bannerSubject: "Graphics Designing",
      bannerPill: "For Digital Marketing Course",
      duration: "2 Months",
      format: "Practical + AI-Enhanced",
      level: "Beginner to Intermediate",
      students: "920+ Enrolled",
      syllabus: [
        "Design Philosophy & Color Harmonies",
        "Ad Creative Layouts & Copy Overlays",
        "Performance Display Banners & A/B Creative Formats",
        "Advanced Vector Tools & Brand Assets"
      ]
    },
    {
      slug: "advanced-seo-strategies",
      title: "Advanced SEO & Semantic Search Masterclass",
      bannerDuration: "2 Months",
      bannerSubject: "Advanced SEO",
      bannerPill: "Professional Masterclass",
      duration: "2 Months",
      format: "Practical + AI-Enhanced",
      level: "Beginner to Intermediate",
      students: "750+ Enrolled",
      syllabus: [
        "Semantic Search & Entity Architecture",
        "Technical Core Web Vitals Optimization",
        "AI-Assisted SEO Content Velocity",
        "Backlink Profiling & Authority Funnels"
      ]
    },
    {
      slug: "ai-workflow-automation",
      title: "AI Agent & Workflow Automation Bootcamp",
      bannerDuration: "2 Months",
      bannerSubject: "AI Automation",
      bannerPill: "Future-Ready Skills",
      duration: "2 Months",
      format: "Practical + AI-Enhanced",
      level: "Beginner to Intermediate",
      students: "610+ Enrolled",
      syllabus: [
        "Generative Agents & Tool Integrations",
        "Low-Code/No-Code Operation Funnels",
        "Custom GPT & LLM Fine-Tuning Labs",
        "Ethical AI Governance & Workflows"
      ]
    }
  ];

  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => {
        const itemsCount = coursesData.length;
        const visibleItems = isMobile ? 1 : (isTablet ? 2 : 3);
        const limit = itemsCount - visibleItems + 1;
        return (prev + 1) % Math.max(1, limit);
      });
    }, 3500);
    return () => clearInterval(timer);
  }, [isMobile, isTablet, coursesData.length]);

  const blogsData = [
    {
      slug: "10-ai-tools-to-transform-your-marketing-in-2026",
      title: "10 AI Tools to Transform Your Marketing in 2026",
      desc: "Discover the most powerful artificial intelligence models and workflow integrations that are completely redefining brand scaling and content velocity.",
      date: "May 12, 2026",
      image: "/blog-ai-tools.png",
      emoji: "🤖"
    },
    {
      slug: "evolution-of-seo-beyond-keywords",
      title: "The Evolution of SEO: Beyond Keywords in 2026",
      desc: "Why traditional keyword stuffing is obsolete. Learn how semantic search structures, user intent modeling, and page speed architecture dictate search rankings today.",
      date: "May 05, 2026",
      image: "/blog-seo-evolution.png",
      emoji: "📈"
    },
    {
      slug: "mastering-meta-pixel-conversions-api",
      title: "Mastering the Meta Pixel: Conversions API Setup Guide",
      desc: "A technical walkthrough on establishing robust server-side tracking to completely bypass cookie deprecation limits and skyrocket your ad creative ROI.",
      date: "Apr 28, 2026",
      image: "",
      emoji: "🎯"
    }
  ];

  const caseStudiesData = [
    { title: "Social Growth Revolution", desc: "How we increased engagement by 400% for a luxury fashion brand.", tag: "Case Study", slug: "#case-studies-list" },
    { title: "E-Commerce Scaling", desc: "Generated $2M in Q4 through targeted Meta campaigns.", tag: "Case Study", slug: "#case-studies-list" },
    { title: "B2B Lead Generation", desc: "Reduced CPL by 60% while doubling lead quality.", tag: "Case Study", slug: "#case-studies-list" }
  ];

  const testimonialsData = [
    { text: "AdVibes transformed our digital presence. Their AI-driven approach is truly revolutionary.", author: "Sarah Johnson", role: "CEO, TechPulse" },
    { text: "The team's dedication to our success is unmatched. We saw ROI within the first month.", author: "Michael Chen", role: "CMO, ElevateBrands" },
    { text: "A strategic partner that actually delivers on their promises. Highly recommended.", author: "Emma Davis", role: "Founder, StyleHub" }
  ];

  const handleCoursePrev = () => {
    setCurrentSlide((prev) => {
      const itemsCount = coursesData.length;
      const visibleItems = isMobile ? 1 : (isTablet ? 2 : 3);
      const limit = itemsCount - visibleItems + 1;
      return (prev - 1 + Math.max(1, limit)) % Math.max(1, limit);
    });
  };

  const handleCourseNext = () => {
    setCurrentSlide((prev) => {
      const itemsCount = coursesData.length;
      const visibleItems = isMobile ? 1 : (isTablet ? 2 : 3);
      const limit = itemsCount - visibleItems + 1;
      return (prev + 1) % Math.max(1, limit);
    });
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
              <img src="/biraj.svg" alt="AdVibes Team Expert" className="hero-person-img" />
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
      <section id="services" className="services reveal">
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



      {/* Courses Showcase Section */}
      <section id="training" className="training reveal">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Empower Your Team</span>
            <h2 className="section-title">Marketing Master<span style={{ color: 'var(--primary)' }}>classes</span></h2>
            <p>Practical training programs designed to keep you ahead of the digital curve.</p>
          </div>

          <div className="courses-slider-container" style={{ position: 'relative' }}>
            <button onClick={handleCoursePrev} style={{ position: 'absolute', left: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'var(--secondary)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleCourseNext} style={{ position: 'absolute', right: '-20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'var(--secondary)', color: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
              <ChevronRight size={24} />
            </button>
            <div 
              className="courses-slider-track"
              style={{
                transform: mounted 
                  ? `translateX(-${currentSlide * (isMobile ? 100 : (isTablet ? 50 : 33.333333))}%)` 
                  : 'none'
              }}
            >
              {coursesData.map((course, index) => (
                <div key={index} className="courses-slider-slide">
                  <Link href={`/courses/${course.slug}`} className="premium-course-card">
                    <div className="premium-course-banner">
                      <div className="premium-course-logo">
                        <span className="premium-course-logo-icon">🎓</span>
                        <div className="premium-course-logo-text-group">
                          <span className="premium-course-logo-title">NextLevel</span>
                          <span className="premium-course-logo-subtitle">Skills & Careers</span>
                        </div>
                      </div>
                      
                      <div className="premium-course-banner-title">
                        <span className="premium-course-duration-label">{course.bannerDuration}</span>
                        <span className="premium-course-subject-label">{course.bannerSubject}</span>
                      </div>
                      
                      <span className="premium-course-badge-pill">{course.bannerPill}</span>
                      
                      <div className="premium-course-banner-dots">
                        <span className={`premium-course-banner-dot ${index === 0 ? 'active' : ''}`}></span>
                        <span className={`premium-course-banner-dot ${index === 1 ? 'active' : ''}`}></span>
                        <span className={`premium-course-banner-dot ${index === 2 ? 'active' : ''}`}></span>
                        <span className={`premium-course-banner-dot ${index === 3 ? 'active' : ''}`}></span>
                        <span className={`premium-course-banner-dot ${index === 4 ? 'active' : ''}`}></span>
                      </div>

                      <div className="premium-course-image-space"></div>
                    </div>
                    
                    <div className="premium-course-body">
                      <h3 className="premium-course-title">{course.title}</h3>
                      
                      <div className="premium-course-specs">
                        <div className="premium-course-spec-item">
                          <Clock size={16} />
                          <span>Duration: {course.duration}</span>
                        </div>
                        <div className="premium-course-spec-item">
                          <FileText size={16} />
                          <span>Format: {course.format}</span>
                        </div>
                        <div className="premium-course-spec-item">
                          <BookOpen size={16} />
                          <span>Level: {course.level}</span>
                        </div>
                      </div>
                      
                      <span className="premium-course-btn">
                        View Details
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <Link href="/courses" className="see-more-btn" style={{ background: 'var(--secondary-dark)', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              See all courses <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Combined Insights Section */}
      <section id="insights" className="insights-combined reveal premium-gradient-bg" style={{ padding: '100px 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '4rem' }}>
            <span className="section-subtitle">Our Ecosystem</span>
            <h2 className="section-title">Insights, Proof & Stories</h2>
            <p>Explore our latest case studies, what our clients say, and our latest industry insights.</p>
          </div>
          
          <div className="insights-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem',
            alignItems: 'stretch' 
          }}>
            {/* Case Studies */}
            <div className="insight-column" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', textAlign: 'center', color: 'var(--primary)' }}>Case Studies</h3>
              <div className="premium-course-card" style={{ flexGrow: 1, padding: 0, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                   <div style={{ minWidth: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
                     <div className="premium-course-banner" style={{ minHeight: '180px', position: 'relative' }}>
                        <span className="premium-course-badge-pill" style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 2 }}>{caseStudiesData[0].tag}</span>
                        <div className="premium-course-banner-title" style={{ position: 'relative', zIndex: 2 }}>
                          <span className="premium-course-subject-label" style={{ fontSize: '1.2rem' }}>{caseStudiesData[0].title}</span>
                        </div>
                     </div>
                     <div className="premium-course-body" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                       <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', flexGrow: 1, fontSize: '1.05rem' }}>{caseStudiesData[0].desc}</p>
                       <Link href="/case-studies" className="see-more-btn" style={{ background: 'var(--secondary-dark)', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginTop: 'auto' }}>
                         View more <ArrowRight size={16} />
                       </Link>
                     </div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="insight-column" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', textAlign: 'center', color: 'var(--primary)' }}>Testimonials</h3>
              <div className="premium-course-card" style={{ flexGrow: 1, padding: 0, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                   <div style={{ minWidth: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
                     <div className="premium-course-banner" style={{ minHeight: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                        <div style={{ fontSize: '6rem', color: 'var(--primary)', lineHeight: 1, opacity: 0.8, position: 'relative', zIndex: 2 }}>"</div>
                     </div>
                     <div className="premium-course-body" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                       <p style={{ fontStyle: 'italic', color: 'white', marginBottom: '1.5rem', flexGrow: 1, fontSize: '1.05rem', textAlign: 'center' }}>{testimonialsData[0].text}</p>
                       <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                         <h4 style={{ color: 'var(--primary)', margin: 0, fontSize: '1.1rem' }}>{testimonialsData[0].author}</h4>
                         <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{testimonialsData[0].role}</span>
                       </div>
                       <Link href="/about#testimonials" className="see-more-btn" style={{ background: 'var(--secondary-dark)', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginTop: 'auto' }}>
                         View more <ArrowRight size={16} />
                       </Link>
                     </div>
                   </div>
                 </div>
              </div>
            </div>

            {/* Blog */}
            <div className="insight-column" style={{ display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', textAlign: 'center', color: 'var(--primary)' }}>Blog</h3>
              <div className="premium-course-card" style={{ flexGrow: 1, padding: 0, overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                 <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                   <div style={{ minWidth: '100%', flex: 1, display: 'flex', flexDirection: 'column' }}>
                     <div className="premium-course-banner" style={{ minHeight: '180px', background: blogsData[0].image ? `url(${blogsData[0].image}) center/cover` : undefined, position: 'relative' }}>
                        {!blogsData[0].image && (
                          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', zIndex: 1 }}>
                            {blogsData[0].emoji}
                          </div>
                        )}
                     </div>
                     <div className="premium-course-body" style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                       <span style={{ color: 'var(--primary)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>{blogsData[0].date}</span>
                       <h3 className="premium-course-title" style={{ fontSize: '1.1rem', marginBottom: '1rem', flexGrow: 1 }}>{blogsData[0].title}</h3>
                       <Link href="/blog" className="see-more-btn" style={{ background: 'var(--secondary-dark)', color: 'white', padding: '14px 32px', borderRadius: '50px', fontWeight: 700, fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginTop: 'auto' }}>
                         View more <ArrowRight size={16} />
                       </Link>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <CTASection />
    </main>
  );
}
