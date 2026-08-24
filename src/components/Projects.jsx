import React, { useState } from 'react';
import { ShoppingBag, ArrowUpRight, Play, Sparkles, Layers, CheckCircle } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/portfolioData';
import DemoModal from './DemoModal';

export default function Projects() {
  const [activeDemoId, setActiveDemoId] = useState(null);

  return (
    <section id="projects" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <ShoppingBag size={16} /> Featured Projects
          </div>
          <h2 className="section-title">
            E-Commerce <span className="text-gradient">Platforms & Dashboards</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginTop: '12px', maxWidth: '650px' }}>
            Interactive e-commerce applications built with React.js, Next.js, and Zustand state management. Click "Launch Interactive Demo" to test live components in real-time!
          </p>
        </div>

        {/* Project Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '36px' }}>
          
          {projectsData.map((project, index) => (
            <div 
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between',
                padding: '36px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top Accent Gradient Pill */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span className="tag-badge cyan">
                  <Sparkles size={12} /> {project.category}
                </span>
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)' }}>
                  Project 0{index + 1}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '8px', lineHeight: 1.25 }}>
                  {project.title}
                </h3>
                
                <p style={{ fontSize: '0.9rem', color: 'var(--accent-cyan)', fontWeight: 600, marginBottom: '16px' }}>
                  {project.subtitle}
                </p>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '24px' }}>
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {project.highlights.slice(0, 3).map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                      <CheckCircle size={15} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Tech & Actions */}
              <div>
                {/* Tech Stack Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '28px' }}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tag-badge" style={{ fontSize: '0.75rem', padding: '4px 10px' }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button 
                    onClick={() => setActiveDemoId(project.id)}
                    className="btn-primary" 
                    style={{ flex: 1, padding: '12px 18px', fontSize: '0.875rem' }}
                  >
                    <Play size={16} fill="currentColor" />
                    <span>Launch Interactive Demo</span>
                  </button>

                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-secondary"
                    style={{ padding: '12px', borderRadius: '30px' }}
                    title="View GitHub Code"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>

      {/* Interactive Modal */}
      {activeDemoId && (
        <DemoModal 
          projectId={activeDemoId} 
          onClose={() => setActiveDemoId(null)} 
        />
      )}
    </section>
  );
}
