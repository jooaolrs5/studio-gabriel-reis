import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { fadeUp } from "@/components/shared/motion";

const pillars = [
  {
    num: "01",
    title: "Padrão de Avaliação",
    text: "Nenhum treino começa sem uma aula diagnóstica. Histórico, objetivos, limitações e potencial — tudo mapeado antes de você piscar.",
  },
  {
    num: "02",
    title: "Padrão de Acompanhamento",
    text: "Sem treino solto. Cada sessão tem objetivo, progressão e revisão. Você nunca treina no escuro.",
  },
  {
    num: "03",
    title: "Padrão de Resultado",
    text: "Evolução mensurável. Registrada, ajustada e comunicada semana a semana. Resultado que você vê e sente.",
  },
];

export function PadraoGRSection() {
  return (
    <section className="py-20 md:py-32 border-t border-border overflow-hidden">
      <div className="container">
        <div className="relative">

          {/* Marca d'água decorativa */}
          <div
            aria-hidden
            className="absolute -right-8 top-1/2 -translate-y-1/2 text-[10rem] sm:text-[14rem] md:text-[18rem] font-black text-primary/4 leading-none select-none pointer-events-none"
          >
            GR
          </div>

          <AnimatedSection className="relative max-w-3xl">
            <motion.div variants={fadeUp} className="mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold tracking-[0.18em] uppercase mb-6">
                O Conceito
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[0.95] mb-6">
                <span className="text-primary">#Padrão</span>GR
              </h2>
              <p className="text-lg md:text-xl text-secondary-foreground max-w-xl leading-relaxed">
                Mais do que uma hashtag. Um padrão de execução que define cada detalhe do
                seu treino — do primeiro dia até o seu melhor resultado.
              </p>
            </motion.div>

            <div className="space-y-6 mb-12">
              {pillars.map(({ num, title, text }) => (
                <motion.div
                  key={num}
                  variants={fadeUp}
                  className="flex gap-5 items-start group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <span className="text-primary text-xs font-black">{num}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <h3 className="font-black text-base">{title}</h3>
                    </div>
                    <p className="text-secondary-foreground text-sm leading-relaxed">{text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              variants={fadeUp}
              className="inline-block rounded-2xl bg-card border border-primary/20 px-6 py-4"
            >
              <p className="text-secondary-foreground text-sm leading-relaxed">
                Quando você treina no Studio Gabriel Reis,
              </p>
              <p className="text-foreground font-black text-lg mt-0.5">
                você treina no{" "}
                <span className="text-primary">#PadrãoGR</span>.
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
