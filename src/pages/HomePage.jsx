import React from 'react';

import { HeroSection } from '../components/home/HeroSection';
import { FeaturesSection } from '../components/home/FeaturesSection';
import { StatsSection } from '../components/home/StatsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { PricingSection } from '../components/home/PricingSection';
import { CTASection } from '../components/home/CTASection';

export const HomePage = () => {
  return (
    <>
     

      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
    </>
  );
};