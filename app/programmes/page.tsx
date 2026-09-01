import type { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Programmes } from "@/components/sections/Programmes";
import { PartnershipCTA } from "@/components/sections/PartnershipCTA";

export const metadata: Metadata = {
  title: "Programmes",
  description:
    "Our Programmes & Experiences — how the Bible Brain® product ecosystem reaches teenagers, families, schools, and churches, including NNTVBC 2026.",
  alternates: {
    canonical: "https://www.biblebrain.ng/programmes",
  },
};

export default function ProgrammesPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden bg-[#0A1F44] pt-20">
        <Container>
          <div className="mx-auto max-w-3xl py-16 text-center">
            <AnimatedSection>
              <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Experiences
              </span>
              <h1 className="mb-6 font-display text-4xl font-extrabold text-white sm:text-5xl">
                Our Programmes &amp; Experiences
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-white/75">
                Products are the ecosystem. Programmes and experiences are how that
                ecosystem reaches people.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>
      <Programmes />
      <PartnershipCTA />
    </>
  );
}
