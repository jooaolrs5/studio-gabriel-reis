"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";

const credentials = [
  "CREF 3994 G/MA",
  "Bacharel em Educação Física",
  "Especialista em Lesões e Doenças Musculoesqueléticas",
  "Especialista em Biomecânica, Fisiologia do Exercício e Personal Trainer",
  "Especialista em Grupos Especiais",
  "Especialista em Avaliação Física",
  "Certificação Biomotion – Instituto Biodesp – RJ",
  "Certificação SMPPL – Alex Souto Maior – RJ",
  "Certificação L1 – Athletic Lab",
  "LPO L1",
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
          {/* Foto real */}
          <AnimatedSection className="flex-shrink-0">
            <motion.div
              variants={fadeUp}
              className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 shadow-xl shadow-primary/10 relative"
            >
              <Image
                src="/images/gabriel-portrait.jpg"
                alt="Gabriel Reis – Fundador Studio Gabriel Reis"
                fill
                sizes="(max-width: 768px) 256px, 288px"
                className="object-cover object-top"
              />
            </motion.div>
          </AnimatedSection>

          {/* Texto */}
          <AnimatedSection className="flex-1 space-y-5 text-center md:text-left">
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Gabriel Barros Reis</h2>
              <p className="text-primary font-semibold mt-1">
                CEO &amp; Fundador · Especialista em Performance e Reabilitação
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
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </motion.ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
