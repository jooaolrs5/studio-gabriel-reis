import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Tag } from "lucide-react";
import { useState } from "react";
import { WA, WA_SC } from "@/lib/constants";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Label } from "@/components/shared/Label";
import { fadeUp } from "@/components/shared/motion";
import { WaButton, WaIcon } from "@/components/shared/WaButton";

type Freq = "2x" | "3x" | "4x" | "5x";

const cohamaPlans: Record<Freq, { mensal: number; trimestral: [number, number]; semestral: [number, number]; anual: [number, number] }> = {
  "2x": { mensal: 419.90, trimestral: [389.90, 1169.70], semestral: [349.90, 2099.40], anual: [329.90, 3958.80] },
  "3x": { mensal: 519.90, trimestral: [489.90, 1469.70], semestral: [449.90, 2699.40], anual: [429.90, 5158.80] },
  "4x": { mensal: 619.90, trimestral: [589.90, 1769.70], semestral: [549.90, 3299.40], anual: [529.90, 6358.80] },
  "5x": { mensal: 719.90, trimestral: [689.90, 2069.70], semestral: [649.90, 3899.40], anual: [629.90, 7558.80] },
};

const santaCruzPlan = {
  mensal: 179.90,
  trimestral: [149.90, 449.70] as [number, number],
  anual: [114.90, 1378.80] as [number, number],
};

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { minimumFractionDigits: 2 });
}

const periods = [
  { key: "mensal", label: "Mensal", desc: "sem fidelidade" },
  { key: "trimestral", label: "Trimestral", desc: "3 meses", badge: "" },
  { key: "semestral", label: "Semestral", desc: "6 meses", badge: "Popular" },
  { key: "anual", label: "Anual", desc: "12 meses", badge: "Mais Econômico" },
];

export function PricingSection() {
  const [unit, setUnit] = useState<"cohama" | "santacruz">("cohama");
  const [freq, setFreq] = useState<Freq>("3x");

  const cohama = cohamaPlans[freq];

  return (
    <section id="planos" className="py-20 md:py-32 border-t border-border">
      <div className="container">
        <AnimatedSection className="text-center mb-12">
          <motion.div variants={fadeUp}><Label text="Planos #PadrãoGR" /></motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black mb-4">
            Escolha o plano ideal para você
          </motion.h2>
          <motion.p variants={fadeUp} className="text-secondary-foreground max-w-lg mx-auto text-sm">
            Disponível nas unidades Cohama e Santa Cruz. Avaliação física: <strong className="text-foreground">R$ 100,00</strong>
          </motion.p>
        </AnimatedSection>

        {/* Switcher de unidade */}
        <AnimatedSection>
          <motion.div variants={fadeUp} className="flex justify-center mb-10">
            <div className="inline-flex bg-secondary rounded-xl p-1 gap-1">
              {(["cohama", "santacruz"] as const).map((u) => (
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
          {unit === "cohama" ? (
            <motion.div key="cohama" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>

              {/* Seletor de frequência */}
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {(["2x", "3x", "4x", "5x"] as Freq[]).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFreq(f)}
                    className={`px-5 py-2 rounded-full text-sm font-bold border transition-all ${freq === f ? "bg-primary text-primary-foreground border-primary" : "border-border text-secondary-foreground hover:border-primary/50"}`}
                  >
                    {f} por semana
                  </button>
                ))}
              </div>

              {/* Cards de período */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                {periods.map(({ key, label, desc, badge }) => {
                  const isAnual = key === "anual";
                  let price = "";
                  let total = "";

                  if (key === "mensal") {
                    price = `R$ ${fmt(cohama.mensal)}`;
                    total = "+ R$ 49,90 adesão";
                  } else {
                    const [por, tot] = cohama[key as "trimestral" | "semestral" | "anual"];
                    price = `R$ ${fmt(por)}/mês`;
                    total = `Total: R$ ${fmt(tot)}`;
                  }

                  return (
                    <div key={key} className={`relative p-6 rounded-2xl border flex flex-col gap-4 transition-all ${isAnual ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/40"}`}>
                      {badge && (
                        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-black rounded-full whitespace-nowrap ${isAnual ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground border border-border"}`}>
                          {badge}
                        </div>
                      )}
                      <div>
                        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-1">{label}</p>
                        <p className="text-xs text-secondary-foreground">{desc}</p>
                      </div>
                      <div>
                        <p className="text-2xl font-black">{price}</p>
                        <p className="text-xs text-secondary-foreground mt-1">{total}</p>
                      </div>
                      <a href={WA} target="_blank" rel="noopener noreferrer"
                        className={`mt-auto w-full h-10 rounded-lg text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-all ${isAnual ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"}`}>
                        <WaIcon size={3} /> Quero esse plano
                      </a>
                    </div>
                  );
                })}
              </div>

              <p className="text-center text-xs text-secondary-foreground">
                Aceita <strong className="text-foreground">Visa, Mastercard, Hipercard e Elo</strong>
              </p>
            </motion.div>

          ) : (
            <motion.div key="santacruz" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }}>
              <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-8">
                {[
                  { label: "Mensal", desc: "sem fidelidade", price: `R$ ${fmt(santaCruzPlan.mensal)}`, total: "", badge: "" },
                  { label: "Trimestral", desc: "3 meses", price: `R$ ${fmt(santaCruzPlan.trimestral[0])}/mês`, total: `Total: R$ ${fmt(santaCruzPlan.trimestral[1])}`, badge: "Popular" },
                  { label: "Anual", desc: "12 meses", price: `R$ ${fmt(santaCruzPlan.anual[0])}/mês`, total: `Total: R$ ${fmt(santaCruzPlan.anual[1])}`, badge: "Mais Econômico" },
                ].map(({ label, desc, price, total, badge }) => {
                  const isAnual = label === "Anual";
                  return (
                    <div key={label} className={`relative p-6 rounded-2xl border flex flex-col gap-4 transition-all ${isAnual ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/40"}`}>
                      {badge && (
                        <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 text-xs font-black rounded-full whitespace-nowrap ${isAnual ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground border border-border"}`}>
                          {badge}
                        </div>
                      )}
                      <div>
                        <p className="text-xs font-bold tracking-widest text-primary uppercase mb-1">{label}</p>
                        <p className="text-xs text-secondary-foreground">{desc}</p>
                      </div>
                      <div>
                        <p className="text-2xl font-black">{price}</p>
                        {total && <p className="text-xs text-secondary-foreground mt-1">{total}</p>}
                      </div>
                      <a href={WA_SC} target="_blank" rel="noopener noreferrer"
                        className={`mt-auto w-full h-10 rounded-lg text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-all ${isAnual ? "bg-primary text-primary-foreground hover:bg-primary/90" : "border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary"}`}>
                        <WaIcon size={3} /> Quero esse plano
                      </a>
                    </div>
                  );
                })}
              </div>

              <p className="text-center text-xs text-secondary-foreground">
                Aceita <strong className="text-foreground">Visa, Mastercard, Hipercard e Elo</strong>
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA geral */}
        <AnimatedSection>
          <motion.div variants={fadeUp} className="text-center mt-12 p-8 rounded-2xl border border-border bg-card">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-primary" />
              <span className="text-sm font-bold text-primary">Dúvidas sobre qual plano escolher?</span>
            </div>
            <p className="text-secondary-foreground text-sm mb-5">
              Fale com a gente no WhatsApp. A gente te ajuda a encontrar o plano certo para o seu objetivo.
            </p>
            <WaButton><WaIcon /> Falar com a equipe</WaButton>
          </motion.div>
        </AnimatedSection>

      </div>
    </section>
  );
}
