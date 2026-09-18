import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function KnowledgeEngineSection() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="knowledge-engine"
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
          gap: '40px',
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          <span className="kicker">Knowledge Engine</span>
          <h2
            style={{
              fontSize: 'clamp(28px, 3.8vw, 42px)',
              lineHeight: 1.22,
              color: 'var(--color-text)',
            }}
          >
            Where the knowledge comes from
          </h2>
          <p style={{ marginTop: '12px', fontSize: '17px', color: 'var(--color-text-muted)' }}>
            We extract tacit broker instincts through a disciplined, consent-governed pipeline — turning raw recordings into structured, auditable evidence.
          </p>
        </div>

        {/* Knowledge Ingestion Infographic Banner */}
        <div
          style={{
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderRadius: 'var(--radius-card)',
            border: '1px solid var(--color-border)',
            overflow: 'hidden',
            boxShadow: '0 8px 24px rgba(30, 27, 22, 0.04)',
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/knowledge-ingestion-pipeline.jpeg`}
            alt="Editorial high-end knowledge ingestion pipeline from authorized consent to retrievable vector index"
            style={{ width: '100%', height: 'auto', display: 'block' }}
            loading="lazy"
          />
        </div>

        {/* 4-Step Pipeline Summary Grid */}
        <div
          className="knowledge-pipeline-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '18px',
          }}
        >
          {/* Step 1 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card)',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              Step 01
            </div>
            <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              Authorized Content
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
              Signed broker consent on file covering derivative training and roleplay generation.
            </p>
          </div>

          {/* Step 2 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card)',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              Step 02
            </div>
            <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              Transcribed &amp; Diarized
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
              Every word separated by speaker and assigned a microsecond-accurate timestamp.
            </p>
          </div>

          {/* Step 3 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card)',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              Step 03
            </div>
            <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              LLM Tagging Pass
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
              Deconstructed by pitch component: hook, objection-handling, and closing tactic.
            </p>
          </div>

          {/* Step 4 */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-card)',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
              Step 04
            </div>
            <h3 style={{ fontSize: '16px', fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              Retrievable, Sourced
            </h3>
            <p style={{ fontSize: '13.5px', color: 'var(--color-text-muted)', lineHeight: 1.5 }}>
              Indexed in vector and metadata ontology — ready for Module 4 live synthesis.
            </p>
          </div>
        </div>

        {/* Dark Example Card Mockup */}
        <div
          style={{
            backgroundColor: 'var(--color-bg-dark)',
            borderRadius: 'var(--radius-card)',
            border: '1px solid var(--color-border-dark)',
            padding: '36px 40px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            maxWidth: '920px',
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1.2px', textTransform: 'uppercase', color: 'var(--color-accent-dark)' }}>
              EXAMPLE TAG — NEVER A BARE SCORE
            </span>
            <span style={{ fontSize: '12px', color: 'var(--color-text-dark-muted)', background: '#26221A', padding: '4px 10px', borderRadius: '4px' }}>
              Timestamp cited · Auditable
            </span>
          </div>

          <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-text-dark)' }}>
            <span style={{ color: 'var(--color-accent-dark)', fontWeight: 600 }}>04:32</span> — Objection-handling · repatriation risk · persona: first-generation business owner · confidence 0.91
          </div>

          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontSize: 'clamp(17px, 2.2vw, 20px)',
              lineHeight: 1.5,
              color: 'var(--color-text-dark)',
              borderLeft: '3px solid var(--color-accent-dark)',
              paddingLeft: '20px',
              margin: '8px 0',
            }}
          >
            "Every dirham you wire out follows the same central-bank channel a bank transfer does — nothing about buying property changes how you move money home."
          </blockquote>

          <div style={{ fontSize: '13px', color: 'var(--color-text-dark-muted)' }}>
            Source: broker recording, timestamp cited — never presented without it.
          </div>
        </div>

        {/* Caption */}
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
          This is the design principle carried through the whole platform: a script line is only as good as the timestamp it can point back to.
        </p>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .knowledge-pipeline-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 520px) {
          .knowledge-pipeline-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
