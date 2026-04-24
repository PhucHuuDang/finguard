import { Navbar } from "@/components/common/navbar"
import { HeroSection } from "@/features/landing/hero-section"
import { Market } from "@/features/landing/market"
import { OurFeatures } from "@/features/landing/our-features"
import { ReviewBadge } from "@/features/landing/review-badge"
import { SupportLanguages } from "@/features/landing/support-languages"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ReviewBadge className="py-2 md:py-4" />
      <Market />
      <OurFeatures />
      <SupportLanguages />
    </main>
  )
}
