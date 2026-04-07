"use client";
import { motion } from "framer-motion";
import { Clock, MapPin, MessageCircle } from "lucide-react";
import { WA, MAPS, MAPS_EMBED, ADDRESS_FULL, PHONE_DISPLAY, HOURS } from "@/lib/constants";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";
import { WaButton, WaIcon } from "@/components/shared/WaButton";

export function LocationSection() {
  return (
    <section id="localizacao" className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <AnimatedSection className="text-center mb-14">
          <motion.div variants={fadeUp}><Label text="Onde Estamos" /></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4">
            Fácil de encontrar, difícil de esquecer
          </motion.h2>
          <motion.p variants={fadeUp} className="text-secondary-foreground max-w-lg mx-auto">
            Localizado em uma das regiões mais acessíveis de São Luís
          </motion.p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Mapa */}
          <AnimatedSection>
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden border border-border h-80 lg:h-full min-h-80">
              <iframe
                src={MAPS_EMBED}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Studio Gabriel Reis"
              />
            </motion.div>
          </AnimatedSection>

          {/* Informações */}
          <AnimatedSection className="space-y-6">

            {/* Endereço */}
            <motion.div variants={fadeUp} className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors group">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Endereço</h3>
                <p className="text-secondary-foreground text-sm leading-relaxed">{ADDRESS_FULL}</p>
                <a href={MAPS} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-2 text-primary text-xs font-bold hover:underline">
                  Abrir no Google Maps →
                </a>
              </div>
            </motion.div>

            {/* Horário */}
            <motion.div variants={fadeUp} className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors group">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">Horário de Funcionamento</h3>
                <p className="text-secondary-foreground text-sm">{HOURS}</p>
                <p className="text-muted-foreground text-xs mt-1">Sábados mediante agendamento</p>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.div variants={fadeUp} className="flex gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors group">
              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-bold mb-1">WhatsApp</h3>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="text-secondary-foreground text-sm hover:text-primary transition-colors">
                  {PHONE_DISPLAY}
                </a>
                <p className="text-muted-foreground text-xs mt-1">Resposta rápida em horário comercial</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp} className="pt-2">
              <p className="text-secondary-foreground text-sm mb-4">
                Agende sua aula diagnóstica e dê o primeiro passo para evoluir com segurança
              </p>
              <WaButton full>
                <WaIcon /> Agendar Aula Diagnóstica
              </WaButton>
            </motion.div>

          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
