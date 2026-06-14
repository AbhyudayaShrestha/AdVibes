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
  Users2
} from 'lucide-react';
import CTASection from '@/components/CTASection';

export default function CoursesPage() {
  const courses = [
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

  return (
    <main className="courses-page-wrapper">
      {/* Page Hero */}
      <section className="inner-hero" style={{ background: 'var(--gradient-hero)', color: 'white', padding: '160px 0 80px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="container">
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
        <div className="container">
          <div className="responsive-two-col">
            {courses.map((course, index) => (
              <Link key={index} href={`/courses/${course.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column' }}>
                <div className="training-card card glass-card card-glow-hover responsive-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '24px', flex: 1, cursor: 'pointer' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                      <div style={{ color: 'var(--secondary)', background: 'rgba(0, 53, 102, 0.05)', padding: '1.25rem', borderRadius: '20px' }}>
                        {course.icon}
                      </div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-dark)', textTransform: 'uppercase', letterSpacing: '1.5px', background: 'rgba(255, 214, 10, 0.1)', padding: '6px 14px', borderRadius: '50px' }}>
                        {course.subtitle}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary-dark)', marginBottom: '1.25rem', fontWeight: 800 }}>{course.title}</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.7' }}>{course.desc}</p>

                    {/* Course Details Bar */}
                    <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid #e2e8f0', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                        <Clock size={16} /> {course.duration}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                        <Users2 size={16} /> {course.students}
                      </span>
                    </div>

                    {/* Syllabus / Syllabus highlights */}
                    <div style={{ marginBottom: '2.5rem' }}>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--secondary-dark)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Syllabus Highlights</h4>
                      <ul className="syllabus-grid">
                        {course.syllabus.map((topic, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'rgba(0,0,0,0.7)', fontWeight: 500 }}>
                            <span style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }}></span> {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <span className="btn btn-primary" style={{ width: '100%', padding: '16px', fontWeight: 700, textAlign: 'center' }}>
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
