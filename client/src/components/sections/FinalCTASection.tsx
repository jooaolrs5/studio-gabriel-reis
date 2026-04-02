import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { fadeUp } from "@/components/shared/motion";
import { WaButton, WaIcon } from "@/components/shared/WaButton";
import { WA_NUM } from "@/lib/constants";

const WA_FINAL = `https://wa.me/${WA_NUM}?text=${encodeURIComponent("Olá Gabriel! Quero agendar minha aula diagnóstica.")}`;

export function FinalCTASection() {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <AnimatedSection className="max-w-2xl mx-auto text-center space-y-8">
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-primary/30 bg-primary/10 px-8 py-12 md:px-12 md:py-16 space-y-6"
          >
            <motion.p
              variants={fadeUp}
              className="text-xs font-bold tracking-[0.2em] uppercase text-primary/70 mb-2"
            >
              #PadrãoGR
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight"
            >
              Se você quer continuar no mesmo lugar, qualquer treino serve.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-xl sm:text-2xl font-bold text-primary"
            >
              Mas se você quer evoluir de verdade, você precisa do{" "}
              <span className="whitespace-nowrap">#PadrãoGR</span>.
            </motion.p>

            {/* Divisor decorativo */}
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-4 py-2"
            >
              <div className="h-px w-16 bg-primary/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <div className="h-px w-16 bg-primary/40" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <WaButton href={WA_FINAL}>
                <WaIcon /> Agendar minha aula diagnóstica
              </WaButton>
            </motion.div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
