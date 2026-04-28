import { HeroBackground } from "@/features/landing/hero-background"
import { HeroContent } from "@/features/landing/hero-content"
import { ScrollIndicator } from "@/features/landing/scroll-indicator"
import { TradingCard } from "@/features/landing/trading-card"

import { Reveal } from "../../components/animations/reveal"

export function HeroSection() {
  return (
    <section className="landing-bg relative min-h-[70vh] overflow-hidden pb-10 lg:min-h-[85vh] lg:pb-0">
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto mt-8 flex min-h-[85vh] max-w-6xl items-center px-6 pt-24 lg:mt-0 lg:min-h-[70vh] lg:scale-95 lg:px-8 xl:scale-100">
        <div className="flex w-full flex-col items-center justify-center gap-28 lg:flex-row lg:gap-40">
          {/* Left: Hero Copy */}
          <div className="w-full max-w-lg shrink-0">
            <Reveal>
              <HeroContent />
            </Reveal>
          </div>

          {/* Right: Trading Card */}
          <div className="flex w-full justify-center lg:w-auto">
            <div className="scale-95 sm:scale-100 lg:scale-105 xl:scale-110">
              <Reveal>
                <TradingCard />
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  )
}
