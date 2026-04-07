"use client";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { fadeUp } from "@/components/shared/motion";
import { WaButton, WaIcon } from "@/components/shared/WaButton";

const pains = [
  "Treinou meses e não viu resultado?",
  "Sofreu uma lesão que nunca resolveu de vez?",
  "Sente que falta direção no seu treino?",
];

export function BeliefSection() {
  return (
    <section className="py-24 md:py-40 relative overflow-hidden bg-secondary/10">
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <span className="text-[18vw] font-black text-primary/[0.025] whitespace-nowrap">MÉTODO</span>
      </div>

      <div className="container max-w-4xl relative z-10 text-center space-y-10">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="w-12 h-1 bg-primary mx-auto mb-8" />

          {/* Dores rápidas */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-center gap-3 mb-10 flex-wrap">
            {pains.map((p) => (
              <div key={p} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/8 border border-primary/20 text-sm text-secondary-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                {p}
              </div>
            ))}
          </motion.div>

          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-6">
            O problema não é você.{" "}
            <span className="text-primary">É a falta de método.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-secondary-foreground max-w-2xl mx-auto leading-relaxed mb-4">
            Treino genérico gera resultado genérico — ou pior, lesão. No Studio Gabriel Reis
            cada sessão é planejada para o seu corpo, seu histórico e seu objetivo.
          </motion.p>

          <motion.p variants={fadeUp} className="text-base text-secondary-foreground/70 max-w-xl mx-auto leading-relaxed mb-10">
            Isso é a diferença entre passar anos na academia sem evolução e ter transformação
            real em meses com acompanhamento especializado.
          </motion.p>

          <motion.div variants={fadeUp}>
            <WaButton>
              <WaIcon /> Falar com um especialista
            </WaButton>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
