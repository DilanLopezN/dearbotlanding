"use client";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-dark-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#050505" strokeWidth="2.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <span className="font-display font-semibold text-white">
              dear<span className="text-brand-500">bot</span>
            </span>
          </div>

          <div className="flex items-center gap-8 text-sm text-dark-400">
            <a href="#funcionalidades" className="hover:text-brand-400 transition-colors">Funcionalidades</a>
            <a href="#como-funciona" className="hover:text-brand-400 transition-colors">Como funciona</a>
            <a href="#faq" className="hover:text-brand-400 transition-colors">FAQ</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">WhatsApp</a>
          </div>

          <p className="text-sm text-dark-500">
            © {new Date().getFullYear()} Dear Bot. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
