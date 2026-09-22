/**
 * FORMEXAI — The FormexAI Difference (Value & Data Story Section)
 * 
 * Inspired directly by modern editorial technology web design:
 * - White/off-white background with strong black typography
 * - Left: High-impact statement, contextual paragraph, and interactive demo link
 * - Right: 3 large metrics separated by crisp, thin horizontal dividers
 * - 100% supported factual FormexAI operational outcomes (zero invented percentages)
 */

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function FormexDifferenceSection() {
  const metrics = [
    {
      value: '24/7',
      label: 'Continuous Call Coverage',
      detail: 'Every customer call is answered immediately—including evenings, weekends, holidays, and peak daytime dispatch rushes.'
    },
    {
      value: '< 1s',
      label: 'Instant First-Ring Pickup',
      detail: 'Zero hold queues and no frustrating keypad phone trees. Callers speak in natural sentences from the moment the line connects.'
    },
    {
      value: '100%',
      label: 'Structured Intake & Booking',
      detail: 'Accurately captures caller identity, validates service territory, checks live calendar availability, and locks confirmed slots.'
    }
  ];

  return (
    <section className="formex-difference-root" id="difference" aria-label="The FormexAI Difference">
      <div className="container">
        
        <div className="difference-split-grid">
          
          {/* Left Column: Narrative Statement */}
          <div className="diff-narrative-col">
            
            <div className="diff-bracketed-eyebrow">
              <span className="bracket">[</span>
              <span className="eyebrow-mono">THE FORMEXAI DIFFERENCE</span>
              <span className="bracket">]</span>
            </div>

            <h2 className="diff-main-headline">
              Your business should never depend on someone being available to answer the phone.
            </h2>

            <p className="diff-supporting-para">
              Front desk staff get overwhelmed. Technicians work in the field. When calls roll to voicemail, homeowners call your competitor. FormexAI acts as your autonomous front desk—answering every call, qualifying the job, and keeping your schedule full.
            </p>

            <div className="diff-action-row">
              <a href="#demo" className="diff-demo-link" aria-label="Test the live voice receptionist">
                <span>Experience live voice conversation</span>
                <ArrowRight size={16} className="diff-arrow" aria-hidden="true" />
              </a>
            </div>

            <div className="diff-trust-meta">
              <div className="trust-pill-item">
                <CheckCircle2 size={16} className="trust-check" aria-hidden="true" />
                <span>Works with your existing phone number (*72 forward)</span>
              </div>
              <div className="trust-pill-item">
                <CheckCircle2 size={16} className="trust-check" aria-hidden="true" />
                <span>Two-way sync with Google Calendar &amp; Outlook</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3 Stacked Large Metric Blocks with Thin Divider Lines */}
          <div className="diff-metrics-col">
            {metrics.map((item, index) => (
              <div key={index} className="diff-metric-row">
                <div className="metric-top-line">
                  <span className="diff-huge-number">{item.value}</span>
                </div>
                <h3 className="diff-metric-label">{item.label}</h3>
                <p className="diff-metric-detail">{item.detail}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
