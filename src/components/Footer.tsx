'use client';

import Link from 'next/link';
import { Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer-new">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-text">AdVibes</div>
            <p className="footer-copyright">© {new Date().getFullYear()} AdVibes. Precision Marketing for Modern Founders.</p>
          </div>

          <div className="footer-nav-groups">
            <div className="footer-nav-col">
              <Link href="/services">Services</Link>
              <Link href="/courses">Courses</Link>
            </div>
            <div className="footer-nav-col">
              <Link href="/case-studies">Case Studies</Link>
              <Link href="/blog">Blog</Link>
            </div>
            <div className="footer-nav-col">
              <Link href="/about">About Us</Link>
              <a href="#">Privacy Policy</a>
            </div>
          </div>

          <div className="footer-social-new">
            <a href="tel:#" className="social-link" aria-label="Phone"><Phone size={20} /></a>
            <a href="mailto:info@advibes.com" className="social-link" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
