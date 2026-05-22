'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, Filter, Tag, User } from 'lucide-react';
import CTASection from '@/components/CTASection';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI Marketing', 'SEO', 'Paid Advertising', 'Branding'];

  const posts = [
    {
      id: 1,
      title: "10 AI Tools to Transform Your Marketing in 2026",
      desc: "Discover the most powerful artificial intelligence models and workflow integrations that are completely redefining brand scaling and content velocity.",
      date: "May 12, 2026",
      readTime: "6 Min Read",
      author: "AdVibes Team",
      category: "AI Marketing",
      image: "🤖"
    },
    {
      id: 2,
      title: "The Evolution of SEO: Beyond Keywords in 2026",
      desc: "Why traditional keyword stuffing is obsolete. Learn how semantic search structures, user intent modeling, and page speed architecture dictate search rankings today.",
      date: "May 05, 2026",
      readTime: "8 Min Read",
      author: "Marcus Vance",
      category: "SEO",
      image: "📈"
    },
    {
      id: 3,
      title: "Mastering the Meta Pixel: Conversions API Setup Guide",
      desc: "A technical walkthrough on establishing robust server-side tracking to completely bypass cookie deprecation limits and skyrocket your ad creative ROI.",
      date: "Apr 28, 2026",
      readTime: "10 Min Read",
      author: "Sarah Sterling",
      category: "Paid Advertising",
      image: "🎯"
    },
    {
      id: 4,
      title: "Modern Brand Architecture: Crafting Visual Identities That Convert",
      desc: "Analyze the core visual components and cognitive strategies that top 1% tech startups use to command immense authority and visual recognition in saturated spaces.",
      date: "Apr 15, 2026",
      readTime: "7 Min Read",
      author: "Elena Rostova",
      category: "Branding",
      image: "✨"
    },
    {
      id: 5,
      title: "Dynamic Prompts: Custom AI Agent Orchestrations for Growth Teams",
      desc: "How we script advanced API integrations to automatically scrape inbound requests, scoring leads, and constructing personalized outbound sequences in milliseconds.",
      date: "Mar 30, 2026",
      readTime: "9 Min Read",
      author: "AdVibes Team",
      category: "AI Marketing",
      image: "⚡"
    },
    {
      id: 6,
      title: "Scaling Google Search Campaigns: Advanced Bidding Methods",
      desc: "Deep dive into target cost-per-acquisition (tCPA) configurations and smart-bidding optimizations to systematically dominate search engine results without exceeding budget caps.",
      date: "Mar 18, 2026",
      readTime: "8 Min Read",
      author: "Marcus Vance",
      category: "Paid Advertising",
      image: "🔍"
    }
  ];

  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <main className="blog-page-wrapper">
      {/* Inner Hero Section */}
      <section className="inner-hero" style={{ background: 'var(--gradient-hero)', color: 'white', padding: '160px 0 80px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div className="container">
          <span className="section-subtitle" style={{ color: 'var(--primary)', letterSpacing: '2px' }}>Insights & Guides</span>
          <h1 className="line-bottom" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginBottom: '1.5rem', background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            The AdVibes Blog
          </h1>
          <p style={{ maxWidth: '650px', margin: '0 auto', fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
            We write analytical guides, tech reviews, and advanced growth marketing playbooks to help modern founders systematically build high-yield brand authority.
          </p>
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '130%', height: '130%', background: 'radial-gradient(circle, rgba(255, 214, 10, 0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }}></div>
      </section>

      {/* Blog Feed Section */}
      <section className="premium-gradient-bg" style={{ padding: '80px 0 100px' }}>
        <div className="container">
          {/* Interactive Tag Filter Bar */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--secondary-dark)', display: 'flex', alignItems: 'center', gap: '6px', marginRight: '1rem' }}>
              <Filter size={16} /> Filter Topics:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '50px',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  border: '1px solid rgba(0, 53, 102, 0.1)',
                  background: selectedCategory === cat ? 'var(--secondary)' : 'white',
                  color: selectedCategory === cat ? 'white' : 'var(--secondary-dark)',
                  boxShadow: selectedCategory === cat ? '0 10px 20px rgba(0, 53, 102, 0.15)' : 'none',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Posts */}
          <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 360px), 1fr))', gap: '2.5rem' }}>
            {filteredPosts.map((post) => (
              <article key={post.id} className="blog-card card glass-card card-glow-hover" style={{ borderRadius: '20px', padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Simulated Blog Header / Illustration */}
                <div style={{ background: 'var(--secondary-dark)', height: '180px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4.5rem', position: 'relative' }}>
                  {post.image}
                  <span style={{ position: 'absolute', bottom: '15px', right: '15px', padding: '4px 12px', background: 'var(--primary)', color: '#000814', fontSize: '0.75rem', fontWeight: 800, borderRadius: '50px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {post.category}
                  </span>
                </div>

                {/* Content Block */}
                <div className="responsive-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                  <div>
                    {/* Meta Indicators */}
                    <div style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.25rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <Calendar size={14} /> {post.date}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <Clock size={14} /> {post.readTime}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary-dark)', fontWeight: 800, marginBottom: '1rem', lineHeight: '1.3' }}>
                      {post.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', lineHeight: '1.6', marginBottom: '2rem' }}>
                      {post.desc}
                    </p>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem', marginTop: 'auto' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-dark)', fontWeight: 600 }}>
                      <User size={14} style={{ color: 'var(--primary)' }} /> {post.author}
                    </span>
                    <a href="#" className="link-btn" style={{ margin: 0, fontSize: '0.9rem', color: 'var(--secondary)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      Read More <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
              No articles found in this category. Check back soon!
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
