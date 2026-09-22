/**
 * FORMEXAI — Engineered For Animated Marquee Ticker
 * 
 * Clean full-width section directly following the hero.
 * Features:
 * - Continuous smooth CSS-animated horizontal loop
 * - Smith.ai-style typography & category movement
 * - Touch-safe, zero horizontal scrollbar overflow
 * - Featured highlight for HVAC & Home Services
 */

import React from 'react';
import { Link } from '../router.jsx';

export function EngineeredForTicker() {
  const industries = [
    { name: 'HVAC & Home Services ★', path: '/industries/home-services', featured: true },
    { name: 'Plumbing', path: '/industries/home-services', featured: false },
    { name: 'Dental', path: '/industries/dental', featured: false },
    { name: 'Healthcare', path: '/industries/healthcare', featured: false },
    { name: 'Beauty & Wellness', path: '/industries/beauty-wellness', featured: false },
    { name: 'Professional Services', path: '/industries/professional-services', featured: false },
    { name: 'Trades', path: '/industries/trades', featured: false }
  ];

  // Duplicate list to achieve seamless infinite horizontal scroll
  const marqueeItems = [...industries, ...industries, ...industries];

  return (
    <section className="engineered-ticker-root" aria-label="Engineered for Industries">
      <div className="ticker-inner-wrap">
        
        {/* Static Left Label Header on Desktop */}
        <div className="ticker-label-badge">
          <span className="ticker-label-text">ENGINEERED FOR:</span>
        </div>

        {/* Marquee Track Container with Masked Fade Edges */}
        <div className="ticker-track-viewport">
          <div className="ticker-track-content" aria-hidden="true">
            {marqueeItems.map((item, index) => (
              <div key={index} className="ticker-item-group">
                <Link
                  to={item.path}
                  tabIndex={index < industries.length ? 0 : -1}
                  className={`ticker-item-link ${item.featured ? 'featured-item' : ''}`}
                >
                  {item.name}
                </Link>
                <span className="ticker-bullet-sep">•</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
