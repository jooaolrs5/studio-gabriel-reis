import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";

export interface TestimonialItem {
  name: string;
  context: string;
  text: string;
  photo?: string;
}

interface TestimonialsProps {
  items?: TestimonialItem[];
}

const defaultTestimonials: TestimonialItem[] = [
  {
    name: "Lucas Maranhão",
    context: "Atleta amador · Pós-cirúrgico de joelho",
    text: "Depois da cirurgia eu achei que nunca ia voltar ao mesmo nível. O protocolo do Gabriel foi diferente de tudo que eu tinha visto — progressão real, sem pular etapas. Voltei a competir em 7 meses.",
  },
  {
    name: "Fernanda Castelo",
    context: "Corredora · Dor crônica no quadril",
    text: "Dois anos com dor que nenhum profissional conseguia resolver. Em três meses de acompanhamento aqui entendi a origem do problema e fui tratada de verdade. Hoje corro sem dor e mais rápido do que antes.",
  },
  {
    name: "Diego Fonseca",
    context: "Empresário · Sedentário em busca de performance",
    text: "Nunca tinha treinado com método. A avaliação inicial me mostrou onde estava meu corpo de verdade. O plano foi feito do zero pra mim e os resultados foram visíveis já no segundo mês.",
  },
];

function Avatar({ name, photo }: { name: string; photo?: string }) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={name}
        className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/30"
      />
    );
  }
  return (
    <div className="w-14 h-14 rounded-full bg-primary/15 ring-2 ring-primary/30 flex items-center justify-center flex-shrink-0">
      <span className="text-primary font-black text-lg">{name[0]}</span>
    </div>
  );
}

export function Testimonials({ items = defaultTestimonials }: TestimonialsProps) {
  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <AnimatedSection className="text-center mb-14">
          <motion.div variants={fadeUp}><Label text="Depoimentos" /></motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Quem treinou aqui<br />
            <span className="text-primary">conta o que viveu</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-secondary-foreground max-w-lg mx-auto">
            Resultados reais de pessoas que escolheram um método diferente.
          </motion.p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <AnimatedSection key={i}>
              <motion.div
                variants={fadeUp}
                className="relative p-6 sm:p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all duration-300 flex flex-col gap-5 h-full"
              >
                {/* Aspas decorativas */}
                <Quote className="w-7 h-7 text-primary/25 flex-shrink-0" />

                {/* Texto do depoimento */}
                <p className="text-secondary-foreground leading-relaxed text-sm flex-1">
                  "{item.text}"
                </p>

                {/* Divisor */}
                <div className="h-px bg-border" />

                {/* Autor */}
                <div className="flex items-center gap-4">
                  <Avatar name={item.name} photo={item.photo} />
                  <div>
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="text-xs text-secondary-foreground leading-snug mt-0.5">
                      {item.context}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
