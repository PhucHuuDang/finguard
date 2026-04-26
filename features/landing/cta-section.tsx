"use client"

import Image from "next/image"
import { ArrowRightIcon, ArrowUpRight } from "lucide-react"

import { StarsBackground } from "@/components/ui/stars"
import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from "@/components/animate-ui/primitives/buttons/flip"
import { Reveal } from "@/components/animations/reveal"
import { TitleSectionCommon } from "@/components/common/reuse-component"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-black pb-28">
      <div className="mx-auto px-6 lg:px-48">
        <Reveal>
          <div className="relative w-full overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a0a]">
            {/* Layer 1: Background Image */}
            <div className="pointer-events-none absolute inset-0 z-0">
              <Image
                src="/cta-background.avif"
                alt="CTA Background"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Layer 2: Interactive Stars and Content */}
            <StarsBackground
              starColor="#fdba74"
              className="relative z-10 flex w-full flex-col items-center justify-center bg-transparent! bg-none! p-10 py-16 text-center md:p-20"
            >
              <div className="relative z-10 flex flex-col items-center">
                {/* Tag / Badge */}
                <TitleSectionCommon
                  title="Introducing our Insights"
                  className="mb-8 flex-row rounded-full border border-white/10 bg-white/5 pr-1.5 pl-4 backdrop-blur-md"
                  titleClassName="text-sm font-medium"
                  icon={
                    <ArrowRightIcon className="size-4 rounded-xl bg-primary p-1 md:size-6" />
                  }
                />

                {/* Heading */}
                <h2 className="mb-6 max-w-6xl font-heading text-3xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                  Become A Landlord In A Few{" "}
                  <span className="text-gradient-neutral">Clicks</span>
                </h2>

                {/* Subheading */}
                <p className="md:text-md mb-10 max-w-4xl text-base font-semibold text-neutral-300">
                  Sign up in minutes and begin building your wealth by investing
                  in property fractions starting at just $50.
                </p>

                {/* Action Button */}
                <FlipButton asChild tapScale={0.95}>
                  <a
                    href="/main-page/contact"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-linear-to-r from-[#ea580c] to-[#c2410c] px-8 py-3.5 shadow-[0_4px_20px_rgba(234,88,12,0.4),inset_0_1px_1px_rgba(255,255,255,0.3)] transition-all duration-300"
                    // hover:shadow-[0_4px_30px_rgba(234,88,12,0.6),inset_0_1px_1px_rgba(255,255,255,0.3)]
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-20" />

                    <FlipButtonFront className="relative z-10 flex items-center gap-2 text-white">
                      <span className="text-base font-semibold">
                        Get Started
                      </span>
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </FlipButtonFront>

                    <FlipButtonBack className="relative z-10 flex items-center gap-2 text-white">
                      <span className="text-base font-semibold">Deep Dive</span>
                      <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </FlipButtonBack>
                  </a>
                </FlipButton>
              </div>
            </StarsBackground>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
