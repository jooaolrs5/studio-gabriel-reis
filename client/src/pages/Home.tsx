import { NavBar } from "@/components/sections/NavBar";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { BeliefSection } from "@/components/sections/BeliefSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ForWhomSection } from "@/components/sections/ForWhomSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />
      <HeroSection />
      <StatsSection />
      <BeliefSection />
      <VideoSection />
      <AboutSection />
      <ForWhomSection />
      <DifferentialsSection />
      <ProcessSection />
      <ServicesSection />
      <Testimonials />
      <PricingSection />
      <TestimonialsSection />
      <LocationSection />
      <CtaSection />
      <FooterSection />

      <WhatsAppFloat />
    </div>
  );
}
