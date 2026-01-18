import Hero from "@/components/Hero";
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
  return (
    <main>
      <Hero />
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
