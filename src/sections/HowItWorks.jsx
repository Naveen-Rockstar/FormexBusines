/**
 * FORMEXAI — How It Works Section (Visual Connected Product Journey)
 * 
 * Clean, rock-solid full-width vertical workflow journey:
 * 01 — CALL
 * 02 — ANSWER
 * 03 — UNDERSTAND
 * 04 — QUALIFY
 * 05 — BOOK / ROUTE
 * 06 — FOLLOW UP
 * 
 * Features:
 * - Continuous connected vertical spine with progressive scroll lighting
 * - Zero alignment bugs across all viewport sizes
 * - Minimal black/white foundation with subtle Formex blue active highlights
 * - Large numbers, clean typography, and spacious vertical rhythm
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  PhoneCall, 
  Headphones, 
  BrainCircuit, 
  ClipboardCheck, 
  CalendarCheck, 
  MessageSquareCheck 
} from 'lucide-react';

export function HowItWorks() {
  const [activeStage, setActiveStage] = useState(0);
  const stageRefs = useRef([]);

  const stages = [
    {
      num: '01',
      id: 'call',
      name: 'CALL',
      title: 'A customer calls your business.',
      desc: 'Homeowners and clients dial your existing phone line at any hour of the day or night.',
      icon: PhoneCall,
      detail: 'Carrier SIP forward (*72) connects instantly'
    },
    {
      num: '02',
      id: 'answer',
      name: 'ANSWER',
      title: 'FormexAI answers immediately.',
      desc: 'Picks up on the first ring in under one second with your custom company greeting and professional tone.',
      icon: Headphones,
      detail: '< 1-second pickup with zero hold queues'
    },
    {
      num: '03',
      id: 'understand',
      name: 'UNDERSTAND',
      title: 'FormexAI understands what the customer needs.',
      desc: 'Converses naturally to triage service symptoms, diagnostic inquiries, or emergency heating/cooling outages.',
      icon: BrainCircuit,
      detail: 'Natural language understanding without keypad menus'
    },
    {
      num: '04',
      id: 'qualify',
      name: 'QUALIFY',
      title: 'FormexAI collects the relevant information.',
      desc: 'Captures caller identity, service address, equipment age, and validates your defined service territory.',
      icon: ClipboardCheck,
      detail: 'Custom business rules & territory boundaries applied'
    },
    {
      num: '05',
      id: 'book-route',
      name: 'BOOK / ROUTE',
      title: 'FormexAI books the appointment or routes the call.',
      desc: 'Queries real-time technician routes to lock confirmed arrival windows, or initiates warm phone transfer for emergencies.',
      icon: CalendarCheck,
      detail: 'Two-way calendar lock (Google Calendar / Outlook)'
    },
    {
      num: '06',
      id: 'follow-up',
      name: 'FOLLOW UP',
      title: 'FormexAI sends the appropriate follow-up.',
      desc: 'Dispatches instant SMS arrival confirmation to the customer and writes complete work order notes into your CRM.',
      icon: MessageSquareCheck,
      detail: 'SMS delivered + CRM record automatically logged'
    }
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-stage-index'));
            if (!isNaN(index)) {
              setActiveStage(index);
            }
          }
        });
      },
      {
        threshold: 0.45,
        rootMargin: '-10% 0px -25% 0px'
      }
    );

    stageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="how-it-works-journey-root" id="how-it-works" aria-label="How FormexAI Works">
      <div className="container">
        
        {/* Section Header */}
        <div className="how-journey-header">
          <div className="journey-eyebrow-line">
            <span className="bracket">[</span>
            <span className="eyebrow-mono">HOW IT WORKS</span>
            <span className="bracket">]</span>
          </div>
          <h2 className="journey-main-headline">
            From a call to a booked job.
          </h2>
          <p className="journey-subhead">
            Six structured stages. One continuous operational workflow.<br />
            FormexAI handles the conversation so your team can focus on the job.
          </p>
        </div>

        {/* Vertical Connected Journey Timeline */}
        <div className="journey-timeline-container">
          
          <div className="journey-stages-stack">
            {stages.map((st, idx) => {
              const isActive = idx === activeStage;
              const isPast = idx < activeStage;
              const IconComp = st.icon;

              return (
                <div
                  key={st.id}
                  ref={(el) => (stageRefs.current[idx] = el)}
                  data-stage-index={idx}
                  className={`journey-stage-row ${isActive ? 'stage-active' : ''} ${isPast ? 'stage-past' : ''}`}
                >
                  
                  {/* Left Column: Number & Spine Node */}
                  <div className="journey-spine-column">
                    <div className="spine-node-indicator">
                      <span className="node-num-tag">{st.num}</span>
                      <div className="node-center-dot">
                        <span className="dot-inner" />
                      </div>
                    </div>
                    {idx < stages.length - 1 && (
                      <div className="spine-connecting-line">
                        <div 
                          className="spine-progress-fill" 
                          style={{ height: isPast || isActive ? '100%' : '0%' }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Right Column: Stage Content Card */}
                  <div className="journey-content-card">
                    <div className="stage-card-topbar">
                      <div className="stage-name-pill">
                        <span className="stage-prefix">STAGE {st.num}</span>
                        <span className="stage-sep">/</span>
                        <span className="stage-keyword">{st.name}</span>
                      </div>
                      <div className="stage-icon-wrap">
                        <IconComp size={18} className="stage-icon" aria-hidden="true" />
                      </div>
                    </div>

                    <h3 className="stage-headline">{st.title}</h3>
                    <p className="stage-paragraph">{st.desc}</p>

                    <div className="stage-detail-footnote">
                      <span className="detail-check">✓</span>
                      <span className="detail-text">{st.detail}</span>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
