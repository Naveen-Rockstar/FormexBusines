/**
 * FORMEXAI — Master Hero Section
 * 
 * Layout Architecture:
 * - Editorial Centered Headline & Clear Supporting Copy
 * - Action CTAs: Hear FormexAI (Audio Waveform) + Book a Demo
 * - 3-Point Proof Strip: 24/7 Always on, No missed calls, Your team in control
 * - Original FormexAI Product Visualization:
 *   Connected real-time pipeline (Inbound Call -> AI Comprehension -> Lead Qualification -> Calendar Sync -> CRM & SMS)
 */

import React from 'react';
import { 
  PhoneCall, 
  BrainCircuit, 
  ClipboardCheck, 
  CalendarCheck, 
  Send,
  CheckCircle2
} from 'lucide-react';

export function Hero({ onOpenDemoModal }) {
  const handleScrollToDemo = (e) => {
    e.preventDefault();
    const demoEl = document.getElementById('demo');
    if (demoEl) {
      demoEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/hear-formexai';
    }
  };

  const pipelineNodes = [
    {
      step: '01 INCOMING CALL',
      title: 'Customer Calling',
      desc: '"My AC stopped cooling and it is 82° inside."',
      badge: 'Live Ring · < 0.4s Pickup',
      badgeClass: 'badge-blue',
      icon: PhoneCall
    },
    {
      step: '02 UNDERSTAND',
      title: 'Intent & Urgency',
      desc: 'Cooling Failure Diagnostic · Priority Same-Day',
      badge: 'Natural Speech Parsed',
      badgeClass: 'badge-blue',
      icon: BrainCircuit
    },
    {
      step: '03 QUALIFY',
      title: 'Lead Intake',
      desc: 'Dallas Metro Territory · Single-Family Home',
      badge: 'Verified Customer Record',
      badgeClass: 'badge-green',
      icon: ClipboardCheck
    },
    {
      step: '04 LIVE SCHEDULE',
      title: 'Calendar Lock',
      desc: 'Sunday 10:00 AM Window · Tech Route Matched',
      badge: 'Two-Way Sync Confirmed',
      badgeClass: 'badge-green',
      icon: CalendarCheck
    },
    {
      step: '05 DISPATCH & SMS',
      title: 'Customer Notified',
      desc: 'Work Order #8842 Logged · SMS Arrival Sent',
      badge: 'Field Team Alerted',
      badgeClass: 'badge-blue',
      icon: Send
    }
  ];

  return (
    <section className="hero-editorial-root centered-hero-root" aria-label="FormexAI Hero">
      <div className="hero-editorial-container hero-centered-container">
        
        {/* Centered Main Content Block */}
        <div className="hero-content-centered">
          
          {/* Eyebrow with blue accent bar */}
          <div className="hero-eyebrow-line-wrap centered-eyebrow">
            <span className="eyebrow-accent-bar" aria-hidden="true" />
            <span className="hero-eyebrow-heading">AI RECEPTIONIST FOR BUSINESS WORKFLOWS</span>
            <span className="eyebrow-accent-bar" aria-hidden="true" />
          </div>

          {/* Headline with FormexAI Strong Blue Highlight */}
          <h1 className="hero-headline-editorial centered-headline">
            Every call answered.<br />
            <span className="headline-orange-span">Every opportunity handled.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="hero-description-editorial centered-description">
            FormexAI answers customer calls 24/7, understands what they need, qualifies service requests, books appointments into your calendar and routes urgent situations to your team.
          </p>

          {/* CTA Group */}
          <div className="hero-cta-button-row centered-cta-row">
            <a
              href="#demo"
              onClick={handleScrollToDemo}
              className="btn-hero-hear"
              aria-label="Hear FormexAI voice demo"
            >
              <span className="cta-waveform-glyph" aria-hidden="true">
                <span className="cg-bar cg-1" />
                <span className="cg-bar cg-2" />
                <span className="cg-bar cg-3" />
                <span className="cg-bar cg-4" />
              </span>
              <span>Hear FormexAI Live</span>
            </a>

            <button
              type="button"
              onClick={onOpenDemoModal}
              className="btn-hero-demo"
              aria-label="Book a Product Demo"
            >
              Book a 15-Min Demo
            </button>
          </div>

          {/* Supporting Micro-copy */}
          <div className="hero-cta-footnote centered-footnote">
            Try the interactive voice receptionist. No signup required.
          </div>

          {/* Horizontal Separator */}
          <div className="hero-center-divider" aria-hidden="true" />

          {/* 3-Item Benefit Proof Row */}
          <div className="hero-benefits-strip centered-benefits">
            <div className="benefit-item">
              <span className="benefit-title">24/7 / 365</span>
              <span className="benefit-sub">Zero missed calls</span>
            </div>

            <span className="benefit-sep" aria-hidden="true" />

            <div className="benefit-item">
              <span className="benefit-title">&lt; 1-Second Pickup</span>
              <span className="benefit-sub">Custom brand greeting</span>
            </div>

            <span className="benefit-sep" aria-hidden="true" />

            <div className="benefit-item">
              <span className="benefit-title">Your Rules &amp; Schedule</span>
              <span className="benefit-sub">Escalate when needed</span>
            </div>
          </div>

          {/* Original FormexAI Product Visualization */}
          <div className="hero-product-vis-container" aria-label="FormexAI Live Operations Architecture">
            <div className="hero-product-vis-card">
              
              {/* Product Visual Topbar */}
              <div className="hero-vis-header">
                <div className="hero-vis-title-group">
                  <span className="hero-vis-live-dot" aria-hidden="true" />
                  <div>
                    <div className="hero-vis-title">FormexAI Receptionist Hub — Active Call Stream</div>
                    <div className="hero-vis-subtitle">Apex Heating &amp; Air · Inbound Carrier Line Forwarding</div>
                  </div>
                </div>
                <div className="hero-vis-badge">
                  OPERATIONAL PIPELINE · LIVE DEMO
                </div>
              </div>

              {/* 5 Connected Pipeline Nodes */}
              <div className="hero-vis-pipeline-grid">
                {pipelineNodes.map((node, index) => {
                  const IconComp = node.icon;
                  return (
                    <div 
                      key={index} 
                      className={`hero-vis-node ${index === 0 ? 'hero-vis-node-active' : ''}`}
                    >
                      <div className="node-step-tag">{node.step}</div>
                      <div className="node-title">{node.title}</div>
                      <div className="node-desc">{node.desc}</div>
                      <div className={`node-meta-badge ${node.badgeClass}`}>
                        <CheckCircle2 size={12} />
                        <span>{node.badge}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Live Operational Status Strip */}
              <div className="hero-vis-activity-strip">
                <span className="activity-label">REAL-TIME STATUS:</span>
                <span className="activity-live-text">
                  Call answered in 0.38s → Emergency qualification applied → Sunday 10:00 AM dispatch slot confirmed in Google Calendar → SMS dispatched to customer.
                </span>
              </div>

            </div>
          </div>

          {/* Bottom Industry Context Strip */}
          <div className="hero-industries-bar centered-industries" style={{ marginTop: '2.5rem' }}>
            <span className="ind-lead-label">ENGINEERED FOR:</span>
            <div className="ind-tags-row">
              <span className="ind-tag" style={{ fontWeight: 700, color: 'var(--color-blue-deep)' }}>HVAC &amp; Home Services ★</span>
              <span className="ind-dot" aria-hidden="true">•</span>
              <span className="ind-tag">Plumbing</span>
              <span className="ind-dot" aria-hidden="true">•</span>
              <span className="ind-tag">Dental</span>
              <span className="ind-dot" aria-hidden="true">•</span>
              <span className="ind-tag">Healthcare</span>
              <span className="ind-dot" aria-hidden="true">•</span>
              <span className="ind-tag">Beauty &amp; Wellness</span>
              <span className="ind-dot" aria-hidden="true">•</span>
              <span className="ind-tag">Professional Services</span>
              <span className="ind-dot" aria-hidden="true">•</span>
              <span className="ind-tag">Trades</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
