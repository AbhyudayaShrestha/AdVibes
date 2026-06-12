'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Clock, MapPin, Mail } from 'lucide-react';

const FacebookIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const InstagramIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const TwitterIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);
const LinkedinIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);
const YoutubeIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 7.1 2.3 5 4.3 3c1.6-1.6 3.4-1.6 4.2-1.7 4-.3 8-.3 8-.3s4 0 8 .3c.8.1 2.6.1 4.2 1.7 2 2 1.8 4.1 1.8 4.1s.3 2.7.3 6v1.8c0 3.3-.3 6-.3 6s-.2 2.1-2.2 4.1c-1.6 1.6-3.8 1.5-4.7 1.7-2.3.2-7.8.3-7.8.3s-4 0-8-.3c-.8-.1-2.6-.1-4.2-1.7-2-2-1.8-4.1-1.8-4.1S2.2 14 2.2 10.7V8.9c0-3.3.3-6 .3-6z"/><path d="M9.8 14.5L15.3 11 9.8 7.5z"/></svg>
);

const navItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'Courses', 
    href: '/courses',
    subItems: [
      { name: 'Courses', href: '/courses' },
      { name: 'Process', href: '/#process' },
    ]
  },
  { 
    name: 'What Our Clients Say', 
    href: '/case-studies',
    subItems: [
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Testimonials', href: '/case-studies#testimonials' },
      { name: 'Blog', href: '/blog' },
    ]
  },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact Us', href: '/enquiry' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (pathname === '/') {
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
        } else if (window.scrollY < 200) {
          setActiveSection('');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

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

  const isLinkActive = (href: string) => {
    if (href.startsWith('/#')) {
      return pathname === '/' && activeSection === href.substring(2);
    }
    if (href.startsWith('#')) {
      return pathname === '/' && activeSection === href.substring(1);
    }
    return pathname === href;
  };

  const isParentActive = (item: typeof navItems[0]) => {
    if (isLinkActive(item.href)) return true;
    if (item.subItems) {
      return item.subItems.some(sub => isLinkActive(sub.href));
    }
    return false;
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      {/* Top Bar */}
      <div className="topbar">
        <div className="container topbar-container">
          <div className="topbar-left">
            <span className="topbar-item">
              <Clock size={14} /> Sun-Fri: Time
            </span>
            <span className="topbar-item">
              <MapPin size={14} /> Location
            </span>
            <span className="topbar-item">
              <Mail size={14} /> emailaddress
            </span>
          </div>
          <div className="topbar-right">
            <Link href="#" className="topbar-social"><FacebookIcon size={14} /></Link>
            <Link href="#" className="topbar-social"><InstagramIcon size={14} /></Link>
            <Link href="#" className="topbar-social"><TwitterIcon size={14} /></Link>
            <Link href="#" className="topbar-social"><LinkedinIcon size={14} /></Link>
            <Link href="#" className="topbar-social"><YoutubeIcon size={14} /></Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo-group">
            <Link href="/" className="logo-brand" onClick={closeMobileMenu}>
              AdVibes
            </Link>
          </div>
          
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
                  className={`nav-link ${isParentActive(item) ? 'active' : ''}`}
                >
                  {item.name} {item.subItems && <ChevronDown size={14} className="dropdown-arrow" />}
                </Link>
                
                {item.subItems && (
                  <ul className={`dropdown-menu ${openDropdown === item.name ? 'show' : ''}`}>
                    {item.subItems.map((sub) => (
                      <li key={sub.name}>
                        <Link href={sub.href} className={isLinkActive(sub.href) ? 'active-sub' : ''}>
                          {sub.name}
                        </Link>
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
                  className={`mobile-nav-link ${isParentActive(item) ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <ul className="mobile-sub-menu">
                    {item.subItems.map((sub) => (
                      <li key={sub.name}>
                        <Link href={sub.href} onClick={closeMobileMenu} className={isLinkActive(sub.href) ? 'active-sub' : ''}>
                          {sub.name}
                        </Link>
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
