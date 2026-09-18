import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function TrustSection() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="trust"
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
          gap: '48px',
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          <span className="kicker-dark">Compliance &amp; Governance</span>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.8vw, 42px)',
              lineHeight: 1.22,
              color: 'var(--color-text-dark)',
            }}
          >
            Trust built into the architecture
          </h2>
          <p style={{ marginTop: '12px', fontSize: '17px', color: 'var(--color-text-dark-muted)' }}>
            Operating in cross-border real estate and immigration corridors demands rigorous compliance, privacy preservation, and traceable consent.
          </p>
        </div>

        {/* 4 Trust Cards Grid */}
        <div
          className="trust-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '24px',
          }}
        >
          {/* Card 1: Signed authorization first */}
          <div
            style={{
              backgroundColor: 'var(--color-bg-dark-alt)',
              border: '1px solid var(--color-border-dark)',
              borderRadius: 'var(--radius-card)',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ width: '40px', height: '40px', color: 'var(--color-accent-dark)' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 style={{ fontSize: '18px', color: 'var(--color-text-dark)', fontFamily: 'var(--font-display)' }}>
              Signed authorization first
            </h3>
            <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--color-text-dark-muted)' }}>
              No broker content ingested without consent on file, covering derivative use and roleplay generation.
            </p>
          </div>

          {/* Card 2: Never a bare claim */}
          <div
            style={{
              backgroundColor: 'var(--color-bg-dark-alt)',
              border: '1px solid var(--color-border-dark)',
              borderRadius: 'var(--radius-card)',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ width: '40px', height: '40px', color: 'var(--color-accent-dark)' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <h3 style={{ fontSize: '18px', color: 'var(--color-text-dark)', fontFamily: 'var(--font-display)' }}>
              Never a bare claim
            </h3>
            <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--color-text-dark-muted)' }}>
              Every script line cites a source tag or live property fact — fully auditable by supervisors and brokers.
            </p>
          </div>

          {/* Card 3: No registry scraping */}
          <div
            style={{
              backgroundColor: 'var(--color-bg-dark-alt)',
              border: '1px solid var(--color-border-dark)',
              borderRadius: 'var(--radius-card)',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ width: '40px', height: '40px', color: 'var(--color-accent-dark)' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                <line x1="3" y1="3" x2="21" y2="21" stroke="#E4B565" strokeWidth="1.8" />
              </svg>
            </div>
            <h3 style={{ fontSize: '18px', color: 'var(--color-text-dark)', fontFamily: 'var(--font-display)' }}>
              No registry scraping
            </h3>
            <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--color-text-dark-muted)' }}>
              Buyer intake stays manual or CRM-import only — consent-clean by design, not by afterthought.
            </p>
          </div>

          {/* Card 4: PII redacted before model call */}
          <div
            style={{
              backgroundColor: 'var(--color-bg-dark-alt)',
              border: '1px solid var(--color-border-dark)',
              borderRadius: 'var(--radius-card)',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div style={{ width: '40px', height: '40px', color: 'var(--color-accent-dark)' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h3 style={{ fontSize: '18px', color: 'var(--color-text-dark)', fontFamily: 'var(--font-display)' }}>
              PII redacted before model call
            </h3>
            <p style={{ fontSize: '14.5px', lineHeight: 1.6, color: 'var(--color-text-dark-muted)' }}>
              Buyer PII never reaches an LLM prompt unredacted — restored only where needed on human UI screens.
            </p>
          </div>
        </div>

        {/* Hyperscale Technology Stack Architecture Infographic */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginTop: '10px',
            backgroundColor: 'var(--color-bg-dark-alt)',
            border: '1px solid var(--color-border-dark)',
            borderRadius: 'var(--radius-card)',
            padding: '32px',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--color-accent-dark)' }}>
              ARCHITECTURE FOUNDATION · TENANT ISOLATION
            </span>
            <span style={{ fontSize: '12px', color: '#8C8578' }}>Enterprise Security &amp; Grounding</span>
          </div>

          <div
            style={{
              width: '100%',
              maxWidth: '820px',
              margin: '10px auto',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.24)',
            }}
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/agentic-infrastructure-stack.jpeg`}
              alt="Hyperscale Technology Stack from foundation models down to tenant isolation and relational storage"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Footnote */}
        <div
          style={{
            fontSize: '13.5px',
            lineHeight: 1.6,
            color: '#8C8578',
            borderTop: '1px solid var(--color-border-dark)',
            paddingTop: '24px',
            maxWidth: '820px',
          }}
        >
          These are pilot-stage design commitments, not a compliance sign-off — every one of them is still pending review by qualified counsel before launch.
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .trust-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .trust-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
