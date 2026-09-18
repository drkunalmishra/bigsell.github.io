import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        width: '100%',
        boxSizing: 'border-box',
        padding: '32px 64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
        backgroundColor: '#17140F',
        borderTop: '1px solid #29241B',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '18px',
          fontWeight: 700,
          color: 'var(--color-text-dark)',
          letterSpacing: '-0.2px',
        }}
      >
        BigSell
      </div>
      <div
        style={{
          fontSize: '13.5px',
          color: '#8C8578',
        }}
      >
        Compliance and buyer-data handling details available on request.
      </div>

      <style>{`
        @media (max-width: 640px) {
          footer {
            padding: 24px 24px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  );
}
