"use client"

import dynamic from "next/dynamic"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Reveal } from "@/components/animations/reveal"

const BorderBeam = dynamic(
  () => import("border-beam").then((mod) => mod.BorderBeam),
  { ssr: false }
)

// --- Constants ---

const FEATURES = [
  {
    title: "Real-Time Market Insight",
    description:
      "At Finguard, we ensure fast, reliable payouts with robust model and verified proof on blockchain and social media.",
    image: "/features/read-time-image.png",
    imageAlt: "Real-time market insight dashboard with candlestick chart",
    imageWidth: 705,
    imageHeight: 387,
    colors: [
      [34, 197, 94],
      [16, 185, 129],
    ] as number[][], // green tones
  },
  {
    title: "Advanced Account Analysis",
    description:
      "Customize your business journey effortlessly with Finguard dashboard.",
    icon: "/features/advanced-account.avif",
    // image: "/features/body.avif",
    image:
      "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/687bf3aac82e2c2aba3eb5e6_Symbol%20Icon.svg",
    imageAlt: "Advanced account analysis interface",
    imageWidth: 400,
    imageHeight: 300,
    colors: [
      [249, 115, 22],
      [234, 88, 12],
    ] as number[][], // orange tones
  },
  {
    title: "Portfolio Management",
    description:
      "Easily boost your business journey with your Finguard dashboard!",
    image: "/features/features-04-image.avif",
    imageAlt: "Portfolio management grid showing stock positions",
    imageWidth: 500,
    imageHeight: 350,
    colors: [
      [59, 130, 246],
      [99, 102, 241],
    ] as number[][], // blue tones
  },
  {
    title: "Advanced Charting Tools",
    description:
      "At Finguard, we ensure fast, reliable payouts with robust model and verified proof on blockchain and social media.",
    // image: "/features/body.avif",
    image: "/features/features-04-image.avif",
    classNameContainer: "overflow-visible",

    imageAlt: "Advanced charting tools with candlestick patterns",

    secondSrc: "/features/body.avif",
    classNameSecondSrc: "top-0 z-10",
    imageWidth: 600,
    imageHeight: 400,
    colors: [
      [139, 92, 246],
      [168, 85, 247],
    ] as number[][], // purple tones
  },
] as const

// --- Sub-components ---

