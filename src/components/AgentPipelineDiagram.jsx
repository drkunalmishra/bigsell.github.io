import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AgentPipelineDiagram() {
  const revealRef = useScrollReveal();
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'isometric'

  return (
    <section
      id="agent-pipeline"
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
          gap: '36px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ maxWidth: '780px' }}>
            <span className="kicker">Inside Module 04</span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                lineHeight: 1.22,
                color: 'var(--color-text)',
              }}
            >
              The four-agent execution pipeline
            </h2>
            <p style={{ marginTop: '12px', fontSize: '16px', color: 'var(--color-text-muted)' }}>
              Each agent performs one precise transformation with explicit inputs and outputs — maintaining strict evidence tracing at every step.
            </p>
          </div>

          {/* Toggle View */}
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
              onClick={() => setViewMode('cards')}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                backgroundColor: viewMode === 'cards' ? 'var(--color-bg-dark)' : 'transparent',
                color: viewMode === 'cards' ? 'var(--color-text-dark)' : 'var(--color-text-muted)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Step Cards
            </button>
            <button
              type="button"
              onClick={() => setViewMode('isometric')}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                backgroundColor: viewMode === 'isometric' ? 'var(--color-bg-dark)' : 'transparent',
                color: viewMode === 'isometric' ? 'var(--color-text-dark)' : 'var(--color-text-muted)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Isometric Workflow
            </button>
          </div>
        </div>

        {viewMode === 'cards' ? (
          /* Desktop 4-Step Cards */
          <div
            className="desktop-pipeline"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '20px',
              position: 'relative',
            }}
          >
            {/* Step 1: Context Assembly */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border)',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                Agent 01
              </div>
              <h3 style={{ fontSize: '18px', color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>
                Context Assembly
              </h3>
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                <div style={{ background: '#F5EDDD', padding: '6px 10px', borderRadius: '6px', color: 'var(--color-text)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-accent)' }}>IN: </span>
                  buyer + property IDs
                </div>
                <div style={{ background: '#EAE1D0', padding: '6px 10px', borderRadius: '6px', color: 'var(--color-text)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>OUT: </span>
                  conversation context
                </div>
              </div>
            </div>

            {/* Step 2: Retrieval */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border)',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                Agent 02
              </div>
              <h3 style={{ fontSize: '18px', color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>
                Retrieval
              </h3>
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                <div style={{ background: '#F5EDDD', padding: '6px 10px', borderRadius: '6px', color: 'var(--color-accent)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-accent)' }}>IN: </span>
                  persona + sales stage
                </div>
                <div style={{ background: '#EAE1D0', padding: '6px 10px', borderRadius: '6px', color: 'var(--color-text)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>OUT: </span>
                  sourced tactics
                </div>
              </div>
            </div>

            {/* Step 3: Synthesis */}
            <div
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border)',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-accent)' }}>
                Agent 03
              </div>
              <h3 style={{ fontSize: '18px', color: 'var(--color-text)', fontFamily: 'var(--font-display)' }}>
                Synthesis
              </h3>
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                <div style={{ background: '#F5EDDD', padding: '6px 10px', borderRadius: '6px', color: 'var(--color-text)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-accent)' }}>IN: </span>
                  tactics + unit facts
                </div>
                <div style={{ background: '#EAE1D0', padding: '6px 10px', borderRadius: '6px', color: 'var(--color-text)' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>OUT: </span>
                  script payload
                </div>
              </div>
            </div>

            {/* Step 4: Delivery UI */}
            <div
              style={{
                backgroundColor: 'var(--color-bg-dark)',
                color: 'var(--color-text-dark)',
                borderRadius: 'var(--radius-card)',
                border: '1.5px solid var(--color-accent-dark)',
                padding: '28px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.18)',
              }}
            >
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-accent-dark)' }}>
                Agent 04 · Live UI
              </div>
              <h3 style={{ fontSize: '18px', color: 'var(--color-text-dark)', fontFamily: 'var(--font-display)' }}>
                Delivery UI
              </h3>
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
                <div style={{ background: 'rgba(201, 154, 74, 0.12)', border: '1px solid #3A362C', padding: '6px 10px', borderRadius: '6px', color: '#F5EDDD' }}>
                  <span style={{ fontWeight: 600, color: 'var(--color-accent-dark)' }}>IN: </span>
                  script payload
                </div>
                <div style={{ background: 'rgba(251, 247, 240, 0.1)', border: '1px solid #3A362C', padding: '6px 10px', borderRadius: '6px', color: '#FFFFFF' }}>
                  <span style={{ fontWeight: 600, color: '#C99A4A' }}>OUT: </span>
                  live agent screen
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Isometric Infographic View */
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
              src={`${import.meta.env.BASE_URL}assets/four-agent-pipeline.jpeg`}
              alt="Global real estate agent co-pilot platform detailed isometric workflow"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </div>
        )}

        {/* Small Caption */}
        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.5,
            color: 'var(--color-text-muted)',
            fontStyle: 'italic',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto',
          }}
        >
          Every hop is evidence-tagged — nothing downstream of Retrieval is an unsourced suggestion.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .desktop-pipeline {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .desktop-pipeline {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
