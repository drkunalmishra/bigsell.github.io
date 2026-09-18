import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function BeforeAfterDiagram() {
  const revealRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState('diagram'); // 'diagram' | 'infographic'

  return (
    <section
      id="before-after"
      className="section-wrap"
      style={{
        backgroundColor: 'var(--color-bg-alt)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        ref={revealRef}
        className="section-inner fade-in-section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ maxWidth: '680px' }}>
            <span className="kicker">The mechanism in action</span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                lineHeight: 1.22,
                color: 'var(--color-text)',
              }}
            >
              The same objection, two outcomes
            </h2>
          </div>

          {/* View Mode Toggle */}
          <div
            style={{
              display: 'inline-flex',
              padding: '4px',
              backgroundColor: '#EAE1D0',
              borderRadius: 'var(--radius-pill)',
              gap: '4px',
            }}
          >
            <button
              type="button"
              onClick={() => setActiveTab('diagram')}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                backgroundColor: activeTab === 'diagram' ? 'var(--color-bg-dark)' : 'transparent',
                color: activeTab === 'diagram' ? 'var(--color-text-dark)' : 'var(--color-text-muted)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Mechanism Flow
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('infographic')}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                backgroundColor: activeTab === 'infographic' ? 'var(--color-bg-dark)' : 'transparent',
                color: activeTab === 'infographic' ? 'var(--color-text-dark)' : 'var(--color-text-muted)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Visual Infographic
            </button>
          </div>
        </div>

        {activeTab === 'diagram' ? (
          <>
            {/* Desktop SVG Mechanism */}
            <div
              className="desktop-diagram"
              style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border)',
                padding: '36px 32px',
                boxSizing: 'border-box',
              }}
            >
              <svg
                viewBox="0 0 1000 320"
                width="100%"
                height="100%"
                style={{ display: 'block', overflow: 'visible' }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <marker id="arrow-gray" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M 0 0 L 8 4 L 0 8 z" fill="#8C827A" />
                  </marker>
                  <marker id="arrow-gold" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                    <path d="M 0 0 L 8 4 L 0 8 z" fill="#8A5A20" />
                  </marker>
                </defs>

                {/* TRACK A: WITHOUT BIGSELL */}
                <g transform="translate(0, 10)">
                  <text x="20" y="24" fontFamily="'Public Sans', sans-serif" fontSize="12" fontWeight="700" letterSpacing="1.2" fill="#78716A">
                    TRACK A · WITHOUT BIGSELL
                  </text>
                  <rect x="20" y="40" width="280" height="76" rx="10" fill="#F5F3EF" stroke="#DDD7CD" strokeWidth="1" />
                  <text x="36" y="70" fontFamily="'Public Sans', sans-serif" fontSize="14" fontWeight="600" fill="#2E2A24">
                    Buyer asks objection
                  </text>
                  <text x="36" y="94" fontFamily="'Public Sans', sans-serif" fontSize="13" fill="#6E675F">
                    "How do I repatriate sale proceeds?"
                  </text>

                  <line x1="300" y1="78" x2="352" y2="78" stroke="#8C827A" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow-gray)" />

                  <rect x="360" y="40" width="280" height="76" rx="10" fill="#F5F3EF" stroke="#DDD7CD" strokeWidth="1" />
                  <text x="376" y="70" fontFamily="'Public Sans', sans-serif" fontSize="14" fontWeight="600" fill="#2E2A24">
                    Agent free-styles answer
                  </text>
                  <text x="376" y="94" fontFamily="'Public Sans', sans-serif" fontSize="13" fill="#6E675F">
                    Generic, unsourced guess
                  </text>

                  <line x1="640" y1="78" x2="692" y2="78" stroke="#8C827A" strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#arrow-gray)" />

                  <rect x="700" y="40" width="280" height="76" rx="10" fill="#EFEBE4" stroke="#D1C8BC" strokeWidth="1" />
                  <text x="716" y="70" fontFamily="'Public Sans', sans-serif" fontSize="14" fontWeight="600" fill="#7A3D36">
                    Buyer hesitates
                  </text>
                  <text x="716" y="94" fontFamily="'Public Sans', sans-serif" fontSize="13" fill="#6E675F">
                    Call stalls · Trust eroded
                  </text>
                </g>

                <line x1="20" y1="165" x2="980" y2="165" stroke="#EAE1D0" strokeWidth="1" />

                {/* TRACK B: WITH BIGSELL */}
                <g transform="translate(0, 175)">
                  <text x="20" y="24" fontFamily="'Public Sans', sans-serif" fontSize="12" fontWeight="700" letterSpacing="1.2" fill="#8A5A20">
                    TRACK B · WITH BIGSELL (GROUNDED RETRIEVAL)
                  </text>
                  <rect x="20" y="40" width="280" height="76" rx="10" fill="#FFFFFF" stroke="#D9CBAB" strokeWidth="1.5" />
                  <text x="36" y="70" fontFamily="'Public Sans', sans-serif" fontSize="14" fontWeight="600" fill="#1E1B16">
                    Buyer asks objection
                  </text>
                  <text x="36" y="94" fontFamily="'Public Sans', sans-serif" fontSize="13" fill="#4A453C">
                    "How do I repatriate sale proceeds?"
                  </text>

                  <line x1="300" y1="78" x2="352" y2="78" stroke="#8A5A20" strokeWidth="2.5" markerEnd="url(#arrow-gold)" />

                  <rect x="360" y="40" width="280" height="76" rx="10" fill="#FDFBF7" stroke="#8A5A20" strokeWidth="1.8" />
                  <text x="376" y="70" fontFamily="'Public Sans', sans-serif" fontSize="14" fontWeight="600" fill="#8A5A20">
                    Module 4 live retrieval
                  </text>
                  <text x="376" y="94" fontFamily="'Public Sans', sans-serif" fontSize="13" fill="#1E1B16">
                    Evidence-backed Central Bank answer
                  </text>

                  <line x1="640" y1="78" x2="692" y2="78" stroke="#8A5A20" strokeWidth="2.5" markerEnd="url(#arrow-gold)" />

                  <rect x="700" y="40" width="280" height="76" rx="10" fill="#F6F9F4" stroke="#88B07E" strokeWidth="1.5" />
                  <text x="716" y="70" fontFamily="'Public Sans', sans-serif" fontSize="14" fontWeight="600" fill="#2D5A27">
                    Buyer trusts the answer
                  </text>
                  <text x="716" y="94" fontFamily="'Public Sans', sans-serif" fontSize="13" fill="#3D4A39">
                    Call moves forward to deposit
                  </text>
                </g>
              </svg>
            </div>

            {/* Mobile Reflow */}
            <div className="mobile-diagram" style={{ display: 'none', flexDirection: 'column', gap: '28px' }}>
              <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-card)', border: '1px solid var(--color-border)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: '#78716A' }}>
                  Track A · Without BigSell
                </div>
                <div style={{ background: '#F5F3EF', padding: '16px', borderRadius: '10px', border: '1px solid #DDD7CD' }}>
                  <div style={{ fontWeight: 600, fontSize: '14px' }}>1. Buyer asks objection</div>
                  <div style={{ fontSize: '13px', color: '#6E675F' }}>"How do I repatriate sale proceeds?"</div>
                </div>
                <div style={{ textAlign: 'center', color: '#8C827A', fontSize: '18px' }}>↓</div>
                <div style={{ background: '#F5F3EF', padding: '16px', borderRadius: '10px', border: '1px solid #DDD7CD' }}>
                  <div style={{ fontWeight: 600, fontSize: '14px' }}>2. Agent free-styles answer</div>
                  <div style={{ fontSize: '13px', color: '#6E675F' }}>Generic, unsourced guess</div>
                </div>
                <div style={{ textAlign: 'center', color: '#8C827A', fontSize: '18px' }}>↓</div>
                <div style={{ background: '#EFEBE4', padding: '16px', borderRadius: '10px', border: '1px solid #D1C8BC' }}>
                  <div style={{ fontWeight: 600, fontSize: '14px', color: '#7A3D36' }}>3. Buyer hesitates, call stalls</div>
                  <div style={{ fontSize: '13px', color: '#6E675F' }}>Trust eroded</div>
                </div>
              </div>

              <div style={{ backgroundColor: '#FFFFFF', borderRadius: 'var(--radius-card)', border: '1.5px solid var(--color-accent)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 4px 16px rgba(138, 90, 32, 0.08)' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                  Track B · With BigSell (Grounded Retrieval)
                </div>
                <div style={{ background: '#FDFBF7', padding: '16px', borderRadius: '10px', border: '1px solid #D9CBAB' }}>
                  <div style={{ fontWeight: 600, fontSize: '14px' }}>1. Buyer asks objection</div>
                  <div style={{ fontSize: '13px', color: '#4A453C' }}>"How do I repatriate sale proceeds?"</div>
                </div>
                <div style={{ textAlign: 'center', color: 'var(--color-accent)', fontSize: '18px' }}>↓</div>
                <div style={{ background: '#FDFBF7', padding: '16px', borderRadius: '10px', border: '1.5px solid var(--color-accent)' }}>
                  <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--color-accent)' }}>2. Module 4 live retrieval</div>
                  <div style={{ fontSize: '13px', color: 'var(--color-text)' }}>Evidence-backed Central Bank answer</div>
                </div>
                <div style={{ textAlign: 'center', color: 'var(--color-accent)', fontSize: '18px' }}>↓</div>
                <div style={{ background: '#F6F9F4', padding: '16px', borderRadius: '10px', border: '1px solid #88B07E' }}>
                  <div style={{ fontWeight: 600, fontSize: '14px', color: '#2D5A27' }}>3. Buyer trusts the answer</div>
                  <div style={{ fontSize: '13px', color: '#3D4A39' }}>Call moves forward to deposit</div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Infographic View */
          <div
            style={{
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-card)',
              border: '1px solid var(--color-border)',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(30, 27, 22, 0.05)',
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/problem-before-after.jpeg`}
              alt="Before and after call handling mechanism infographic"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </div>
        )}

        {/* Mechanism Caption */}
        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.6,
            color: 'var(--color-text-muted)',
            fontStyle: 'italic',
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto',
          }}
        >
          The same objection, two outcomes: without a sourced answer the call stalls on a guess; with Module 4's live retrieval, the agent answers from evidence and the conversation keeps moving.
        </p>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .desktop-diagram {
            display: none !important;
          }
          .mobile-diagram {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
