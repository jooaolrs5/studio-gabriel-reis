import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";

export function BeliefBreakSection() {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <AnimatedSection className="max-w-3xl mx-auto text-center space-y-6">
          <motion.div variants={fadeUp}>
            <Label text="Por que você não evoluiu ainda" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight"
          >
            Se você já treinou e não teve resultado, o problema não é você.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-primary"
          >
            É o método.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-secondary-foreground max-w-xl mx-auto leading-relaxed"
          >
            Treinos genéricos ignoram o que realmente importa: seu corpo, suas limitações e sua evolução.
          </motion.p>
        </AnimatedSection>
      </div>
    </section>
  );
}
