import { NavBar } from "@/components/sections/NavBar";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";
import { HeroSection } from "@/components/sections/HeroSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { BeliefBreakSection } from "@/components/sections/BeliefBreakSection";
import { PainSection } from "@/components/sections/PainSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

import { PricingSection } from "@/components/sections/PricingSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <VideoSection />
      <BeliefBreakSection />
      <PainSection />
      <SolutionSection />
      <DifferentialsSection />
      <ProcessSection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <LocationSection />
      <FinalCTASection />
      <FooterSection />

      <WhatsAppFloat />
    </div>
  );
}
