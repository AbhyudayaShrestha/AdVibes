'use client';

import Link from 'next/link';
import {
  GraduationCap,
  Cpu,
  Award,
  BookOpen,
  Target,
  ArrowRight,
  Clock,
  Users2,
  Calendar,
  Users,
  FileText
} from 'lucide-react';
import CTASection from '@/components/CTASection';

export default function CoursesPage() {
  const courses = [
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

  return (
    <main className="courses-page-wrapper">
      {/* Page Hero */}
      <section className="inner-hero" style={{ background: 'var(--gradient-hero)', color: 'white', padding: '160px 0 80px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="container reveal">
          <span className="section-subtitle" style={{ color: 'var(--primary)', letterSpacing: '2px' }}>Empower Your Brand</span>
          <h1 className="line-bottom" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '1.5rem', background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Marketing Masterclasses
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
            Practical cohort training programs designed to keep you and your team ahead of the fast-paced digital curve. Learn directly from active industry operators.
          </p>
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '130%', height: '130%', background: 'radial-gradient(circle, rgba(255, 214, 10, 0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }}></div>
      </section>

      {/* Grid of Courses */}
      <section className="all-courses-section premium-gradient-bg" style={{ padding: '100px 0' }}>
        <div className="container reveal" style={{ animationDelay: '0.1s' }}>
          <div className="course-card-grid">
            {courses.map((course, index) => (
              <Link key={index} href={`/courses/${course.slug}`} className="premium-course-card">
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
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section style={{ background: 'white', padding: '100px 0' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '5rem' }}>
            <span className="section-subtitle">Academic Excellence</span>
            <h2 className="section-title">Why Professionals Learn From Us</h2>
            <p>Our educational program combines theory with direct practical execution to ensure long-term retention.</p>
          </div>

          <div className="responsive-three-col" style={{ textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '1rem' }}>92%</div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--secondary-dark)', marginBottom: '0.5rem', fontWeight: 700 }}>Completion Rate</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Engaging live formats that keep team members motivated and involved all the way to completion.</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '1rem' }}>4.9/5</div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--secondary-dark)', marginBottom: '0.5rem', fontWeight: 700 }}>Student Rating</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Highly rated by marketing heads, performance specialists, and tech startup founders globally.</p>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '1rem' }}>14 Days</div>
              <h4 style={{ fontSize: '1.2rem', color: 'var(--secondary-dark)', marginBottom: '0.5rem', fontWeight: 700 }}>ROI Payback</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Graduates routinely report applying insights that cover the course cost within their first two weeks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process" style={{ background: '#fafaf8' }}>
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

      <CTASection />
    </main>
  );
}
