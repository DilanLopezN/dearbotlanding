"use client";
import { useState } from "react";
import { FAQ } from "@/lib/constants";
import { useScrollReveal } from "@/lib/useScrollReveal";

function FAQItem({ item, index }: { item: typeof FAQ[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`border border-dark-800 rounded-xl overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${open ? "border-brand-500/30 bg-brand-500/[0.03]" : "bg-dark-950/30 hover:border-dark-700"}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="font-display font-medium text-white pr-4">
          {item.question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className={`text-brand-500 flex-shrink-0 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-48 pb-6" : "max-h-0"
        }`}
      >
        <p className="px-6 text-dark-300 leading-relaxed text-sm">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="faq" className="py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-brand-500 text-sm uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mt-4">
            Perguntas frequentes
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
