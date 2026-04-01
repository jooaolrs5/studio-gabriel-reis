import { motion } from "framer-motion";
import { Award, CheckCircle2, Shield, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";

const credentials = [
  "Bacharel em Educação Física",
  "Especialista em Lesões e Doenças Musculoesqueléticas",
  "Especialista em Biomecânica, Fisiologia do Exercício e Personal Trainer",
  "Especialista em Grupos Especiais e Avaliação Física",
  "Certificação Biomotion – Instituto Biodesp – RJ",
  "Certificação SMPPL – Alex Souto Maior – RJ",
  "Certificação L1 – Athletic Lab · LPO L1",
];

const highlights = [
  { Icon: CheckCircle2, title: "Método Comprovado", desc: "Avaliação → Diagnóstico → Planejamento → Execução. Processo estruturado para resultados reais." },
  { Icon: Shield, title: "Prevenção como Prioridade", desc: "Identificamos desequilíbrios antes que virem lesões. Seu corpo treinando seguro por anos." },
  { Icon: TrendingUp, title: "Evolução Mensurável", desc: "Acompanhamento com métricas reais. Você vê e sente a diferença a cada sessão." },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 border-t border-border bg-secondary/10">
      <div className="container grid lg:grid-cols-2 gap-16 items-start">

        {/* Foto real + badge CEO */}
        <AnimatedSection>
          <motion.div variants={fadeUp} className="relative">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden">
              <img
                src="/images/gabriel-portrait.jpg"
                alt="Gabriel Barros Reis – CEO Studio Gabriel Reis"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
            </div>

            {/* Nome e cargo sobre a foto */}
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs font-bold tracking-[0.2em] text-primary uppercase mb-1">CEO & Fundador</p>
              <h3 className="text-2xl font-black text-white">Gabriel Barros Reis</h3>
            </div>

            {/* Logo sobre a foto */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2">
              <img
                src="/images/logo-white.png"
                alt="Studio Gabriel Reis"
                className="h-20 md:h-24 w-auto object-contain drop-shadow-lg"
              />
            </div>

            {/* Cantos decorativos */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/40 rounded-tl-xl pointer-events-none" />
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary/40 rounded-br-xl pointer-events-none" />
          </motion.div>
        </AnimatedSection>

        {/* Conteúdo */}
        <AnimatedSection className="space-y-8">
          <motion.div variants={fadeUp}>
            <Label text="Sobre o Studio" />
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5">
              Não é academia.<br />É <span className="text-primary">especialização</span>
            </h2>
            <p className="text-secondary-foreground text-lg leading-relaxed">
              O Studio Gabriel Reis foi criado para quem entende que treinar com inteligência
              é diferente de treinar por conta. Cada aluno passa por avaliação detalhada
              antes de qualquer treino.
            </p>
          </motion.div>

          {/* Destaques */}
          {highlights.map(({ Icon, title, desc }) => (
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

          {/* Formação/Certificações */}
          <motion.div variants={fadeUp} className="pt-2">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-xs font-bold tracking-[0.18em] text-primary uppercase">Formação & Certificações</span>
            </div>
            <ul className="space-y-2">
              {credentials.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-secondary-foreground">
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatedSection>

      </div>
    </section>
  );
}
