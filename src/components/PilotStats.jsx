import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PilotStats() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="pilot"
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
          gap: '40px',
        }}
      >
        <div style={{ maxWidth: '720px' }}>
          <span className="kicker">The pilot</span>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.8vw, 42px)',
              lineHeight: 1.22,
              color: 'var(--color-text)',
            }}
          >
            A deliberately narrow first cohort
          </h2>
        </div>

        <div
          className="stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '24px',
          }}
        >
          {/* Stat 1: 20 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-card)',
              padding: '36px 30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              border: '1px solid var(--color-border)',
              boxShadow: '0 2px 8px rgba(30, 27, 22, 0.02)',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(44px, 4vw, 56px)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--color-text)',
                lineHeight: 1,
              }}
            >
              20
            </div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-text)' }}>
              authorized broker partners
            </div>
            <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
              Each with signed content authorization on file before any ingestion begins.
            </p>
          </div>

          {/* Stat 2: 1 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-card)',
              padding: '36px 30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              border: '1px solid var(--color-border)',
              boxShadow: '0 2px 8px rgba(30, 27, 22, 0.02)',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(44px, 4vw, 56px)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--color-text)',
                lineHeight: 1,
              }}
            >
              1
            </div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-text)' }}>
              market — UAE
            </div>
            <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
              Cross-border buyers from India, Bangladesh, Africa, Oman, Qatar, and Europe.
            </p>
          </div>

          {/* Stat 3: 0 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 'var(--radius-card)',
              padding: '36px 30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              border: '1px solid var(--color-border)',
              boxShadow: '0 2px 8px rgba(30, 27, 22, 0.02)',
            }}
          >
            <div
              style={{
                fontSize: 'clamp(44px, 4vw, 56px)',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--color-text)',
                lineHeight: 1,
              }}
            >
              0
            </div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-text)' }}>
              registry scraping
            </div>
            <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
              Buyer intake stays manual and CRM-import only — consent-clean by design, not by afterthought.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
