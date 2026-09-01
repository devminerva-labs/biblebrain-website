import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "NNTVBC 2026",
  description:
    "Nigerian National Teenagers' Virtual Bible Challenge (NNTVBC) 2026 — theme, registration, competition format, official study guide, and prizes.",
  alternates: {
    canonical: "https://www.biblebrain.ng/nntvbc",
  },
};

const REGISTER_URL = "https://forms.gle/ZTmGtTnbwTTqtLpQ9";
const STUDY_GUIDE_URL = "/documents/nntvbc-2026-study-guide.pdf";

const examFacts = [
  { value: "50", label: "Multiple Choice Questions" },
  { value: "4", label: "Options Per Question (A–D)" },
  { value: "50 Min", label: "Duration" },
  { value: "100", label: "Total Marks (2 per question)" },
];

const seriesYears = [
  { year: "2026", characters: "Moses & Peter", current: true },
  { year: "2027", characters: "Joseph & Paul" },
  { year: "2028", characters: "Joshua & Jesus Christ" },
  { year: "2029", characters: "David & Esther" },
  { year: "2030", characters: "Daniel & Nehemiah" },
];

const characters = [
  {
    name: "Moses",
    subtitle: "Leader, lawgiver, prophet, and servant of God",
    coverage: "≈25 Questions",
    references: ["Exodus 2", "Exodus 3", "Exodus 12", "Exodus 14", "Exodus 20"],
    strengths: ["Faith", "Leadership", "Humility", "Courage", "Perseverance", "Obedience"],
  },
  {
    name: "Peter",
    subtitle: "Disciple, apostle, preacher, and leader in the early Church",
    coverage: "≈25 Questions",
    references: ["Matthew 4", "Matthew 14", "Matthew 16", "John 21", "Acts 2"],
    strengths: ["Courage", "Passion", "Leadership", "Faith", "Commitment", "Boldness"],
  },
];

const faqs = [
  {
    q: "Who can participate in NNTVBC 2026?",
    a: "NNTVBC is open to Christian teenagers across Nigeria, ages 10–20.",
  },
  {
    q: "When does registration open?",
    a: "Registration opens Monday, August 31, 2026, through the official registration form linked on this page.",
  },
  {
    q: "Is there a registration fee?",
    a: "Yes — ₦1,500 per participant.",
  },
  {
    q: "What is the examination format?",
    a: "The examination is 50 multiple-choice questions (four options, A–D), worth 2 marks each for a total of 100 marks, completed online within 50 minutes.",
  },
  {
    q: "What should I study?",
    a: "Download the Official Study Guide on this page and study it alongside the Holy Bible — the referenced chapters on Moses and Peter provide the complete scope for preparation.",
  },
  {
    q: "What are the prizes?",
    a: "See the official flyer on this page for full prize and recognition details.",
  },
];

