"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback } from "react";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const events = [
  {
    src: "/images/gallery/FB_IMG_1775727570739.jpg",
    year: "2019–2022",
    title: "Local Execution",
    tag: "Local Bible Brain® activities and model development",
  },
  {
    src: "/images/flyers/flyer-5.jpeg",
    year: "2023",
    title: "Teenagers' Bible Challenge",
    tag: "That I May Know Him",
  },
  {
    src: "/images/flyers/flyer-4.jpeg",
    year: "2024",
    title: "Teenagers' Bible Challenge",
    tag: "Study to Know God",
  },
  {
    src: "/images/flyers/flyer-3.jpeg",
    year: "2025",
    title: "Global Teenagers' Conference",
    tag: "Choice",
  },
  {
    src: "/images/flyers/nntvbc-2026-flyer.png",
    year: "2026",
    title: "NNTVBC — National Expansion",
    tag: "The Life and Lessons of Moses and Peter",
  },
];

export function EventsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section id="journey" className="bg-[#F5F5F5] py-16 sm:py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mb-10 text-center sm:mb-12">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Our Journey
          </span>
          <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
            Local Beginnings to National Expansion
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#0A1F44]/60">
            From local execution to a national Scripture-learning ecosystem — every step forward.
          </p>
        </AnimatedSection>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {events.map((event) => (
                <div
                  key={`${event.year}-${event.title}`}
                  className="min-w-0 flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                >
                  <div className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm">
                    {/* Fixed-ratio flyer image — all same size */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden">
                      <Image
                        src={event.src}
                        alt={`${event.year} ${event.title}`}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute left-3 top-3">
                        <span className="rounded-full bg-[#0A1F44]/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                          {event.year}
                        </span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-4">
                      <p className="text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                        {event.year}
                      </p>
                      <h3 className="mt-0.5 font-display text-sm font-bold leading-snug text-[#0A1F44]">
                        {event.title}
                      </h3>
                      <p className="mt-0.5 text-xs text-[#0A1F44]/50">&ldquo;{event.tag}&rdquo;</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={scrollPrev}
            aria-label="Previous"
            className="absolute -left-5 top-1/2 hidden -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-[#0A1F44] shadow-lg transition hover:bg-[#b8960c] sm:flex"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            aria-label="Next"
            className="absolute -right-5 top-1/2 hidden -translate-y-1/2 h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37] text-[#0A1F44] shadow-lg transition hover:bg-[#b8960c] sm:flex"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Container>
    </section>
  );
}
