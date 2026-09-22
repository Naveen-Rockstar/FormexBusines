/**
 * FORMEXAI — Home Page
 * Master Editorial Product-Led Story Structure:
 * 
 * 01 NAVIGATION (Global Navbar in App.jsx)
 * 02 HERO (Dark Cinematic Hero: "Every call answered. Every opportunity handled.")
 * 03 ENGINEERED FOR (Full-width animated industry marquee ticker)
 * 04 THE FORMEXAI DIFFERENCE (Minimalist Black & White data story with 3 large metrics)
 * 05 PLATFORM CAPABILITIES (Connected Visual Workflow System)
 * 06 HOW IT WORKS (Visual 6-Stage Connected Journey)
 * 07 PRODUCT PREVIEW ("See what your team sees" — Dashboard & Sarah Mitchell Call Detail)
 * 08 REAL HVAC SCENARIOS ("Built for the calls your team actually gets")
 * 09 CORE CAPABILITIES (Answer, Understand, Qualify, Book, Route, Follow Up)
 * 10 BUSINESS WORKFLOW (Before FormexAI vs With FormexAI)
 * 11 INTEGRATIONS ("Connect FormexAI with your workflow")
 * 12 HUMAN CONTROL ("AI handles the routine. Your team handles what matters.")
 * 13 INDUSTRIES ("Built for HVAC. Designed for home services.")
 * 14 TRUST ("Designed around your business rules")
 * 15 FAQ (Direct HVAC contractor answers)
 * 16 FINAL CTA ("Stop sending customers to voicemail")
 * 17 FOOTER (Global Footer in App.jsx)
 */

import React from 'react';
import { Hero } from '../sections/Hero.jsx';
import { EngineeredForTicker } from '../sections/EngineeredForTicker.jsx';
import { FormexDifferenceSection } from '../sections/FormexDifferenceSection.jsx';
import { ProblemSection } from '../sections/ProblemSection.jsx';
import { HowItWorks } from '../sections/HowItWorks.jsx';
import { ProductPreviewSection } from '../sections/ProductPreviewSection.jsx';
import { RealHvacScenarios } from '../sections/RealHvacScenarios.jsx';
import { CoreCapabilities } from '../sections/CoreCapabilities.jsx';
import { BusinessWorkflow } from '../sections/BusinessWorkflow.jsx';
import { Integrations } from '../sections/Integrations.jsx';
import { HumanControl } from '../sections/HumanControl.jsx';
import { IndustriesSection } from '../sections/IndustriesSection.jsx';
import { TrustSection } from '../sections/TrustSection.jsx';
import { FaqSection } from '../sections/FaqSection.jsx';
import { FinalCta } from '../sections/FinalCta.jsx';

export function HomePage({ onOpenDemoModal }) {
  return (
    <>
      {/* 02 HERO: Dark cinematic headline, unboxed eyebrow, and high-contrast CTAs */}
      <Hero onOpenDemoModal={onOpenDemoModal} />

      {/* 03 ENGINEERED FOR: Continuous animated industry marquee ticker */}
      <EngineeredForTicker />

      {/* 04 THE FORMEXAI DIFFERENCE: Minimalist Black & White data story with 3 large metrics */}
      <FormexDifferenceSection />

      {/* 05 PLATFORM CAPABILITIES: Connected Visual Workflow System */}
      <ProblemSection />

      {/* 06 HOW IT WORKS: 6-stage connected operational workflow */}
      <HowItWorks />

      {/* 07 PRODUCT PREVIEW: Operational metrics overview & Sarah Mitchell call detail */}
      <ProductPreviewSection />

      {/* 08 REAL HVAC SCENARIOS: Emergency, Service, Replacement, Maintenance */}
      <RealHvacScenarios />

      {/* 09 CORE CAPABILITIES: Answer, Understand, Qualify, Book, Route, Follow Up */}
      <CoreCapabilities />

      {/* 10 BUSINESS WORKFLOW: Before FormexAI vs With FormexAI */}
      <BusinessWorkflow />

      {/* 11 INTEGRATIONS: Truthful ecosystem connections (Calendar, SMS, CRM) */}
      <Integrations />

      {/* 12 HUMAN CONTROL: Routine to AI, emergencies and complex calls to humans */}
      <HumanControl />

      {/* 13 INDUSTRIES: Flagship HVAC + Home Services (Plumbing, Electrical, Roofing) */}
      <IndustriesSection onOpenDemoModal={onOpenDemoModal} />

      {/* 14 TRUST: Business rules, territories, pricing policies, test calls */}
      <TrustSection />

      {/* 15 FAQ: Practical contractor questions answered */}
      <FaqSection />

      {/* 16 FINAL CTA: Stop losing revenue to voicemail */}
      <FinalCta onOpenDemoModal={onOpenDemoModal} />
    </>
  );
}
