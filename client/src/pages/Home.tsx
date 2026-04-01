import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Zap, Shield, TrendingUp, Users, MapPin, Phone } from "lucide-react";
import { useState } from "react";

/**
 * DESIGN PHILOSOPHY: Minimalismo Corporativo Esportivo
 * - Dark premium (preto profundo #0A0A0A com laranja elétrico #FF6B35)
 * - Espaço negativo agressivo para exclusividade
 * - Tipografia assertiva (Sora Bold para títulos, Nunito para corpo)
 * - Linhas diagonais e cortes angulares
 * - Números grandes em laranja como elementos visuais
 */

export default function Home() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVIGATION */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-foreground">
            Gabriel<span className="text-primary">Reis</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#sobre" className="text-sm hover:text-primary transition-colors">Sobre</a>
            <a href="#servicos" className="text-sm hover:text-primary transition-colors">Serviços</a>
            <a href="#diferenciais" className="text-sm hover:text-primary transition-colors">Diferenciais</a>
            <a href="#depoimentos" className="text-sm hover:text-primary transition-colors">Resultados</a>
            <Button className="bg-primary hover:bg-primary/90 text-white">Agendar</Button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377700058/YCk9PxVazEETSApV9KatJ7/hero-performance-ZLFn9hdrXPRAAPUCyTKVJG.webp"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40"></div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10"></div>

        <div className="container relative z-20 max-w-4xl">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full">
              <span className="text-primary text-sm font-semibold">PERFORMANCE ELITE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Seu corpo no mais alto nível de <span className="text-primary">performance</span>
            </h1>

            <p className="text-lg md:text-xl text-secondary-foreground max-w-2xl leading-relaxed">
              Treinamento especializado para quem busca evolução real, prevenção e recuperação de lesões. Não é academia. É método.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base h-14 px-8">
                Agendar Avaliação <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary text-base h-14 px-8">
                Falar no WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* BELIEF BREAKER SECTION */}
      <section className="py-20 md:py-28 bg-secondary/30 border-t border-b border-border">
        <div className="container max-w-3xl">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Se você já treinou e não teve resultado, o problema não é você — é o <span className="text-primary">método</span>
            </h2>
            <p className="text-lg text-secondary-foreground">
              Treino aleatório não gera resultados. Aqui você encontra avaliação detalhada, movimento corrigido e acompanhamento próximo.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="sobre" className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Não é academia. É <span className="text-primary">especialização</span>
                </h2>
                <p className="text-lg text-secondary-foreground mb-4">
                  O Studio Gabriel Reis foi criado para quem entende que treinar com inteligência é diferente de treinar aleatoriamente.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <CheckCircle2 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Método Comprovado</h3>
                    <p className="text-secondary-foreground">Cada treino é baseado em avaliação detalhada e progressão inteligente</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Prevenção de Lesões</h3>
                    <p className="text-secondary-foreground">Correção de movimento e acompanhamento próximo para treinar com segurança</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10">
                      <TrendingUp className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Evolução Real</h3>
                    <p className="text-secondary-foreground">Longevidade e performance. Resultados que duram e transformam</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 md:h-full min-h-96 rounded-xl overflow-hidden border border-border">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663377700058/YCk9PxVazEETSApV9KatJ7/rehabilitation-focus-T9gBVTx4JYB9KnpLhfHV3Y.webp"
                alt="Rehabilitation Focus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR WHOM SECTION */}
      <section className="py-20 md:py-32 bg-secondary/20 border-t border-b border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Para quem é o Studio Gabriel Reis?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Users,
                title: "Pessoas com Dores ou Lesões",
                description: "Que precisam recuperar com segurança e método"
              },
              {
                icon: Shield,
                title: "Quem Quer Treinar com Segurança",
                description: "Com profissionais que entendem de movimento e prevenção"
              },
              {
                icon: Zap,
                title: "Quem Tentou Academia Comum",
                description: "E não evoluiu porque faltava método e acompanhamento"
              },
              {
                icon: TrendingUp,
                title: "Atletas e Pessoas Disciplinadas",
                description: "Que buscam performance real e evolução contínua"
              }
            ].map((item, idx) => (
              <Card key={idx} className="bg-card border-border p-8 hover:border-primary/50 transition-colors">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-secondary-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENTIALS SECTION */}
      <section id="diferenciais" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            O Que Nos Diferencia
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Treino Individualizado",
                description: "Cada pessoa é única. Seu treino é desenhado especificamente para seus objetivos e limitações"
              },
              {
                number: "02",
                title: "Avaliação Detalhada",
                description: "Análise completa de movimento, força e capacidade funcional antes de qualquer treino"
              },
              {
                number: "03",
                title: "Correção de Movimento",
                description: "Técnica perfeita é a base. Corrigimos e refinamos cada movimento para máxima eficiência"
              },
              {
                number: "04",
                title: "Prevenção de Lesões",
                description: "Identificamos e corrigimos desequilíbrios antes que se tornem problemas"
              },
              {
                number: "05",
                title: "Acompanhamento Próximo",
                description: "Profissionais dedicados ao seu progresso, ajustando sempre que necessário"
              },
              {
                number: "06",
                title: "Foco em Longevidade",
                description: "Treinamos para que você possa treinar para sempre, sem lesões"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative p-8 border border-border rounded-xl hover:border-primary/50 transition-all hover:bg-secondary/10 group cursor-pointer"
                onMouseEnter={() => setHoveredService(item.number)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="text-5xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors mb-4">
                  {item.number}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-secondary-foreground">{item.description}</p>

                {hoveredService === item.number && (
                  <div className="absolute top-0 right-0 w-1 h-full bg-primary rounded-r-xl transition-all"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="servicos" className="py-20 md:py-32 bg-secondary/20 border-t border-b border-border">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Nossos Serviços
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Alta Performance",
                description: "Para quem quer levar seu treino ao próximo nível. Otimização total de força, potência e resistência.",
                features: ["Avaliação de performance", "Treino periodizado", "Progressão inteligente"]
              },
              {
                title: "Reabilitação e Retreinamento",
                description: "Recupere-se com segurança. Método especializado para voltar 100% após lesões.",
                features: ["Avaliação funcional", "Progressão segura", "Acompanhamento contínuo"]
              },
              {
                title: "Treinamento Personalizado",
                description: "Treino sob medida. Cada sessão é desenhada para seus objetivos específicos.",
                features: ["Planejamento individual", "Correção técnica", "Ajustes constantes"]
              }
            ].map((service, idx) => (
              <Card key={idx} className="bg-card border-border p-8 space-y-6 hover:border-primary/50 transition-colors">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-secondary-foreground">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fidx) => (
                    <li key={fidx} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Saber Mais
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="depoimentos" className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Resultados Reais
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "João Silva",
                role: "Empresário",
                text: "Treinou em academia por 5 anos sem resultado. Em 3 meses aqui, evolução real. Agora entendo que método faz diferença.",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663377700058/YCk9PxVazEETSApV9KatJ7/strength-detail-hbhEifq9ycPyoXXenvn3Na.webp"
              },
              {
                name: "Maria Santos",
                role: "Atleta",
                text: "Lesão que me afastava do esporte. Aqui recuperei com segurança e voltei mais forte. Profissionalismo de verdade.",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663377700058/YCk9PxVazEETSApV9KatJ7/rehabilitation-focus-T9gBVTx4JYB9KnpLhfHV3Y.webp"
              },
              {
                name: "Carlos Oliveira",
                role: "Profissional",
                text: "Buscava performance e segurança. Encontrei método, profissionalismo e resultados. Recomendo para quem quer diferença.",
                image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663377700058/YCk9PxVazEETSApV9KatJ7/studio-interior-Sa6mQES6GPUpxJEk7pT2o7.webp"
              }
            ].map((testimonial, idx) => (
              <Card key={idx} className="bg-card border-border p-8 space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-secondary-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-secondary-foreground italic">"{testimonial.text}"</p>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary">★</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-primary/10 to-primary/5 border-t border-b border-border relative overflow-hidden">
        {/* Diagonal Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <polygon points="0,0 1200,0 1200,400 0,600" fill="#FF6B35" />
          </svg>
        </div>

        <div className="container relative z-10 max-w-3xl text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Se você quer resultado de verdade, esse não é um lugar comum
          </h2>
          <p className="text-lg text-secondary-foreground">
            Aqui você encontra método, profissionalismo e resultados reais. Não é academia. É especialização.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-base h-14 px-8">
              Agendar Avaliação <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-base h-14 px-8">
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-secondary/50 border-t border-border py-16">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">
                Gabriel<span className="text-primary">Reis</span>
              </h3>
              <p className="text-secondary-foreground text-sm">
                Centro de treinamento especializado em alta performance e reabilitação
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Navegação</h4>
              <ul className="space-y-2 text-sm text-secondary-foreground">
                <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre</a></li>
                <li><a href="#servicos" className="hover:text-primary transition-colors">Serviços</a></li>
                <li><a href="#diferenciais" className="hover:text-primary transition-colors">Diferenciais</a></li>
                <li><a href="#depoimentos" className="hover:text-primary transition-colors">Resultados</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Contato</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2 items-center text-secondary-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  São Luís, MA
                </li>
                <li className="flex gap-2 items-center text-secondary-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  (98) 9999-9999
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold">Horário</h4>
              <p className="text-sm text-secondary-foreground">
                Segunda a Sexta<br />
                06:00 - 22:00
              </p>
              <p className="text-sm text-secondary-foreground">
                Sábado<br />
                07:00 - 12:00
              </p>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-center text-sm text-secondary-foreground">
              © 2026 Studio Gabriel Reis. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/5598999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-40"
        title="Falar no WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.255.949c-1.238.505-2.337 1.236-3.256 2.154-.92.92-1.649 2.019-2.154 3.257-.505 1.238-.749 2.565-.749 4.255 0 1.69.244 3.017.749 4.255.505 1.238 1.234 2.337 2.154 3.256.92.92 2.019 1.649 3.257 2.154 1.238.505 2.565.749 4.255.749 1.69 0 3.017-.244 4.255-.749 1.238-.505 2.337-1.234 3.256-2.154.92-.92 1.649-2.019 2.154-3.256.505-1.238.749-2.565.749-4.255 0-1.69-.244-3.017-.749-4.255-.505-1.238-1.234-2.337-2.154-3.257-.92-.92-2.019-1.649-3.257-2.154-1.238-.505-2.565-.749-4.255-.749z"/>
        </svg>
      </a>
    </div>
  );
}
