import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, ChevronRight, Building } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Briefcase size={16} /> Work Experience
          </div>
          <h2 className="section-title">
            Proven track record in <span className="text-gradient">enterprise frontend development</span>
          </h2>
        </div>

        {/* Timeline List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative' }}>
          
          {experienceData.map((exp, index) => (
            <div 
              key={exp.id}
              className="glass-card"
              style={{
                padding: '36px',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Top Accent Line */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: index === 0 ? 'var(--accent-gradient)' : 'linear-gradient(90deg, #3b82f6, #00f2fe)'
                }}
              />

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff' }}>{exp.role}</h3>
                    <span 
                      style={{
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono)',
                        background: index === 0 ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255, 255, 255, 0.08)',
                        color: index === 0 ? 'var(--accent-cyan)' : 'var(--text-muted)',
                        border: `1px solid ${index === 0 ? 'rgba(0, 242, 254, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                    <Building size={18} />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    <Calendar size={15} color="var(--accent-cyan)" />
                    <span>{exp.period}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-dim)' }}>
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px 0', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {exp.highlights.map((bullet, idx) => (
                  <li 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '12px',
                      fontSize: '0.975rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.65
                    }}
                  >
                    <ChevronRight size={18} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '18px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginRight: '6px' }}>
                  Tools Used:
                </span>
                {exp.techStack.map((tech) => (
                  <span key={tech} className="tag-badge" style={{ fontSize: '0.8rem', padding: '4px 10px' }}>
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
