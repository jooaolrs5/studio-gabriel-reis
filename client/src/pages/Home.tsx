import { NavBar } from "@/components/sections/NavBar";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";
import { HeroSection } from "@/components/sections/HeroSection";
import { BeliefBreakSection } from "@/components/sections/BeliefBreakSection";
import { PainSection } from "@/components/sections/PainSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocationSection } from "@/components/sections/LocationSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <BeliefBreakSection />
      <PainSection />
      <SolutionSection />
      <DifferentialsSection />
      <ProcessSection />
      <AuthoritySection />
      <TestimonialsSection />
      <Testimonials />
      <LocationSection />
      <FinalCTASection />
      <FooterSection />

      <WhatsAppFloat />
    </div>
  );
}
