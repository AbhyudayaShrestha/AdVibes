'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Training/Courses', href: '#training' },
  { name: 'Portfolio / Case Studies', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Blog', href: '#blog' },
  { name: 'Process', href: '#process' },
  { name: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust for navbar height
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="#home" className="logo">
          Ad<span>Vibes</span>
        </Link>
        
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href} 
                className={activeSection === item.href.substring(1) ? 'active' : ''}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <Link href="#contact" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
