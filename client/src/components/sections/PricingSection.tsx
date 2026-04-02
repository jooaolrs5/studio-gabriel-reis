import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { WA, WA_SC } from "@/lib/constants";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";
import { WaButton, WaIcon } from "@/components/shared/WaButton";

// Preços Cohama por período
const cohama = {
  essencial: { mensal: 419.90, trimestral: 389.90, semestral: 349.90, anual: 329.90 },
  intensivo:  { mensal: 519.90, trimestral: 489.90, semestral: 449.90, anual: 429.90 },
  performance:{ mensal: 619.90, trimestral: 589.90, semestral: 549.90, anual: 529.90 },
};

const santaCruz = {
  mensal: 150.00,
  trimestral: 125.00,
  anual: 100.00,
};

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}

type Period = "mensal" | "trimestral" | "semestral" | "anual";
type Unit   = "cohama" | "santacruz";

const periods: { key: Period; label: string; note: string }[] = [
  { key: "mensal",     label: "Mensal",     note: "sem fidelidade" },
  { key: "trimestral", label: "Trimestral", note: "3 meses" },
  { key: "semestral",  label: "Semestral",  note: "6 meses" },
  { key: "anual",      label: "Anual",      note: "12 meses — maior economia" },
];

const levels = [
  {
    key:   "essencial" as const,
    name:  "Acompanhamento Essencial",
    freq:  "2x por semana",
    desc:  "Indicado para quem quer sair do treino genérico e começar com direção, método e profissionalismo.",
    items: [
      "Treino estruturado e periodizado",
      "Correção técnica de execução",
      "Acompanhamento profissional",
      "Avaliação inicial completa",
    ],
    highlight: false,
  },
  {
    key:   "intensivo" as const,
    name:  "Acompanhamento Intensivo",
    freq:  "3x por semana",
    desc:  "Para quem busca evolução constante com mais proximidade, ajustes frequentes e progressão acelerada.",
    items: [
      "Treino totalmente personalizado",
      "Ajustes e reprogramação contínua",
      "Maior nível de acompanhamento",
      "Relatório de evolução",
    ],
    highlight: true,
  },
  {
    key:   "performance" as const,
    name:  "Acompanhamento Performance",
    freq:  "4x por semana",
    desc:  "Focado em máxima evolução, prevenção de lesões e alto nível de performance individual.",
    items: [
      "Plano totalmente individualizado",
      "Acompanhamento próximo e dedicado",
      "Estratégia de evolução contínua",
      "Prevenção e reabilitação integradas",
    ],
    highlight: false,
  },
];

const scLevels = [
  { key: "mensal" as const,     name: "Acompanhamento Mensal",     note: "sem fidelidade", highlight: false },
  { key: "trimestral" as const, name: "Acompanhamento Trimestral", note: "3 meses",         highlight: true  },
  { key: "anual" as const,      name: "Acompanhamento Anual",      note: "12 meses",        highlight: false },
];

