import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import FounderQuote from './components/FounderQuote';
import ProblemSection from './components/ProblemSection';
import BeforeAfterDiagram from './components/BeforeAfterDiagram';
import SystemDiagram from './components/SystemDiagram';
import AgentPipelineDiagram from './components/AgentPipelineDiagram';
import KnowledgeEngineSection from './components/KnowledgeEngineSection';
import TrustSection from './components/TrustSection';
import WhyNowSection from './components/WhyNowSection';
import RoadmapTimeline from './components/RoadmapTimeline';
import PilotStats from './components/PilotStats';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--color-bg)',
      }}
    >
      {/* 1. Nav (sticky) */}
      <Nav />

      {/* 2. Hero */}
      <Hero />

      {/* 3. Founder Quote */}
      <FounderQuote />

      {/* 4. Problem Section */}
      <ProblemSection />

      {/* 5. Before/After Mechanism Diagram */}
      <BeforeAfterDiagram />

      {/* 6. System Diagram (Full How It Works) */}
      <SystemDiagram />

      {/* 7. Four-Agent Pipeline Diagram (Inside Module 04) */}
      <AgentPipelineDiagram />

      {/* 8. Knowledge Engine Section (Where the knowledge comes from) */}
      <KnowledgeEngineSection />

      {/* 9. Trust Section (Dark Background) */}
      <TrustSection />

      {/* 10. Why Now Section */}
      <WhyNowSection />

      {/* 11. Roadmap Timeline (Gated Milestones) */}
      <RoadmapTimeline />

      {/* 12. Pilot Stats (Confirmed Metrics) */}
      <PilotStats />

      {/* 13. Closing CTA & Contact (Dark Centered) */}
      <ContactSection />

      {/* 14. Footer */}
      <Footer />
    </div>
  );
}
