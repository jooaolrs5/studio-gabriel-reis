import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";

const DRIVE_FILE_ID = "1ZbAuT9oY9bWVey0GPEhbdo74mmfOMHXN";

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
              <div className="aspect-[9/16]">
                <iframe
                  src={`https://drive.google.com/file/d/${DRIVE_FILE_ID}/preview`}
                  title="Studio Gabriel Reis"
                  allow="autoplay"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