export function PricingSection() {
  const [unit, setUnit]     = useState<Unit>("cohama");
  const [period, setPeriod] = useState<Period>("mensal");

  return (
    <section id="planos" className="py-20 md:py-32 border-t border-border">
      <div className="container">

        {/* Cabeçalho */}
        <AnimatedSection className="text-center mb-10">
          <motion.div variants={fadeUp}><Label text="Formatos de Acompanhamento" /></motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl md:text-5xl font-black mb-4">
            Como você pode treinar aqui
          </motion.h2>
          <motion.p variants={fadeUp} className="text-secondary-foreground max-w-xl mx-auto leading-relaxed">
            Cada aluno passa por uma avaliação para definir o melhor formato de acompanhamento,
            garantindo evolução com segurança e precisão.
          </motion.p>
        </AnimatedSection>

        {/* Declaração de valor */}
        <AnimatedSection>
          <motion.div
            variants={fadeUp}
            className="max-w-2xl mx-auto text-center mb-12 px-6 py-5 rounded-2xl bg-primary/5 border border-primary/20"
          >
            <p className="text-foreground font-semibold leading-relaxed">
              Não é sobre pagar por um plano.
            </p>
            <p className="text-primary font-black text-lg mt-1">
              É sobre investir em um método que realmente funciona.
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Switcher de unidade */}
        <AnimatedSection>
          <motion.div variants={fadeUp} className="flex justify-center mb-10">
            <div className="inline-flex bg-secondary rounded-xl p-1 gap-1">
              {(["cohama", "santacruz"] as Unit[]).map((u) => (
                <button
                  key={u}
                  onClick={() => setUnit(u)}
                  className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all ${unit === u ? "bg-primary text-primary-foreground shadow" : "text-secondary-foreground hover:text-foreground"}`}
                >
                  {u === "cohama" ? "Cohama" : "Santa Cruz"}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        <AnimatePresence mode="wait">

          {/* ── COHAMA ── */}
          {unit === "cohama" && (
            <motion.div key="cohama" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>

              {/* Seletor de período */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {periods.map(({ key, label, note }) => (
                  <button
                    key={key}
                    onClick={() => setPeriod(key)}
                    className={`flex flex-col items-center px-5 py-2 rounded-full text-sm font-bold border transition-all ${period === key ? "bg-primary text-primary-foreground border-primary" : "border-border text-secondary-foreground hover:border-primary/50"}`}
                  >
                    {label}
                    <span className={`text-[10px] font-normal mt-0.5 ${period === key ? "text-primary-foreground/70" : "text-secondary-foreground/60"}`}>{note}</span>
                  </button>
                ))}
              </div>

              {/* Cards de nível */}
              <div className="grid md:grid-cols-3 gap-6 mb-4">
                {levels.map(({ key, name, freq, desc, items, highlight }) => (
                  <AnimatedSection key={key}>
                    <motion.div
                      variants={fadeUp}
                      className={`relative p-6 sm:p-8 rounded-2xl border flex flex-col gap-5 h-full transition-all ${highlight ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/30"}`}
                    >
                      {highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-primary text-primary-foreground text-xs font-black rounded-full whitespace-nowrap">
                          Mais escolhido
                        </div>
                      )}

                      <div>
                        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-1">{freq}</p>
                        <h3 className="text-xl font-black leading-tight">{name}</h3>
                      </div>

                      <p className="text-secondary-foreground text-sm leading-relaxed">{desc}</p>

                      <ul className="space-y-2.5 flex-1">
                        {items.map((item) => (
                          <li key={item} className="flex items-start gap-2.5 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-secondary-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-2 border-t border-border">
                        <p className="text-xs text-secondary-foreground mb-1">Investimento mensal</p>
                        <p className="text-2xl font-black">R$ {fmt(cohama[key][period])}<span className="text-sm font-normal text-secondary-foreground">/mês</span></p>
                        {period !== "mensal" && (
                          <p className="text-xs text-secondary-foreground/60 mt-0.5">Sem fidelidade: R$ {fmt(cohama[key].mensal)}/mês</p>
                        )}
                        {period === "mensal" && (
                          <p className="text-xs text-secondary-foreground/60 mt-0.5">+ R$ 49,90 de adesão</p>
                        )}
                      </div>

                      <a
                        href={WA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full h-11 rounded-lg text-sm font-bold inline-flex items-center justify-center gap-2 transition-all ${highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"}`}
                      >
                        <WaIcon size={4} /> Agendar avaliação
                      </a>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>

              <p className="text-center text-xs text-secondary-foreground mt-6">
                Aceita <strong className="text-foreground">Visa, Mastercard, Hipercard e Elo</strong> · Avaliação inicial: <strong className="text-foreground">R$ 100,00</strong>
              </p>
            </motion.div>
          )}

          {/* ── SANTA CRUZ ── */}
          {unit === "santacruz" && (
            <motion.div key="santacruz" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.25 }}>
              <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-4">
                {scLevels.map(({ key, name, note, highlight }) => (
                  <AnimatedSection key={key}>
                    <motion.div
                      variants={fadeUp}
                      className={`relative p-6 sm:p-8 rounded-2xl border flex flex-col gap-5 h-full transition-all ${highlight ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/30"}`}
                    >
                      {highlight && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-primary text-primary-foreground text-xs font-black rounded-full whitespace-nowrap">
                          Mais escolhido
                        </div>
                      )}
                      <div>
                        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-1">{note}</p>
                        <h3 className="text-xl font-black leading-tight">{name}</h3>
                      </div>
                      <div className="flex-1" />
                      <div className="pt-2 border-t border-border">
                        <p className="text-xs text-secondary-foreground mb-1">Investimento mensal</p>
                        <p className="text-2xl font-black">R$ {fmt(santaCruz[key])}<span className="text-sm font-normal text-secondary-foreground">/mês</span></p>
                      </div>
                      <a
                        href={WA_SC}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full h-11 rounded-lg text-sm font-bold inline-flex items-center justify-center gap-2 transition-all ${highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"}`}
                      >
                        <WaIcon size={4} /> Agendar avaliação
                      </a>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>

              <p className="text-center text-xs text-secondary-foreground mt-6">
                Aceita <strong className="text-foreground">Visa, Mastercard, Hipercard e Elo</strong>
              </p>
            </motion.div>
          )}

        </AnimatePresence>

        {/* CTA final */}
        <AnimatedSection>
          <motion.div variants={fadeUp} className="text-center mt-14 max-w-xl mx-auto">
            <p className="text-secondary-foreground leading-relaxed mb-6">
              A melhor forma de entender qual formato é ideal para você
              é passando por uma <span className="text-foreground font-semibold">avaliação inicial</span>.
            </p>
            <WaButton>
              <WaIcon /> Falar no WhatsApp
            </WaButton>
          </motion.div>
        </AnimatedSection>

      </div>
    </section>
  );
}
