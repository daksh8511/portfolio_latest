import React from 'react';
import { ArrowDown, FileText, Sparkles, MapPin, Code, Layers, Zap } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const techPills = [
    'React.js', 'Next.js', 'TypeScript', 'Zustand', 
    'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 
    'REST APIs', 'Material UI', 'Tailwind CSS'
  ];

  return (
    <section 
      style={{
        paddingTop: '160px',
        paddingBottom: '90px',
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="container" style={{ width: '100%' }}>
        
        {/* Availability Badge */}
        <div 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '10px', 
            padding: '8px 18px', 
            borderRadius: '30px',
            background: 'rgba(16, 185, 129, 0.1)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            marginBottom: '28px',
            backdropFilter: 'blur(10px)'
          }}
        >
          <span className="status-dot" />
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--accent-emerald)' }}>
            {personalData.availability}
          </span>
          <span style={{ color: 'var(--border-color)', margin: '0 4px' }}>|</span>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MapPin size={14} color="var(--accent-cyan)" /> {personalData.location}
          </span>
        </div>

        {/* Main Headline */}
        <div style={{ maxWidth: '960px' }}>
          <h1 
            style={{ 
              fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)', 
              fontWeight: 800, 
              letterSpacing: '-2px', 
              lineHeight: 1.08,
              marginBottom: '24px'
            }}
          >
            Frontend Developer <br />
            <span className="text-gradient">Building Scalable Web Apps & Digital Experiences</span>
          </h1>

          <p 
            style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
              color: 'var(--text-muted)', 
              lineHeight: 1.65,
              maxWidth: '800px',
              marginBottom: '40px'
            }}
          >
            Hi, I'm <strong style={{ color: '#fff' }}>Daksh Sathwara</strong> — a passionate Frontend Developer specializing in <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>React.js</span>, <span style={{ color: 'var(--accent-purple)', fontWeight: 600 }}>Zustand</span>, and modern web architectures. Experienced in crafting administrative dashboards, deposit management modules, and high-conversion e-commerce applications.
          </p>
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '56px' }}>
          <a href="#projects" className="btn-primary">
            <Zap size={18} />
            <span>Explore Projects</span>
          </a>

          <a 
            href={personalData.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
          >
            <LinkedinIcon size={18} color="#0077b5" />
            <span>Connect on LinkedIn</span>
          </a>

          <button onClick={onOpenResume} className="btn-secondary">
            <FileText size={18} color="var(--accent-cyan)" />
            <span>View Full Resume</span>
          </button>
        </div>

        {/* Tech Stack Pills Marquee / Grid */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ fontSize: '0.825rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px' }}>
            Primary Tech Stack & Tools:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {techPills.map((tech) => (
              <span key={tech} className="tag-badge">
                <Sparkles size={13} color="var(--accent-cyan)" />
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            padding: '30px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-lg)',
            backdropFilter: 'blur(16px)'
          }}
        >
          {personalData.stats.map((stat, i) => (
            <div key={i} style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
