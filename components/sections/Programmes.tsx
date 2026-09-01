import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const programmes = [
  {
    badge: "NNTVBC",
    title: "Nigerian National Teenagers' Virtual Bible Challenge",
    description:
      "Our current featured national programme — a structured, five-year Bible character learning series delivered as an online examination for teenagers across Nigeria.",
    focus: "National Competition",
    href: "/nntvbc",
  },
  {
    badge: "TV",
    title: "Bible Brain TV® Programmes",
    description:
      "363 television episodes developed for an 11-year cycle, bringing structured Bible learning to a broadcast audience with no content repetition.",
    focus: "Media & Broadcast",
  },
  {
    badge: "ACADEMY",
    title: "Academy Competitions",
    description:
      "Structured competitions within the 33-semester Bible Brain Academy® pathway, leading toward the Bible Brain Certified Teenager® (BBCT) certification.",
    focus: "Education & Certification",
  },
  {
    badge: "SEARCH",
    title: "Ultimate Search®",
    description:
      "A 110-year competition framework structured in 11-year cycles, with a new challenge library introduced for each cycle.",
    focus: "Competitive Learning",
  },
  {
    badge: "GTC",
    title: "Conferences",
    description:
      "Large-scale gatherings for spiritual growth and engagement, bringing teenagers together for high-impact, in-person and streamed experiences.",
    focus: "Spiritual Growth",
  },
  {
    badge: "SPECIAL",
    title: "Special Bible Brain® Initiatives",
    description:
      "Additional experiences delivered through or alongside the Bible Brain® product ecosystem, announced as they are developed.",
    focus: "Ongoing Development",
  },
];

export function Programmes() {
  return (
    <section id="programmes" className="bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mb-10 text-center sm:mb-16">
          <SectionLabel className="mb-4 block">Our Programmes</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
            Our Programmes &amp; Experiences
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#0A1F44]/60">
            The Bible Brain® products are the ecosystem. These programmes and experiences
            are how that ecosystem reaches teenagers, families, schools, and churches.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programmes.map((prog, i) => (
            <AnimatedSection key={prog.badge} delay={i * 0.1} direction="up">
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                {/* Badge */}
                <div className="mb-6">
                  <span className="rounded-lg bg-[#0A1F44] px-3 py-1.5 font-display text-sm font-bold text-[#D4AF37]">
                    {prog.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-3 font-display text-xl font-bold text-[#0A1F44] group-hover:text-[#D4AF37] transition-colors">
                  {prog.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-base leading-relaxed text-[#0A1F44]/60">
                  {prog.description}
                </p>

                {/* Focus area */}
                <div className="mt-6 flex items-center justify-between gap-2 border-t border-[#0A1F44]/10 pt-4">
                  <span className="flex items-center gap-2 text-xs font-semibold text-[#0A1F44]/50">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4 text-[#D4AF37]">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0115.186 0z" />
                    </svg>
                    Focus: {prog.focus}
                  </span>
                  {prog.href && (
                    <a
                      href={prog.href}
                      className="text-xs font-semibold text-[#D4AF37] hover:underline"
                    >
                      View →
                    </a>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
