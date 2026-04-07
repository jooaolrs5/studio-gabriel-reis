"use client";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, Lock } from "lucide-react";
import { IG } from "@/lib/constants";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { fadeUp } from "@/components/shared/motion";
import { WaButton, WaIcon } from "@/components/shared/WaButton";

export function CtaSection() {
  return (
    <section className="py-24 md:py-40 border-t border-border relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/6 via-transparent to-primary/6" />
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <span className="text-[11vw] font-black text-primary/[0.022] whitespace-nowrap">COMEÇA AGORA</span>
      </div>

      <div className="container max-w-3xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="w-12 h-1 bg-primary mx-auto mb-8" />

          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Lock className="w-3.5 h-3.5 text-primary" />
            <span className="text-primary text-xs font-bold tracking-widest uppercase">Vagas Limitadas</span>
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-6">
            Chega de treinar sem direção.<br />
            <span className="text-primary">Começa agora.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-secondary-foreground leading-relaxed mb-4 max-w-xl mx-auto">
            Uma avaliação muda tudo. Em 60 minutos você vai entender por que os resultados que buscou por anos ainda não vieram — e o que fazer a partir de hoje.
          </motion.p>

          <motion.p variants={fadeUp} className="text-sm text-secondary-foreground/50 mb-10">
            Atendimento 100% individual. Sem compromisso na primeira conversa.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <WaButton>
              <WaIcon /> Começar agora <ArrowRight className="w-4 h-4" />
            </WaButton>
            <a
              href={IG} target="_blank" rel="noopener noreferrer"
              className="h-14 px-6 border border-border hover:border-primary/50 hover:bg-secondary/20 font-medium rounded-lg inline-flex items-center justify-center gap-2 text-base transition-all"
            >
              <Instagram className="w-5 h-5" /> Ver resultados no Instagram
            </a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
