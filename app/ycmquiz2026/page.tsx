import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "YCM Quiz 2026 — Bible Brain®",
  description:
    "Participate in the YCM Quiz 2026. Register and submit your answers through the official quiz form.",
  alternates: {
    canonical: "https://www.biblebrain.ng/ycmquiz2026",
  },
};

const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeZUhL-0YY2D0bk5DzJ82617MgK7r6e6wYcixcgDu04ISy_mQ/viewform?embedded=true";
const STUDY_GUIDE_URL = "/documents/ycm-quiz-2026-study-guide.pdf";

export default function YcmQuiz2026Page() {
  return (
    <>
      <div className="bg-[#0A1F44]">
        <Container>
          <div className="flex flex-col items-center gap-10 py-16 sm:py-24 lg:flex-row lg:items-center lg:gap-16 lg:py-28">
            <div className="w-full max-w-sm shrink-0 lg:w-[36%]">
              <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/images/flyers/ycm-national-bible-challenge-2026-flyer.png"
                  alt="YCM National Online Bible Challenge 2026 flyer"
                  width={1024}
                  height={1536}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 90vw, 36vw"
                  priority
                />
              </div>
            </div>
            <div className="w-full text-center lg:w-[64%] lg:text-left">
              <SectionLabel light>Competition</SectionLabel>
              <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                YCM Quiz 2026
              </h1>
              <p className="mt-6 text-lg text-[#D4AF37]">
                Take part in the YCM Quiz competition. Complete the form below to
                register and submit your entries.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <a
                  href="https://forms.gle/ESKvGEhBv1YyXThu5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 text-base font-bold text-[#0A1F44] transition hover:bg-[#b8960c]"
                >
                  Register Now
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-[#F5F5F5] py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl border border-[#0A1F44]/10 bg-white shadow-sm">
              <div className="aspect-[4/3] w-full bg-[#0A1F44] sm:aspect-[5/3] md:aspect-[16/7] lg:aspect-[16/6]">
                <iframe
                  title="YCM Quiz 2026 Form"
                  src={FORM_URL}
                  className="h-full w-full border-0"
                  frameBorder={0}
                  scrolling="no"
                />
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-sm text-[#0A1F44]/60">
                Alternatively,{" "}
                <a
                  href="https://forms.gle/ESKvGEhBv1YyXThu5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#D4AF37] hover:text-[#b8960c]"
                >
                  open the form in a new window
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Official Study Guide — download */}
      <div className="bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <AnimatedSection>
              <SectionLabel className="mb-4 block">Preparation</SectionLabel>
              <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
                Official Study Guide
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[#0A1F44]/60">
                &ldquo;Jesus Once Said…&rdquo; — the official YCM National Online
                Bible Challenge 2026 study guide, covering the words, teachings,
                parables, and promises of Jesus Christ as recorded in Matthew,
                Mark, Luke, and John.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="mt-8 flex justify-center">
              <Button href={STUDY_GUIDE_URL} variant="primary" size="lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
                Download Study Guide (PDF)
              </Button>
            </AnimatedSection>
          </div>
        </Container>
      </div>
    </>
  );
}
