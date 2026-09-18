import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ContactSection() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="contact"
      className="section-wrap"
      style={{
        backgroundColor: 'var(--color-bg-dark)',
        color: 'var(--color-text-dark)',
        textAlign: 'center',
        paddingTop: '110px',
        paddingBottom: '110px',
      }}
    >
      <div
        ref={revealRef}
        className="section-inner fade-in-section"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '740px',
          margin: '0 auto',
        }}
      >
        <span className="kicker-dark">Join us</span>

        <h2
          style={{
            fontSize: 'clamp(32px, 4.5vw, 48px)',
            lineHeight: 1.2,
            color: 'var(--color-text-dark)',
            marginBottom: '20px',
          }}
        >
          We're raising to fund the pilot — and looking for brokerage partners
        </h2>

        <p
          style={{
            fontSize: 'clamp(16px, 2vw, 18px)',
            lineHeight: 1.65,
            color: 'var(--color-text-dark-muted)',
            marginBottom: '40px',
            maxWidth: '620px',
          }}
        >
          Whether you're a brokerage exploring the pilot cohort, a developer partner, or an investor who wants the details behind this page — we'd like to hear from you.
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
          }}
        >
          <a
            href="mailto:mishrakunal1990@gmail.com"
            className="btn-pill-light"
          >
            mishrakunal1990@gmail.com
          </a>
          <a
            href="tel:+919019304677"
            className="btn-pill-dark-outline"
          >
            +91 90193 04677
          </a>
        </div>
      </div>
    </section>
  );
}
