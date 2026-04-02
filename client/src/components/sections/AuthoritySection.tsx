import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";

// TODO: adicionar CREF e certificações do Gabriel
const credentials = [
  { label: "CREF", value: "XXXXXXX" },
  { label: "Certificações", value: "a definir" },
];

export function AuthoritySection() {
  return (
    <section className="py-20 md:py-32 border-t border-border bg-secondary/10">
      <div className="container">
        <AnimatedSection className="text-center mb-14">
          <motion.div variants={fadeUp}>
            <Label text="Quem está por trás do método" />
          </motion.div>
        </AnimatedSection>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 max-w-4xl mx-auto">
          {/* Foto placeholder */}
          <AnimatedSection className="flex-shrink-0 flex flex-col items-center gap-3">
            <motion.div
              variants={fadeUp}
              className="w-full max-w-xs aspect-square rounded-full bg-secondary/50 border border-border flex items-center justify-center"
            >
              <span className="text-secondary-foreground text-sm font-medium text-center px-6">
                Foto do Gabriel
              </span>
            </motion.div>
          </AnimatedSection>

          {/* Texto */}
          <AnimatedSection className="flex-1 space-y-5 text-center md:text-left">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Gabriel Reis</h2>
              <p className="text-primary font-semibold mt-1">
                Fundador &amp; Especialista em Performance e Reabilitação
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-secondary-foreground leading-relaxed text-base md:text-lg"
            >
              Profissional focado em performance e reabilitação, com abordagem baseada em análise,
              correção e evolução contínua. Aqui, cada detalhe do treino tem um propósito.
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-2 pt-2">
              {credentials.map(({ label, value }) => (
                <li key={label} className="text-sm text-secondary-foreground">
                  <span className="font-bold text-foreground">{label}:</span> {value}
                </li>
              ))}
            </motion.ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
