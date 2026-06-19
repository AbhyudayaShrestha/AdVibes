import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Clock, Users, Globe, BookOpen } from 'lucide-react';
import CurriculumAccordion from '@/components/CurriculumAccordion';

// Dynamic courses database for SSG
const coursesData = [
  {
    slug: "content-creation-mastery",
    title: "Content Creation Mastery Course (Photoshoot + Video)",
    subtitle: "Mastery Course + Video",
    desc: "Master the art of planning, executing, and optimizing high-impact multimedia content. Learn photoshoot frameworks, professional video editing, and AI-assisted creation flow. This course is built to get you hands-on with camera gear, lighting setups, editing software, and generative AI tools to maximize content velocity.",
    duration: "2 Months",
    students: "850+ Enrolled",
    syllabus: [
      "Audience Intent & Viral Hook Design",
      "Camera Settings, Lighting & Photoshoot Layout",
      "Video Editing & Color Grading Workflows",
      "AI-Enhanced Asset Generation Tools"
    ],
    outcomes: [
      "Plan and execute photoshoots and short-form videos from scratch",
      "Use advanced AI tools to accelerate content volume 5x",
      "Build a portfolio-grade content strategy for client acquisition",
      "Receive official certification from AdVibes Academy"
    ]
  },
  {
    slug: "digital-marketing-beginners",
    title: "Digital Marketing Course for Beginners",
    subtitle: "Course for Beginners",
    desc: "A solid baseline for anyone looking to break into digital marketing. Acquire fundamental skills in SEO, social media management, organic positioning, and introductory paid search campaigns. Ideal for startup founders, marketing associates, and career switchers.",
    duration: "2 Months",
    students: "1,200+ Enrolled",
    syllabus: [
      "Digital Marketing Foundations & Channels",
      "Organic SEO & Content Funnel Strategy",
      "Social Media Management & Community Setup",
      "Intro to Meta & Google Ads Scaling"
    ],
    outcomes: [
      "Analyze client websites and run baseline SEO audits",
      "Build operational multi-channel organic campaigns",
      "Gain certificates recognized by active modern startups",
      "Get direct mentorship from senior operators"
    ]
  },
  {
    slug: "graphics-designing",
    title: "Graphics Designing for Digital Marketing Course",
    subtitle: "For Digital Marketing Course",
    desc: "Bridge the gap between design theory and performance marketing. Learn to construct conversion-focused display designs, high-converting social media templates, and professional brand guides. Designed specifically for modern ad layouts and creative testing workflows.",
    duration: "2 Months",
    students: "920+ Enrolled",
    syllabus: [
      "Design Philosophy & Color Harmonies",
      "Ad Creative Layouts & Copy Overlays",
      "Performance Display Banners & A/B Creative Formats",
      "Advanced Vector Tools & Brand Assets"
    ],
    outcomes: [
      "Design client pitch templates and ad grids that convert",
      "Produce high-quality brand assets optimized for web & print",
      "Create high-ROAS social media ad designs in record time",
      "Establish a robust production portfolio on Behance / Dribbble"
    ]
  },
  {
    slug: "advanced-seo-strategies",
    title: "Advanced SEO & Semantic Search Masterclass",
    subtitle: "Professional Masterclass",
    desc: "Understand how search engines model user intent beyond keywords. Learn semantic schemas, entity relations, page speed speedups, and algorithmic link building strategies to rank first.",
    duration: "2 Months",
    students: "750+ Enrolled",
    syllabus: [
      "Semantic Search & Entity Architecture",
      "Technical Core Web Vitals Optimization",
      "AI-Assisted SEO Content Velocity",
      "Backlink Profiling & Authority Funnels"
    ],
    outcomes: [
      "Conduct in-depth technical schema and Core Web Vitals audits",
      "Automate high-velocity content production with AI tools",
      "Establish a high-authority backlink outreach funnel",
      "Develop data-driven keyword maps that capture purchase intent"
    ]
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Agent & Workflow Automation Bootcamp",
    subtitle: "Future-Ready Skills",
    desc: "Learn to build multi-agent pipelines and leverage custom LLMs to automate manual marketing tasks. Bridge the gap between low-code setups and dynamic generative systems.",
    duration: "2 Months",
    students: "610+ Enrolled",
    syllabus: [
      "Generative Agents & Tool Integrations",
      "Low-Code/No-Code Operation Funnels",
      "Custom GPT & LLM Fine-Tuning Labs",
      "Ethical AI Governance & Workflows"
    ],
    outcomes: [
      "Deploy custom AI agents that automate routine lead generation",
      "Establish low-code pipelines saving your team 15+ hours weekly",
      "Fine-tune customized LLM instances to match brand copy",
      "Set up dynamic automated alerts for campaign tracking"
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

  // Google Form Link placeholder for course enrollment
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSfD_course_enrollment/viewform";

  return (
    <main className="course-detail-dark-wrapper">
      <div className="container">
        
        {/* Breadcrumbs */}
        <div className="course-breadcrumbs reveal" style={{ justifyContent: 'flex-start', marginBottom: '2.5rem', opacity: 0.6 }}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <ChevronRight size={14} style={{ margin: '0 8px' }} />
          <Link href="/courses" style={{ color: 'white', textDecoration: 'none' }}>Courses</Link>
          <ChevronRight size={14} style={{ margin: '0 8px' }} />
          <span style={{ color: '#a78bfa', fontWeight: 600 }}>{course.title}</span>
        </div>

        {/* Intro Grid */}
        <div className="course-detail-intro-new">
          <div className="course-detail-info-new reveal">
            <h1>{course.title}</h1>
            <p>{course.desc}</p>
            
            {/* Pills Specifications */}
            <div className="course-detail-badges-new">
              <div className="course-detail-badge-new">
                <Clock size={16} />
                <span>{course.duration}</span>
              </div>
              <div className="course-detail-badge-new">
                <Globe size={16} />
                <span>Online Available</span>
              </div>
              <div className="course-detail-badge-new green-pill">
                <Users size={16} />
                <span>Physical Class Available</span>
              </div>
            </div>

            {/* Enroll Now Link Button */}
            <a 
              href="#" 
              className="course-enroll-btn-new"
            >
              Enroll Now
            </a>
          </div>

          {/* Graphic Banner space placeholder on the right */}
          <div className="course-detail-visual-new reveal" style={{ animationDelay: '0.2s' }}>
            {/* Styled blank block for user images */}
          </div>
        </div>

        {/* Course Highlights */}
        <div className="course-highlights-box-new reveal" style={{ animationDelay: '0.1s' }}>
          <div className="highlights-title-new">
            <div className="highlights-bar-new"></div>
            <h3>Course Highlights</h3>
          </div>
          
          <div className="highlights-grid-new">
            {course.outcomes.map((outcome, idx) => (
              <div key={idx} className="highlight-card-new">
                <div className="highlight-bullet-new"></div>
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Course Curriculum */}
        <div className="course-curriculum-box-new reveal" style={{ animationDelay: '0.2s' }}>
          <div className="highlights-title-new">
            <div className="highlights-bar-new" style={{ background: '#3b82f6' }}></div>
            <h3>Course Curriculum</h3>
          </div>
          <p className="curriculum-subtext-new">Detailed breakdown of lessons and topics covered</p>

          <CurriculumAccordion syllabus={course.syllabus} />
        </div>

      </div>
    </main>
  );
}
