"use client";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Users, Zap, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";
import { WaButton, WaIcon } from "@/components/shared/WaButton";

const personas = [
  { Icon: Users, tag: "Reabilitação", title: "Você convive com dor ou lesão", desc: "Precisa de mais do que fisioterapia. Quer voltar ao 100% com treino supervisionado, seguro e progressivo — do diagnóstico ao desempenho pleno." },
  { Icon: Shield, tag: "Prevenção", title: "Você quer treinar sem se machucar", desc: "Entende que treinar errado é pior do que não treinar. Busca quem analisa o seu movimento antes de colocar carga — e garante evolução sem lesão." },
  { Icon: Zap, tag: "Recomeço com Método", title: "Você já tentou e não evoluiu", desc: "Treinou por meses ou anos. Esforçou-se. Mas sem avaliação e planejamento individual, o resultado nunca veio. Aqui cada detalhe tem propósito." },
  { Icon: TrendingUp, tag: "Alta Performance", title: "Você quer o próximo nível", desc: "Já é ativo, já treina. Mas quer quebrar platôs, otimizar performance e ir onde o treino genérico nunca vai te levar." },
];

export function ForWhomSection() {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <AnimatedSection className="text-center mb-6">
          <motion.div variants={fadeUp}><Label text="Para Quem É" /></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4">
            Este espaço <span className="text-primary">não é para todos</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-secondary-foreground max-w-xl mx-auto text-lg leading-relaxed mb-3">
            Atendemos de forma personalizada e com vagas limitadas.<br />
            Cada aluno segue um plano individual — sem modelo pronto, sem turma genérica.
          </motion.p>
          <motion.p variants={fadeUp} className="text-secondary-foreground/60 max-w-lg mx-auto text-sm">
            Se você busca qualidade, método e está disposto a investir na sua saúde a longo prazo — você está no lugar certo.
          </motion.p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6 mb-12 mt-12">
          {personas.map(({ Icon, tag, title, desc }) => (
            <AnimatedSection key={title}>
              <motion.div variants={fadeUp} className="p-5 sm:p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 group h-full">
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

        <AnimatedSection className="text-center">
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <WaButton>
              <WaIcon /> Me identifico — quero agendar <ArrowRight className="w-4 h-4" />
            </WaButton>
            <p className="text-secondary-foreground/50 text-sm">Vagas limitadas. Atendimento 100% individual.</p>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
