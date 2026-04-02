import { NavBar } from "@/components/sections/NavBar";
import { WhatsAppFloat } from "@/components/sections/WhatsAppFloat";
import { HeroSection } from "@/components/sections/HeroSection";
import { VideoSection } from "@/components/sections/VideoSection";
import { BeliefBreakSection } from "@/components/sections/BeliefBreakSection";
import { PainSection } from "@/components/sections/PainSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { PadraoGRSection } from "@/components/sections/PadraoGRSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <NavBar />

      {/* 1. Impacto */}
      <HeroSection />

      {/* 2. Prova visual — o ambiente */}
      <VideoSection />

      {/* 3. Quebra de crença + dor + solução */}
      <BeliefBreakSection />
      <PainSection />
      <SolutionSection />

      {/* 4. Conceito #PadrãoGR */}
      <PadraoGRSection />

      {/* 5. Autoridade — quem é Gabriel */}
      <AboutSection />

      {/* 5. Método e processo */}
      <DifferentialsSection />
      <ProcessSection />

      {/* 6. Prova social */}
      <TestimonialsSection />

      {/* 7. Oferta */}
      <PricingSection />

      {/* 8. Logística */}
      <LocationSection />

      {/* 9. Fechamento */}
      <FinalCTASection />

      <FooterSection />
      <WhatsAppFloat />
    </div>
  );
}
