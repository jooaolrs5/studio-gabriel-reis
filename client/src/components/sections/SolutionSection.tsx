import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";
import { WaButton, WaIcon } from "@/components/shared/WaButton";
import { WA_NUM } from "@/lib/constants";

const WA_SOLUTION = `https://wa.me/${WA_NUM}?text=${encodeURIComponent("Olá Gabriel! Quero treinar com método.")}`;

const bullets = [
  "Avaliação antes de qualquer treino",
  "Plano construído para você",
  "Evolução mensurável",
];

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 flex-shrink-0 text-primary"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export function SolutionSection() {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <AnimatedSection className="max-w-2xl mx-auto text-center space-y-6">
          <motion.div variants={fadeUp}>
            <Label text="A solução" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight"
          >
            No Studio Gabriel Reis, nada é aleatório.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg text-secondary-foreground leading-relaxed"
          >
            Aqui, cada treino é construído com base em avaliação, correção de movimento e acompanhamento
            contínuo. O foco não é apenas treinar mais — é treinar certo.
          </motion.p>

          <motion.ul variants={fadeUp} className="space-y-3 pt-2 text-left inline-flex flex-col">
            {bullets.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckIcon />
                <span className="font-semibold text-base">{item}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="pt-4">
            <WaButton href={WA_SOLUTION}>
              <WaIcon /> Quero treinar com método
            </WaButton>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
