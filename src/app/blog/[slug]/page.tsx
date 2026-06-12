import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ChevronRight, Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import CTASection from '@/components/CTASection';

const posts = [
  {
    id: 1,
    slug: "10-ai-tools-to-transform-your-marketing-in-2026",
    title: "10 AI Tools to Transform Your Marketing in 2026",
    desc: "Discover the most powerful artificial intelligence models and workflow integrations that are completely redefining brand scaling and content velocity.",
    date: "May 12, 2026",
    readTime: "6 Min Read",
    author: "AdVibes Team",
    category: "AI Marketing",
    image: "/blog-ai-tools.png",
    emoji: "🤖",
    content: `
      <h2>The New Era of Marketing Automation</h2>
      <p>Artificial intelligence has moved beyond a buzzword—it is now the foundational layer of any modern growth team. Let's explore the top 10 AI tools that are actively moving the needle for our clients in 2026.</p>
      
      <h3>1. Generative Text Engines for SEO Content</h3>
      <p>Content velocity matters. By utilizing customized LLMs trained specifically on your brand guidelines, your team can produce highly optimized long-form blog articles in minutes instead of days.</p>
      
      <h3>2. AI-Driven Ad Creatives</h3>
      <p>Dynamic creative testing is standard, but dynamic creative generation is the future. Tools that automatically iterate on ad visuals based on real-time ROAS feedback are saving thousands in wasted ad spend.</p>
      
      <blockquote>
        "The teams that integrate AI into their operational layer will simply out-produce those who don't. It's an output game." — Leroy AI Strategy Team
      </blockquote>

      <h3>3. Predictive Analytics Platforms</h3>
      <p>Understanding where a user is in the funnel before they even engage with your site allows for hyper-personalized messaging that skyrockets conversion rates.</p>

      <h2>Conclusion</h2>
      <p>Don't be overwhelmed by the sheer volume of tools. Start by automating your most repetitive bottleneck and scale from there.</p>
    `
  },
  {
    id: 2,
    slug: "evolution-of-seo-beyond-keywords",
    title: "The Evolution of SEO: Beyond Keywords in 2026",
    desc: "Why traditional keyword stuffing is obsolete. Learn how semantic search structures, user intent modeling, and page speed architecture dictate search rankings today.",
    date: "May 05, 2026",
    readTime: "8 Min Read",
    author: "Marcus Vance",
    category: "SEO",
    image: "/blog-seo-evolution.png",
    emoji: "📈",
    content: `
      <h2>Semantic Search is Here to Stay</h2>
      <p>The days of arbitrarily placing keywords into H2 tags are over. Search engines now process information contextually, mimicking human reasoning.</p>
      
      <h3>Focus on Topical Authority</h3>
      <p>Rather than trying to rank for a single high-volume keyword, brands must focus on owning the entire topic cluster. Building interconnected nodes of content signals true expertise to search engines.</p>
      
      <h3>User Intent is the New Algorithm</h3>
      <p>Does the user want to buy, learn, or compare? Serving the right content structure based on intent is the single biggest ranking factor going forward.</p>
    `
  },
  {
    id: 3,
    slug: "mastering-meta-pixel-conversions-api",
    title: "Mastering the Meta Pixel: Conversions API Setup Guide",
    desc: "A technical walkthrough on establishing robust server-side tracking to completely bypass cookie deprecation limits and skyrocket your ad creative ROI.",
    date: "Apr 28, 2026",
    readTime: "10 Min Read",
    author: "Sarah Sterling",
    category: "Paid Advertising",
    image: "",
    emoji: "🎯",
    content: `
      <h2>The Cookie is Dead. Long Live Server-Side Tracking.</h2>
      <p>With aggressive browser privacy updates, relying solely on client-side pixel tracking means you are losing up to 30% of your conversion data.</p>
      
      <h3>What is the Conversions API (CAPI)?</h3>
      <p>CAPI establishes a direct connection between your server and Meta's servers, allowing you to pass conversion events securely and accurately.</p>

      <h3>Step-by-Step Implementation</h3>
      <p>1. Authenticate your domain.</p>
      <p>2. Set up your Google Tag Manager Server Container.</p>
      <p>3. Map your standard events (Purchase, Add to Cart, Lead) server-side.</p>
    `
  },
  {
    id: 4,
    slug: "modern-brand-architecture-visual-identities",
    title: "Modern Brand Architecture: Crafting Visual Identities That Convert",
    desc: "Analyze the core visual components and cognitive strategies that top 1% tech startups use to command immense authority and visual recognition in saturated spaces.",
    date: "Apr 15, 2026",
    readTime: "7 Min Read",
    author: "Elena Rostova",
    category: "Branding",
    image: "",
    emoji: "✨",
    content: `
      <h2>Designing for Trust</h2>
      <p>Your brand's visual identity is the first filter of trust. If a user lands on a disorganized site, they intuitively project that disorganization onto your product.</p>
      
      <h3>Consistency Across Every Touchpoint</h3>
      <p>From your Instagram reels to your transactional emails, your typography, color palette, and tone must be identical. Consistency breeds familiarity, and familiarity breeds sales.</p>
    `
  },
  {
    id: 5,
    slug: "dynamic-prompts-custom-ai-agents",
    title: "Dynamic Prompts: Custom AI Agent Orchestrations for Growth Teams",
    desc: "How we script advanced API integrations to automatically scrape inbound requests, scoring leads, and constructing personalized outbound sequences in milliseconds.",
    date: "Mar 30, 2026",
    readTime: "9 Min Read",
    author: "AdVibes Team",
    category: "AI Marketing",
    image: "",
    emoji: "⚡",
    content: `
      <h2>Automating Inbound Qualification</h2>
      <p>Speed to lead is everything. By piping form fills directly into an LLM via API, we can score leads based on company size and budget before a human ever sees the ticket.</p>
      
      <h3>The Orchestration Layer</h3>
      <p>Connecting your CRM to a tool like Zapier or Make, and then routing that data through OpenAI, allows for truly custom email drafts that sales reps just have to review and hit 'send'.</p>
    `
  },
  {
    id: 6,
    slug: "scaling-google-search-campaigns",
    title: "Scaling Google Search Campaigns: Advanced Bidding Methods",
    desc: "Deep dive into target cost-per-acquisition (tCPA) configurations and smart-bidding optimizations to systematically dominate search engine results without exceeding budget caps.",
    date: "Mar 18, 2026",
    readTime: "8 Min Read",
    author: "Marcus Vance",
    category: "Paid Advertising",
    image: "",
    emoji: "🔍",
    content: `
      <h2>The Math Behind Scale</h2>
      <p>Scaling a Google Ads campaign is not just about increasing budget. It's about feeding the smart bidding algorithm enough conversion data so it can accurately predict auction outcomes.</p>

      <h3>Structuring for tCPA Success</h3>
      <p>Consolidate your ad groups. The algorithm needs a minimum of 30 conversions per month to stabilize. Segmenting too granularly starves the system of data.</p>
    `
  }
];

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostDetail({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main style={{ backgroundColor: '#fafaf8', minHeight: '100vh' }}>
      {/* Article Header */}
      <div className="course-detail-header" style={{ padding: '160px 0 80px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="enquiry-breadcrumbs" style={{ marginBottom: '2rem' }}>
            <Link href="/">Home</Link>
            <ChevronRight size={14} />
            <Link href="/blog">Blog</Link>
            <ChevronRight size={14} />
            <span>{post.category}</span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--secondary-dark)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexWrap: 'wrap', color: '#64748b' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <User size={16} style={{ color: 'var(--primary)' }} /> {post.author}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Calendar size={16} style={{ color: 'var(--primary)' }} /> {post.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Clock size={16} style={{ color: 'var(--primary)' }} /> {post.readTime}
            </span>
          </div>
        </div>
      </div>

      <div className="container" style={{ maxWidth: '900px', padding: '0 20px', marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        {/* Featured Image / Emoji Area */}
        <div style={{ width: '100%', height: '450px', background: 'var(--secondary-dark)', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '4rem' }}>
          {post.image ? (
            <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <span style={{ fontSize: '8rem' }}>{post.emoji}</span>
          )}
        </div>

        {/* Article Body */}
        <article className="blog-content-body" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#334155', paddingBottom: '4rem' }}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          
          <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--secondary-dark)', fontWeight: 600, textDecoration: 'none' }}>
              <ArrowLeft size={16} /> Back to Blog
            </Link>
            
            <button style={{ background: 'none', border: '1px solid #cbd5e1', padding: '8px 16px', borderRadius: '50px', display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#64748b', cursor: 'pointer', fontWeight: 600 }}>
              <Share2 size={16} /> Share Article
            </button>
          </div>
        </article>
      </div>

      <CTASection />
      
      {/* Injecting basic typography styles specifically for this blog post's raw HTML */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content-body h2 {
          font-size: 2rem;
          color: var(--secondary-dark);
          margin: 2.5rem 0 1rem;
          font-weight: 800;
        }
        .blog-content-body h3 {
          font-size: 1.4rem;
          color: var(--secondary-dark);
          margin: 2rem 0 0.8rem;
          font-weight: 700;
        }
        .blog-content-body p {
          margin-bottom: 1.5rem;
        }
        .blog-content-body blockquote {
          border-left: 4px solid var(--primary);
          background: #fffde7;
          padding: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: var(--secondary-dark);
          font-weight: 600;
          border-radius: 0 12px 12px 0;
        }
      `}} />
    </main>
  );
}
