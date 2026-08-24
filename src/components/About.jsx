import React from 'react';
import { User, GraduationCap, Languages, Code2, Globe, CheckCircle2 } from 'lucide-react';
import { personalData, educationData, languagesData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <User size={16} /> About Me
          </div>
          <h2 className="section-title">
            Passionate about building clean code & <span className="text-gradient">intuitive user interfaces</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          
          {/* Left Column: Bio & Core Philosophy */}
          <div className="glass-card" style={{ padding: '36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(0, 242, 254, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)' }}>
                  <Code2 size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Developer Overview</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{personalData.title} • {personalData.location}</p>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '1rem', marginBottom: '24px' }}>
                {personalData.bio}
              </p>
            </div>

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                <CheckCircle2 size={16} color="var(--accent-cyan)" /> Reusable component design & clean state management
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                <CheckCircle2 size={16} color="var(--accent-cyan)" /> Form validation & compliance module experience
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem', color: 'var(--text-main)' }}>
                <CheckCircle2 size={16} color="var(--accent-cyan)" /> Seamless REST API integration & optimization
              </div>
            </div>
          </div>

          {/* Right Column: Education & Languages */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            {/* Education Card */}
            {educationData.map((edu, idx) => (
              <div key={idx} className="glass-card" style={{ padding: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(157, 78, 221, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-purple)' }}>
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-purple)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Education
                    </span>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700 }}>{edu.degree}</h4>
                  </div>
                </div>

                <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '4px' }}>
                  {edu.institution}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', marginBottom: '12px' }}>
                  {edu.location}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  {edu.description}
                </p>
              </div>
            ))}

            {/* Languages Card */}
            <div className="glass-card" style={{ padding: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-emerald)' }}>
                  <Globe size={22} />
                </div>
                <div>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--accent-emerald)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Communication
                  </span>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Languages</h4>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {languagesData.map((lang, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '6px' }}>
                      <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>{lang.name}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{lang.level}</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '10px', overflow: 'hidden' }}>
                      <div 
                        style={{ 
                          width: `${lang.percentage}%`, 
                          height: '100%', 
                          background: idx === 0 ? 'var(--accent-gradient)' : idx === 1 ? 'var(--accent-cyan)' : 'var(--accent-emerald)',
                          borderRadius: '10px'
                        }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
