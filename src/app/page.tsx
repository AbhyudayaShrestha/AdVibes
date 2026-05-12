import Navbar from '@/components/Navbar';
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
  Layout,
  MessageSquare
} from 'lucide-react';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Digital Marketing Powered by <span className="highlight-italic">AI & Real Strategy</span>
            </h1>
            <p className="hero-description" style={{ color: 'rgba(255,255,255,0.8)' }}>
              We combine data science with creative intuition to unlock your brand's full potential in a digital-first world.
            </p>
            <div className="hero-btns">
              <a href="#contact" className="btn btn-primary">Get Started Today</a>
              <a href="#portfolio" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'white' }}>View Our Work</a>
            </div>
          </div>
          <div className="hero-image reveal">
            <div className="image-wrapper" style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
              <img src="/hero-bg.png" alt="Modern AdVibes Office" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-title">Innovate with <span style={{ color: 'var(--primary)' }}>Purpose</span></h2>
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
              desc="Cutting-edge AI-generated multimedia content for modern brands."
            />
            <ServiceCard 
              icon={<Search />} 
              title="SEO Optimization" 
              desc="Data-driven search engine optimization to boost your organic visibility."
            />
            <ServiceCard 
              icon={<Target />} 
              title="Meta Ads" 
              desc="Strategic Facebook and Instagram advertising focused on ROI."
            />
            <ServiceCard 
              icon={<PlayCircle />} 
              title="Google Ads" 
              desc="Targeted PPC campaigns that place your brand in front of ready-to-buy customers."
            />
            <ServiceCard 
              icon={<Palette />} 
              title="Graphic Designing" 
              desc="Visual storytelling through professional graphic design and branding."
            />
            <ServiceCard 
              icon={<PenTool />} 
              title="Content Creation" 
              desc="Compelling copy and multimedia content that resonates with your audience."
            />
            <ServiceCard 
              icon={<Lightbulb />} 
              title="Branding & Strategy" 
              desc="Long-term brand positioning and marketing strategies that drive growth."
            />
            <ServiceCard 
              icon={<Zap />} 
              title="AI-integrated Marketing" 
              desc="Harnessing artificial intelligence to automate and optimize your marketing funnel."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="why-us">
        <div className="container why-container">
          <div className="why-content">
            <span className="section-subtitle">About Us</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Why Choose AdVibes?</h2>
            <p className="mb-2">We don't just provide services; we partner with you to achieve measurable success.</p>
            <ul className="why-list">
              <li><CheckCircle className="icon" /> Data-Driven decision making</li>
              <li><CheckCircle className="icon" /> Cutting-edge AI technology integration</li>
              <li><CheckCircle className="icon" /> Dedicated team of specialists</li>
              <li><CheckCircle className="icon" /> Transparent reporting and analytics</li>
            </ul>
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

      {/* Training Section */}
      <section id="training" className="training">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Empower Your Team</span>
            <h2 className="section-title">Marketing Master<span style={{ color: 'var(--primary)' }}>classes</span></h2>
            <p>Practical training programs designed to keep you ahead of the digital curve.</p>
          </div>
          
          <div className="training-grid">
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
            <TrainingCard 
              icon={<Award />} 
              title="Workshops & Certifications" 
              subtitle="Hands-on Experience"
              desc="Practical workshops that provide industry-recognized certifications."
            />
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Work</span>
            <h2 className="section-title">Success Stories</h2>
          </div>
          <div className="portfolio-grid">
            <div className="portfolio-item card">
              <div className="portfolio-tag">Case Study</div>
              <h3>Social Growth Revolution</h3>
              <p>How we increased engagement by 400% for a luxury fashion brand.</p>
              <a href="#" className="link-btn">Read More <ArrowRight className="icon-sm" /></a>
            </div>
            <div className="portfolio-item card">
              <div className="portfolio-tag">SEO</div>
              <h3>The Organic Surge</h3>
              <p>Dominating search results for a fintech startup in just 6 months.</p>
              <a href="#" className="link-btn">Read More <ArrowRight className="icon-sm" /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Testimonials</span>
            <h2 className="section-title">What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            <TestimonialCard 
              text="AdVibes transformed our digital presence. Their AI-driven approach is truly revolutionary."
              author="Sarah Johnson"
              role="CEO, TechPulse"
            />
            <TestimonialCard 
              text="The results were beyond our expectations. A highly professional team that delivers on their promises."
              author="Michael Chen"
              role="Marketing Director, Bloom"
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="blog">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Insights</span>
            <h2 className="section-title">Latest From Our Blog</h2>
            <p>Stay ahead with our latest tips, trends, and strategies in digital marketing.</p>
          </div>
          <div className="blog-grid">
            <div className="blog-card card">
              <div className="blog-image"></div>
              <div className="blog-content">
                <span className="blog-date">May 12, 2026</span>
                <h3>10 AI Tools to Transform Your Marketing in 2026</h3>
                <p>Discover the most powerful AI tools that are redefining how brands engage with customers.</p>
                <a href="#" className="link-btn">Read More <ArrowRight className="icon-sm" /></a>
              </div>
            </div>
            <div className="blog-card card">
              <div className="blog-image"></div>
              <div className="blog-content">
                <span className="blog-date">May 05, 2026</span>
                <h3>The Evolution of SEO: Beyond Keywords</h3>
                <p>Why semantic search and user intent are the new pillars of search engine success.</p>
                <a href="#" className="link-btn">Read More <ArrowRight className="icon-sm" /></a>
              </div>
            </div>
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

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container contact-container">
          <div className="contact-box" style={{ background: 'var(--gradient-hero)', border: '1px solid rgba(255,214,10,0.2)' }}>
            <h2>Join the growth revolution.</h2>
            <p>Ready to take your brand to the next level? Let's talk about your future.</p>
            <div className="contact-btns">
              <button className="btn btn-primary">Schedule a Call</button>
              <button className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}>Contact Support</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" style={{ background: '#000814', color: 'white', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo" style={{ color: 'var(--primary)' }}>
              Ad<span>Vibes</span>
            </div>
            <div className="footer-links">
              <a href="#" style={{ color: 'rgba(255,255,255,0.6)' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'rgba(255,255,255,0.6)' }}>Terms of Service</a>
              <a href="#contact" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact Us</a>
            </div>
            <div className="footer-social">
              {/* Social icons */}
            </div>
          </div>
          <div className="footer-bottom">
            <p style={{ color: 'rgba(255,255,255,0.4)' }}>&copy; {new Date().getFullYear()} AdVibes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="service-card">
      <div className="icon-box">{icon}</div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

function TrainingCard({ icon, title, subtitle, desc }: { icon: React.ReactNode, title: string, subtitle: string, desc: string }) {
  return (
    <div className="training-card card" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="icon-box" style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', color: 'var(--primary)' }}>{icon}</div>
      <h4>{subtitle}</h4>
      <h3>{title}</h3>
      <p>{desc}</p>
      <button className="btn btn-primary" style={{ marginTop: '1.5rem', width: '100%' }}>Enroll Now</button>
    </div>
  );
}

function TestimonialCard({ text, author, role }: { text: string, author: string, role: string }) {
  return (
    <div className="testimonial-card">
      <p>"{text}"</p>
      <div className="testimonial-author">
        <h4>{author}</h4>
        <span>{role}</span>
      </div>
    </div>
  );
}
