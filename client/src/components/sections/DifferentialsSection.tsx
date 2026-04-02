import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";

function PersonIcon() {
  return (
    <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  );
}

const cards = [
  {
    icon: <PersonIcon />,
    title: "Treinamento individualizado",
    desc: "Cada aluno segue um plano único, ajustado constantemente.",
  },
  {
    icon: <ClipboardIcon />,
    title: "Aula diagnóstica",
    desc: "Antes de começar, entendemos seu corpo e suas limitações.",
  },
  {
    icon: <ShieldIcon />,
    title: "Prevenção de lesões",
    desc: "Você evolui com segurança, sem retrocessos.",
  },
  {
    icon: <TrendingUpIcon />,
    title: "Acompanhamento real",
    desc: "Correção, atenção e evolução constante.",
  },
];

export function DifferentialsSection() {
  return (
    <section id="metodo" className="py-20 md:py-32 border-t border-border bg-secondary/10">
      <div className="container">
        <AnimatedSection className="text-center mb-14">
          <motion.div variants={fadeUp}><Label text="Nosso Método" /></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black">
            O que nos diferencia
          </motion.h2>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {cards.map(({ icon, title, desc }) => (
            <AnimatedSection key={title}>
              <motion.div
                variants={fadeUp}
                className="relative p-5 sm:p-8 border border-border rounded-2xl hover:border-primary/40 hover:bg-secondary/10 transition-all group overflow-hidden h-full flex flex-col gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold mb-2">{title}</h3>
                  <p className="text-secondary-foreground text-sm leading-relaxed">{desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
