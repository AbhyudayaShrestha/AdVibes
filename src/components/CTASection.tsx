'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Join the growth revolution.</h2>
          <p>Partner with AdVibes and turn your digital footprint into a powerful, data-driven engine for success.</p>
          <a href="/enquiry" className="btn btn-primary cta-btn">Work with Us</a>
        </div>
      </div>
    </section>
  );
}
