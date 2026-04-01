import { motion } from "framer-motion";
import { WA } from "@/lib/constants";
import { WaIcon } from "@/components/shared/WaButton";
import { NavBar } from "@/components/sections/NavBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { BeliefSection } from "@/components/sections/BeliefSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ForWhomSection } from "@/components/sections/ForWhomSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
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
      <AboutSection />
      <ForWhomSection />
      <DifferentialsSection />
      <ServicesSection />
      <TestimonialsSection />
      <LocationSection />
      <CtaSection />
      <FooterSection />

      {/* WhatsApp flutuante */}
      <motion.a
        href={WA} target="_blank" rel="noopener noreferrer"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/30 z-50 transition-colors"
        title="Falar no WhatsApp"
      >
        <WaIcon size={7} />
      </motion.a>
    </div>
  );
}
