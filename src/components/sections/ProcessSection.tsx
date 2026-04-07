"use client";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";
import { WaButton, WaIcon } from "@/components/shared/WaButton";

const steps = [
  {
    n: "01",
    title: "Aula diagnóstica",
    desc: "Identificamos limitações, dores e objetivos",
    detail: "Grátis na primeira aula",
  },
  {
    n: "02",
    title: "Diagnóstico físico",
    desc: "Entendemos exatamente o que precisa ser trabalhado",
    detail: "Base científica e individual",
  },
  {
    n: "03",
    title: "Treino personalizado",
    desc: "Plano construído exclusivamente para você",
    detail: "Sem modelo pronto",
  },
  {
    n: "04",
    title: "Acompanhamento contínuo",
    desc: "Ajustes constantes para garantir evolução",
    detail: "Você vê a diferença",
  },
];

export function ProcessSection() {
  return (
    <section id="processo" className="py-20 md:py-32 border-t border-border bg-secondary/10">
      <div className="container">
        <AnimatedSection className="text-center mb-14">
          <motion.div variants={fadeUp}><Label text="Como funciona" /></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4">
            Como funciona
          </motion.h2>
          <motion.p variants={fadeUp} className="text-secondary-foreground max-w-lg mx-auto">
            Do primeiro contato à evolução contínua
          </motion.p>
        </AnimatedSection>

        {/* Mobile: timeline vertical simples */}
        <div className="lg:hidden space-y-4">
          {steps.map(({ n, title, desc, detail }) => (
            <AnimatedSection key={n}>
              <motion.div variants={fadeUp} className="flex gap-4">
                {/* Coluna número + linha */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border-2 border-primary/40 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-black text-xs">{n}</span>
                  </div>
                  <div className="w-px flex-1 bg-border mt-2 last:hidden" />
                </div>
                {/* Card */}
                <div className="flex-1 pb-4">
                  <div className="p-4 sm:p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all">
                    <span className="text-[10px] sm:text-xs font-bold text-primary/70 bg-primary/5 border border-primary/15 px-3 py-1 rounded-full inline-block mb-3">
                      {detail}
                    </span>
                    <h3 className="text-xl font-black mb-2">{title}</h3>
                    <p className="text-secondary-foreground text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Desktop: zigzag com linha central */}
        <div className="hidden lg:block relative">
          {/* Linha vertical central */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border" />

          <div className="space-y-0">
            {steps.map(({ n, title, desc, detail }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimatedSection key={n}>
                  <motion.div
                    variants={fadeUp}
                    className="grid grid-cols-2 gap-16 items-center py-4"
                  >
                    {/* Card lado esquerdo ou direito */}
                    <div className={isLeft ? "order-1" : "order-3"}>
                      <div className={`p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all group ${isLeft ? "text-right" : "text-left"}`}>
                        <div className={`flex items-center gap-3 mb-4 ${isLeft ? "justify-end" : "justify-start"}`}>
                          <span className="text-xs font-bold text-primary/70 bg-primary/5 border border-primary/15 px-3 py-1 rounded-full">
                            {detail}
                          </span>
                        </div>
                        <h3 className="text-2xl font-black mb-3">{title}</h3>
                        <p className="text-secondary-foreground leading-relaxed">{desc}</p>
                      </div>
                    </div>

                    {/* Número central */}
                    <div className="order-2 flex items-center justify-center relative">
                      <div className="w-14 h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 relative">
                        <span className="text-primary font-black text-sm">{n}</span>
                      </div>
                    </div>

                    {/* Espaço vazio do outro lado */}
                    <div className={isLeft ? "order-3" : "order-1"} />
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        <AnimatedSection className="text-center mt-14">
          <motion.div variants={fadeUp}>
            <WaButton>
              <WaIcon /> Agendar minha aula diagnóstica
            </WaButton>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
