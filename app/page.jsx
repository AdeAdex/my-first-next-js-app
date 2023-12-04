"use client";
import React from "react";
import HeroSection from "./components/LandingPage/HeroSection";
import FeatureSection from "./components/LandingPage/FeatureSection/FeatureSection";
import TestimonialsSection from "./components/LandingPage/TestimonialsSection/TestimonialsSection";
import { testimonials } from "./data/testimonial";
import { features } from "./data/features";



const LandingPage = () => {
  return (
    <main className="flex min-h-screen flex-col gap-20 p-24">
      <HeroSection/>
      <FeatureSection features={features}/>
      <TestimonialsSection testimonials={testimonials}/>
    </main>
  );
};

export default LandingPage;
