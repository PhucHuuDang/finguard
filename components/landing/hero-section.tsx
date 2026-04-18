import { ArrowUpRight, Play } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TradingCard } from "@/components/landing/trading-card"

export function HeroSection() {
  return (
    <section className="landing-bg relative min-h-screen overflow-hidden">
      {/* Orange light streaks (decorative) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Primary glow */}
        <div
          className="animate-glow-pulse absolute top-1/4 right-0 h-[600px] w-[800px] rounded-full opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.55 0.20 30 / 50%), transparent 70%)",
          }}
        />
        {/* Secondary glow */}
        <div
          className="animate-glow-pulse absolute top-0 right-1/4 h-[400px] w-[600px] rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, oklch(0.60 0.22 40 / 40%), transparent 70%)",
            animationDelay: "2s",
          }}
        />
        {/* Light streaks */}
        <div
          className="absolute top-[10%] right-[5%] h-[2px] w-[500px] rotate-[-35deg] opacity-30"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.70 0.20 40), oklch(0.80 0.15 50), transparent)",
          }}
        />
        <div
          className="absolute top-[30%] right-[10%] h-[1.5px] w-[600px] rotate-[-30deg] opacity-25"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.65 0.18 35), oklch(0.75 0.15 45), transparent)",
          }}
        />
        <div
          className="absolute top-[50%] right-[0%] h-px w-[700px] rotate-[-40deg] opacity-20"
          style={{
            background:
              "linear-gradient(90deg, transparent, oklch(0.60 0.20 30), oklch(0.70 0.18 40), transparent)",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[oklch(0.08_0.01_30)] to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24 lg:px-8">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left: Hero Copy */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <div className="flex">
              <Badge
                variant="outline"
                className="flex items-center gap-2 rounded-full border-neutral-700 bg-neutral-900/50 px-4 py-1.5 text-sm text-neutral-300"
              >
                <span className="text-neutral-400">Introducing</span>
                <span className="font-medium text-neutral-200">
                  our Insights
                </span>
                <span className="flex size-5 items-center justify-center rounded-full bg-orange-500/80">
                  <ArrowUpRight className="size-3 text-white" />
                </span>
              </Badge>
            </div>

            {/* Heading */}
            <h1 className="max-w-lg font-heading text-5xl leading-[1.1] font-bold tracking-tight text-white md:text-6xl lg:text-[68px]">
              Conquering Your Trading Goals
            </h1>

            {/* Subtitle */}
            <p className="max-w-md text-base leading-relaxed text-neutral-400">
              Customize your business journey effortlessly with Youflow&apos;s
              dashboard, backed by a suite of powerful tools at your fingertips.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 rounded-full border-neutral-700 bg-white px-7 text-base font-semibold text-black hover:bg-neutral-200"
              >
                Get Started
                <ArrowUpRight data-icon="inline-end" />
              </Button>
              <Button
                size="lg"
                className="gap-2 rounded-full bg-linear-to-r from-orange-600 to-red-500 px-7 text-base font-semibold text-white shadow-lg shadow-orange-500/25 hover:from-orange-500 hover:to-red-400"
              >
                <Play data-icon="inline-start" className="size-4 fill-white" />
                Learn More
              </Button>
            </div>
          </div>

          {/* Right: Trading Card */}
          <div className="flex justify-center lg:justify-end">
            <TradingCard />
          </div>
        </div>
      </div>
    </section>
  )
}
