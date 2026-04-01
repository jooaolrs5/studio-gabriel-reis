import { motion } from "framer-motion";
import { Shield, TrendingUp, Users, Zap } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";

const personas = [
  { Icon: Users, tag: "Reabilitação", title: "Você tem dores ou lesões", desc: "Cansou de conviver com dor ou limitação. Precisa recuperar com segurança, método e acompanhamento especializado — não apenas fisio, mas treino que te devolva ao 100%." },
  { Icon: Shield, tag: "Performance Segura", title: "Você quer treinar com segurança", desc: "Entende que treinar errado machuca. Busca profissionais que analisam seu movimento e garantem que cada treino te aproxima do resultado — nunca de uma lesão." },
  { Icon: Zap, tag: "Recomeço Inteligente", title: "Você já tentou e não evoluiu", desc: "Treinou em academia por meses ou anos. Esforçou-se. Mas sem método e acompanhamento, o resultado nunca veio. Aqui cada detalhe importa." },
  { Icon: TrendingUp, tag: "Alta Performance", title: "Você busca o próximo nível", desc: "Já é ativo. Já treina. Mas quer otimizar, quebrar platôs e chegar onde o treino genérico nunca vai te levar. Alta performance de verdade." },
];

export function ForWhomSection() {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <AnimatedSection className="text-center mb-14">
          <motion.div variants={fadeUp}><Label text="Para Quem É" /></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black">Esse espaço é para você?</motion.h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {personas.map(({ Icon, tag, title, desc }) => (
            <AnimatedSection key={title}>
              <motion.div variants={fadeUp} className="p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 group h-full">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-primary/70 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full">{tag}</span>
                </div>
                <h3 className="text-xl font-black mb-3">{title}</h3>
                <p className="text-secondary-foreground leading-relaxed text-sm">{desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
