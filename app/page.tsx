import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { NNTVBCFeature } from "@/components/sections/NNTVBCFeature";
import { WhatIsBibleBrain } from "@/components/sections/WhatIsBibleBrain";
import { ProductEcosystem } from "@/components/sections/ProductEcosystem";
import { WhatWeHaveBuilt } from "@/components/sections/WhatWeHaveBuilt";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { WhoWeServe } from "@/components/sections/WhoWeServe";
import { NNTVBCFiveYear } from "@/components/sections/NNTVBCFiveYear";
import { EventsSection } from "@/components/sections/EventsSection";
import { MediaGrid } from "@/components/sections/MediaGrid";
import { PartnershipCTA } from "@/components/sections/PartnershipCTA";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Home",
  alternates: {
    canonical: "https://www.biblebrain.ng",
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NNTVBCFeature />
      <WhatIsBibleBrain />
      <ProductEcosystem />
      <WhatWeHaveBuilt />
      <WhatWeDo />
      <WhoWeServe />
      <NNTVBCFiveYear />
      <EventsSection />
      <MediaGrid />
      <PartnershipCTA />
      <ContactSection />
    </>
  );
}
