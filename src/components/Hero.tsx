"use client";
import { useEffect, useState } from "react";
import { HERO, WHATSAPP_LINK, IMAGES, STATS } from "@/lib/constants";
import ImageSlot from "./ImageSlot";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Olá! Como posso ajudar você hoje?";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, i + 1));
      i++;
      if (i >= fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 hero-glow overflow-hidden">
      {/* Decorative orbs */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-brand-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-500/5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left: Copy */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-brand-500/10 border border-brand-500/20 rounded-full px-4 py-1.5 text-brand-400 text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            {HERO.badge}
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
            {HERO.title.split("máquina de vendas").map((part, i) =>
              i === 0 ? (
                <span key={i}>
                  {part}
                  <span className="text-gradient">máquina de vendas</span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h1>

          <p className="text-lg text-dark-300 leading-relaxed max-w-xl">
            {HERO.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-brand-500 hover:bg-brand-600 text-dark-950 font-bold text-lg px-8 py-4 rounded-full transition-all hover:shadow-2xl hover:shadow-brand-500/30 hover:scale-105"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {HERO.cta}
            </a>
            <a
              href="#como-funciona"
              className="inline-flex items-center justify-center gap-2 text-brand-400 hover:text-brand-300 font-semibold text-lg px-8 py-4 rounded-full border border-brand-500/20 hover:border-brand-500/40 transition-all"
            >
              Como funciona
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-dark-800">
            {STATS.map((s, i) => (
              <div key={i}>
                <div className="font-display font-bold text-2xl text-brand-400">
                  {s.value}
                </div>
                <div className="text-sm text-dark-400 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Mockup + chat preview */}
        <div className="relative">
          {/* Chat bubble preview */}
          <div className="absolute -top-4 -left-4 z-10 bg-dark-900/90 backdrop-blur-sm border border-brand-500/20 rounded-2xl p-4 max-w-xs shadow-2xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-brand-500 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Dear Bot</div>
                <div className="text-xs text-brand-400">Online agora</div>
              </div>
            </div>
            <div className="bg-brand-500/10 border border-brand-500/10 rounded-xl rounded-tl-sm px-4 py-2.5 text-sm text-dark-100">
              <span>{typedText}</span>
              {typedText.length < fullText.length && (
                <span className="cursor-blink" />
              )}
            </div>
          </div>

          {/* Main mockup image */}
          <ImageSlot
            src={IMAGES.HERO_MOCKUP}
            alt="Dear Bot Dashboard"
            width={600}
            height={500}
            label="HERO — Screenshot principal do sistema (600×500)"
            className="w-full rounded-2xl"
            priority
          />

          {/* Floating notification */}
          <div className="absolute -bottom-6 -right-4 z-10 bg-dark-900/90 backdrop-blur-sm border border-brand-500/20 rounded-xl px-4 py-3 shadow-2xl flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 text-lg">
              🎯
            </div>
            <div>
              <div className="text-xs text-dark-400">Novo lead qualificado</div>
              <div className="text-sm font-semibold text-white">João Silva — Alto interesse</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
