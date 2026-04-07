"use client";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { fadeUp } from "@/components/shared/motion";

const stats = [
  ["200+", "Alunos atendidos"],
  ["5+", "Anos de experiência"],
  ["98%", "Taxa de satisfação"],
  ["3", "Especialidades"],
];

export function StatsSection() {
  return (
    <section className="py-14 border-y border-border bg-secondary/20">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map(([value, label]) => (
          <AnimatedSection key={label}>
            <motion.div variants={fadeUp}>
              <div className="text-4xl md:text-5xl font-black text-primary mb-1">{value}</div>
              <div className="text-xs text-secondary-foreground font-medium">{label}</div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
