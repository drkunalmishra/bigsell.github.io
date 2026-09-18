import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Hero() {
  const revealRef = useScrollReveal();

  return (
    <header
      id="hero"
      className="section-wrap"
      style={{
        paddingTop: '100px',
        paddingBottom: '90px',
        background: 'linear-gradient(180deg, var(--color-bg) 0%, var(--color-bg-alt) 100%)',
        borderBottom: '1px solid var(--color-border)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        ref={revealRef}
        className="section-inner fade-in-section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '1080px',
          margin: '0 auto',
        }}
      >
        {/* Kicker */}
        <div className="kicker" style={{ marginBottom: '20px' }}>
          A founder's blueprint for cross-border UAE property
        </div>

        {/* H1 */}
        <h1
          style={{
            fontSize: 'clamp(40px, 5.5vw, 64px)',
            lineHeight: 1.12,
            letterSpacing: '-0.8px',
            color: 'var(--color-text)',
            marginBottom: '24px',
            fontFamily: 'var(--font-display)',
            fontWeight: 600,
          }}
        >
          One broker's instinct,<br />in every agent's hands.
        </h1>

        {/* Subhead */}
        <p
          style={{
            fontSize: 'clamp(18px, 2vw, 21px)',
            lineHeight: 1.6,
            maxWidth: '740px',
            color: 'var(--color-text-muted)',
            marginBottom: '38px',
          }}
        >
          This is the story of BigSell — why it exists, how the four pieces fit together, and what a call sounds like once a call-center agent has a top broker's judgment behind them, live, on every word.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            marginBottom: '50px',
          }}
        >
          <a href="#problem" className="btn-pill-dark">
            Read the story
          </a>
          <a href="#how-it-works" className="btn-pill-outline">
            See the mechanism
          </a>
        </div>

        {/* Hero Infographic Visual */}
        <div
          style={{
            width: '100%',
            maxWidth: '960px',
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            boxShadow: '0 12px 36px rgba(30, 27, 22, 0.08)',
            backgroundColor: '#FFFFFF',
            marginBottom: '40px',
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/hero-agentic-overview.jpeg`}
            alt="Multi-Agent Orchestrator overview linking cross-border buyer calls to live scripts"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
            loading="eager"
          />
        </div>

        {/* Scroll Cue */}
        <a
          href="#founder-quote"
          aria-label="Scroll to founder's vision"
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            color: 'var(--color-accent)',
            fontSize: '13px',
            fontWeight: 600,
            letterSpacing: '1px',
            textTransform: 'uppercase',
            opacity: 0.85,
            transition: 'opacity 0.2s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'translateY(2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.85';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <span>Scroll</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>
    </header>
  );
}
