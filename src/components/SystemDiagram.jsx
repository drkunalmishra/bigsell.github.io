import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function SystemDiagram() {
  const revealRef = useScrollReveal();
  const [activeTab, setActiveTab] = useState('svg'); // 'svg' | 'infographic'

  return (
    <section
      id="how-it-works"
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
          gap: '36px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ maxWidth: '780px' }}>
            <span className="kicker">How it works</span>
            <h2
              style={{
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                lineHeight: 1.22,
                color: 'var(--color-text)',
              }}
            >
              Four data layers, one live script
            </h2>
            <p style={{ marginTop: '14px', fontSize: '17px', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>
              A multi-agent engine merges your brokerage's own sales-tactics knowledge with real, current property data — and hands the agent an opening hook, a "why now" narrative, and an objection-handling playbook, grounded in evidence, not guesswork.
            </p>
          </div>

          {/* Toggle between Interactive SVG and Infographic */}
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
              onClick={() => setActiveTab('svg')}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                backgroundColor: activeTab === 'svg' ? 'var(--color-bg-dark)' : 'transparent',
                color: activeTab === 'svg' ? 'var(--color-text-dark)' : 'var(--color-text-muted)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Interactive Data Flow
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('infographic')}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-pill)',
                border: 'none',
                backgroundColor: activeTab === 'infographic' ? 'var(--color-bg-dark)' : 'transparent',
                color: activeTab === 'infographic' ? 'var(--color-text-dark)' : 'var(--color-text-muted)',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              System Infographic
            </button>
          </div>
        </div>

        {activeTab === 'svg' ? (
          <>
            {/* Desktop System SVG */}
            <div
              className="desktop-system-svg"
              style={{
                width: '100%',
                backgroundColor: '#FFFFFF',
                borderRadius: 'var(--radius-card)',
                border: '1px solid var(--color-border)',
                padding: '40px 30px',
                boxSizing: 'border-box',
                boxShadow: '0 4px 20px rgba(30, 27, 22, 0.03)',
              }}
            >
              <svg
                viewBox="0 0 1140 440"
                width="100%"
                height="100%"
                style={{ display: 'block', overflow: 'visible' }}
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <marker id="sys-arrow-gold" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                    <path d="M 0 0 L 9 4.5 L 0 9 z" fill="#8A5A20" />
                  </marker>
                  <marker id="sys-arrow-dark" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
                    <path d="M 0 0 L 9 4.5 L 0 9 z" fill="#1E1B16" />
                  </marker>
                </defs>

                {/* LEFT COLUMN: 3 SOURCE MODULES */}
                {/* Module 01 */}
                <g transform="translate(30, 20)">
                  <rect width="270" height="96" rx="12" fill="#FDFBF7" stroke="#D9CBAB" strokeWidth="1.5" />
                  <text x="20" y="32" fontFamily="'Public Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="1.2" fill="#8A5A20">
                    MODULE 01
                  </text>
                  <text x="20" y="56" fontFamily="'Fraunces', serif" fontSize="16" fontWeight="600" fill="#1E1B16">
                    Broker Sales Intelligence
                  </text>
                  <text x="20" y="80" fontFamily="'Public Sans', sans-serif" fontSize="12" fill="#4A453C">
                    Transcribed &amp; evidence-tagged tactics
                  </text>
                </g>

                {/* Module 02 */}
                <g transform="translate(30, 160)">
                  <rect width="270" height="96" rx="12" fill="#FDFBF7" stroke="#D9CBAB" strokeWidth="1.5" />
                  <text x="20" y="32" fontFamily="'Public Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="1.2" fill="#8A5A20">
                    MODULE 02
                  </text>
                  <text x="20" y="56" fontFamily="'Fraunces', serif" fontSize="16" fontWeight="600" fill="#1E1B16">
                    Property &amp; Developer Data
                  </text>
                  <text x="20" y="80" fontFamily="'Public Sans', sans-serif" fontSize="12" fill="#4A453C">
                    Catalog: yields, plans, visa thresholds
                  </text>
                </g>

                {/* Module 03 */}
                <g transform="translate(30, 300)">
                  <rect width="270" height="96" rx="12" fill="#FDFBF7" stroke="#D9CBAB" strokeWidth="1.5" />
                  <text x="20" y="32" fontFamily="'Public Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="1.2" fill="#8A5A20">
                    MODULE 03
                  </text>
                  <text x="20" y="56" fontFamily="'Fraunces', serif" fontSize="16" fontWeight="600" fill="#1E1B16">
                    Buyer Intelligence
                  </text>
                  <text x="20" y="80" fontFamily="'Public Sans', sans-serif" fontSize="12" fill="#4A453C">
                    Consent-clean (CRM import, no scraping)
                  </text>
                </g>

                {/* CONNECTING ARROWS TO CENTRAL ENGINE */}
                <path d="M 300 68 C 370 68, 380 180, 440 180" fill="none" stroke="#8A5A20" strokeWidth="2" markerEnd="url(#sys-arrow-gold)" />
                <rect x="315" y="60" width="105" height="22" rx="4" fill="#F5EDDD" stroke="#D9CBAB" strokeWidth="1" />
                <text x="367" y="75" fontFamily="'Public Sans', sans-serif" fontSize="11" fontWeight="600" fill="#8A5A20" textAnchor="middle">
                  tagged tactics
                </text>

                <line x1="300" y1="208" x2="440" y2="208" stroke="#8A5A20" strokeWidth="2" markerEnd="url(#sys-arrow-gold)" />
                <rect x="315" y="197" width="105" height="22" rx="4" fill="#F5EDDD" stroke="#D9CBAB" strokeWidth="1" />
                <text x="367" y="212" fontFamily="'Public Sans', sans-serif" fontSize="11" fontWeight="600" fill="#8A5A20" textAnchor="middle">
                  unit economics
                </text>

                <path d="M 300 348 C 370 348, 380 236, 440 236" fill="none" stroke="#8A5A20" strokeWidth="2" markerEnd="url(#sys-arrow-gold)" />
                <rect x="305" y="325" width="130" height="22" rx="4" fill="#F5EDDD" stroke="#D9CBAB" strokeWidth="1" />
                <text x="370" y="340" fontFamily="'Public Sans', sans-serif" fontSize="11" fontWeight="600" fill="#8A5A20" textAnchor="middle">
                  buyer + match request
                </text>

                {/* CENTER: MODULE 04 SCRIPT ENGINE */}
                <g transform="translate(450, 100)">
                  <rect width="320" height="220" rx="16" fill="#1E1B16" stroke="#3A362C" strokeWidth="2" />
                  <text x="24" y="38" fontFamily="'Public Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="1.2" fill="#C99A4A">
                    MODULE 04 · ENGINE
                  </text>
                  <text x="24" y="66" fontFamily="'Fraunces', serif" fontSize="20" fontWeight="600" fill="#FBF7F0">
                    Script Engine
                  </text>
                  <text x="24" y="92" fontFamily="'Public Sans', sans-serif" fontSize="13" fill="#B8B2A3">
                    Real-time multi-agent pipeline
                  </text>

                  <rect x="20" y="118" width="280" height="80" rx="8" fill="#26221A" stroke="#3A362C" strokeWidth="1" />
                  <text x="160" y="145" fontFamily="'Public Sans', sans-serif" fontSize="12" fontWeight="600" fill="#C99A4A" textAnchor="middle">
                    Context → Retrieval → Synthesis
                  </text>
                  <text x="160" y="172" fontFamily="'Public Sans', sans-serif" fontSize="11" fill="#B8B2A3" textAnchor="middle">
                    Live evidence synthesis in &lt; 350ms
                  </text>
                </g>

                {/* FLOW ARROW ENGINE -> CALL-CENTER AGENT */}
                <line x1="770" y1="210" x2="840" y2="210" stroke="#1E1B16" strokeWidth="2.5" markerEnd="url(#sys-arrow-dark)" />
                <rect x="760" y="178" width="80" height="22" rx="4" fill="#EAE1D0" />
                <text x="800" y="193" fontFamily="'Public Sans', sans-serif" fontSize="11" fontWeight="600" fill="#1E1B16" textAnchor="middle">
                  grounded script
                </text>

                {/* RIGHT: CALL-CENTER AGENT BOX */}
                <g transform="translate(850, 95)">
                  <rect width="260" height="230" rx="16" fill="#FDFBF7" stroke="#8A5A20" strokeWidth="2" filter="drop-shadow(0 6px 16px rgba(138, 90, 32, 0.08))" />
                  <text x="24" y="36" fontFamily="'Public Sans', sans-serif" fontSize="11" fontWeight="700" letterSpacing="1.2" fill="#8A5A20">
                    LIVE OUTPUT
                  </text>
                  <text x="24" y="64" fontFamily="'Fraunces', serif" fontSize="19" fontWeight="600" fill="#1E1B16">
                    Call-Center Agent
                  </text>
                  
                  <g transform="translate(20, 84)">
                    <rect width="220" height="34" rx="6" fill="#FFFFFF" stroke="#EAE1D0" />
                    <circle cx="16" cy="17" r="4" fill="#8A5A20" />
                    <text x="30" y="21" fontFamily="'Public Sans', sans-serif" fontSize="12" fontWeight="600" fill="#1E1B16">
                      Opening Hook
                    </text>

                    <rect y="44" width="220" height="34" rx="6" fill="#FFFFFF" stroke="#EAE1D0" />
                    <circle cx="16" cy="61" r="4" fill="#8A5A20" />
                    <text x="30" y="65" fontFamily="'Public Sans', sans-serif" fontSize="12" fontWeight="600" fill="#1E1B16">
                      "Why Now" Narrative
                    </text>

                    <rect y="88" width="220" height="34" rx="6" fill="#FFFFFF" stroke="#EAE1D0" />
                    <circle cx="16" cy="105" r="4" fill="#8A5A20" />
                    <text x="30" y="109" fontFamily="'Public Sans', sans-serif" fontSize="12" fontWeight="600" fill="#1E1B16">
                      Objection Playbook
                    </text>
                  </g>
                </g>
              </svg>
            </div>

            {/* Mobile System Stack */}
            <div className="mobile-system-stack" style={{ display: 'none', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '14px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', color: 'var(--color-accent)' }}>MODULE 01</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, margin: '6px 0' }}>Broker Sales Intelligence</div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>Transcribed and evidence-tagged tactics</div>
              </div>
              <div style={{ textAlign: 'center', color: 'var(--color-accent)', fontSize: '18px' }}>↓ tagged tactics</div>

              <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '14px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', color: 'var(--color-accent)' }}>MODULE 02</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, margin: '6px 0' }}>Property &amp; Developer Data</div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>Catalog: yields, payment plans, Golden Visa eligibility</div>
              </div>
              <div style={{ textAlign: 'center', color: 'var(--color-accent)', fontSize: '18px' }}>↓ unit economics</div>

              <div style={{ background: '#FFFFFF', padding: '24px', borderRadius: '14px', border: '1px solid var(--color-border)' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', color: 'var(--color-accent)' }}>MODULE 03</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, margin: '6px 0' }}>Buyer Intelligence</div>
                <div style={{ fontSize: '14px', color: 'var(--color-text-muted)' }}>Consent-clean CRM import, 0% registry scraping</div>
              </div>
              <div style={{ textAlign: 'center', color: 'var(--color-accent)', fontSize: '18px' }}>↓ buyer + match request</div>

              <div style={{ background: '#1E1B16', color: '#FBF7F0', padding: '24px', borderRadius: '14px', border: '1px solid #3A362C' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', color: '#C99A4A' }}>MODULE 04 · ENGINE</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, margin: '6px 0' }}>Script Engine</div>
                <div style={{ fontSize: '14px', color: '#B8B2A3', marginBottom: '12px' }}>Context → Retrieval → Synthesis → Delivery</div>
              </div>
              <div style={{ textAlign: 'center', color: 'var(--color-text)', fontSize: '18px' }}>↓ grounded script</div>

              <div style={{ background: '#FDFBF7', padding: '24px', borderRadius: '14px', border: '2px solid var(--color-accent)' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.2px', color: 'var(--color-accent)' }}>DELIVERY</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, margin: '6px 0' }}>Call-Center Agent</div>
                <div style={{ fontSize: '14px', color: 'var(--color-text)' }}>• Opening hook<br />• "Why now" narrative<br />• Objection playbook</div>
              </div>
            </div>
          </>
        ) : (
          /* System Architecture Infographic */
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
              src={`${import.meta.env.BASE_URL}assets/system-architecture.jpeg`}
              alt="BigSell full system architecture infographic with multi-agent orchestration layer"
              style={{ width: '100%', height: 'auto', display: 'block' }}
              loading="lazy"
            />
          </div>
        )}

        {/* Caption */}
        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.6,
            color: 'var(--color-text-muted)',
            fontStyle: 'italic',
            textAlign: 'center',
            maxWidth: '840px',
            margin: '0 auto',
          }}
        >
          Every script line traces back to a source: a tagged broker tactic from Module 1, or a live fact from Module 2 — never an unsourced guess.
        </p>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .desktop-system-svg {
            display: none !important;
          }
          .mobile-system-stack {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
