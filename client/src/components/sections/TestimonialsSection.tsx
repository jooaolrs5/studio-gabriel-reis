import { motion } from "framer-motion";
import { ArrowRight, Instagram, Star } from "lucide-react";
import { IG, MAPS } from "@/lib/constants";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";

const testimonials = [
  {
    name: "Claudio Josan",
    role: "Aluno · Studio Gabriel Reis",
    stars: 5,
    text: "Bom atendimento! Equipe bem preparada e focada para melhor desenvolver a performance do aluno!! Parabéns a equipe GR pelo excelente trabalho!!",
  },
  {
    name: "Gabriela Farias",
    role: "Local Guide · Google Maps",
    stars: 5,
    text: "Excelente local para atividades físicas!!! Equipe preparada, atendimento personalizado com foco em desenvolvimento da performance e prevenção de lesões. Atendimento show!!! Super indico.",
  },
  {
    name: "Aluna do Studio",
    role: "Recuperação pós-lesão",
    stars: 5,
    text: "A melhor possível; excelente acompanhamento; satisfeita com minha evolução, pós lesão de tornozelo. Parabéns 👏🏽 Gabriel Reis…",
  },
  {
    name: "Letícia Leite",
    role: "Aluna · Studio Gabriel Reis",
    stars: 5,
    text: "Profissionais excelentes!! Saí do sedentarismo graças ao Studio Gabriel Reis e aos professores incríveis.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="resultados" className="py-20 md:py-32 border-t border-border bg-secondary/10">
      <div className="container">

        <AnimatedSection className="text-center mb-14">
          <motion.div variants={fadeUp}><Label text="Prova Social" /></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-6">
            Resultados reais de quem<br />decidiu treinar com método
          </motion.h2>

          {/* Badge 5 estrelas Google */}
          <motion.div variants={fadeUp}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-card border border-border">
            <div className="flex gap-0.5">
              {Array(5).fill(0).map((_, i) => <Star key={i} className="w-5 h-5 text-primary fill-primary" />)}
            </div>
            <div className="text-left">
              <div className="font-black text-lg leading-none">5.0</div>
              <div className="text-xs text-secondary-foreground">Google Maps</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <a href={MAPS} target="_blank" rel="noopener noreferrer"
              className="text-xs text-secondary-foreground hover:text-primary transition-colors font-medium">
              Ver avaliações →
            </a>
          </motion.div>
        </AnimatedSection>

        {/* Depoimentos em grid 2x2 */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {testimonials.map(({ name, role, stars, text }) => (
            <AnimatedSection key={name}>
              <motion.div variants={fadeUp} className="p-8 rounded-2xl border border-border bg-card h-full flex flex-col gap-5 hover:border-primary/30 transition-all">
                <div className="flex gap-0.5">
                  {Array(stars).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}
                </div>
                <p className="text-secondary-foreground leading-relaxed flex-1 text-sm">"{text}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-border">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-black text-sm">{name[0]}</span>
                  </div>
                  <div>
                    <div className="font-bold text-sm">{name}</div>
                    <div className="text-xs text-secondary-foreground">{role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Instagram CTA */}
        <AnimatedSection className="text-center">
          <motion.div variants={fadeUp}>
            <p className="text-secondary-foreground text-sm mb-4">Acompanhe os bastidores e resultados no Instagram</p>
            <a href={IG} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/20 transition-all group">
              <Instagram className="w-5 h-5 text-primary" />
              <span className="font-bold">@studiogabrielreis</span>
              <ArrowRight className="w-4 h-4 text-secondary-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </a>
          </motion.div>
        </AnimatedSection>

      </div>
    </section>
  );
}
