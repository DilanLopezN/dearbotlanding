"use client";
import { STEPS, IMAGES } from "@/lib/constants";
import { useScrollReveal } from "@/lib/useScrollReveal";
import ImageSlot from "./ImageSlot";

const stepImages = [IMAGES.STEP_1, IMAGES.STEP_2, IMAGES.STEP_3];
const stepLabels = [
  "Print — Conectar WhatsApp via QR (480×320)",
  "Print — Painel de configuração da IA (480×320)",
  "Print — Dashboard ativo com métricas (480×320)",
];

function StepItem({ step, index }: { step: typeof STEPS[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.15);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
    >
      <div className={isEven ? "" : "lg:order-2"}>
        <div className="flex items-center gap-4 mb-6">
          <span className="font-mono text-6xl font-bold text-brand-500/20">
            {step.number}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-brand-500/30 to-transparent" />
        </div>
        <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-4">
          {step.title}
        </h3>
        <p className="text-dark-300 text-lg leading-relaxed">
          {step.description}
        </p>
      </div>
      <div className={isEven ? "" : "lg:order-1"}>
        <ImageSlot
          src={stepImages[index]}
          alt={step.title}
          width={480}
          height={320}
          label={stepLabels[index]}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="como-funciona" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={titleRef}
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-mono text-brand-500 text-sm uppercase tracking-widest">
            Como funciona
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mt-4 mb-6">
            Comece em{" "}
            <span className="text-gradient">3 passos simples</span>
          </h2>
          <p className="text-dark-300 text-lg">
            Sem complicação, sem código. Configure e comece a vender em minutos.
          </p>
        </div>

        <div className="space-y-24">
          {STEPS.map((step, i) => (
            <StepItem key={i} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
