import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { IG } from "@/lib/constants";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { fadeUp } from "@/components/shared/motion";
import { WaButton, WaIcon } from "@/components/shared/WaButton";

export function CtaSection() {
  return (
    <section className="py-24 md:py-40 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <span className="text-[12vw] font-black text-primary/[0.025] whitespace-nowrap">EVOLUÇÃO REAL</span>
      </div>

      <div className="container max-w-3xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="w-12 h-1 bg-primary mx-auto mb-8" />
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Se você quer resultado de verdade, esse não é um lugar comum
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-secondary-foreground leading-relaxed mb-10">
            Aqui você encontra método, profissionalismo e resultados reais.<br />
            A pergunta é: você está pronto para o próximo nível?
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <WaButton><WaIcon /> Falar no WhatsApp</WaButton>
            <a href={IG} target="_blank" rel="noopener noreferrer"
              className="h-14 px-8 border border-border hover:border-primary/50 hover:bg-secondary/20 font-medium rounded-lg inline-flex items-center justify-center gap-2 text-base transition-all">
              <Instagram className="w-5 h-5" /> Ver o Instagram
            </a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
