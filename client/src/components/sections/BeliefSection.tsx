import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { fadeUp } from "@/components/shared/motion";

export function BeliefSection() {
  return (
    <section className="py-24 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
        <span className="text-[18vw] font-black text-primary/[0.03] whitespace-nowrap">MÉTODO</span>
      </div>
      <div className="container max-w-4xl relative z-10 text-center">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="w-12 h-1 bg-primary mx-auto mb-8" />
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Se você já treinou e não teve resultado,{" "}
            <span className="text-primary">o problema não é você</span> — é o método
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-secondary-foreground max-w-2xl mx-auto leading-relaxed">
            Treino aleatório gera resultado aleatório. Aqui cada sessão tem propósito, progressão e acompanhamento.
            Isso é a diferença entre esforço e evolução real.
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}
