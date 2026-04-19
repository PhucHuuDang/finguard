import { HeroSection } from "@/components/landing/hero-section"
import { Market } from "@/components/landing/market"
import { Navbar } from "@/components/landing/navbar"
import { ReviewBadge } from "@/components/landing/review-badge"

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Market />
      <div className="flex w-full items-center justify-center py-4 md:py-8">
        <ReviewBadge className="py-2 md:py-4" />
      </div>
    </main>
  )
}
