"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { WA } from "@/lib/constants";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";
import { WaIcon } from "@/components/shared/WaButton";

const services = [
  {
    n: "I", title: "Alta Performance", sub: "Para quem quer o próximo nível",
    desc: "Otimização total de força, potência e resistência. Para quem já treina e quer ir além do treino convencional.",
    items: ["Avaliação de performance", "Periodização inteligente", "Progressão individualizada", "Métricas e acompanhamento"],
    highlight: false,
  },
  {
    n: "II", title: "Reabilitação", sub: "Recupere-se com segurança",
    desc: "Método especializado para voltar 100% após lesões. Unimos conhecimento de movimento e treino para recuperação completa.",
    items: ["Avaliação funcional completa", "Protocolo progressivo", "Retreinamento de movimento", "Acompanhamento contínuo"],
    highlight: true,
  },
  {
    n: "III", title: "Personal Training", sub: "Treino sob medida",
    desc: "Cada sessão desenhada para seus objetivos. Acompanhamento próximo, técnica impecável e evolução constante.",
    items: ["Planejamento individual", "Correção técnica constante", "Ajustes por demanda", "Relatório de progresso"],
    highlight: false,
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <AnimatedSection className="text-center mb-14">
          <motion.div variants={fadeUp}><Label text="Serviços" /></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black">Como podemos te ajudar</motion.h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ n, title, sub, desc, items, highlight }) => (
            <AnimatedSection key={n}>
              <motion.div variants={fadeUp}
                className={`relative p-5 sm:p-8 rounded-2xl border h-full flex flex-col transition-all duration-300 ${highlight ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/40"}`}>
                {highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-black rounded-full tracking-widest uppercase whitespace-nowrap">
                    Mais Procurado
                  </div>
                )}
                <div className="text-4xl font-black text-primary/20 mb-5 leading-none">{n}</div>
                <h3 className="text-2xl font-black mb-1">{title}</h3>
                <p className="text-primary text-sm font-semibold mb-4">{sub}</p>
                <p className="text-secondary-foreground text-sm leading-relaxed mb-6">{desc}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-secondary-foreground">{it}</span>
                    </li>
                  ))}
                </ul>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className={`w-full h-12 rounded-lg font-bold inline-flex items-center justify-center text-sm transition-all gap-2 ${highlight ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "border border-primary/30 hover:border-primary text-primary hover:bg-primary/10"}`}>
                  <WaIcon size={4} /> Quero começar
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
