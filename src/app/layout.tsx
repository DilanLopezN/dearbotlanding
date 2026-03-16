import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dear Bot — Chatbot com IA para WhatsApp | Atendimento Automatizado 24/7",
  description:
    "Automatize seu atendimento no WhatsApp com inteligência artificial. Dear Bot responde clientes, qualifica leads, agenda reuniões e fecha vendas 24 horas por dia, 7 dias por semana.",
  keywords: [
    "chatbot whatsapp",
    "inteligencia artificial whatsapp",
    "automação whatsapp",
    "atendimento automatizado",
    "chatbot ia",
    "dear bot",
    "bot whatsapp",
    "atendimento 24 horas",
    "qualificação de leads",
    "vendas automatizadas",
  ],
  authors: [{ name: "Dear Bot" }],
  openGraph: {
    title: "Dear Bot — Chatbot com IA para WhatsApp",
    description:
      "Automatize seu atendimento no WhatsApp com inteligência artificial. Responda clientes 24/7, qualifique leads e feche mais vendas.",
    url: "https://dearbot.com.br",
    siteName: "Dear Bot",
    locale: "pt_BR",
    type: "website",
    // images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dear Bot — Chatbot com IA para WhatsApp",
    description:
      "Automatize seu atendimento no WhatsApp com inteligência artificial.",
    // images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://dearbot.com.br",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Dear Bot",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "Chatbot com inteligência artificial para WhatsApp. Automatize atendimento, qualifique leads e feche vendas 24/7.",
    offers: {
      "@type": "Offer",
      category: "SaaS",
    },
  };

  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="noise-overlay grid-bg">{children}</body>
    </html>
  );
}