function FeatureCard({
  title,
  description,
  image,
  imageAlt,
  imageWidth,
  imageHeight,
  secondSrc,
  colors,
  large,
  delay,
  classNameSecondSrc,

  classNameContainer,
}: {
  title: string
  description: string
  image: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
  secondSrc?: string
  colors: readonly (readonly number[])[]
  large?: boolean
  delay: number
  classNameSecondSrc?: string
  classNameContainer?: string
}) {
  return (
    <Reveal delay={delay} direction="up" className="h-full">
      <CardSpotlight
        className={cn(
          "group/feature relative h-full overflow-hidden rounded-2xl border border-neutral-800/60 bg-neutral-950 p-0"
        )}
        radius={400}
        color="#1a1a2e"
      >
        {/* Content */}
        <div className="relative z-10 flex h-full flex-col">
          {/* Text Content */}
          <div className="space-y-3 px-6 pt-6 pb-4 md:px-8 md:pt-8">
            <h3 className="font-heading text-lg font-semibold tracking-tight text-white md:text-xl">
              {title}
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
              {description}
            </p>
          </div>

          {/* Image Area */}
          <div
            className={cn(
              "relative mt-auto flex-1 overflow-hidden px-4 pb-0 md:px-6",
              classNameContainer
            )}
          >
            {secondSrc && (
              <div
                className={cn(
                  "absolute right-4 z-20 md:right-6",
                  classNameSecondSrc
                )}
              >
                <div
                  className={cn(
                    "overflow-hidden rounded-xl border border-neutral-700/40 shadow-2xl ring-1 shadow-black/60 ring-white/5 backdrop-blur-sm",
                    classNameContainer
                  )}
                >
                  <Image
                    src={secondSrc}
                    alt="Feature overlay"
                    width={240}
                    height={280}
                    className="h-auto w-[180px] object-cover md:w-[240px]"
                    quality={90}
                  />
                </div>
              </div>
            )}

            <div
              className={`relative overflow-hidden rounded-t-xl border border-b-0 border-neutral-800/40 ${
                large
                  ? "min-h-[220px] md:min-h-[280px]"
                  : "min-h-[180px] md:min-h-[240px]"
              }`}
            >
              {/* Subtle top glow on the image */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-16 bg-linear-to-b from-neutral-950/40 to-transparent" />

              <Image
                src={image}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className="h-full w-full object-cover object-top transition-transform duration-500"
                quality={90}
              />
            </div>
          </div>
        </div>

        {/* Bottom ambient glow */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-1/2 opacity-20"
          style={{
            background: `radial-gradient(ellipse at 50% 100%, rgb(${colors[0].join(",")}) 0%, transparent 70%)`,
          }}
        />
      </CardSpotlight>
    </Reveal>
  )
}

// --- Main Component ---

export const OurFeatures = () => {
  return (
    <section className="relative overflow-hidden bg-black py-20 md:py-32">
      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/features/features-bg.avif"
          alt=""
          fill
          className="object-cover object-center opacity-40"
          quality={80}
          priority={false}
        />
        <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <Reveal delay={0.1} direction="up">
          <div className="flex justify-center">
            <BorderBeam className="w-fit rounded-xl">
              <Button
                className="rounded-xl border-neutral-700/60 bg-neutral-900/60 text-sm text-neutral-300 backdrop-blur-sm hover:bg-neutral-800/60"
                variant="outline"
              >
                Our Features
              </Button>
            </BorderBeam>
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.2} direction="up">
          <h2 className="mx-auto mt-8 max-w-3xl text-center font-heading text-2xl leading-[1.15] font-bold tracking-tight text-white md:mt-10 md:text-4xl lg:text-[2.75rem]">
            Our Powerful{" "}
            <span className="text-neutral-300 italic">Dashboard</span> Enable
            <br className="hidden sm:block" /> Over{" "}
            <span className="text-orange-500">234.000</span>{" "}
            <span className="text-neutral-300 italic">Analytics</span> Everyday
          </h2>
        </Reveal>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-12 md:gap-6">
          {/* Row 1: Large left + Small right */}
          <div className="md:col-span-7">
            <FeatureCard
              title={FEATURES[0].title}
              description={FEATURES[0].description}
              image={FEATURES[0].image}
              imageAlt={FEATURES[0].imageAlt}
              imageWidth={FEATURES[0].imageWidth}
              imageHeight={FEATURES[0].imageHeight}
              colors={FEATURES[0].colors}
              large
              delay={0.3}
            />
          </div>
          <div className="md:col-span-5">
            <FeatureCard
              title={FEATURES[1].title}
              description={FEATURES[1].description}
              image={FEATURES[1].image}
              imageAlt={FEATURES[1].imageAlt}
              imageWidth={FEATURES[1].imageWidth}
              imageHeight={FEATURES[1].imageHeight}
              secondSrc={FEATURES[1].icon}
              classNameSecondSrc="-top-6  right-[1000px]"
              classNameContainer="overflow-visible"
              colors={FEATURES[1].colors}
              delay={0.4}
            />
          </div>

          {/* Row 2: Small left + Large right */}
          <div className="md:col-span-5">
            <FeatureCard
              title={FEATURES[2].title}
              description={FEATURES[2].description}
              image={FEATURES[2].image}
              imageAlt={FEATURES[2].imageAlt}
              imageWidth={FEATURES[2].imageWidth}
              imageHeight={FEATURES[2].imageHeight}
              colors={FEATURES[2].colors}
              delay={0.5}
            />
          </div>
          <div className="md:col-span-7">
            <FeatureCard
              title={FEATURES[3].title}
              description={FEATURES[3].description}
              image={FEATURES[3].image}
              imageAlt={FEATURES[3].imageAlt}
              imageWidth={FEATURES[3].imageWidth}
              imageHeight={FEATURES[3].imageHeight}
              secondSrc={FEATURES[3].secondSrc}
              classNameSecondSrc={FEATURES[3].classNameSecondSrc}
              colors={FEATURES[3].colors}
              large
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
