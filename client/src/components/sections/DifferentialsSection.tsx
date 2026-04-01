import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";

const items = [
  { n: "01", title: "Treino Individualizado", desc: "Seu treino é desenhado especificamente para seus objetivos, limitações e histórico." },
  { n: "02", title: "Avaliação Detalhada", desc: "Análise completa de movimento, força e capacidade funcional antes de qualquer sessão." },
  { n: "03", title: "Correção de Movimento", desc: "Técnica perfeita é a base. Refinamos cada movimento para máxima eficiência e segurança." },
  { n: "04", title: "Prevenção de Lesões", desc: "Identificamos e corrigimos desequilíbrios antes que se tornem problemas reais." },
  { n: "05", title: "Acompanhamento Próximo", desc: "Profissionais dedicados ao seu progresso, ajustando o treino sempre que necessário." },
  { n: "06", title: "Foco em Longevidade", desc: "Treinamos para que você possa continuar treinando pelos próximos 20, 30, 40 anos." },
];

export function DifferentialsSection() {
  return (
    <section id="metodo" className="py-20 md:py-32 border-t border-border bg-secondary/10">
      <div className="container">
        <AnimatedSection className="text-center mb-14">
          <motion.div variants={fadeUp}><Label text="Nosso Método" /></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black">O que nos diferencia</motion.h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ n, title, desc }) => (
            <AnimatedSection key={n}>
              <motion.div variants={fadeUp} className="relative p-8 border border-border rounded-2xl hover:border-primary/40 hover:bg-secondary/10 transition-all group overflow-hidden h-full">
                <div className="text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-colors leading-none mb-5 select-none">{n}</div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-secondary-foreground text-sm leading-relaxed">{desc}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
