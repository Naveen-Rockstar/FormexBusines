/**
 * FORMEXAI — Platform Capabilities Section (Connected Visual Workflow System)
 * 
 * Inspired by modern workflow automation editorial design:
 * - White/off-white background with crisp black typography
 * - Structured pipeline spine connecting: CALL → UNDERSTAND → QUALIFY → BOOK → ROUTE → FOLLOW UP
 * - 3 Connected Operational Capability Groups:
 *   1. Continuous Intake (24/7 Coverage & Natural Conversations)
 *   2. Decision & Scheduling (Lead Qualification & Appointment Booking)
 *   3. Escalation & Sync (Smart Call Routing & Follow-Up Messaging)
 * - Clean thin line connectors, structured relationships, minimal Formex blue accents
 */

import React from 'react';
import { 
  PhoneCall, 
  MessageSquareText, 
  UserCheck, 
  CalendarCheck, 
  PhoneForwarded, 
  Send,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export function ProblemSection() {
  const workflowStages = [
    { num: '01', name: 'CALL' },
    { num: '02', name: 'UNDERSTAND' },
    { num: '03', name: 'QUALIFY' },
    { num: '04', name: 'BOOK' },
    { num: '05', name: 'ROUTE' },
    { num: '06', name: 'FOLLOW UP' }
  ];

  const capabilityGroups = [
    {
      groupTitle: 'INBOUND INTAKE',
      groupTag: 'STAGE 01 — 02',
      items: [
        {
          num: '01',
          icon: PhoneCall,
          title: '24/7 Call Coverage',
          description: 'Answer every inbound customer call immediately, including evenings, weekends, and peak dispatch surges.',
          tag: 'Zero Missed Calls'
        },
        {
          num: '02',
          icon: MessageSquareText,
          title: 'Natural Conversations',
          description: 'Understand customer intent and trade symptoms without forcing callers through rigid keypad phone trees.',
          tag: 'Contextual AI Speech'
        }
      ]
    },
    {
      groupTitle: 'DECISION & BOOKING',
      groupTag: 'STAGE 03 — 04',
      items: [
        {
          num: '03',
          icon: UserCheck,
          title: 'Lead Qualification',
          description: 'Collect equipment age, problem symptoms, and verify service territory before dispatching technicians.',
          tag: 'Territory Validated'
        },
        {
          num: '04',
          icon: CalendarCheck,
          title: 'Appointment Booking',
          description: 'Query live technician route availability in Google Calendar or Outlook and lock confirmed arrival slots.',
          tag: 'Two-Way Sync'
        }
      ]
    },
    {
      groupTitle: 'ESCALATION & SYNC',
      groupTag: 'STAGE 05 — 06',
      items: [
        {
          num: '05',
          icon: PhoneForwarded,
          title: 'Smart Call Routing',
          description: 'Initiate warm telephone transfers with full caller briefing notes when emergency criteria or complex issues arise.',
          tag: 'Zero-Hold Bridge'
        },
        {
          num: '06',
          icon: Send,
          title: 'Follow-Up & Messaging',
          description: 'Send instant SMS arrival confirmations to the customer and write complete call transcripts into your CRM.',
          tag: 'Automated CRM Sync'
        }
      ]
    }
  ];

  return (
    <section className="capabilities-system-root" id="capabilities" aria-label="Platform Capabilities">
      <div className="container">
        
        {/* Section Header Introduction */}
        <div className="capabilities-system-header">
          <div className="cap-eyebrow-line">
            <span className="cap-bracket">[</span>
            <span className="cap-eyebrow-text">PLATFORM CAPABILITIES</span>
            <span className="cap-bracket">]</span>
          </div>
          <h2 className="cap-system-headline">
            One receptionist. Every customer conversation.
          </h2>
          <p className="cap-system-subhead">
            FormexAI connects every stage of the inbound call lifecycle into an autonomous, synchronized operational system.
          </p>
        </div>

        {/* Connected Visual Workflow System Canvas */}
        <div className="capabilities-system-canvas">
          
          {/* Central Workflow Spine */}
          <div className="cap-workflow-spine-strip" aria-label="Operational Workflow Sequence">
            <div className="spine-hub-label">
              <span className="hub-dot" />
              <span>FORMEXAI RECEPTIONIST ENGINE</span>
            </div>
            
            <div className="spine-nodes-row">
              {workflowStages.map((stage, idx) => (
                <React.Fragment key={stage.num}>
                  <div className="spine-node-pill">
                    <span className="s-num">{stage.num}</span>
                    <span className="s-name">{stage.name}</span>
                  </div>
                  {idx < workflowStages.length - 1 && (
                    <span className="spine-connector-arrow" aria-hidden="true">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* 3 Structured Functional Capability Groups */}
          <div className="cap-groups-grid">
            {capabilityGroups.map((group, gIdx) => (
              <div key={gIdx} className="cap-group-column">
                
                {/* Group Meta Header */}
                <div className="cap-group-head">
                  <span className="group-title-label">{group.groupTitle}</span>
                  <span className="group-tag-pill">{group.groupTag}</span>
                </div>

                {/* Capability Cards in this Branch */}
                <div className="cap-group-cards-stack">
                  {group.items.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <div key={item.num} className="cap-system-card">
                        <div className="card-top-row">
                          <div className="cap-icon-box">
                            <IconComp size={18} className="cap-icon-svg" aria-hidden="true" />
                          </div>
                          <span className="cap-meta-tag">{item.tag}</span>
                        </div>

                        <h3 className="cap-card-title">{item.title}</h3>
                        <p className="cap-card-description">{item.description}</p>
                      </div>
                    );
                  })}
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
