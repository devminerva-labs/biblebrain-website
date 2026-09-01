import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const stats = [
  { value: "363", label: "Television Episodes" },
  { value: "33", label: "Academy Semesters" },
  { value: "110 Years", label: "Home Play® Scripture Journey" },
  { value: "110 Years", label: "Ultimate Search® Competition Framework" },
];

export function WhatWeHaveBuilt() {
  return (
    <section className="bg-[#0A1F44] py-16 sm:py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mb-10 text-center sm:mb-16">
          <SectionLabel className="mb-4 block">Credibility</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            What We Have Built
          </h2>
        </AnimatedSection>

        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.12} direction="up">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm transition hover:bg-white/10">
                <div className="mb-2 font-display text-4xl font-extrabold text-[#D4AF37] sm:text-5xl">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-white/60">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-white/70 sm:text-lg">
            Bible Brain® is being developed as a long-term Scripture-learning ecosystem
            designed for continuous content development and multi-generational engagement.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
