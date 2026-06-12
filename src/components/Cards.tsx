'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ServiceCard({ icon, title, desc, className = '', slug }: { icon: React.ReactNode, title: string, desc: string, className?: string, slug: string }) {
  return (
    <Link 
      href={`/services/${slug}`}
      className={`service-card ${className}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div className="icon-box">{icon}</div>
      <h3>{title}</h3>
      <p className="service-desc">{desc}</p>
      <div className="learn-more">
        Learn More <ArrowRight size={16} />
      </div>
    </Link>
  );
}

export function TrainingCard({ icon, title, subtitle, desc }: { icon: React.ReactNode, title: string, subtitle: string, desc: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      className={`training-card card ${isExpanded ? 'active' : ''}`} 
      style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="icon-box" style={{ margin: '0 auto', display: 'flex', justifyContent: 'center', color: 'var(--primary)' }}>{icon}</div>
      <h4>{subtitle}</h4>
      <h3>{title}</h3>
      <p className="training-desc">{desc}</p>
      <button className="btn btn-primary enroll-btn" style={{ marginTop: '1.5rem', width: '100%' }}>Enroll Now</button>
    </div>
  );
}

export function TestimonialCard({ text, author, role }: { text: string, author: string, role: string }) {
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
