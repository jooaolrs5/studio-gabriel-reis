import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://studiogabrielreis.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Studio Gabriel Reis - Personal Trainer Cohama | São Luís, MA",
    template: "%s | Studio Gabriel Reis",
  },
  description:
    "Studio Gabriel Reis em Cohama, São Luís — personal trainer especializado em alta performance e prevenção de lesões. Agende sua aula diagnóstica.",
  keywords: [
    "studio Cohama",
    "studio Gabriel Reis",
    "personal trainer Cohama",
    "personal trainer São Luís",
    "studio personal trainer São Luís",
    "alta performance Cohama",
    "prevenção de lesões São Luís",
    "reabilitação esportiva Maranhão",
    "treino personalizado Cohama",
    "Gabriel Reis CREF",
    "studio na Cohama",
  ],
  authors: [{ name: "Studio Gabriel Reis" }],
  creator: "Studio Gabriel Reis",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Studio Gabriel Reis",
    locale: "pt_BR",
    title: "Studio Gabriel Reis - Alta Performance e Prevenção de Lesões",
    description:
      "Treinamento especializado para quem busca evolução real, prevenção e recuperação de lesões. Não é academia — é método.",
    images: [
      {
        url: "/images/gabriel-studio.jpg",
        width: 1200,
        height: 630,
        alt: "Studio Gabriel Reis - Treino de alta performance em São Luís, MA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Gabriel Reis - Alta Performance e Prevenção de Lesões",
    description:
      "Treinamento especializado para quem busca evolução real, prevenção e recuperação de lesões.",
    images: ["/images/gabriel-studio.jpg"],
  },
  verification: {
    google: "zvIG0w1slJ4BfoOaTu4wQGPNHHTBiqEGYJN5FbZcJpw",
  },
  icons: {
    icon: "/images/logo-dark.png",
    shortcut: "/images/logo-dark.png",
    apple: "/images/logo-dark.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "Studio Gabriel Reis",
      alternateName: [
        "Studio Gabriel Reis Cohama",
        "Studio Gabriel Reis - Alta Performance e Prevenção de Lesões",
      ],
      description:
        "Studio de personal trainer em Cohama, São Luís — especializado em alta performance, reabilitação e prevenção de lesões. Treino 100% individualizado com metodologia #PadrãoGR.",
      url: `${BASE_URL}/`,
      logo: `${BASE_URL}/images/logo-dark.png`,
      image: `${BASE_URL}/images/gabriel-studio.jpg`,
      telephone: "+55-98-98589-0378",
      priceRange: "$$",
      currenciesAccepted: "BRL",
      paymentAccepted: "Cartão de crédito, Cartão de débito, Dinheiro",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Av. Daniel de La Touche, nº 111 – Ed. Elaine",
        addressLocality: "São Luís",
        addressRegion: "MA",
        postalCode: "65071-390",
        addressCountry: "BR",
        addressArea: "Cohama",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -2.5116797,
        longitude: -44.2437579,
      },
      hasMap: "https://maps.app.goo.gl/5TzHpatmHaujrJQL7",
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "06:00",
          closes: "21:00",
        },
      ],
      sameAs: ["https://www.instagram.com/studiogabrielreis"],
      founder: { "@id": `${BASE_URL}/#gabriel` },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        bestRating: "5",
        ratingCount: "5",
      },
    },
    {
      "@type": "Person",
      "@id": `${BASE_URL}/#gabriel`,
      name: "Gabriel Barros Reis",
      jobTitle: "Personal Trainer · CEO e Fundador",
      description:
        "Bacharel em Educação Física, especialista em Fisiologia do Exercício, Biomecânica, Grupos Especiais e Prevenção e Reabilitação de Lesões. CREF 3994 G/MA.",
      identifier: "CREF 3994 G/MA",
      worksFor: { "@id": `${BASE_URL}/#business` },
      sameAs: ["https://www.instagram.com/studiogabrielreis"],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: `${BASE_URL}/`,
      name: "Studio Gabriel Reis",
      inLanguage: "pt-BR",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/?s={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${BASE_URL}/`,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
