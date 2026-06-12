import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  CheckCircle,
  ArrowRight,
  Users,
  Globe,
  Cpu,
  Search,
  Target,
  PlayCircle,
  Palette,
  PenTool,
  Lightbulb,
  Zap
} from 'lucide-react';
import CTASection from '@/components/CTASection';

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  heroDesc: string;
  iconName: string;
  overview: string;
  benefits: { title: string; desc: string }[];
  features: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
}> = {
  "social-media-management": {
    title: "Social Media Management",
    subtitle: "Community & Engagement",
    heroDesc: "Build a thriving online community with platform-specific strategies that drive real engagement, brand loyalty, and measurable audience growth.",
    iconName: "Users",
    overview: "Our social media management service goes beyond posting content. We craft platform-specific strategies for Instagram, Facebook, LinkedIn, TikTok, and X (Twitter) that align with your brand voice and business objectives. From content calendars and community management to influencer partnerships and crisis response, we handle every aspect of your social presence so you can focus on running your business.",
    benefits: [
      { title: "Platform-Specific Strategy", desc: "Tailored content and tactics for each social platform to maximize native engagement and reach." },
      { title: "Community Management", desc: "Real-time monitoring, engagement, and moderation to build authentic relationships with your audience." },
      { title: "Content Calendar Planning", desc: "Strategic scheduling aligned with trends, events, and peak engagement windows for consistent presence." },
      { title: "Performance Analytics", desc: "Monthly reporting with actionable insights on reach, engagement, follower growth, and conversion metrics." }
    ],
    features: [
      { title: "Brand Voice Development", desc: "We establish a consistent, recognizable tone across all platforms that resonates with your target demographic." },
      { title: "Hashtag & Trend Research", desc: "Data-driven hashtag strategies and trend monitoring to amplify organic visibility and discoverability." },
      { title: "User-Generated Content", desc: "Campaigns that encourage and curate authentic customer content to build social proof and trust." },
      { title: "Competitor Analysis", desc: "Regular benchmarking against competitors to identify opportunities and maintain your competitive edge." },
      { title: "Story & Reel Creation", desc: "Engaging short-form video and story content designed for maximum algorithmic reach and virality." },
      { title: "Influencer Outreach", desc: "Identify and manage relationships with relevant micro and macro influencers to extend your brand reach." }
    ],
    process: [
      { step: "01", title: "Audit & Discovery", desc: "We analyze your current social presence, audience demographics, and competitor landscape." },
      { step: "02", title: "Strategy Development", desc: "Build a custom content strategy with platform priorities, posting cadence, and engagement tactics." },
      { step: "03", title: "Content Production", desc: "Create high-quality visuals, copy, and multimedia assets tailored to each platform." },
      { step: "04", title: "Optimize & Scale", desc: "Continuous A/B testing, performance analysis, and strategy refinement for ongoing growth." }
    ]
  },
  "website-development": {
    title: "Website Development",
    subtitle: "Design & Engineering",
    heroDesc: "High-performance, responsive websites engineered for speed, accessibility, and conversion using the latest web technologies.",
    iconName: "Globe",
    overview: "We build modern, blazing-fast websites using Next.js, React, and cutting-edge frameworks that deliver exceptional user experiences. Every site is built with conversion optimization, SEO best practices, and mobile-first responsive design at its core. From landing pages and corporate sites to complex web applications and e-commerce platforms, we engineer digital experiences that drive results.",
    benefits: [
      { title: "Lightning Fast Performance", desc: "Sub-second load times with optimized assets, lazy loading, and edge-cached delivery for superior user experience." },
      { title: "Mobile-First Design", desc: "Every pixel is designed for mobile devices first, then progressively enhanced for tablets and desktops." },
      { title: "SEO-Optimized Architecture", desc: "Server-side rendering, semantic HTML, structured data, and technical SEO baked into the foundation." },
      { title: "Conversion-Focused UX", desc: "Strategic layouts, clear CTAs, and user journey mapping designed to maximize lead capture and sales." }
    ],
    features: [
      { title: "Next.js & React Development", desc: "Modern frameworks for server-side rendering, static generation, and hybrid approaches." },
      { title: "Responsive Design System", desc: "Component-based design systems that ensure consistency across all screen sizes and devices." },
      { title: "CMS Integration", desc: "Headless CMS solutions like Sanity, Contentful, or Strapi for easy content management." },
      { title: "E-commerce Solutions", desc: "Shopify, WooCommerce, and custom cart integrations for seamless online shopping experiences." },
      { title: "Performance Optimization", desc: "Core Web Vitals optimization, image compression, code splitting, and CDN configuration." },
      { title: "Analytics & Tracking", desc: "Google Analytics 4, conversion tracking, heatmaps, and user behavior analysis integration." }
    ],
    process: [
      { step: "01", title: "Requirements & Wireframing", desc: "Define project scope, site architecture, and create detailed wireframes for every page." },
      { step: "02", title: "UI/UX Design", desc: "High-fidelity mockups and interactive prototypes with your brand guidelines applied." },
      { step: "03", title: "Development & Testing", desc: "Full-stack development with rigorous cross-browser and device testing." },
      { step: "04", title: "Launch & Support", desc: "Deployment, performance monitoring, and ongoing maintenance and updates." }
    ]
  },
  "ai-multimedia-content": {
    title: "AI Video, Audio, Music & Image",
    subtitle: "Next-Gen Creative",
    heroDesc: "Leverage cutting-edge AI models to produce stunning multimedia content at scale — from photorealistic images to professional voiceovers.",
    iconName: "Cpu",
    overview: "Our AI multimedia service harnesses the latest generative AI technology to create professional-grade visual and audio content at a fraction of the traditional cost and timeline. We use state-of-the-art models for image generation, video production, voice synthesis, and music composition to deliver assets that are indistinguishable from traditionally produced content. Perfect for brands that need high volumes of quality creative without the overhead.",
    benefits: [
      { title: "10x Faster Production", desc: "Generate weeks worth of creative assets in hours, dramatically accelerating your campaign timelines." },
      { title: "Cost-Effective at Scale", desc: "Produce premium content at a fraction of the cost of traditional photography, videography, and audio production." },
      { title: "Unlimited Creative Variations", desc: "Rapidly iterate on concepts and generate multiple variations for A/B testing without additional production costs." },
      { title: "Brand-Consistent Output", desc: "AI models trained on your brand guidelines ensure every asset maintains visual and tonal consistency." }
    ],
    features: [
      { title: "AI Image Generation", desc: "Photorealistic product shots, lifestyle imagery, and marketing visuals using advanced diffusion models." },
      { title: "AI Video Production", desc: "Short-form video ads, product demos, and social content with AI-generated visuals and motion." },
      { title: "Voice Synthesis", desc: "Natural-sounding voiceovers in multiple languages and styles for ads, explainers, and podcasts." },
      { title: "Music Composition", desc: "Custom royalty-free background music and sound design tailored to your brand mood and campaign." },
      { title: "Photo Enhancement", desc: "AI-powered upscaling, background removal, relighting, and retouching for existing assets." },
      { title: "Avatar & Character Creation", desc: "Custom AI-generated brand characters, mascots, and virtual presenters for campaigns." }
    ],
    process: [
      { step: "01", title: "Creative Brief", desc: "Define the visual style, tone, format, and distribution channels for your AI content." },
      { step: "02", title: "Model Selection & Training", desc: "Choose and fine-tune the optimal AI models based on your brand assets and requirements." },
      { step: "03", title: "Asset Generation", desc: "Produce batches of high-quality multimedia content with human-in-the-loop quality control." },
      { step: "04", title: "Refinement & Delivery", desc: "Polish, format, and deliver final assets optimized for each platform and use case." }
    ]
  },
  "seo-optimization": {
    title: "SEO Optimization",
    subtitle: "Search & Visibility",
    heroDesc: "Dominate search results with data-driven SEO strategies that drive sustainable organic traffic and position your brand as an authority.",
    iconName: "Search",
    overview: "Our SEO service is built on deep technical expertise and data-driven strategy. We conduct thorough audits, perform extensive keyword research, optimize on-page elements, build high-authority backlinks, and create content strategies that align with search intent. Our goal is not just rankings — it's driving qualified organic traffic that converts into real business results over the long term.",
    benefits: [
      { title: "Comprehensive Technical Audits", desc: "Deep-dive analysis of site architecture, crawlability, indexation, and Core Web Vitals for a solid foundation." },
      { title: "Strategic Keyword Research", desc: "Identify high-intent, high-volume keywords with competitive gap analysis for maximum opportunity." },
      { title: "Content Strategy & Optimization", desc: "SEO-driven content plans that match search intent and establish topical authority in your niche." },
      { title: "Link Building & Authority", desc: "White-hat link acquisition through digital PR, guest posting, and strategic partnerships." }
    ],
    features: [
      { title: "On-Page Optimization", desc: "Title tags, meta descriptions, header structure, schema markup, and internal linking architecture." },
      { title: "Technical SEO", desc: "Site speed optimization, mobile usability, crawl budget management, and structured data implementation." },
      { title: "Local SEO", desc: "Google Business Profile optimization, local citations, and geo-targeted content strategies." },
      { title: "Content Gap Analysis", desc: "Identify missing content opportunities your competitors rank for and build a roadmap to capture them." },
      { title: "Rank Tracking & Reporting", desc: "Real-time keyword monitoring and monthly performance reports with actionable recommendations." },
      { title: "Penalty Recovery", desc: "Diagnose and recover from Google algorithm penalties and manual actions to restore rankings." }
    ],
    process: [
      { step: "01", title: "Full Site Audit", desc: "Comprehensive analysis of technical health, content quality, and backlink profile." },
      { step: "02", title: "Strategy & Roadmap", desc: "Prioritized action plan targeting the highest-impact opportunities first." },
      { step: "03", title: "Implementation", desc: "Execute on-page fixes, content creation, and link-building campaigns systematically." },
      { step: "04", title: "Monitor & Iterate", desc: "Track rankings, traffic, and conversions with ongoing optimization cycles." }
    ]
  },
  "meta-ads": {
    title: "Meta Ads",
    subtitle: "Social Advertising",
    heroDesc: "Strategic Facebook, Instagram, and WhatsApp advertising with precision targeting and creative optimization for maximum ROI.",
    iconName: "Target",
    overview: "We specialize in the full Meta advertising ecosystem — Facebook, Instagram, Messenger, and WhatsApp. Our team builds and manages high-converting ad campaigns with sophisticated audience targeting, dynamic creative optimization, and full-funnel tracking. From awareness campaigns to retargeting sequences, we engineer every step of the customer journey to maximize your return on ad spend.",
    benefits: [
      { title: "Advanced Audience Targeting", desc: "Leverage Meta's powerful targeting with custom audiences, lookalikes, and interest-based segmentation." },
      { title: "Creative A/B Testing", desc: "Systematic testing of ad copy, visuals, and formats to identify the highest-performing creative combinations." },
      { title: "Full-Funnel Strategy", desc: "Awareness, consideration, and conversion campaigns working together to guide prospects through the buying journey." },
      { title: "ROAS Optimization", desc: "Continuous bid strategy refinement and budget allocation to maximize your return on ad spend." }
    ],
    features: [
      { title: "Pixel & CAPI Setup", desc: "Complete Meta Pixel and Conversions API implementation for accurate tracking and optimization signals." },
      { title: "Dynamic Product Ads", desc: "Automated product catalog advertising that shows personalized products to interested shoppers." },
      { title: "Lookalike Audiences", desc: "Create high-value audience segments based on your best customers for efficient prospecting." },
      { title: "Retargeting Sequences", desc: "Multi-touch retargeting campaigns that bring warm leads back with relevant messaging." },
      { title: "Lead Generation Campaigns", desc: "In-platform lead forms and landing page campaigns optimized for cost-per-lead efficiency." },
      { title: "Reporting Dashboard", desc: "Real-time campaign performance dashboards with attribution modeling and ROI analysis." }
    ],
    process: [
      { step: "01", title: "Account Audit & Setup", desc: "Review existing campaigns, set up proper tracking, and configure audience foundations." },
      { step: "02", title: "Campaign Architecture", desc: "Design campaign structures with proper naming conventions, budgets, and testing frameworks." },
      { step: "03", title: "Launch & Test", desc: "Deploy campaigns with multiple creative variations and audience segments for rapid learning." },
      { step: "04", title: "Scale & Optimize", desc: "Identify winners, kill underperformers, and systematically scale profitable campaigns." }
    ]
  },
  "google-ads": {
    title: "Google Ads",
    subtitle: "Search & Display",
    heroDesc: "Capture high-intent buyers with targeted PPC campaigns across Google Search, Display, YouTube, and Shopping networks.",
    iconName: "PlayCircle",
    overview: "Our Google Ads management covers the entire Google advertising ecosystem — Search, Display, YouTube, Shopping, and Performance Max campaigns. We focus on capturing high-intent search traffic while building brand awareness through visual and video formats. Every campaign is built with meticulous keyword research, compelling ad copy, and landing page alignment to drive maximum conversions at the lowest cost per acquisition.",
    benefits: [
      { title: "High-Intent Traffic", desc: "Capture users actively searching for your products and services at the exact moment of purchase intent." },
      { title: "Multi-Channel Coverage", desc: "Unified strategy across Search, Display, YouTube, Shopping, and Performance Max for full-spectrum reach." },
      { title: "Quality Score Optimization", desc: "Improve ad relevance, landing page experience, and expected CTR to lower costs and boost position." },
      { title: "Conversion Tracking", desc: "Granular conversion setup including offline conversions, phone calls, and micro-conversion events." }
    ],
    features: [
      { title: "Search Campaign Management", desc: "Keyword strategy, ad copy optimization, negative keyword lists, and bid management." },
      { title: "Display & Remarketing", desc: "Visual banner campaigns targeting relevant placements and remarketing to previous site visitors." },
      { title: "YouTube Advertising", desc: "In-stream, discovery, and bumper ad campaigns optimized for views, engagement, or conversions." },
      { title: "Shopping Campaigns", desc: "Product feed optimization and Shopping campaign structure for e-commerce businesses." },
      { title: "Performance Max", desc: "AI-powered campaigns across all Google properties with audience signal optimization." },
      { title: "Landing Page Optimization", desc: "A/B testing and CRO for landing pages to maximize post-click conversion rates." }
    ],
    process: [
      { step: "01", title: "Keyword & Competitor Research", desc: "Deep analysis of search landscape, competitor bids, and keyword opportunity mapping." },
      { step: "02", title: "Campaign Build", desc: "Structured account setup with tightly themed ad groups, compelling copy, and proper extensions." },
      { step: "03", title: "Launch & Monitor", desc: "Controlled launch with daily monitoring, bid adjustments, and search term refinement." },
      { step: "04", title: "Report & Scale", desc: "Weekly performance reviews with transparent reporting and scaling recommendations." }
    ]
  },
  "graphic-designing": {
    title: "Graphic Designing",
    subtitle: "Visual Identity",
    heroDesc: "Professional graphic design that tells your brand story through stunning visuals, from logos and brand guides to ad creatives and corporate collateral.",
    iconName: "Palette",
    overview: "Our graphic design team creates visual assets that capture attention, communicate your brand values, and drive action. We handle everything from brand identity systems and logo design to social media graphics, presentation decks, packaging, and print materials. Every design is crafted with strategic intent — not just to look beautiful, but to serve a clear business purpose and resonate with your target audience.",
    benefits: [
      { title: "Strategic Design Thinking", desc: "Every visual decision is backed by brand strategy, audience research, and clear communication objectives." },
      { title: "Brand Consistency", desc: "Comprehensive design systems and guidelines that maintain visual coherence across all touchpoints." },
      { title: "Fast Turnaround", desc: "Efficient design workflows with rapid iteration cycles and timely delivery of production-ready assets." },
      { title: "Multi-Format Delivery", desc: "Assets delivered in all required formats — print-ready, web-optimized, and social media-sized." }
    ],
    features: [
      { title: "Brand Identity Design", desc: "Logo creation, color palettes, typography selection, and complete brand identity systems." },
      { title: "Social Media Graphics", desc: "Platform-optimized templates, story designs, post graphics, and campaign-specific creative." },
      { title: "Presentation Design", desc: "Professional pitch decks, investor presentations, and corporate slide templates." },
      { title: "Ad Creative Design", desc: "Digital and print advertising designs optimized for performance and brand impact." },
      { title: "Packaging Design", desc: "Product packaging, labels, and physical brand touchpoint design." },
      { title: "Infographic & Data Viz", desc: "Complex information transformed into visually engaging and shareable infographic content." }
    ],
    process: [
      { step: "01", title: "Brief & Moodboard", desc: "Understand your vision, compile references, and create initial mood boards for direction alignment." },
      { step: "02", title: "Concept Development", desc: "Create 2-3 distinct design concepts exploring different creative directions." },
      { step: "03", title: "Refinement", desc: "Iterate on the chosen direction with detailed feedback rounds until pixel-perfect." },
      { step: "04", title: "Final Delivery", desc: "Export production-ready files in all required formats with a comprehensive style guide." }
    ]
  },
  "content-creation": {
    title: "Content Creation",
    subtitle: "Copy & Creative",
    heroDesc: "Compelling content that captivates, educates, and converts — from blog articles and scripts to email sequences and ad copy.",
    iconName: "PenTool",
    overview: "Content is the backbone of every successful marketing strategy. Our content creation service delivers high-quality written and multimedia content that engages your audience at every stage of the buyer journey. We combine deep industry research, SEO expertise, and persuasive copywriting to produce blog articles, email campaigns, video scripts, ad copy, and thought leadership pieces that establish authority and drive conversions.",
    benefits: [
      { title: "SEO-Driven Writing", desc: "Every piece is optimized for search intent and keywords while maintaining readability and engagement." },
      { title: "Conversion Copywriting", desc: "Persuasive frameworks like AIDA, PAS, and StoryBrand applied to drive measurable action." },
      { title: "Industry Expertise", desc: "Deep research and subject matter interviews ensure authoritative, accurate content that builds trust." },
      { title: "Multi-Format Content", desc: "Repurpose core content across blogs, emails, social posts, videos, and presentations for maximum reach." }
    ],
    features: [
      { title: "Blog & Article Writing", desc: "Long-form thought leadership, how-to guides, and industry analysis optimized for organic search." },
      { title: "Email Marketing Copy", desc: "Welcome sequences, newsletters, promotional campaigns, and automated drip sequences." },
      { title: "Video Scriptwriting", desc: "Scripts for explainers, testimonials, product demos, and social media video content." },
      { title: "Ad Copywriting", desc: "High-converting headlines, descriptions, and CTAs for paid search and social campaigns." },
      { title: "Case Study & White Papers", desc: "In-depth customer success stories and research documents that demonstrate expertise." },
      { title: "Website Copy", desc: "Homepage, landing page, and product page copy engineered for clarity and conversion." }
    ],
    process: [
      { step: "01", title: "Research & Planning", desc: "Audience analysis, keyword research, and editorial calendar development." },
      { step: "02", title: "Content Brief", desc: "Detailed briefs outlining target keywords, angle, structure, and conversion goals." },
      { step: "03", title: "Writing & Editing", desc: "Professional writing with multi-round editorial review and fact-checking." },
      { step: "04", title: "Publish & Promote", desc: "Content formatting, publishing, and distribution strategy for maximum visibility." }
    ]
  },
  "branding-strategy": {
    title: "Branding & Strategy",
    subtitle: "Identity & Positioning",
    heroDesc: "Build a cohesive brand identity and strategic market positioning that establishes long-term authority and customer loyalty.",
    iconName: "Lightbulb",
    overview: "Your brand is more than a logo — it's the entire experience your audience has with your business. Our branding and strategy service helps you define who you are, what you stand for, and how you communicate that to the world. We develop comprehensive brand identities, positioning strategies, and go-to-market plans that differentiate you from competitors and create lasting emotional connections with your customers.",
    benefits: [
      { title: "Clear Market Positioning", desc: "Define your unique value proposition and competitive differentiation for a distinct market position." },
      { title: "Cohesive Brand Identity", desc: "Visual and verbal identity systems that create instant recognition and build trust." },
      { title: "Audience Alignment", desc: "Deep persona development and customer journey mapping to ensure every touchpoint resonates." },
      { title: "Long-Term Vision", desc: "Strategic brand roadmaps that guide growth while maintaining brand integrity and consistency." }
    ],
    features: [
      { title: "Brand Audit & Research", desc: "Comprehensive analysis of current brand perception, market position, and competitive landscape." },
      { title: "Brand Positioning", desc: "Value proposition development, positioning statement, and brand messaging framework." },
      { title: "Visual Identity System", desc: "Logo, color palette, typography, iconography, and complete brand guidelines documentation." },
      { title: "Brand Voice & Tone", desc: "Defining how your brand speaks across different channels, audiences, and contexts." },
      { title: "Customer Persona Development", desc: "Detailed buyer personas based on research, interviews, and behavioral data analysis." },
      { title: "Go-To-Market Strategy", desc: "Launch plans, channel strategy, and campaign frameworks for new brand introductions." }
    ],
    process: [
      { step: "01", title: "Discovery Workshop", desc: "Collaborative sessions to uncover brand values, vision, audience, and competitive landscape." },
      { step: "02", title: "Strategy Development", desc: "Positioning framework, messaging hierarchy, and brand architecture documentation." },
      { step: "03", title: "Identity Design", desc: "Create the visual and verbal brand identity with multiple concept explorations." },
      { step: "04", title: "Brand Rollout", desc: "Guidelines documentation, team training, and phased implementation across touchpoints." }
    ]
  },
  "ai-integrated-marketing": {
    title: "AI-Integrated Marketing",
    subtitle: "Automation & Intelligence",
    heroDesc: "Transform your marketing operations with custom AI solutions — from predictive analytics and lead scoring to fully automated campaign workflows.",
    iconName: "Zap",
    overview: "AI is revolutionizing how businesses market, sell, and serve customers. Our AI-integrated marketing service helps you deploy cutting-edge artificial intelligence across your entire marketing stack. From custom LLM implementations and chatbot development to predictive lead scoring, automated content generation, and algorithmic ad optimization — we help you work smarter, faster, and more efficiently than your competition.",
    benefits: [
      { title: "Workflow Automation", desc: "Eliminate repetitive tasks and free your team to focus on strategic, high-value creative work." },
      { title: "Predictive Intelligence", desc: "AI-powered forecasting for lead quality, churn risk, lifetime value, and campaign performance." },
      { title: "Personalization at Scale", desc: "Dynamic content, product recommendations, and messaging tailored to individual user behavior." },
      { title: "Competitive Advantage", desc: "Deploy AI capabilities your competitors haven't adopted yet for a significant market edge." }
    ],
    features: [
      { title: "Custom LLM Deployment", desc: "Fine-tuned language models for customer support, content generation, and internal knowledge bases." },
      { title: "AI Chatbots & Assistants", desc: "Conversational AI for lead qualification, customer service, and appointment scheduling." },
      { title: "Predictive Lead Scoring", desc: "Machine learning models that identify and prioritize your highest-value prospects automatically." },
      { title: "Content Automation", desc: "AI-powered content generation pipelines for social posts, email copy, and product descriptions." },
      { title: "Marketing Mix Modeling", desc: "Statistical models to optimize budget allocation across channels for maximum overall ROI." },
      { title: "Sentiment Analysis", desc: "Real-time brand sentiment monitoring across social media, reviews, and customer feedback." }
    ],
    process: [
      { step: "01", title: "AI Readiness Assessment", desc: "Evaluate your current tech stack, data quality, and identify highest-impact AI opportunities." },
      { step: "02", title: "Solution Architecture", desc: "Design the AI solution stack, data pipelines, and integration points with existing systems." },
      { step: "03", title: "Build & Train", desc: "Develop custom models, configure automation workflows, and run initial testing cycles." },
      { step: "04", title: "Deploy & Optimize", desc: "Production deployment with monitoring, model retraining, and continuous performance improvement." }
    ]
  }
};

