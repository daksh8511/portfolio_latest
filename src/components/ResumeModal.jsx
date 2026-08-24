import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { personalData, experienceData, educationData, languagesData } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 7, 12, 0.88)',
        backdropFilter: 'blur(12px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '850px',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#ffffff',
          color: '#111111',
          borderRadius: '12px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column'
        }}
        className="resume-paper"
      >
        {/* Modal Controls Bar (Hidden during print) */}
        <div 
          className="no-print"
          style={{
            padding: '16px 24px',
            background: '#0f172a',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px'
          }}
        >
          <span style={{ fontSize: '0.9rem', fontWeight: 700 }}>Daksh Sathwara — Official Resume</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button 
              onClick={handlePrint}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '6px',
                background: '#00f2fe',
                color: '#07090e',
                border: 'none',
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              <Printer size={16} /> Print / Save PDF
            </button>
            <button 
              onClick={onClose}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div style={{ padding: '40px 48px', fontFamily: 'Segoe UI, Helvetica, Arial, sans-serif' }}>
          
          {/* Header */}
          <header style={{ borderBottom: '3px solid #111', paddingBottom: '20px', marginBottom: '28px' }}>
            <h1 style={{ margin: 0, fontSize: '32px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 800 }}>
              Daksh Sathwara
            </h1>
            <div style={{ color: '#008cff', fontSize: '18px', fontWeight: 700, margin: '4px 0 14px 0' }}>
              Frontend Developer
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '13px', color: '#555' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Phone size={14} color="#008cff" /> +91-8511893083
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Mail size={14} color="#008cff" /> daxsathwara102@gmail.com
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <MapPin size={14} color="#008cff" /> Ahmedabad, Gujarat
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <LinkedinIcon size={14} color="#008cff" /> www.linkedin.com/in/daksh-sathwara-b54136343
              </span>
            </div>
          </header>

          {/* Two Column Content */}
          <div style={{ display: 'grid', gridTemplateColumns: '62% 38%', gap: '32px' }}>
            
            {/* Left Column */}
            <div>
              {/* Summary */}
              <section style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '2px solid #111', paddingBottom: '4px', margin: '0 0 12px 0' }}>
                  Summary
                </h2>
                <p style={{ fontSize: '13.5px', lineHeight: 1.65, margin: 0, color: '#333' }}>
                  {personalData.bio}
                </p>
              </section>

              {/* Experience */}
              <section>
                <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '2px solid #111', paddingBottom: '4px', margin: '0 0 16px 0' }}>
                  Experience
                </h2>

                {experienceData.map((job) => (
                  <div key={job.id} style={{ marginBottom: '20px' }}>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#111' }}>{job.role}</div>
                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#008cff' }}>{job.company}</div>
                    <div style={{ fontSize: '12px', color: '#666', marginBottom: '8px' }}>
                      {job.period} | {job.location} ({job.type})
                    </div>
                    <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', lineHeight: 1.6, color: '#333' }}>
                      {job.highlights.map((bullet, idx) => (
                        <li key={idx} style={{ marginBottom: '4px' }}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            </div>

            {/* Right Column */}
            <div>
              {/* Skills */}
              <section style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '2px solid #111', paddingBottom: '4px', margin: '0 0 12px 0' }}>
                  Skills
                </h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['React.js', 'Next.js', 'TypeScript', 'Zustand', 'React Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Git', 'GitHub', 'Material UI', 'Tailwind CSS'].map((skill) => (
                    <span key={skill} style={{ background: '#f0f6fc', border: '1px solid #d6e8fb', padding: '4px 10px', borderRadius: '14px', fontSize: '12px', fontWeight: 500 }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '2px solid #111', paddingBottom: '4px', margin: '0 0 12px 0' }}>
                  Education
                </h2>
                {educationData.map((edu, idx) => (
                  <div key={idx}>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#111' }}>{edu.degree}</div>
                    <div style={{ fontSize: '13px', color: '#008cff', fontWeight: 600 }}>{edu.institution}</div>
                  </div>
                ))}
              </section>

              {/* Languages */}
              <section>
                <h2 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1.5px', borderBottom: '2px solid #111', paddingBottom: '4px', margin: '0 0 12px 0' }}>
                  Languages
                </h2>
                {languagesData.map((lang, idx) => (
                  <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                    <span style={{ fontWeight: 600 }}>{lang.name}</span>
                    <span style={{ color: '#666' }}>{lang.level}</span>
                  </div>
                ))}
              </section>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          .resume-paper, .resume-paper * { visibility: visible; }
          .resume-paper { position: absolute; left: 0; top: 0; width: 100%; max-width: 100%; box-shadow: none; }
          .no-print { display: none !important; }
        }
      `}</style>
    </div>
  );
}
