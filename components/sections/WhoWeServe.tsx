import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const audiences = [
  {
    title: "Children",
    description: "Building strong biblical foundations from childhood.",
  },
  {
    title: "Teenagers",
    description: "Developing biblical knowledge, character, discipline, and leadership.",
  },
  {
    title: "Families",
    description: "Bringing structured Scripture engagement into the home.",
  },
  {
    title: "Schools & Churches",
    description: "Providing structured Bible education and teaching resources.",
  },
  {
    title: "Bible Learners & Competitors",
    description: "Creating pathways for Scripture mastery and competitive excellence.",
  },
];

export function WhoWeServe() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mb-10 text-center sm:mb-16">
          <SectionLabel className="mb-4 block">Our Audience</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
            Who We Serve
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {audiences.map((audience, i) => (
            <AnimatedSection key={audience.title} delay={i * 0.1} direction="up">
              <div className="h-full rounded-2xl border border-[#0A1F44]/8 bg-[#F5F5F5] p-6 transition hover:border-[#D4AF37]/30 hover:shadow-sm">
                <h3 className="mb-2 font-display text-lg font-bold text-[#0A1F44]">
                  {audience.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#0A1F44]/60">
                  {audience.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
