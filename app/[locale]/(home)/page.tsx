import dynamic from "next/dynamic"

import { Navbar } from "@/components/common/navbar"
import { BadgeShowcase } from "@/components/showcase/badge-showcase"
import { HeroSection } from "@/features/landing/hero-section"
import { ReviewBadge } from "@/features/landing/review-badge"

// --- Lazy load below-the-fold content for performance ---
const Market = dynamic(() =>
  import("@/features/landing/market").then((mod) => mod.Market)
)
const OurFeatures = dynamic(() =>
  import("@/features/landing/our-features").then((mod) => mod.OurFeatures)
)
const SupportLanguages = dynamic(() =>
  import("@/features/landing/support-languages").then(
    (mod) => mod.SupportLanguages
  )
)
const TestimonialsSection = dynamic(() =>
  import("@/features/landing/testimonials-section").then(
    (mod) => mod.TestimonialsSection
  )
)
const FaqSection = dynamic(() =>
  import("@/features/landing/faq").then((mod) => mod.FaqSection)
)
const CtaSection = dynamic(() =>
  import("@/features/landing/cta-section").then((mod) => mod.CtaSection)
)

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ReviewBadge className="py-2 md:py-4" />
      <Market />
      <OurFeatures />
      <SupportLanguages />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />

      {/* <BadgeShowcase /> */}
    </main>
  )
}
