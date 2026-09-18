import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProblemSection() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="problem"
      className="section-wrap"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div
        ref={revealRef}
        className="section-inner fade-in-section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
        }}
      >
        <div style={{ maxWidth: '720px' }}>
          <span className="kicker">The problem</span>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.8vw, 42px)',
              lineHeight: 1.22,
              color: 'var(--color-text)',
            }}
          >
            A high-intent buyer deserves better than a generic script
          </h2>
        </div>

        <div
          className="problem-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: '32px',
          }}
        >
          {/* Card 1: For the buyer */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card)',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '0 2px 12px rgba(30, 27, 22, 0.02)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <div
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
              }}
            >
              For the buyer
            </div>
            <h3
              style={{
                fontSize: '24px',
                color: 'var(--color-text)',
                fontFamily: 'var(--font-display)',
              }}
            >
              Every call sounds the same
            </h3>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.65,
                color: 'var(--color-text-muted)',
              }}
            >
              Whether the buyer is a business owner in Surat, a diaspora professional in Nairobi, or a retiree in Doha, most cross-border sales calls run the same script — even though the real "why now" (currency hedge, residency, rental income, estate planning) is different every time. Objection handling on the exact concerns this buyer segment actually raises — repatriating funds, verifying a developer from thousands of kilometers away, understanding Golden Visa mechanics — is inconsistent at best.
            </p>
          </div>

          {/* Card 2: For the brokerage */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card)',
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              boxShadow: '0 2px 12px rgba(30, 27, 22, 0.02)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
          >
            <div
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: 'var(--color-accent)',
              }}
            >
              For the brokerage
            </div>
            <h3
              style={{
                fontSize: '24px',
                color: 'var(--color-text)',
                fontFamily: 'var(--font-display)',
              }}
            >
              Your best broker's knowledge doesn't scale
            </h3>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.65,
                color: 'var(--color-text-muted)',
              }}
            >
              The instinct a top closer has built over years for this exact buyer segment lives in one person's head. Call-center agents are often junior and high-turnover relative to the stakes of a six- to seven-figure, immigration-linked sale — and they have no real-time way to match a specific unit's economics to what the buyer on the line actually cares about.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .problem-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
