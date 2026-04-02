import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";
import { WaButton, WaIcon } from "@/components/shared/WaButton";

const steps = [
  {
    n: "01",
    title: "Avaliação Inicial",
    desc: "Uma conversa detalhada sobre seu histórico, objetivos, limitações e rotina. Nada começa sem conhecer você a fundo.",
    detail: "Grátis na primeira consulta",
  },
  {
    n: "02",
    title: "Diagnóstico Funcional",
    desc: "Análise completa de movimento, postura, força e mobilidade. Mapeamos seus pontos de atenção antes de qualquer treino.",
    detail: "Base científica e individual",
  },
  {
    n: "03",
    title: "Plano Personalizado",
    desc: "Seu treino é montado do zero. Periodização, progressão e exercícios escolhidos exclusivamente para o seu corpo e meta.",
    detail: "Sem modelo pronto",
  },
  {
    n: "04",
    title: "Acompanhamento Contínuo",
    desc: "Cada sessão é supervisionada e ajustada. Métricas reais, feedback constante e evolução mensurável a cada semana.",
    detail: "Você vê a diferença",
  },
];

export function ProcessSection() {
  return (
    <section id="processo" className="py-20 md:py-32 border-t border-border bg-secondary/10">
      <div className="container">
        <AnimatedSection className="text-center mb-14">
          <motion.div variants={fadeUp}><Label text="Como Funciona" /></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4">
            Do primeiro contato ao <span className="text-primary">resultado real</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-secondary-foreground max-w-lg mx-auto">
            Um processo estruturado que elimina achismo e garante que cada etapa leva à próxima com segurança.
          </motion.p>
        </AnimatedSection>

        {/* Steps com linha conectora */}
        <div className="relative">
          {/* Linha vertical desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-px top-0 bottom-0 w-px bg-border" />

          <div className="space-y-6 lg:space-y-0">
            {steps.map(({ n, title, desc, detail }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <AnimatedSection key={n}>
                  <motion.div
                    variants={fadeUp}
                    className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${!isLeft ? "lg:dir-rtl" : ""}`}
                  >
                    {/* Conteúdo */}
                    <div className={`p-5 sm:p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all group ${isLeft ? "lg:text-right" : "lg:order-last"}`}>
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? "lg:justify-end" : ""}`}>
                        <span className="text-xs font-bold text-primary/70 bg-primary/5 border border-primary/15 px-3 py-1 rounded-full">{detail}</span>
                      </div>
                      <h3 className="text-2xl font-black mb-3">{title}</h3>
                      <p className="text-secondary-foreground leading-relaxed">{desc}</p>
                    </div>

                    {/* Número central */}
                    <div className={`hidden lg:flex items-center ${isLeft ? "justify-start pl-0" : "justify-end pr-0"} relative`}>
                      <div className={`absolute ${isLeft ? "left-1/2 -translate-x-1/2" : "left-1/2 -translate-x-1/2"} w-14 h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10`}>
                        <span className="text-primary font-black text-sm">{n}</span>
                      </div>
                    </div>

                    {/* Número mobile */}
                    <div className="lg:hidden flex items-center gap-3 mb-3 mt-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-black text-xs">{n}</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>

        <AnimatedSection className="text-center mt-14">
          <motion.div variants={fadeUp}>
            <WaButton>
              <WaIcon /> Agendar minha avaliação gratuita
            </WaButton>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
