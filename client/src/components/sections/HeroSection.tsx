import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, stagger } from "@/components/shared/motion";
import { WaButton, WaIcon } from "@/components/shared/WaButton";
import { WA_NUM } from "@/lib/constants";

const WA_EVAL = `https://wa.me/${WA_NUM}?text=${encodeURIComponent("Olá Gabriel! Quero agendar uma avaliação.")}`;
const WA_INFO = `https://wa.me/${WA_NUM}?text=${encodeURIComponent("Olá Gabriel! Vim pelo site e gostaria de mais informações.")}`;

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/gabriel-studio.jpg"
          alt="Studio Gabriel Reis - Alta Performance e Prevenção de Lesões"
          style={{ objectPosition: "center 20%" }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/88 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
      </div>

      <div className="container relative z-10 pt-28 pb-20">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl space-y-7">

          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-bold tracking-[0.18em] uppercase">Centro especializado · São Luís, MA</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight">
            Aqui não é academia.{" "}
            <span className="text-primary">É método.</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-base md:text-lg text-secondary-foreground max-w-lg leading-relaxed">
            Treinamento focado em alta performance, reabilitação e prevenção de lesões. Cada aluno é
            avaliado, acompanhado e direcionado com precisão.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-2">
            <WaButton href={WA_EVAL}>
              <WaIcon /> Agendar avaliação
            </WaButton>
            <a
              href={WA_INFO} target="_blank" rel="noopener noreferrer"
              className="h-14 px-8 border border-white/15 hover:border-primary/40 hover:bg-white/5 font-medium rounded-lg inline-flex items-center justify-center transition-all text-base gap-2"
            >
              <WaIcon size={5} /> Falar com um especialista
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 pt-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>
              <span className="text-sm text-secondary-foreground">
                <span className="text-foreground font-bold">5.0</span> no Google
              </span>
            </div>
            <span className="text-border">|</span>
            <span className="text-sm text-secondary-foreground">
              <span className="text-foreground font-bold">Vagas limitadas</span> — atendimento personalizado
            </span>
          </motion.div>

        </motion.div>
      </div>

      {/* Assinatura #PadrãoGR */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 right-6 sm:right-12 text-right select-none pointer-events-none"
      >
        <span className="text-primary/30 text-xs font-bold tracking-[0.25em] uppercase block mb-0.5">método</span>
        <span className="text-primary/60 font-black text-xl sm:text-2xl tracking-tight">#PadrãoGR</span>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-primary to-transparent"
        />
      </div>
    </section>
  );
}
