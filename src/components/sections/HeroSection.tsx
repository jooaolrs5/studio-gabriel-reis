"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { fadeUp, stagger } from "@/components/shared/motion";
import { WaButton, WaIcon } from "@/components/shared/WaButton";
import { WA_NUM } from "@/lib/constants";

const WA_EVAL = `https://wa.me/${WA_NUM}?text=${encodeURIComponent("Olá Gabriel! Quero agendar minha aula diagnóstica.")}`;
const WA_INFO = `https://wa.me/${WA_NUM}?text=${encodeURIComponent("Olá Gabriel! Vim pelo site e gostaria de mais informações.")}`;

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/gabriel-studio.jpg"
          alt="Studio Gabriel Reis - Alta Performance e Prevenção de Lesões"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "70% 20%" }}
        />
        {/* Mobile: gradiente mais forte para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/30 sm:from-background sm:via-background/88 sm:to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      <div className="container relative z-10 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-xl sm:max-w-2xl md:max-w-3xl space-y-5 sm:space-y-7">

          {/* Badge */}
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.18em] uppercase">
              Centro especializado · São Luís, MA
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.0] tracking-tight">
            Aqui não é academia.{" "}
            <span className="text-primary">É método.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeUp} className="text-sm sm:text-base md:text-lg text-secondary-foreground max-w-sm sm:max-w-lg leading-relaxed">
            Treinamento focado em alta performance, reabilitação e prevenção de lesões. Cada aluno é
            avaliado, acompanhado e direcionado com precisão.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col xs:flex-row sm:flex-row gap-3 sm:gap-4 pt-1 sm:pt-2">
            <WaButton href={WA_EVAL}>
              <WaIcon /> Agendar aula diagnóstica
            </WaButton>
            <a
              href={WA_INFO} target="_blank" rel="noopener noreferrer"
              className="h-14 px-6 sm:px-8 border border-white/15 hover:border-primary/40 hover:bg-white/5 font-medium rounded-lg inline-flex items-center justify-center transition-all text-sm sm:text-base gap-2 whitespace-nowrap"
            >
              <WaIcon size={5} /> Falar com especialista
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 sm:pt-2">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-primary fill-primary" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-secondary-foreground">
                <span className="text-foreground font-bold">5.0</span> no Google
              </span>
            </div>
            <span className="text-border hidden sm:block">|</span>
            <span className="text-xs sm:text-sm text-secondary-foreground">
              <span className="text-foreground font-bold">Vagas limitadas</span>{" "}
              <span className="hidden sm:inline">— atendimento personalizado</span>
            </span>
          </motion.div>

        </motion.div>
      </div>

      {/* Assinatura #PadrãoGR */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 right-4 sm:right-12 text-right select-none pointer-events-none"
      >
        <span className="text-primary/30 text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase block mb-0.5">método</span>
        <span className="text-primary/60 font-black text-lg sm:text-2xl tracking-tight">#PadrãoGR</span>
      </motion.div>

      {/* Scroll indicator */}
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
