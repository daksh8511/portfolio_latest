import React, { useState, useEffect } from 'react';
import { FileText, Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '14px 0' : '22px 0',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: scrolled ? 'rgba(7, 9, 14, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <a 
          href="#" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '10px', 
            textDecoration: 'none', 
            color: 'var(--text-main)',
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '-0.5px'
          }}
        >
          <div 
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#07090e',
              boxShadow: '0 0 20px rgba(0, 242, 254, 0.4)'
            }}
          >
            <Code2 size={22} strokeWidth={2.5} />
          </div>
          <span>Daksh<span style={{ color: 'var(--accent-cyan)' }}>.</span>dev</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{
                color: 'var(--text-muted)',
                textDecoration: 'none',
                fontSize: '0.925rem',
                fontWeight: 600,
                transition: 'var(--transition)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-cyan)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Actions CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }} className="desktop-nav">
          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="tag-badge cyan"
            style={{ textDecoration: 'none', cursor: 'pointer', padding: '8px 16px' }}
          >
            <LinkedinIcon size={16} />
            <span>LinkedIn</span>
            <ArrowUpRight size={14} />
          </a>

          <button
            onClick={onOpenResume}
            className="btn-secondary"
            style={{ padding: '8px 18px', fontSize: '0.875rem' }}
          >
            <FileText size={16} />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            padding: '6px',
          }}
          className="mobile-toggle"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            background: 'rgba(7, 9, 14, 0.95)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border-color)',
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            zIndex: 99
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                color: 'var(--text-main)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
              }}
            >
              {link.name}
            </a>
          ))}
          <hr style={{ borderColor: 'var(--border-color)', margin: '10px 0' }} />
          <div style={{ display: 'flex', gap: '12px' }}>
            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ flex: 1, textDecoration: 'none' }}
            >
              <LinkedinIcon size={18} />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenResume(); }}
              className="btn-primary"
              style={{ flex: 1 }}
            >
              <FileText size={18} />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </header>
  );
}
