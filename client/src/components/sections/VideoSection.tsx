import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";

const VIDEO_ID = "39E-_2iQMK8";

export function VideoSection() {
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
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden border border-border shadow-2xl shadow-primary/10">
              <div className="aspect-[9/16] relative">
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0&modestbranding=1`}
                  title="Studio Gabriel Reis"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
                {/* Oculta nome do canal no topo */}
                <div className="absolute top-0 left-0 right-0 h-12 bg-background pointer-events-none z-10" />
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
