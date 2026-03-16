"use client";

const items = [
  "Atendimento 24/7",
  "IA Conversacional",
  "Qualificação de Leads",
  "Respostas em Segundos",
  "Dashboard em Tempo Real",
  "Integrações Poderosas",
  "100% Seguro — LGPD",
  "Sem Código",
];

export default function Marquee() {
  return (
    <div className="relative py-6 border-y border-brand-500/10 overflow-hidden bg-dark-950/50">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm font-mono font-medium text-brand-500/60 uppercase tracking-widest flex items-center gap-3"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500/40" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
