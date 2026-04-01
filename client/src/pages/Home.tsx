import { AnimatePresence, motion, useInView } from "framer-motion";
import { ArrowRight, CheckCircle2, Instagram, MapPin, Menu, Phone, Shield, Star, TrendingUp, Users, X, Zap } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const WA_NUM = "5598991234567";
const WA_MSG = encodeURIComponent("Olá! Quero agendar minha avaliação no Studio Gabriel Reis.");
const WA = `https://wa.me/${WA_NUM}?text=${WA_MSG}`;
const IG = "https://www.instagram.com/studiogabrielreis";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function Sec({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>
      {children}
    </motion.div>
  );
}

function Label({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center gap-2 mb-5">
      <div className="w-6 h-px bg-primary" />
      <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">{text}</span>
      <div className="w-6 h-px bg-primary" />
    </div>
  );
}

function WaBtn({ href = WA, children, full = false }: { href?: string; children: React.ReactNode; full?: boolean }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={`h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg inline-flex items-center justify-center gap-2 transition-all text-base shadow-lg shadow-primary/20 ${full ? "w-full" : ""}`}>
      {children}
    </a>
  );
}

function WaIcon({ size = 5 }: { size?: number }) {
  return (
    <svg className={`w-${size} h-${size}`} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navLinks = [["#sobre","Sobre"],["#servicos","Serviços"],["#metodo","Método"],["#resultados","Resultados"]];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`}>
        <div className="container flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-lg md:text-xl font-black tracking-tight">
            Studio <span className="text-primary">Gabriel Reis</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(([h, l]) => (
              <a key={h} href={h} className="text-sm text-secondary-foreground hover:text-primary transition-colors font-medium">{l}</a>
            ))}
            <WaBtn><WaIcon /> Agendar Avaliação</WaBtn>
          </div>
          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-b border-border overflow-hidden">
              <div className="container py-6 flex flex-col gap-1">
                {navLinks.map(([h, l]) => (
                  <a key={h} href={h} onClick={() => setMenuOpen(false)}
                    className="py-3 text-base font-medium border-b border-border/40 text-secondary-foreground hover:text-primary transition-colors">{l}</a>
                ))}
                <div className="mt-4"><WaBtn full><WaIcon /> Agendar Avaliação</WaBtn></div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400&q=85&fit=crop"
            alt="Studio" className="w-full h-full object-cover" />
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
              <WaBtn><WaIcon /> Agendar Avaliação <ArrowRight className="w-4 h-4" /></WaBtn>
              <a href="#sobre" className="h-14 px-8 border border-white/15 hover:border-primary/40 hover:bg-white/5 font-medium rounded-lg inline-flex items-center justify-center transition-all text-base">
                Conheça o Studio
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-40">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 border-y border-border bg-secondary/20">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[["200+","Alunos atendidos"],["5+","Anos de experiência"],["98%","Taxa de satisfação"],["3","Especialidades"]].map(([v, l]) => (
            <Sec key={l}>
              <motion.div variants={fadeUp}>
                <div className="text-4xl md:text-5xl font-black text-primary mb-1">{v}</div>
                <div className="text-xs text-secondary-foreground font-medium">{l}</div>
              </motion.div>
            </Sec>
          ))}
        </div>
      </section>

      {/* ── QUEBRA DE CRENÇA ── */}
      <section className="py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <span className="text-[18vw] font-black text-primary/[0.03] whitespace-nowrap">MÉTODO</span>
        </div>
        <div className="container max-w-4xl relative z-10 text-center">
          <Sec>
            <motion.div variants={fadeUp} className="w-12 h-1 bg-primary mx-auto mb-8" />
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Se você já treinou e não teve resultado,{" "}
              <span className="text-primary">o problema não é você</span> — é o método
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-secondary-foreground max-w-2xl mx-auto leading-relaxed">
              Treino aleatório gera resultado aleatório. Aqui cada sessão tem propósito, progressão e acompanhamento.
              Isso é a diferença entre esforço e evolução real.
            </motion.p>
          </Sec>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="py-20 md:py-32 border-t border-border bg-secondary/10">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <Sec>
            <motion.div variants={fadeUp} className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80&fit=crop"
                  alt="Treinamento personalizado" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-primary/40 rounded-tl-xl pointer-events-none" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-primary/40 rounded-br-xl pointer-events-none" />
            </motion.div>
          </Sec>
          <Sec className="space-y-8">
            <motion.div variants={fadeUp}>
              <Label text="Sobre o Studio" />
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-5">
                Não é academia.<br />É <span className="text-primary">especialização</span>
              </h2>
              <p className="text-secondary-foreground text-lg leading-relaxed">
                O Studio Gabriel Reis foi criado para quem entende que treinar com inteligência é diferente de treinar por conta. Cada aluno passa por avaliação detalhada antes de qualquer treino.
              </p>
            </motion.div>
            {[
              { Icon: CheckCircle2, title: "Método Comprovado", desc: "Avaliação → Diagnóstico → Planejamento → Execução. Processo estruturado para resultados reais." },
              { Icon: Shield, title: "Prevenção como Prioridade", desc: "Identificamos desequilíbrios antes que virem lesões. Seu corpo treinando seguro por anos." },
              { Icon: TrendingUp, title: "Evolução Mensurável", desc: "Acompanhamento com métricas reais. Você vê e sente a diferença a cada sessão." },
            ].map(({ Icon, title, desc }) => (
              <motion.div key={title} variants={fadeUp} className="flex gap-4">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{title}</h3>
                  <p className="text-secondary-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </Sec>
        </div>
      </section>

      {/* ── PARA QUEM ── */}
      <section className="py-20 md:py-32 border-t border-border">
        <div className="container">
          <Sec className="text-center mb-14">
            <motion.div variants={fadeUp}><Label text="Para Quem É" /></motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black">Esse espaço é para você?</motion.h2>
          </Sec>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { Icon: Users, tag: "Reabilitação", title: "Você tem dores ou lesões", desc: "Cansou de conviver com dor ou limitação. Precisa recuperar com segurança, método e acompanhamento especializado — não apenas fisio, mas treino que te devolva ao 100%." },
              { Icon: Shield, tag: "Performance Segura", title: "Você quer treinar com segurança", desc: "Entende que treinar errado machuca. Busca profissionais que analisam seu movimento e garantem que cada treino te aproxima do resultado — nunca de uma lesão." },
              { Icon: Zap, tag: "Recomeço Inteligente", title: "Você já tentou e não evoluiu", desc: "Treinou em academia por meses ou anos. Esforçou-se. Mas sem método e acompanhamento, o resultado nunca veio. Aqui cada detalhe importa." },
              { Icon: TrendingUp, tag: "Alta Performance", title: "Você busca o próximo nível", desc: "Já é ativo. Já treina. Mas quer otimizar, quebrar platôs e chegar onde o treino genérico nunca vai te levar. Alta performance de verdade." },
            ].map(({ Icon, tag, title, desc }) => (
              <Sec key={title}>
                <motion.div variants={fadeUp} className="p-8 rounded-2xl border border-border bg-card hover:border-primary/40 transition-all duration-300 group h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-primary/70 bg-primary/5 border border-primary/10 px-3 py-1 rounded-full">{tag}</span>
                  </div>
                  <h3 className="text-xl font-black mb-3">{title}</h3>
                  <p className="text-secondary-foreground leading-relaxed text-sm">{desc}</p>
                </motion.div>
              </Sec>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFERENCIAIS ── */}
      <section id="metodo" className="py-20 md:py-32 border-t border-border bg-secondary/10">
        <div className="container">
          <Sec className="text-center mb-14">
            <motion.div variants={fadeUp}><Label text="Nosso Método" /></motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black">O que nos diferencia</motion.h2>
          </Sec>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: "01", title: "Treino Individualizado", desc: "Seu treino é desenhado especificamente para seus objetivos, limitações e histórico." },
              { n: "02", title: "Avaliação Detalhada", desc: "Análise completa de movimento, força e capacidade funcional antes de qualquer sessão." },
              { n: "03", title: "Correção de Movimento", desc: "Técnica perfeita é a base. Refinamos cada movimento para máxima eficiência e segurança." },
              { n: "04", title: "Prevenção de Lesões", desc: "Identificamos e corrigimos desequilíbrios antes que se tornem problemas reais." },
              { n: "05", title: "Acompanhamento Próximo", desc: "Profissionais dedicados ao seu progresso, ajustando o treino sempre que necessário." },
              { n: "06", title: "Foco em Longevidade", desc: "Treinamos para que você possa continuar treinando pelos próximos 20, 30, 40 anos." },
            ].map(({ n, title, desc }) => (
              <Sec key={n}>
                <motion.div variants={fadeUp} className="relative p-8 border border-border rounded-2xl hover:border-primary/40 hover:bg-secondary/10 transition-all group overflow-hidden h-full">
                  <div className="text-6xl font-black text-primary/10 group-hover:text-primary/20 transition-colors leading-none mb-5 select-none">{n}</div>
                  <h3 className="text-lg font-bold mb-2">{title}</h3>
                  <p className="text-secondary-foreground text-sm leading-relaxed">{desc}</p>
                  <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500" />
                </motion.div>
              </Sec>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="py-20 md:py-32 border-t border-border">
        <div className="container">
          <Sec className="text-center mb-14">
            <motion.div variants={fadeUp}><Label text="Serviços" /></motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black">Como podemos te ajudar</motion.h2>
          </Sec>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "I", title: "Alta Performance", sub: "Para quem quer o próximo nível", desc: "Otimização total de força, potência e resistência. Para quem já treina e quer ir além do treino convencional.", items: ["Avaliação de performance","Periodização inteligente","Progressão individualizada","Métricas e acompanhamento"], highlight: false },
              { n: "II", title: "Reabilitação", sub: "Recupere-se com segurança", desc: "Método especializado para voltar 100% após lesões. Unimos conhecimento de movimento e treino para recuperação completa.", items: ["Avaliação funcional completa","Protocolo progressivo","Retreinamento de movimento","Acompanhamento contínuo"], highlight: true },
              { n: "III", title: "Personal Training", sub: "Treino sob medida", desc: "Cada sessão desenhada para seus objetivos. Acompanhamento próximo, técnica impecável e evolução constante.", items: ["Planejamento individual","Correção técnica constante","Ajustes por demanda","Relatório de progresso"], highlight: false },
            ].map(({ n, title, sub, desc, items, highlight }) => (
              <Sec key={n}>
                <motion.div variants={fadeUp}
                  className={`relative p-8 rounded-2xl border h-full flex flex-col transition-all duration-300 ${highlight ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/40"}`}>
                  {highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-black rounded-full tracking-widest uppercase whitespace-nowrap">
                      Mais Procurado
                    </div>
                  )}
                  <div className="text-4xl font-black text-primary/20 mb-5 leading-none">{n}</div>
                  <h3 className="text-2xl font-black mb-1">{title}</h3>
                  <p className="text-primary text-sm font-semibold mb-4">{sub}</p>
                  <p className="text-secondary-foreground text-sm leading-relaxed mb-6">{desc}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-secondary-foreground">{it}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className={`w-full h-12 rounded-lg font-bold inline-flex items-center justify-center text-sm transition-all gap-2 ${highlight ? "bg-primary hover:bg-primary/90 text-white" : "border border-primary/30 hover:border-primary text-primary hover:bg-primary/10"}`}>
                    <WaIcon size={4} /> Quero começar
                  </a>
                </motion.div>
              </Sec>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section id="resultados" className="py-20 md:py-32 border-t border-border bg-secondary/10">
        <div className="container">
          <Sec className="text-center mb-14">
            <motion.div variants={fadeUp}><Label text="Resultados Reais" /></motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black">Histórias reais,<br />transformações reais</motion.h2>
          </Sec>
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              { name: "João V.", role: "Empresário, 38 anos", text: "Cinco anos em academia sem resultado consistente. Em três meses no Studio, entendi o que é treino com método. A diferença é absurda." },
              { name: "Ana C.", role: "Corredora amadora, 32 anos", text: "Lesão no joelho que me afastou do esporte por 6 meses. Aqui recuperei com segurança, voltei a correr e estou mais forte do que antes." },
              { name: "Rafael M.", role: "Atleta, 27 anos", text: "Evoluí mais em 2 meses aqui do que em 1 ano treinando sozinho. A avaliação inicial já mostrou onde estavam meus gargalos." },
            ].map(({ name, role, text }) => (
              <Sec key={name}>
                <motion.div variants={fadeUp} className="p-8 rounded-2xl border border-border bg-card h-full flex flex-col gap-5">
                  <div className="flex gap-0.5">
                    {Array(5).fill(0).map((_, i) => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}
                  </div>
                  <p className="text-secondary-foreground leading-relaxed flex-1 italic text-sm">"{text}"</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-primary font-black text-sm">{name[0]}</span>
                    </div>
                    <div>
                      <div className="font-bold text-sm">{name}</div>
                      <div className="text-xs text-secondary-foreground">{role}</div>
                    </div>
                  </div>
                </motion.div>
              </Sec>
            ))}
          </div>

          {/* Instagram CTA */}
          <Sec className="text-center">
            <motion.div variants={fadeUp}>
              <p className="text-secondary-foreground text-sm mb-4">Acompanhe os bastidores e resultados no Instagram</p>
              <a href={IG} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/20 transition-all group">
                <Instagram className="w-5 h-5 text-primary" />
                <span className="font-bold">@studiogabrielreis</span>
                <ArrowRight className="w-4 h-4 text-secondary-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            </motion.div>
          </Sec>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 md:py-40 border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
        <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
          <span className="text-[12vw] font-black text-primary/[0.025] whitespace-nowrap">EVOLUÇÃO REAL</span>
        </div>
        <div className="container max-w-3xl mx-auto text-center relative z-10">
          <Sec>
            <motion.div variants={fadeUp} className="w-12 h-1 bg-primary mx-auto mb-8" />
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Se você quer resultado de verdade, esse não é um lugar comum
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-secondary-foreground leading-relaxed mb-10">
              Aqui você encontra método, profissionalismo e resultados reais.<br />
              A pergunta é: você está pronto para o próximo nível?
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <WaBtn><WaIcon /> Falar no WhatsApp</WaBtn>
              <a href={IG} target="_blank" rel="noopener noreferrer"
                className="h-14 px-8 border border-border hover:border-primary/50 hover:bg-secondary/20 font-medium rounded-lg inline-flex items-center justify-center gap-2 text-base transition-all">
                <Instagram className="w-5 h-5" /> Ver o Instagram
              </a>
            </motion.div>
          </Sec>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-14 bg-secondary/20">
        <div className="container grid md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-black">Studio <span className="text-primary">Gabriel Reis</span></h3>
            <p className="text-secondary-foreground text-sm leading-relaxed max-w-xs">
              Centro especializado em alta performance, reabilitação e retreinamento de lesões em São Luís, MA.
            </p>
            <a href={IG} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-secondary-foreground hover:text-primary transition-colors">
              <Instagram className="w-4 h-4" /> @studiogabrielreis
            </a>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wide">Navegação</h4>
            <ul className="space-y-2.5 text-sm text-secondary-foreground">
              {[["#sobre","Sobre o Studio"],["#servicos","Serviços"],["#metodo","Método"],["#resultados","Resultados"]].map(([h,l]) => (
                <li key={h}><a href={h} className="hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wide">Contato</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary flex-shrink-0" /> São Luís, MA</li>
              <li>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" /> WhatsApp
                </a>
              </li>
            </ul>
            <div className="text-xs text-secondary-foreground pt-1">
              <strong className="text-foreground block mb-1">Horário</strong>
              Seg–Sex: 06h–22h<br />Sábado: 07h–12h
            </div>
          </div>
        </div>
        <div className="container border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-muted-foreground">© 2026 Studio Gabriel Reis. Todos os direitos reservados.</p>
          <p className="text-xs text-muted-foreground">São Luís, Maranhão</p>
        </div>
      </footer>

      {/* ── WhatsApp flutuante ── */}
      <motion.a href={WA} target="_blank" rel="noopener noreferrer"
        initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/30 z-50 transition-colors"
        title="Falar no WhatsApp">
        <WaIcon size={7} />
      </motion.a>
    </div>
  );
}
