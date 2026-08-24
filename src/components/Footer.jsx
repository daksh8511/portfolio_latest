import React from 'react';
import { ArrowUp, Mail, Code2, Heart } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      style={{
        borderTop: '1px solid var(--border-color)',
        padding: '60px 0 30px 0',
        background: 'rgba(5, 7, 12, 0.9)',
        position: 'relative'
      }}
    >
      <div className="container">
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px', paddingBottom: '40px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
          
          {/* Logo & Subtitle */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, fontSize: '1.4rem', color: '#fff', marginBottom: '8px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--accent-gradient)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#07090e' }}>
                <Code2 size={20} />
              </div>
              <span>Daksh Sathwara</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              Frontend Developer • React.js & Next.js Specialist • Ahmedabad, Gujarat
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a 
              href={personalData.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="tag-badge cyan"
              style={{ textDecoration: 'none', padding: '8px 16px' }}
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>

            <button
              onClick={onOpenResume}
              className="tag-badge"
              style={{ cursor: 'pointer', padding: '8px 16px' }}
            >
              Resume
            </button>

            <button 
              onClick={scrollToTop}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-color)',
                color: 'var(--accent-cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'var(--transition)'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-cyan)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              title="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div style={{ paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
          <div>
            © {new Date().getFullYear()} Daksh Sathwara. All rights reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Built with React.js & inspired by Benjamin Creative
          </div>
        </div>

      </div>
    </footer>
  );
}
