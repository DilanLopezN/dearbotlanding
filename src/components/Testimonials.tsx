"use client";
import { TESTIMONIALS, IMAGES } from "@/lib/constants";
import { useScrollReveal } from "@/lib/useScrollReveal";
import Image from "next/image";

const testimonialImages = [
  IMAGES.TESTIMONIAL_1,
  IMAGES.TESTIMONIAL_2,
  IMAGES.TESTIMONIAL_3,
];

function TestimonialCard({ t, index }: { t: typeof TESTIMONIALS[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const imgSrc = testimonialImages[index];

  return (
    <div
      ref={ref}
      className={`glow-border rounded-2xl p-8 bg-dark-950/50 backdrop-blur-sm card-hover transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex gap-1 mb-6">
        {Array.from({ length: t.rating }).map((_, s) => (
          <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#00e66d">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      <p className="text-dark-200 leading-relaxed mb-8 text-sm italic">
        &ldquo;{t.text}&rdquo;
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
          {imgSrc ? (
            <Image
              src={imgSrc}
              alt={t.name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 font-display font-bold text-lg">
              {t.name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <div className="font-semibold text-white text-sm">{t.name}</div>
          <div className="text-dark-400 text-xs">{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="depoimentos" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-brand-500 text-sm uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-6">
            Quem usa,{" "}
            <span className="text-gradient">recomenda</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
