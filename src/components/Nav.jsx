import React, { useState, useEffect } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="main-nav"
      style={{
        width: '100%',
        boxSizing: 'border-box',
        padding: '20px 64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(251, 247, 240, 0.94)' : 'rgba(251, 247, 240, 0.85)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${scrolled ? 'rgba(234, 225, 208, 0.9)' : 'var(--color-border)'}`,
        boxShadow: scrolled ? '0 4px 20px rgba(30, 27, 22, 0.04)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: '24px',
            fontWeight: 700,
            letterSpacing: '-0.3px',
            color: 'var(--color-text)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>BigSell</span>
        </a>
      </div>

      {/* Desktop Links */}
      <div
        className="nav-desktop-links"
        style={{
          display: 'flex',
          gap: '36px',
          alignItems: 'center',
        }}
      >
        <a
          href="#problem"
          style={{
            fontSize: '15px',
            fontWeight: 500,
            color: 'var(--color-text-muted)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
        >
          Story
        </a>
        <a
          href="#how-it-works"
          style={{
            fontSize: '15px',
            fontWeight: 500,
            color: 'var(--color-text-muted)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
        >
          How it works
        </a>
        <a
          href="#trust"
          style={{
            fontSize: '15px',
            fontWeight: 500,
            color: 'var(--color-text-muted)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
        >
          Trust
        </a>
        <a
          href="#roadmap"
          style={{
            fontSize: '15px',
            fontWeight: 500,
            color: 'var(--color-text-muted)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-text-muted)')}
        >
          Roadmap
        </a>
        <a
          href="#contact"
          className="btn-pill-dark"
          style={{
            padding: '10px 22px',
            fontSize: '14px',
          }}
        >
          Get in touch
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        aria-label="Toggle navigation menu"
        className="nav-mobile-toggle"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
          color: 'var(--color-text)',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {mobileMenuOpen ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: 'var(--color-bg)',
            borderBottom: '1px solid var(--color-border)',
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
          }}
        >
          <a
            href="#problem"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-text)' }}
          >
            Story
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-text)' }}
          >
            How it works
          </a>
          <a
            href="#trust"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-text)' }}
          >
            Trust
          </a>
          <a
            href="#roadmap"
            onClick={() => setMobileMenuOpen(false)}
            style={{ fontSize: '16px', fontWeight: 500, color: 'var(--color-text)' }}
          >
            Roadmap
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-pill-dark"
            style={{ width: 'fit-content', marginTop: '8px' }}
          >
            Get in touch
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          #main-nav {
            padding: 16px 24px !important;
          }
          .nav-desktop-links {
            display: none !important;
          }
          .nav-mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
