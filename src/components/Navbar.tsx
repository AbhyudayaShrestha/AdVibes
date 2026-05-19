'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'What We Do', 
    href: '/services',
    subItems: [
      { name: 'Services', href: '/services' },
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
  { name: 'Contact Us', href: '/about#contact-form' },
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
