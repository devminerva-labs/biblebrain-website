import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function NNTVBCFeature() {
  return (
    <section id="nntvbc" className="bg-[#0A1F44] py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Flyer */}
          <AnimatedSection direction="left" className="w-full max-w-sm lg:w-[38%]">
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
              <Image
                src="/images/flyers/nntvbc-2026-flyer.png"
                alt="NNTVBC 2026 — Nigerian National Teenagers' Virtual Bible Challenge flyer"
                width={800}
                height={1000}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 90vw, 38vw"
                priority
              />
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" delay={0.15} className="w-full text-center lg:w-[62%] lg:text-left">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
              Current Featured Programme
            </span>
            <h2 className="mb-3 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              NNTVBC 2026
            </h2>
            <p className="mb-6 font-display text-lg font-semibold text-[#D4AF37] sm:text-xl">
              Nigerian National Teenagers&apos; Virtual Bible Challenge
            </p>
            <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-white/70 lg:mx-0">
              Theme: The Life and Lessons of Moses and Peter. A national Bible-learning
              challenge for teenagers across Nigeria, built on structured study, reflection,
              and healthy competition.
            </p>

            <div className="mb-8 inline-flex items-center gap-3 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5 shrink-0 text-[#D4AF37]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
              <span className="text-sm font-semibold text-white">
                Registration Opens: Monday, August 31, 2026
              </span>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                href="https://forms.gle/ZTmGtTnbwTTqtLpQ9"
                variant="primary"
                size="lg"
              >
                Register Now
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Button>
              <Link
                href="/nntvbc"
                className="text-sm font-semibold text-white/80 underline-offset-4 transition hover:text-white hover:underline"
              >
                View Full Details &amp; Study Guide →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
