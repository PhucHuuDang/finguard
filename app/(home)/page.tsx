import { HeroSection } from "@/components/landing/hero-section"
import { Market } from "@/components/landing/market"
import { Navbar } from "@/components/landing/navbar"
import { ReviewBadge } from "@/components/landing/review-badge"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ReviewBadge className="py-2 md:py-4" />
      <Market />
    </main>
  )
}
