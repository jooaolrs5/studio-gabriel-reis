import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";

const painPoints = [
  "Sem evolução visível",
  "Lesões recorrentes",
  "Sem acompanhamento real",
];

export function PainSection() {
  return (
    <section className="py-20 md:py-32 border-t border-border bg-secondary/20">
      <div className="container">
        <AnimatedSection className="max-w-3xl mx-auto text-center space-y-6">
          <motion.div variants={fadeUp}>
            <Label text="A realidade de quem treina sem método" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight"
          >
            Dor constante. Falta de evolução. Treinos sem direção.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-secondary-foreground max-w-xl mx-auto leading-relaxed"
          >
            Muita gente passa anos treinando e continua no mesmo lugar — ou pior, desenvolvendo lesões.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-3 pt-2"
          >
            {painPoints.map((point) => (
              <span
                key={point}
                className="px-5 py-2.5 rounded-full border border-border bg-background text-sm font-semibold text-secondary-foreground"
              >
                {point}
              </span>
            ))}
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
