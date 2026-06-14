import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronRight, Clock, Users, BookOpen, CheckCircle2 } from 'lucide-react';
import EnrollForm from '@/components/EnrollForm';

// We duplicate the data here for simplicity of SSG
const coursesData = [
  {
    slug: "digital-marketing-training",
    title: "Digital Marketing Training",
    subtitle: "Beginner to Advanced",
    desc: "Master the core fundamentals and advanced optimization methodologies of modern digital marketing. Ideal for founders and aspiring marketing directors. This comprehensive program covers everything from baseline SEO to complex paid media strategies, ensuring you leave with actionable skills.",
    duration: "8 Weeks",
    students: "1,200+ Enrolled",
    syllabus: [
      "Audience Intelligence & Profiling",
      "Copywriting & Landing Page Architecture",
      "Multi-Channel Funnel Planning",
      "Performance Tracking & Reporting",
      "Advanced SEO Strategies",
      "Email Marketing Automations",
    ],
    outcomes: [
      "Build a complete multi-channel campaign from scratch",
      "Understand and utilize advanced Google Analytics 4 tracking",
      "Gain a solid framework for conversion rate optimization"
    ]
  },
  {
    slug: "ai-marketing-training",
    title: "AI in Marketing Training",
    subtitle: "Future-Ready Skills",
    desc: "Learn how to leverage AI tools to transform your marketing efficiency and results. Understand generative models, workflow automations, and AI agents. Step into the future and 10x your output without burning out your team.",
    duration: "4 Weeks",
    students: "850+ Enrolled",
    syllabus: [
      "Prompt Engineering & Automation",
      "AI Video & Imagery Production",
      "Copy & SEO Automation Workflows",
      "AI Agents for Lead Generation",
      "Building Custom GPTs for Brand Voice",
      "Ethical Considerations & AI Governance"
    ],
    outcomes: [
      "Automate repetitive content creation workflows",
      "Generate high-quality video and image assets at scale",
      "Implement AI agents into your daily operational stack"
    ]
  },
  {
    slug: "workshops-certifications",
    title: "Workshops & Certifications",
    subtitle: "Hands-on Experience",
    desc: "Practical interactive cohort workshops that issue industry-accredited certifications. Designed to get teams hands-on experience solving real-world case studies in a controlled, expert-led environment.",
    duration: "2 Weeks",
    students: "500+ Enrolled",
    syllabus: [
      "Live Cohort Strategy Build",
      "Campaign Auditing Lab",
      "Interactive Dynamic Playbooks",
      "Final Certification Exam Prep"
    ],
    outcomes: [
      "Walk away with a verified industry certification",
      "Solve a real-world case study with a team of peers",
      "Receive personalized feedback from agency leaders"
    ]
  },
  {
    slug: "meta-ads-scale-blueprint",
    title: "Meta Ads Scale Blueprint",
    subtitle: "Professional Masterclass",
    desc: "An advanced masterclass dedicated strictly to Facebook, Instagram, and WhatsApp marketing. Learn the scaling formulas used by multi-million dollar brands to break through ROAS ceilings.",
    duration: "6 Weeks",
    students: "920+ Enrolled",
    syllabus: [
      "Pixel & Conversions API Setup",
      "A/B Testing Frameworks",
      "CBO/ABO Bid Strategy Management",
      "Lookalike & Retargeting Setup",
      "Scaling Horizontally vs. Vertically"
    ],
    outcomes: [
      "Implement server-side tracking seamlessly",
      "Scale campaigns without breaking the learning phase",
      "Master ad creative fatigue management"
    ]
  }
];

export function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CourseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const course = coursesData.find((c) => c.slug === resolvedParams.slug);

  if (!course) {
    notFound();
  }

  return (
    <main style={{ backgroundColor: '#fafaf8', minHeight: '100vh', paddingBottom: '100px' }}>
      {/* Header Banner */}
      <div className="course-detail-header">
        <div className="container">
          <div className="course-breadcrumbs">
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <Link href="/courses">Courses</Link>
            <ChevronRight size={14} />
            <span>{course.title}</span>
          </div>
          <h1>{course.title}</h1>
          <p className="course-subtitle">{course.subtitle}</p>
          <div className="course-badges">
            <div className="course-badge"><Clock size={16} /> {course.duration}</div>
            <div className="course-badge"><Users size={16} /> {course.students}</div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: '40px' }}>
        <div className="course-detail-grid">
          
          {/* Left Column: Details */}
          <div className="course-detail-content">
            <div className="course-banner-img">
              <Image 
                src={`/${course.slug}.png`} 
                alt={course.title}
                width={800}
                height={450}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                priority
              />
            </div>

            <section className="course-section">
              <h2>About This Course</h2>
              <p>{course.desc}</p>
            </section>

            <section className="course-section">
              <h2>What You'll Learn</h2>
              <div className="course-outcomes">
                {course.outcomes.map((outcome, idx) => (
                  <div key={idx} className="outcome-item">
                    <CheckCircle2 className="outcome-icon" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="course-section">
              <h2>Course Syllabus</h2>
              <div className="course-syllabus">
                {course.syllabus.map((item, idx) => (
                  <div key={idx} className="syllabus-item">
                    <div className="syllabus-number">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                    <div className="syllabus-text">{item}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Form */}
          <div className="course-detail-sidebar">
            <div className="sticky-sidebar">
              <EnrollForm defaultCourse={course.slug} />

              <div className="help-widget">
                <BookOpen className="help-icon" size={24} />
                <h4>Need Help Deciding?</h4>
                <p>Not sure if this course is right for your career path? Speak with our academic advisor.</p>
                <Link href="/enquiry" className="help-link">Contact Advisor →</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
