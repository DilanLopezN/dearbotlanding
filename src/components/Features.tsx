"use client";
import { FEATURES, IMAGES } from "@/lib/constants";
import { useScrollReveal } from "@/lib/useScrollReveal";
import ImageSlot from "./ImageSlot";

function FeatureCard({ feature, index }: { feature: typeof FEATURES[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`glow-border rounded-2xl p-8 bg-dark-950/50 backdrop-blur-sm card-hover transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-2xl mb-6">
        {feature.icon}
      </div>
      <h3 className="font-display font-semibold text-xl text-white mb-3">
        {feature.title}
      </h3>
      <p className="text-dark-300 leading-relaxed text-sm">
        {feature.description}
      </p>
    </div>
  );
}

export default function Features() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal(0.1);

  const featureImages = [IMAGES.FEATURE_1, IMAGES.FEATURE_2, IMAGES.FEATURE_3];
  const featureLabels = [
    "Screenshot — Atendimento automático (400×300)",
    "Screenshot — Qualificação de leads (400×300)",
    "Screenshot — Dashboard analytics (400×300)",
  ];

  return (
    <section id="funcionalidades" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-500/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-brand-500 text-sm uppercase tracking-widest">
            Funcionalidades
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-6">
            Tudo que você precisa para{" "}
            <span className="text-gradient">escalar seu atendimento</span>
          </h2>
          <p className="text-dark-300 text-lg">
            O Dear Bot reúne inteligência artificial de ponta com automação
            inteligente para transformar seu WhatsApp.
          </p>
        </div>

        {/* Feature screenshots row */}
        <div
          ref={imgRef}
          className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-700 ${
            imgVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {featureImages.map((src, i) => (
            <ImageSlot
              key={i}
              src={src}
              alt={`Dear Bot Feature ${i + 1}`}
              width={400}
              height={300}
              label={featureLabels[i]}
              className="w-full"
            />
          ))}
        </div>

        {/* Feature cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
