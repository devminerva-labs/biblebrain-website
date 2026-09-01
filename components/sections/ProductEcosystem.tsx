"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const products = [
  {
    src: "/images/products/bible-brain-tv.png",
    name: "Bible Brain TV®",
    status: "Completed",
    description:
      "363 television episodes developed for an 11-year cycle, with no content repetition.",
  },
  {
    src: "/images/products/bible-brain-academy.png",
    name: "Bible Brain Academy®",
    status: "Completed",
    description:
      "An 11-year teenage Bible programme comprising 33 semesters — education, training, competition, and certification (Bible Brain Certified Teenager® — BBCT).",
  },
  {
    src: "/images/products/bible-brain-home-play.png",
    name: "Bible Brain Home Play®",
    status: "Completed",
    description:
      "365 days of Bible learning experiences annually — a continuous journey of daily Scripture engagement from the home for 110 years.",
  },
  {
    src: "/images/products/bible-brain-ultimate-search.png",
    name: "Bible Brain Ultimate Search®",
    status: "Completed",
    description:
      "A 110-year competition framework structured in 11-year cycles, with a new challenge library for each cycle.",
  },
  {
    src: "/images/products/bible-brain-teenagers-daily-devotion.png",
    name: "Bible Brain Teenagers' Daily Devotion®",
    status: "In Development",
    description:
      "An 11-year devotional programme helping teenagers build consistent Bible-study habits, biblical understanding, and Christian character.",
  },
  {
    src: "/images/products/bible-brain-teenagers-ssm.png",
    name: "Bible Brain Teenagers' Sunday School Manual®",
    status: "In Development",
    description:
      "An 11-year non-denominational teaching curriculum helping teachers systematically teach teenagers the Word of God.",
  },
  {
    src: "/images/products/bible-brain-childrens-daily-devotion.png",
    name: "Bible Brain Children's Daily Devotion®",
    status: "In Development",
    description:
      "A Scripture-based devotional programme helping children develop a daily relationship with God's Word from an early age.",
  },
  {
    src: "/images/products/bible-brain-childrens-ssm.png",
    name: "Bible Brain Children's Sunday School Manual®",
    status: "In Development",
    description:
      "A 9-year non-denominational teaching curriculum establishing strong biblical foundations throughout childhood.",
  },
];

export function ProductEcosystem() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openProduct = openIndex !== null ? products[openIndex] : null;

  return (
    <section id="ecosystem" className="bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mb-10 text-center sm:mb-16">
          <SectionLabel className="mb-4 block">The Ecosystem</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
            Bible Brain® Product Ecosystem
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#0A1F44]/60">
            Eight platforms. One vision.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <AnimatedSection key={product.name} delay={Math.min(i * 0.08, 0.4)} direction="up">
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#0A1F44]/10 bg-white text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37]"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F5F5F5]">
                  <Image
                    src={product.src}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="mb-2 font-display text-base font-bold leading-snug text-[#0A1F44] group-hover:text-[#D4AF37] transition-colors">
                    {product.name}
                  </h3>
                  <p className="flex-1 text-sm leading-relaxed text-[#0A1F44]/60">
                    {product.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-[#D4AF37]">
                    Learn More
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3 w-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>
      </Container>

      {/* Expanded product overlay */}
      {openProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1F44]/80 p-4 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="relative flex w-full flex-col rounded-2xl bg-white shadow-2xl"
            style={{ maxWidth: "28rem", maxHeight: "90vh", overflowY: "auto" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#0A1F44] shadow transition hover:bg-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative aspect-[3/4] w-full shrink-0 bg-[#F5F5F5]">
              <Image
                src={openProduct.src}
                alt={openProduct.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 448px"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8">
              <span
                className={`mb-3 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                  openProduct.status === "Completed"
                    ? "bg-green-100 text-green-700"
                    : "bg-[#D4AF37]/15 text-[#b8960c]"
                }`}
              >
                {openProduct.status}
              </span>
              <h3 className="mb-3 font-display text-xl font-bold text-[#0A1F44]">
                {openProduct.name}
              </h3>
              <p className="text-base leading-relaxed text-[#0A1F44]/70">
                {openProduct.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