const iconMap: Record<string, React.ReactNode> = {
  Users: <Users size={40} />,
  Globe: <Globe size={40} />,
  Cpu: <Cpu size={40} />,
  Search: <Search size={40} />,
  Target: <Target size={40} />,
  PlayCircle: <PlayCircle size={40} />,
  Palette: <Palette size={40} />,
  PenTool: <PenTool size={40} />,
  Lightbulb: <Lightbulb size={40} />,
  Zap: <Zap size={40} />,
};

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const service = servicesData[slug];

  if (!service) {
    notFound();
  }

  const icon = iconMap[service.iconName];

  return (
    <main className="service-detail-page">
      {/* Hero */}
      <section className="inner-hero" style={{ background: 'var(--gradient-hero)', color: 'white', padding: '160px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '2rem', transition: 'color 0.3s' }}>
            <ArrowLeft size={16} /> Back to Services
          </Link>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ width: '80px', height: '80px', background: 'rgba(255, 214, 10, 0.1)', border: '1px solid rgba(255, 214, 10, 0.2)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              {icon}
            </div>
            <div>
              <span className="section-subtitle" style={{ color: 'var(--primary)', letterSpacing: '2px', textAlign: 'left' }}>{service.subtitle}</span>
              <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 900, background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.1 }}>
                {service.title}
              </h1>
            </div>
          </div>

          <p style={{ maxWidth: '700px', fontSize: '1.15rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
            {service.heroDesc}
          </p>
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '130%', height: '130%', background: 'radial-gradient(circle, rgba(255, 214, 10, 0.05) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }}></div>
      </section>

      {/* Overview */}
      <section style={{ padding: '100px 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <span className="section-subtitle">Overview</span>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>What We <span style={{ color: 'var(--primary)' }}>Deliver</span></h2>
            <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: '1.9', textAlign: 'center' }}>
              {service.overview}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '100px 0', background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '4rem' }}>
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">Key <span style={{ color: 'var(--primary)' }}>Benefits</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
            {service.benefits.map((benefit, i) => (
              <div key={i} style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '20px', border: '1px solid rgba(0, 53, 102, 0.06)', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                  <CheckCircle size={20} style={{ color: 'var(--primary-dark)', flexShrink: 0 }} />
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 750, color: 'var(--secondary-dark)' }}>{benefit.title}</h3>
                </div>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.7' }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '100px 0', background: 'var(--bg-white)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '4rem' }}>
            <span className="section-subtitle">Capabilities</span>
            <h2 className="section-title">What&apos;s <span style={{ color: 'var(--primary)' }}>Included</span></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
            {service.features.map((feature, i) => (
              <div key={i} style={{ padding: '2rem', borderRadius: '16px', border: '1px solid #e2e8f0', transition: 'all 0.3s ease' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--secondary-dark)', marginBottom: '0.75rem' }}>{feature.title}</h4>
                <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: '1.7' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '100px 0', background: 'var(--gradient-hero)', color: 'white' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '4rem' }}>
            <span className="section-subtitle" style={{ color: 'var(--primary)' }}>Our Approach</span>
            <h2 className="section-title" style={{ color: 'white' }}>How We <span style={{ color: 'var(--primary)' }}>Work</span></h2>
          </div>
          <div className="process-steps" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {service.process.map((step, i) => (
              <div key={i} className="step" style={{ textAlign: 'center' }}>
                <div className="step-num" style={{ background: 'rgba(255, 214, 10, 0.1)', border: '1px solid rgba(255, 214, 10, 0.2)', color: 'var(--primary)' }}>{step.step}</div>
                <h4 style={{ color: 'white', marginBottom: '0.75rem' }}>{step.title}</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0', background: 'var(--bg-white)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Ready to Get <span style={{ color: 'var(--primary)' }}>Started</span>?</h2>
          <p style={{ color: '#64748b', maxWidth: '550px', margin: '0 auto 2.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
            Let&apos;s discuss how our {service.title.toLowerCase()} service can transform your business results.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/enquiry" className="btn btn-primary" style={{ padding: '14px 36px', borderRadius: '50px', fontWeight: 700 }}>
              Get a Free Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/services" className="btn btn-outline" style={{ padding: '14px 36px', borderRadius: '50px', fontWeight: 700, border: '2px solid var(--secondary)', color: 'var(--secondary)' }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
