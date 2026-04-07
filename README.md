# Studio Gabriel Reis — Site Institucional

> Landing page de alta performance para o **Studio Gabriel Reis**, personal trainer especializado em alta performance, reabilitação e prevenção de lesões em São Luís, MA.

---

## Visão Geral

Site institucional construído com **Next.js 15 (App Router)**, focado em conversão, SEO máximo e experiência de usuário fluida em qualquer dispositivo. O objetivo é transformar visitantes em alunos através de uma jornada clara: impacto → autoridade → prova social → oferta → conversão.

---

## Stack Tecnológica

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 15 (App Router) |
| UI | React 19 |
| Linguagem | TypeScript 5 |
| Estilização | Tailwind CSS 4 |
| Componentes | shadcn/ui + Radix UI |
| Animações | Framer Motion 12 |
| Ícones | Lucide React |
| Formulários | React Hook Form + Zod |
| Deploy | Vercel |
| Package Manager | pnpm 10 |

---

## Funcionalidades de SEO

- **Metadata API** do Next.js com título, descrição, keywords, canonical e Open Graph completos
- **JSON-LD estruturado** (Schema.org): `LocalBusiness`, `Person`, `WebSite`, `BreadcrumbList`
- **Sitemap dinâmico** gerado via `app/sitemap.ts`
- **robots.txt dinâmico** via `app/robots.ts`
- **Open Graph Image** gerada dinamicamente via `@vercel/og` (`app/opengraph-image.tsx`)
- **Verificação Google Search Console** configurada
- Fontes carregadas via Google Fonts com `display=swap` (sem CLS)
- Imagens otimizadas via `next/image` (AVIF + WebP automático)

---

## Estrutura de Pastas

```
studio-gabriel-reis/
├── app/                        # App Router (Next.js)
│   ├── layout.tsx              # Root layout + Metadata API + JSON-LD
│   ├── page.tsx                # Home page (Server Component)
│   ├── not-found.tsx           # Página 404
│   ├── globals.css             # CSS global + Tailwind 4
│   ├── sitemap.ts              # Sitemap dinâmico
│   ├── robots.ts               # robots.txt dinâmico
│   └── opengraph-image.tsx     # OG image dinâmica
│
├── src/
│   ├── components/
│   │   ├── HomeClient.tsx      # Client Component wrapper da home
│   │   ├── ErrorBoundary.tsx   # Boundary de erro React
│   │   ├── sections/           # Seções da landing page (23 seções)
│   │   │   ├── NavBar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── VideoSection.tsx
│   │   │   ├── BeliefBreakSection.tsx
│   │   │   ├── PainSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── PadraoGRSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── DifferentialsSection.tsx
│   │   │   ├── ProcessSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── LocationSection.tsx
│   │   │   ├── FinalCTASection.tsx
│   │   │   ├── FooterSection.tsx
│   │   │   ├── WhatsAppFloat.tsx
│   │   │   └── ...
│   │   ├── shared/             # Componentes reutilizáveis
│   │   │   ├── AnimatedSection.tsx
│   │   │   ├── WaButton.tsx
│   │   │   ├── Label.tsx
│   │   │   └── motion.ts
│   │   └── ui/                 # shadcn/ui components
│   ├── lib/
│   │   ├── constants.ts        # Links WhatsApp, Instagram, endereço, telefone
│   │   └── utils.ts            # Utilitário cn() para classes
│   └── contexts/
│       └── ThemeContext.tsx     # Contexto de tema (dark mode)
│
├── public/
│   └── images/                 # Imagens estáticas
│       ├── gabriel-portrait.jpg
│       ├── gabriel-studio.jpg
│       ├── logo-dark.png
│       └── logo-white.png
│
├── next.config.ts              # Configuração Next.js
├── postcss.config.mjs          # PostCSS + Tailwind 4
├── tsconfig.json               # TypeScript config
├── vercel.json                 # Config deploy Vercel
└── package.json
```

---

## Como Rodar Localmente

### Pré-requisitos

- Node.js `>= 20`
- pnpm `>= 10`

```bash
# Instalar pnpm (caso não tenha)
npm install -g pnpm
```

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/jooaolrs5/studio-gabriel-reis.git
cd studio-gabriel-reis

# Instalar dependências
pnpm install
```

### Desenvolvimento

```bash
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000).

> **Atenção:** Na primeira execução, o Next.js compila todos os componentes. Aguarde **1–2 minutos** antes de abrir o browser. Quando aparecer `✓ Compiled` no terminal, a página está pronta.

### Build de Produção

```bash
pnpm build
pnpm start
```

### Checagem de Tipos

```bash
pnpm check
```

---

## Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `pnpm dev` | Servidor de desenvolvimento |
| `pnpm build` | Build de produção |
| `pnpm start` | Serve o build de produção |
| `pnpm check` | Verificação TypeScript (`tsc --noEmit`) |
| `pnpm format` | Formata o código com Prettier |

---

## Seções da Landing Page

A home segue uma jornada de conversão estruturada:

| Ordem | Seção | Objetivo |
|---|---|---|
| 1 | **Hero** | Impacto imediato — "Aqui não é academia. É método." |
| 2 | **Video** | Prova visual do ambiente e do método |
| 3 | **BeliefBreak** | Quebra de crença sobre treino genérico |
| 4 | **Pain** | Dores e frustrações do público-alvo |
| 5 | **Solution** | O Studio como solução |
| 6 | **#PadrãoGR** | Conceito e pilares do método |
| 7 | **About** | Autoridade — quem é Gabriel Reis |
| 8 | **Differentials** | 4 diferenciais do método |
| 9 | **Process** | Como funciona (4 etapas) |
| 10 | **Testimonials** | Depoimentos reais (carrossel automático) |
| 11 | **Pricing** | Planos: Small Group (Cohama/Santa Cruz) e Prime |
| 12 | **Location** | Mapa + endereço + horários |
| 13 | **FinalCTA** | Fechamento — última chamada para ação |
| 14 | **Footer** | Links, contato, Instagram |
| ∞ | **WhatsAppFloat** | Botão flutuante de WhatsApp |

---

## Planos de Treinamento

O site apresenta três modalidades:

- **Small Group — Cohama:** Essencial (2x/sem), Intensivo (3x/sem), Performance (4x/sem) com filtro por período (mensal, trimestral, semestral, anual)
- **Small Group — Santa Cruz:** Mensal, Trimestral, Anual
- **Prime (Cohama):** Acompanhamento exclusivo de 2x a 5x por semana

---

## Deploy

O projeto é hospedado no **Vercel** com deploy automático a cada push na branch `main`.

```json
// vercel.json
{
  "installCommand": "pnpm install",
  "buildCommand": "pnpm build",
  "framework": "nextjs"
}
```

> O deploy é feito automaticamente pelo dono do projeto (conta `jooaolrs5`). Commits de outros autores podem ser bloqueados no plano Hobby.

---

## Contato do Studio

| Canal | Info |
|---|---|
| WhatsApp | (98) 98589-0378 |
| Instagram | [@studiogabrielreis](https://www.instagram.com/studiogabrielreis) |
| Endereço | Av. Daniel de La Touche, nº 111 – Ed. Elaine – Cohama, São Luís – MA |
| Horário | Seg–Sex: 06h às 21h |

---

## Licença

MIT © Studio Gabriel Reis
