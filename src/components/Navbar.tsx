'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle, Mail, ChevronDown, Menu, X } from 'lucide-react';

const navItems = [
  { 
    name: 'What We Do', 
    href: '#services',
    subItems: [
      { name: 'Services', href: '#services' },
      { name: 'Courses', href: '#training' },
      { name: 'Process', href: '#process' },
    ]
  },
  { 
    name: 'What Our Clients Say', 
    href: '#testimonials',
    subItems: [
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Blog', href: '#blog' },
    ]
  },
  { name: 'About Us', href: '#about' },
  { name: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['services', 'training', 'process', 'portfolio', 'testimonials', 'blog', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          {/* Logo removed as per request */}
          
          {/* Desktop Nav */}
          <ul className="nav-links desktop-only">
            {navItems.map((item) => (
              <li 
                key={item.name} 
                className={`nav-item ${item.subItems ? 'has-dropdown' : ''}`}
                onMouseEnter={() => item.subItems && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link 
                  href={item.href} 
                  className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                >
                  {item.name} {item.subItems && <ChevronDown size={14} className="dropdown-arrow" />}
                </Link>
                
                {item.subItems && (
                  <ul className={`dropdown-menu ${openDropdown === item.name ? 'show' : ''}`}>
                    {item.subItems.map((sub) => (
                      <li key={sub.name}>
                        <Link href={sub.href}>{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            {!isMobileMenuOpen && (
              <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
                <Menu size={28} />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-close-left" onClick={toggleMobileMenu} aria-label="Close Menu">
          <X size={32} />
        </button>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.name} className="mobile-nav-item">
                <Link 
                  href={item.href} 
                  className="mobile-nav-link"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <ul className="mobile-sub-menu">
                    {item.subItems.map((sub) => (
                      <li key={sub.name}>
                        <Link href={sub.href} onClick={closeMobileMenu}>{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
