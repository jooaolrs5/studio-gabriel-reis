import { motion } from "framer-motion";
import { CheckCircle2, Shield, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";

const points = [
  { Icon: CheckCircle2, title: "Método Comprovado", desc: "Avaliação → Diagnóstico → Planejamento → Execução. Processo estruturado para resultados reais." },
  { Icon: Shield, title: "Prevenção como Prioridade", desc: "Identificamos desequilíbrios antes que virem lesões. Seu corpo treinando seguro por anos." },
  { Icon: TrendingUp, title: "Evolução Mensurável", desc: "Acompanhamento com métricas reais. Você vê e sente a diferença a cada sessão." },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 border-t border-border bg-secondary/10">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <motion.div variants={fadeUp} className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80&fit=crop"
                alt="Treinamento personalizado"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/40 rounded-tl-xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary/40 rounded-br-xl pointer-events-none" />
          </motion.div>
        </AnimatedSection>

        <AnimatedSection className="space-y-8">
          <motion.div variants={fadeUp}>
            <Label text="Sobre o Studio" />
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5">
              Não é academia.<br />É <span className="text-primary">especialização</span>
            </h2>
            <p className="text-secondary-foreground text-lg leading-relaxed">
              O Studio Gabriel Reis foi criado para quem entende que treinar com inteligência é diferente de treinar por conta.
              Cada aluno passa por avaliação detalhada antes de qualquer treino.
            </p>
          </motion.div>

          {points.map(({ Icon, title, desc }) => (
            <motion.div key={title} variants={fadeUp} className="flex gap-4">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">{title}</h3>
                <p className="text-secondary-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
