import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const years = [
  { year: "2026", characters: "Moses & Peter" },
  { year: "2027", characters: "Joseph & Paul" },
  { year: "2028", characters: "Joshua & Jesus Christ" },
  { year: "2029", characters: "David & Esther" },
  { year: "2030", characters: "Daniel & Nehemiah" },
];

export function NNTVBCFiveYear() {
  return (
    <section className="bg-[#F5F5F5] py-16 sm:py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mb-10 text-center sm:mb-16">
          <SectionLabel className="mb-4 block">The Strategic Story</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
            NNTVBC 2026–2030
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg font-semibold text-[#0A1F44]/80">
            Five-Year Bible Character Learning Series
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-[#0A1F44]/10 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[420px] text-left">
              <thead>
                <tr className="bg-[#0A1F44]">
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
                    Year
                  </th>
                  <th className="px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#D4AF37]">
                    Bible Characters
                  </th>
                </tr>
              </thead>
              <tbody>
                {years.map((row, i) => (
                  <tr
                    key={row.year}
                    className={i !== years.length - 1 ? "border-b border-[#0A1F44]/8" : ""}
                  >
                    <td className="px-6 py-4 font-display text-lg font-bold text-[#0A1F44]">
                      {row.year}
                    </td>
                    <td className="px-6 py-4 text-base text-[#0A1F44]/70">
                      {row.characters}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-[#0A1F44]/60">
            The Nigerian National Teenagers&apos; Virtual Bible Challenge is being developed
            as a five-year national Bible-learning initiative, with each year focusing on
            two major Bible characters.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}