export default function NNTVBCPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#0A1F44] pt-24 pb-16 sm:pt-32">
        <Container>
          <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
            <div className="w-full max-w-sm shrink-0 lg:w-[36%]">
              <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                <Image
                  src="/images/flyers/nntvbc-2026-flyer.png"
                  alt="NNTVBC 2026 — Nigerian National Teenagers' Virtual Bible Challenge flyer"
                  width={800}
                  height={1000}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 90vw, 36vw"
                  priority
                />
              </div>
            </div>
            <div className="w-full text-center lg:w-[64%] lg:text-left">
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
                Nigerian National Teenagers&apos; Virtual Bible Challenge
              </span>
              <h1 className="mb-4 font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
                NNTVBC 2026
              </h1>
              <p className="mb-8 font-display text-xl font-semibold text-[#D4AF37]">
                Theme: The Life and Lessons of Moses and Peter
              </p>
              <div className="mb-8 inline-flex items-center gap-3 rounded-xl border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-5 py-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5 shrink-0 text-[#D4AF37]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                </svg>
                <span className="text-sm font-semibold text-white">
                  Registration Opens: Monday, August 31, 2026
                </span>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button href={REGISTER_URL} variant="primary" size="lg">
                  Register Now
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why NNTVBC — What Is It / Who Can Participate / Fee / Date / Mode */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <SectionLabel className="mb-4 block">About the Challenge</SectionLabel>
              <h2 className="mb-6 font-display text-3xl font-bold text-[#0A1F44]">
                What Is NNTVBC?
              </h2>
              <p className="mb-6 text-base leading-relaxed text-[#0A1F44]/70">
                The Nigerian National Teenagers&apos; Virtual Bible Challenge (NNTVBC) 2026 has
                been designed to encourage Christian teenagers across Nigeria to engage deeply
                with the Word of God through structured study, reflection, and healthy
                competition. The competition seeks to promote Bible literacy, Christian
                character development, leadership values, and a deeper understanding of God&apos;s
                dealings with His people through Scripture.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#F5F5F5] p-6">
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
                  Who Can Participate
                </h3>
                <p className="text-sm leading-relaxed text-[#0A1F44]/70">
                  Christian teenagers across Nigeria, ages 10–20.
                </p>
              </div>
              <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#F5F5F5] p-6">
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
                  Registration Fee
                </h3>
                <p className="text-sm leading-relaxed text-[#0A1F44]/70">
                  ₦1,500 per participant.
                </p>
              </div>
              <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#F5F5F5] p-6">
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
                  Examination Date
                </h3>
                <p className="text-sm leading-relaxed text-[#0A1F44]/70">
                  Saturday, December 5, 2026.
                </p>
              </div>
              <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#F5F5F5] p-6">
                <h3 className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
                  Mode
                </h3>
                <p className="text-sm leading-relaxed text-[#0A1F44]/70">
                  Online / Virtual.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Official Study Guide — download */}
      <section className="bg-[#F5F5F5] py-16 sm:py-24">
        <Container>
          <AnimatedSection className="mb-10 text-center sm:mb-16">
            <SectionLabel className="mb-4 block">Preparation</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
              Official Study Guide
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#0A1F44]/60">
              The complete NNTVBC 2026 Study Guide — covering Moses and Peter in full —
              is available as a free download. Study it alongside the Holy Bible to
              prepare for the examination.
            </p>
          </AnimatedSection>

          <div className="mx-auto mb-10 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {characters.map((c) => (
              <AnimatedSection key={c.name} direction="up">
                <div className="h-full rounded-2xl border border-[#0A1F44]/10 bg-white p-6">
                  <h3 className="mb-1 font-display text-lg font-bold text-[#0A1F44]">
                    {c.name}
                  </h3>
                  <p className="mb-3 text-sm font-semibold text-[#D4AF37]">
                    {c.subtitle} · {c.coverage}
                  </p>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#0A1F44]/40">
                    Primary References
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {c.references.map((r) => (
                      <span
                        key={r}
                        className="rounded-full bg-[#0A1F44]/5 px-3 py-1 text-xs font-medium text-[#0A1F44]/70"
                      >
                        {r}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {c.strengths.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-[#D4AF37]/10 px-3 py-1 text-xs font-semibold text-[#b8960c]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2} className="flex justify-center">
            <Button href={STUDY_GUIDE_URL} variant="primary" size="lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Study Guide (PDF)
            </Button>
          </AnimatedSection>
        </Container>
      </section>

      {/* Examination Format */}
      <section className="bg-[#0A1F44] py-16 sm:py-24">
        <Container>
          <AnimatedSection className="mb-10 text-center sm:mb-16">
            <SectionLabel className="mb-4 block">Competition Format</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Examination Structure
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Online examination — the 50-minute period includes the time required to
              complete and submit the examination.
            </p>
          </AnimatedSection>

          <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {examFacts.map((fact, i) => (
              <AnimatedSection key={fact.label} delay={i * 0.1} direction="up">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                  <div className="mb-1 font-display text-3xl font-extrabold text-[#D4AF37]">
                    {fact.value}
                  </div>
                  <div className="text-xs font-medium text-white/60">{fact.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="mx-auto max-w-2xl">
            <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
              Examination Coverage
            </p>
            <p className="text-center text-base leading-relaxed text-white/70">
              Questions are drawn from Moses (≈25 questions) and Peter (≈25 questions),
              assessing biblical knowledge, events and timelines, people and places,
              leadership principles, faith lessons, character development, and application
              to Christian living. The focus is not merely on memorization, but on
              understanding, interpretation, and practical application of biblical truths.
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Rules */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <AnimatedSection>
              <SectionLabel className="mb-4 block">Rules</SectionLabel>
              <h2 className="mb-6 font-display text-3xl font-bold text-[#0A1F44]">
                Competition Rules
              </h2>
              <p className="mb-4 text-base leading-relaxed text-[#0A1F44]/70">
                The examination is objective — 50 multiple-choice questions with four
                answer options (A–D), taken online within a 50-minute window that includes
                submission time. Full preparation content is available in the Official
                Study Guide above.
              </p>
              <p className="text-base leading-relaxed text-[#0A1F44]/70">
                A full set of conduct rules will be published ahead of the examination
                date. Check this page or our official channels for updates.
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Five-Year Series */}
      <section className="bg-[#F5F5F5] py-16 sm:py-24">
        <Container>
          <AnimatedSection className="mb-10 text-center sm:mb-16">
            <SectionLabel className="mb-4 block">The Strategic Story</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
              NNTVBC Bible Character Learning Series
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[#0A1F44]/60">
              A structured five-year Bible learning programme. Each year, participants
              study two carefully selected Bible characters, progressively building broad
              and deep biblical knowledge over time.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#0A1F44]/10 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] text-left">
                <thead>
                  <tr className="bg-[#0A1F44]">
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">Year</th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">Characters</th>
                  </tr>
                </thead>
                <tbody>
                  {seriesYears.map((row, i) => (
                    <tr
                      key={row.year}
                      className={`${i !== seriesYears.length - 1 ? "border-b border-[#0A1F44]/8" : ""} ${
                        row.current ? "bg-[#D4AF37]/10" : "bg-white"
                      }`}
                    >
                      <td className="px-6 py-4 font-display text-lg font-bold text-[#0A1F44]">
                        {row.year} {row.current && <span className="ml-2 text-xs font-semibold text-[#b8960c]">(Current)</span>}
                      </td>
                      <td className="px-6 py-4 text-base text-[#0A1F44]/70">{row.characters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* Prizes */}
      <section className="bg-[#0A1F44] py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <AnimatedSection>
              <SectionLabel className="mb-4 block">Prizes</SectionLabel>
              <h2 className="mb-4 font-display text-3xl font-bold text-white sm:text-4xl">
                Prizes &amp; Recognition
              </h2>
              <p className="mb-6 text-base leading-relaxed text-white/70">
                See the official flyer for full details on prizes and recognition awards.
              </p>
              <Button
                href="/images/flyers/nntvbc-2026-flyer.png"
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                See Flyer
              </Button>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <AnimatedSection className="mb-10 text-center sm:mb-16">
            <SectionLabel className="mb-4 block">FAQs</SectionLabel>
            <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="mx-auto max-w-2xl space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-[#0A1F44]/10 bg-[#F5F5F5] px-5 py-4 open:bg-white open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base font-bold text-[#0A1F44]">
                  {faq.q}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="h-4 w-4 shrink-0 text-[#D4AF37] transition-transform group-open:rotate-45"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[#0A1F44]/70">{faq.a}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section
        className="py-16 sm:py-24"
        style={{ background: "linear-gradient(135deg, #D4AF37 0%, #b8960c 100%)" }}
      >
        <Container>
          <AnimatedSection className="text-center">
            <h2 className="mb-4 font-display text-3xl font-extrabold text-[#0A1F44] sm:text-4xl">
              Ready to Take the Challenge?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-[#0A1F44]/70">
              Registration opens Monday, August 31, 2026.
            </p>
            <Button href={REGISTER_URL} variant="dark" size="lg">
              Register Now
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Button>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
