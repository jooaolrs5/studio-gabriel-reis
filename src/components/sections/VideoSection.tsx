"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Play } from "lucide-react";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";

const VIDEO_ID = "39E-_2iQMK8";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <motion.div variants={fadeUp}><Label text="O Studio" /></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4">
            Conheça o <span className="text-primary">ambiente</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-secondary-foreground max-w-md mx-auto">
            Um espaço projetado para quem leva o treino a sério.
          </motion.p>
        </AnimatedSection>

        <AnimatedSection>
          <motion.div variants={fadeUp} className="flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
              <div className="aspect-[9/16] relative bg-black">

                {playing ? (
                  <>
                    <iframe
                      src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                      title="Studio Gabriel Reis"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                    {/* Faixa cobrindo o nome do canal */}
                    <div className="absolute top-0 left-0 right-0 h-11 bg-black pointer-events-none z-10" />
                  </>
                ) : (
                  <>
                    {/* Thumbnail */}
                    <img
                      src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                      alt="Studio Gabriel Reis"
                      className="w-full h-full object-cover"
                    />
                    {/* Gradiente */}
                    <div className="absolute inset-0 bg-black/40" />
                    {/* Botão play customizado */}
                    <button
                      onClick={() => setPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group"
                      aria-label="Reproduzir vídeo"
                    >
                      <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/40 group-hover:scale-110 group-hover:bg-primary/90 transition-all duration-300">
                        <Play className="w-8 h-8 text-primary-foreground fill-primary-foreground ml-1" />
                      </div>
                    </button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
