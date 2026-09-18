import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function WhyNowSection() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="why-now"
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
          <span className="kicker">Why now</span>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.8vw, 42px)',
              lineHeight: 1.22,
              color: 'var(--color-text)',
            }}
          >
            The tooling gap, not a technology gap
          </h2>
        </div>

        {/* 3 Theses Grid */}
        <div
          className="why-now-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '36px',
          }}
        >
          {/* Point 01 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                fontSize: '44px',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--color-accent)',
                lineHeight: 1,
              }}
            >
              01
            </div>
            <h3 style={{ fontSize: '20px', color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>
              Agent-assist AI is production-proven
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--color-text-muted)' }}>
              Real-time, evidence-backed retrieval and multi-agent orchestration for sales coaching has moved from research to production over the last few years.
            </p>
          </div>

          {/* Point 02 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                fontSize: '44px',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--color-accent)',
                lineHeight: 1,
              }}
            >
              02
            </div>
            <h3 style={{ fontSize: '20px', color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>
              Residency-linked demand is durable
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--color-text-muted)' }}>
              Golden Visa-style property investment is active and growing across multiple corridors at once — this is not a one-market fad.
            </p>
          </div>

          {/* Point 03 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div
              style={{
                fontSize: '44px',
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: 'var(--color-accent)',
                lineHeight: 1,
              }}
            >
              03
            </div>
            <h3 style={{ fontSize: '20px', color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>
              A narrow wedge, done well
            </h3>
            <p style={{ fontSize: '15px', lineHeight: 1.65, color: 'var(--color-text-muted)' }}>
              One buyer segment, one market, one sales motion — tuned tightly before any horizontal expansion, rather than a generic call-center AI platform.
            </p>
          </div>
        </div>

        {/* Global Market Migration Corridors Infographic */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            boxShadow: '0 4px 20px rgba(30, 27, 22, 0.04)',
            maxWidth: '960px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          <div style={{ padding: '24px 28px 12px 28px', borderBottom: '1px solid #F5EDDD', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              TARGET CORRIDORS · UAE GOLDEN VISA PATHWAY
            </span>
            <span style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
              India · Bangladesh · Africa · GCC · Europe
            </span>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}assets/market-opportunity-map.jpeg`}
            alt="World region map showing residency-by-investment cross-border pathways to the UAE"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            loading="lazy"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 840px) {
          .why-now-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
