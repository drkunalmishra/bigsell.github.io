import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function RoadmapTimeline() {
  const revealRef = useScrollReveal();
  const [timelineView, setTimelineView] = useState('interactive'); // 'interactive' | 'visual'

  return (
    <section
      id="roadmap"
      className="section-wrap"
      style={{
        backgroundColor: 'var(--color-bg-dark)',
        color: 'var(--color-text-dark)',
        borderBottom: '1px solid var(--color-border-dark)',
      }}
    >
      <div
        ref={revealRef}
        className="section-inner fade-in-section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '36px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ maxWidth: '740px' }}>
            <span className="kicker-dark">Execution Roadmap</span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                lineHeight: 1.22,
                color: 'var(--color-text-dark)',
              }}
            >
              Four gated stages, each approved before the next begins
            </h2>
            <p style={{ marginTop: '12px', fontSize: '17px', color: 'var(--color-text-dark-muted)' }}>
              Strict engineering governance ensures regulatory clearance and broker sign-offs precede every stage of deployment.
            </p>
          </div>

          {/* Toggle View */}
          <div
            style={{
              display: 'inline-flex',
              padding: '4px',
              backgroundColor: '#26221A',
              borderRadius: 'var(--radius-pill)',
              gap: '4px',
            }}
          >
            <button
              type="button"
              onClick={() => setTimelineView('interactive')}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                backgroundColor: timelineView === 'interactive' ? 'var(--color-accent-dark)' : 'transparent',
                color: timelineView === 'interactive' ? '#1E1B16' : 'var(--color-text-dark-muted)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Milestone Cards
            </button>
            <button
              type="button"
              onClick={() => setTimelineView('visual')}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                backgroundColor: timelineView === 'visual' ? 'var(--color-accent-dark)' : 'transparent',
                color: timelineView === 'visual' ? '#1E1B16' : 'var(--color-text-dark-muted)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Visual Roadmap
            </button>
          </div>
        </div>

        {timelineView === 'interactive' ? (
          <>
            {/* Horizontal SVG Timeline Bar (Desktop) */}
            <div className="desktop-timeline-svg" style={{ width: '100%', margin: '10px 0' }}>
              <svg viewBox="0 0 1000 70" width="100%" height="70" xmlns="http://www.w3.org/2000/svg">
                <line x1="125" y1="35" x2="875" y2="35" stroke="#3A362C" strokeWidth="3" />
                <line x1="125" y1="35" x2="375" y2="35" stroke="#C99A4A" strokeWidth="3" />

                <circle cx="125" cy="35" r="9" fill="#1E1B16" stroke="#C99A4A" strokeWidth="3" />
                <circle cx="125" cy="35" r="4" fill="#C99A4A" />

                <circle cx="375" cy="35" r="16" fill="rgba(201, 154, 74, 0.2)" />
                <circle cx="375" cy="35" r="10" fill="#C99A4A" stroke="#FFFFFF" strokeWidth="2" />
                <circle cx="375" cy="35" r="4" fill="#1E1B16" />

                <circle cx="625" cy="35" r="8" fill="#26221A" stroke="#4A453C" strokeWidth="2.5" />
                <circle cx="875" cy="35" r="8" fill="#26221A" stroke="#4A453C" strokeWidth="2.5" />
              </svg>
            </div>

            {/* 4 Cards Grid */}
            <div
              className="roadmap-cards-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                gap: '20px',
              }}
            >
              {/* Stage 1 */}
              <div
                style={{
                  backgroundColor: 'var(--color-bg-dark-alt)',
                  border: '1px solid var(--color-border-dark)',
                  borderRadius: '14px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--color-accent-dark)' }}>
                  STAGE 1 · DONE
                </div>
                <h3 style={{ fontSize: '18px', color: 'var(--color-text-dark)', fontFamily: 'var(--font-display)' }}>
                  Architecture &amp; HLD
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--color-text-dark-muted)' }}>
                  Problem statement, system and agent architecture, data model, compliance risks, and funding narrative.
                </p>
              </div>

              {/* Stage 2 (Active Highlighted) */}
              <div
                style={{
                  backgroundColor: 'rgba(201, 154, 74, 0.08)',
                  border: '1.5px solid var(--color-accent-dark)',
                  borderRadius: '14px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  boxShadow: '0 4px 20px rgba(201, 154, 74, 0.12)',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: 'var(--color-accent-dark)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--color-accent-dark)' }}></span>
                  STAGE 2 · YOU ARE HERE
                </div>
                <h3 style={{ fontSize: '18px', color: 'var(--color-text-dark)', fontFamily: 'var(--font-display)' }}>
                  Ideation &amp; funding site
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--color-text-dark-muted)' }}>
                  This site — the public-facing story to support fundraising conversations and pilot partner onboarding.
                </p>
              </div>

              {/* Stage 3 */}
              <div
                style={{
                  backgroundColor: 'var(--color-bg-dark-alt)',
                  border: '1px solid var(--color-border-dark)',
                  borderRadius: '14px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: '#8C8578' }}>
                  STAGE 3
                </div>
                <h3 style={{ fontSize: '18px', color: 'var(--color-text-dark)', fontFamily: 'var(--font-display)' }}>
                  Low-level design
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--color-text-dark-muted)' }}>
                  The compliant v1 flow: onboarding → authorized ingestion → tagging → buyer intake → retrieval → script delivery.
                </p>
              </div>

              {/* Stage 4 */}
              <div
                style={{
                  backgroundColor: 'var(--color-bg-dark-alt)',
                  border: '1px solid var(--color-border-dark)',
                  borderRadius: '14px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', color: '#8C8578' }}>
                  STAGE 4
                </div>
                <h3 style={{ fontSize: '18px', color: 'var(--color-text-dark)', fontFamily: 'var(--font-display)' }}>
                  Pilot
                </h3>
                <p style={{ fontSize: '14px', lineHeight: 1.55, color: 'var(--color-text-dark-muted)' }}>
                  A working build of the compliant v1 flow in a single market, with an initial cohort of authorized broker partners.
                </p>
              </div>
            </div>
          </>
        ) : (
          /* Visual Roadmap Infographic */
          <div
            style={{
              width: '100%',
              borderRadius: 'var(--radius-card)',
              overflow: 'hidden',
              border: '1px solid var(--color-border-dark)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/roadmap-timeline.jpeg`}
              alt="Four gated stages roadmap timeline diagram"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 960px) {
          .desktop-timeline-svg {
            display: none !important;
          }
          .roadmap-cards-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .roadmap-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
