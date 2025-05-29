import React from 'react';

import { PricingSection } from '../components/home/PricingSection';

export const PricingPage = () => {
  return (
    <>
    

      {/* Simple header section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 relative overflow-hidden">
        <div className="absolute inset-0 noise-bg"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Simple, Transparent <span className="gradient-text bg-gradient-to-r from-primary-300 to-secondary-300">Pricing</span>
            </h1>
            <p className="text-xl text-white/80">
              Choose the plan that fits your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Include the PricingSection component */}
      <PricingSection />
    </>
  );
};