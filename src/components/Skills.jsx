import { useState } from 'react';
import { Cpu, Layout, Server, Wrench } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categoryIcons = [Layout, Cpu, Server];

  return (
    <section id="skills" style={{ padding: '100px 0', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label">
            <Cpu size={16} /> Technical Expertise
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Modern Tech Stack</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
          {skillsCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Wrench;
            const isActive = activeCategoryIndex === idx;

            return (
              <button
                key={cat.category}
                onClick={() => setActiveCategoryIndex(idx)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '14px 24px',
                  borderRadius: '30px',
                  fontWeight: 700,
                  fontSize: '0.925rem',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--accent-cyan)' : 'var(--border-color)',
                  background: isActive ? 'rgba(0, 242, 254, 0.12)' : 'var(--bg-card)',
                  color: isActive ? '#fff' : 'var(--text-muted)',
                  cursor: 'pointer',
                  transition: 'var(--transition)'
                }}
              >
                <Icon size={18} color={isActive ? 'var(--accent-cyan)' : 'var(--text-dim)'} />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          {skillsCategories[activeCategoryIndex].skills.map((skill) => (
            <div 
              key={skill.name}
              className="glass-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>{skill.name}</h4>
              </div>

              {/* Score Progress Bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '6px' }}>
                  <span>Proficiency</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)' }}>{skill.score}%</span>
                </div>
                <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div 
                    style={{
                      width: `${skill.score}%`,
                      height: '100%',
                      background: 'var(--accent-gradient)',
                      borderRadius: '10px',
                      boxShadow: '0 0 10px rgba(0, 242, 254, 0.5)'
                    }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
