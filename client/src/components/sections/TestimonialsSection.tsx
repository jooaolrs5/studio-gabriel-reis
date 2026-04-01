import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Instagram, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { IG, MAPS } from "@/lib/constants";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";

const testimonials = [
  {
    name: "Mayra Messa",
    role: "Aluna · Studio Gabriel Reis",
    stars: 5,
    text: "Cuidou e cuida muito bem de mim, principalmente depois da lesão. Já me recuperei 100% — padrão GR é outro nível. Estão de parabéns, super indico! 👏👏👏",
  },
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
    name: "Roseanny Ferreira",
    role: "Aluna · Recuperação pós-lesão",
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

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60 }),
};

export function TestimonialsSection() {
  const [[idx, dir], setPage] = useState([0, 0]);
  const [paused, setPaused] = useState(false);

  const go = useCallback((newDir: number) => {
    setPage(([cur]) => [(cur + newDir + testimonials.length) % testimonials.length, newDir]);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 5000);
    return () => clearInterval(t);
  }, [paused, go]);

  const t = testimonials[idx];

  return (
    <section id="resultados" className="py-20 md:py-32 border-t border-border bg-secondary/10">
      <div className="container">

        <AnimatedSection className="text-center mb-14">
          <motion.div variants={fadeUp}><Label text="Prova Social" /></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-6">
            Resultados reais de quem<br />decidiu treinar com método
          </motion.h2>

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

        {/* Carrossel */}
        <AnimatedSection>
          <motion.div variants={fadeUp}
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            {/* Card */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card px-8 md:px-16 py-12 min-h-[280px] flex flex-col justify-between">
              <AnimatePresence mode="wait" custom={dir}>
                <motion.div
                  key={idx}
                  custom={dir}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="flex flex-col gap-6"
                >
                  {/* Aspas decorativas */}
                  <Quote className="w-8 h-8 text-primary/30 -mb-2" />

                  {/* Estrelas */}
                  <div className="flex gap-1">
                    {Array(t.stars).fill(0).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                    ))}
                  </div>

                  {/* Texto */}
                  <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                    "{t.text}"
                  </p>

                  {/* Autor */}
                  <div className="flex items-center gap-3 pt-2 border-t border-border">
                    <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-black">{t.name[0]}</span>
                    </div>
                    <div>
                      <div className="font-bold">{t.name}</div>
                      <div className="text-xs text-secondary-foreground">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Botões nav */}
            <button
              onClick={() => go(-1)}
              className="absolute -left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-secondary flex items-center justify-center transition-all"
              aria-label="Anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-card border border-border hover:border-primary/50 hover:bg-secondary flex items-center justify-center transition-all"
              aria-label="Próximo"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Dots */}
          <motion.div variants={fadeUp} className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > idx ? 1 : -1])}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === idx ? "w-6 bg-primary" : "w-1.5 bg-border hover:bg-primary/40"}`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Instagram CTA */}
        <AnimatedSection className="text-center mt-14">
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
