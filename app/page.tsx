"use client";

import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import BrandCarousel from "@/components/BrandCarousel"; // Import BrandCarousel
import LoadingScreen from "@/components/LoadingScreen"; // Import LoadingScreen
import StatsSection from "@/components/StatsSection";
import ConceptSection from "@/components/ConceptSection";
import BrandStory from "@/components/BrandStory";

// Commerce & Utility Sections
import InternshipSection from "@/components/InternshipSection";
import StoreSection from "@/components/StoreSection";
import MembershipSection from "@/components/MembershipSection";

import TestimonialsSection from "@/components/TestimonialsSection";
import AppDownloadSection from "@/components/AppDownloadSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <Hero />
      <BrandCarousel />
      <StatsSection />
      <BrandStory />
      <ConceptSection />
      
      {/* Commerce & Conversion Flow */}
      <div id="internships"><InternshipSection /></div>
      <div id="store-section"><StoreSection /></div>
      <div id="membership-section"><MembershipSection /></div>
      
      <TestimonialsSection />
      {/* AppDownloadSection removed to prioritize Web Funnel */}
      <Footer />
    </main>
  );
}
