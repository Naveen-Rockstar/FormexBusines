/**
 * FORMEXAI — Dark Cinematic Editorial Hero Section
 * 
 * Inspired by high-end AI company website design (NodeWord reference):
 * - Deep dark navy / blue-black foundation
 * - Subtle atmospheric blue radial lighting and vignette depth
 * - Clean, unboxed typographic eyebrow (zero generic template pill/badge)
 * - Large, crisp white editorial headline with FormexAI blue accent
 * - High-contrast action CTAs
 * - Zero heavy visual boxes or dashboard cards
 */

import React from 'react';

export function Hero({ onOpenDemoModal }) {
  const handleScrollToDemo = (e) => {
    e.preventDefault();
    const demoEl = document.getElementById('difference') || document.getElementById('how-it-works');
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/hear-formexai';
    }
  };

  return (
    <section className="hero-cinematic-root" aria-label="FormexAI Hero">
      
      {/* Dark Cinematic Atmosphere Background Layers */}
      <div className="cinematic-atmosphere" aria-hidden="true">
        <div className="atmosphere-radial-glow" />
        <div className="atmosphere-top-ambient" />
        <div className="atmosphere-tech-matrix" />
        <div className="atmosphere-bottom-horizon" />
      </div>

      <div className="container hero-cinematic-container">
        
        {/* Main Editorial Hero Content */}
        <div className="hero-cinematic-content">
          
          {/* Clean Typographic Eyebrow (No pill, no box, no border) */}
          <div className="hero-eyebrow-minimal">
            <span className="eyebrow-text">AI RECEPTIONIST FOR BUSINESS WORKFLOWS</span>
          </div>

          {/* Large High-Contrast Display Headline */}
          <h1 className="hero-headline-cinematic">
            Every call answered.<br />
            <span className="headline-accent-cinematic">Every opportunity handled.</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="hero-description-cinematic">
            FormexAI answers customer calls 24/7, understands what they need, qualifies service requests, books appointments into your calendar and routes urgent situations to your team.
          </p>

          {/* High-Contrast Action CTAs */}
          <div className="hero-cta-group-cinematic">
            <a
              href="/hear-formexai"
              className="btn-cinematic-primary"
              aria-label="Hear FormexAI live voice demo"
            >
              <span className="hero-wave-glyph" aria-hidden="true">
                <span className="w-bar-c w-1" />
                <span className="w-bar-c w-2" />
                <span className="w-bar-c w-3" />
                <span className="w-bar-c w-4" />
              </span>
              <span>Hear FormexAI Live</span>
            </a>

            <button
              type="button"
              onClick={onOpenDemoModal}
              className="btn-cinematic-secondary"
              aria-label="Book a 15-Minute Demo"
            >
              <span>Book a 15-Min Demo</span>
              <span className="cta-arrow" aria-hidden="true">→</span>
            </button>
          </div>

          {/* Subtle Supporting Proof Strip */}
          <div className="hero-proof-cinematic">
            <span className="proof-item">Instant first-ring pickup</span>
            <span className="proof-divider" aria-hidden="true">•</span>
            <span className="proof-item">Zero phone number changes</span>
            <span className="proof-divider" aria-hidden="true">•</span>
            <span className="proof-item">No credit card required</span>
          </div>

        </div>

      </div>

    </section>
  );
}
