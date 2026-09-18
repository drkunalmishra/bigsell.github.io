import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FounderQuote() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="founder-quote"
      className="section-wrap"
      style={{
        backgroundColor: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-border)',
        paddingTop: '90px',
        paddingBottom: '90px',
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
          maxWidth: '840px',
          margin: '0 auto',
        }}
      >
        {/* Decorative quote mark */}
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '48px',
            lineHeight: 1,
            color: 'var(--color-accent)',
            marginBottom: '16px',
            opacity: 0.6,
          }}
        >
          “
        </div>

        {/* Pull Quote */}
        <blockquote
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(21px, 2.8vw, 27px)',
            lineHeight: 1.5,
            color: 'var(--color-text)',
            margin: '0 0 28px 0',
            maxWidth: '720px',
          }}
        >
          I've watched a great broker read a hesitation in someone's voice and know, instantly, which worry to defuse. That instinct is real — and it's trapped in one person's head. BigSell is my attempt to put it in every agent's hands, grounded in evidence, not guesswork.
        </blockquote>

        {/* Attribution Line */}
        <div
          style={{
            fontSize: '15px',
            fontWeight: 600,
            letterSpacing: '0.6px',
            color: 'var(--color-accent)',
            fontFamily: 'var(--font-body)',
            marginBottom: '40px',
          }}
        >
          — the idea behind BigSell.
        </div>

        {/* Instinct to Ontology Infographic */}
        <div
          style={{
            width: '100%',
            maxWidth: '640px',
            borderRadius: 'var(--radius-card)',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            boxShadow: '0 4px 20px rgba(30, 27, 22, 0.04)',
            backgroundColor: '#FFFFFF',
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}assets/story-instinct-to-ontology.jpeg`}
            alt="A broker's instinct to structured knowledge ontology: one instinct, made retrievable"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
