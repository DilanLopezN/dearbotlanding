"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { WHATSAPP_LINK, IMAGES } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#funcionalidades", label: "Funcionalidades" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#faq", label: "FAQ" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-950/80 backdrop-blur-xl border-b border-brand-500/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          {IMAGES.LOGO ? (
            <Image src={IMAGES.LOGO} alt="Dear Bot" width={120} height={32} />
          ) : (
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <span className="font-display font-semibold text-xl text-white group-hover:text-brand-400 transition-colors">
                dear<span className="text-brand-500">bot</span>
              </span>
            </div>
          )}
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-dark-300 hover:text-brand-400 transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="bg-brand-500 hover:bg-brand-600 text-dark-950 font-semibold text-sm px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-brand-500/25">
            Falar no WhatsApp
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-2" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-dark-950/95 backdrop-blur-xl border-t border-brand-500/10 px-6 pb-6 pt-4 space-y-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="block text-dark-200 hover:text-brand-400 transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block bg-brand-500 text-dark-950 font-semibold text-center py-3 rounded-full">
            Falar no WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
