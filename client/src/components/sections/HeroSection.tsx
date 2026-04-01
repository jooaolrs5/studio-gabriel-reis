import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WA } from "@/lib/constants";
import { fadeUp, stagger } from "@/components/shared/motion";
import { WaButton, WaIcon } from "@/components/shared/WaButton";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=85&fit=crop"
          alt="Studio Gabriel Reis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 pt-28 pb-20">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl space-y-7">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs font-bold tracking-[0.18em] uppercase">Performance Elite · São Luís, MA</span>
          </motion.div>

          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl lg:text-[80px] font-black leading-[0.92] tracking-tight">
            Seu corpo no mais alto nível de <span className="text-primary">performance</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-xl text-secondary-foreground max-w-xl leading-relaxed">
            Treinamento especializado para quem busca evolução real, prevenção e recuperação de lesões.{" "}
            <span className="text-foreground font-semibold">Não é academia. É método.</span>
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-2">
            <WaButton><WaIcon /> Agendar Avaliação <ArrowRight className="w-4 h-4" /></WaButton>
            <a href="#sobre"
              className="h-14 px-8 border border-white/15 hover:border-primary/40 hover:bg-white/5 font-medium rounded-lg inline-flex items-center justify-center transition-all text-base">
              Conheça o Studio
            </a>
          </motion.div>
        </motion.div>
      </div>

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
