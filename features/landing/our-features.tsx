"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { CardSpotlight } from "@/components/ui/card-spotlight"
import { Reveal } from "@/components/animations/reveal"
import { BorderBeam } from "@/components/common/border-beam"

// --- Constants ---

const FEATURES_DATA = [
  {
    titleKey: "card_1_title",
    descriptionKey: "card_1_description",
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
    titleKey: "card_2_title",
    descriptionKey: "card_2_description",
    icon: "/features/advanced-account.avif",
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
    titleKey: "card_3_title",
    descriptionKey: "card_3_description",
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
    titleKey: "card_4_title",
    descriptionKey: "card_4_description",
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
          <div className="space-y-2 px-5 pt-5 pb-3 md:space-y-3 md:px-6 md:pt-6 md:pb-4">
            <h3 className="font-heading text-base font-semibold tracking-tight text-white md:text-lg">
              {title}
            </h3>
            <p className="max-w-sm text-xs leading-relaxed text-neutral-400 md:text-sm">
              {description}
            </p>
          </div>

          {/* Image Area */}
          <div
            className={cn(
              "relative mt-auto flex-1 overflow-hidden px-3 pb-0 md:px-5",
              classNameContainer
            )}
          >
            {secondSrc && (
              <div
                className={cn(
                  "absolute right-3 z-20 md:right-5",
                  classNameSecondSrc
                )}
              >
                <div
                  className={cn(
                    "overflow-hidden rounded-lg border border-neutral-700/40 shadow-2xl ring-1 shadow-black/60 ring-white/5 backdrop-blur-sm md:rounded-xl",
                    classNameContainer
                  )}
                >
                  <Image
                    src={secondSrc}
                    alt="Feature overlay"
                    width={200}
                    height={230}
                    className="h-auto w-[120px] object-cover sm:w-[150px] md:w-[180px] lg:w-[200px]"
                    sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, (max-width: 1024px) 180px, 200px"
                    quality={90}
                  />
                </div>
              </div>
            )}

            <div
              className={`relative overflow-hidden rounded-t-xl border border-b-0 border-neutral-800/40 ${
                large
                  ? "min-h-[160px] sm:min-h-[180px] md:min-h-[220px]"
                  : "min-h-[140px] sm:min-h-[160px] md:min-h-[200px]"
              }`}
            >
              {/* Subtle top glow on the image */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-12 bg-linear-to-b from-neutral-950/40 to-transparent" />

              <Image
                src={image}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className="h-full w-full object-cover object-top transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
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
  const t = useTranslations("features")

  return (
    <section className="relative overflow-hidden bg-black py-14 md:py-20 lg:py-24">
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

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <Reveal delay={0.1} direction="up">
          <div className="flex justify-center">
            <BorderBeam className="w-fit rounded-xl">
              <Button
                className="rounded-xl border-neutral-700/60 bg-neutral-900/60 text-sm text-neutral-300 backdrop-blur-sm hover:bg-neutral-800/60"
                variant="outline"
              >
                {t("badge")}
              </Button>
            </BorderBeam>
          </div>
        </Reveal>

        {/* Heading */}
        <Reveal delay={0.2} direction="up">
          <h2 className="mx-auto mt-6 max-w-3xl text-center font-heading text-xl leading-[1.15] font-bold tracking-tight text-white sm:text-2xl md:mt-8 md:text-3xl lg:text-[2.5rem]">
            {t("heading_1")}{" "}
            <span className="text-neutral-300 italic">
              {t("heading_dashboard")}
            </span>{" "}
            {t("heading_2")}
            <br className="hidden sm:block" />{" "}
            <span className="text-orange-500">{t("heading_count")}</span>{" "}
            <span className="text-neutral-300 italic">
              {t("heading_analytics")}
            </span>{" "}
            {t("heading_3")}
          </h2>
        </Reveal>

        {/* Bento Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-12 md:gap-5">
          {/* Row 1: Large left + Small right */}
          <div className="md:col-span-7">
            <FeatureCard
              title={t(FEATURES_DATA[0].titleKey)}
              description={t(FEATURES_DATA[0].descriptionKey)}
              image={FEATURES_DATA[0].image}
              imageAlt={FEATURES_DATA[0].imageAlt}
              imageWidth={FEATURES_DATA[0].imageWidth}
              imageHeight={FEATURES_DATA[0].imageHeight}
              colors={FEATURES_DATA[0].colors}
              large
              delay={0.3}
            />
          </div>
          <div className="md:col-span-5">
            <FeatureCard
              title={t(FEATURES_DATA[1].titleKey)}
              description={t(FEATURES_DATA[1].descriptionKey)}
              image={FEATURES_DATA[1].image}
              imageAlt={FEATURES_DATA[1].imageAlt}
              imageWidth={FEATURES_DATA[1].imageWidth}
              imageHeight={FEATURES_DATA[1].imageHeight}
              secondSrc={FEATURES_DATA[1].icon}
              classNameSecondSrc="top-2 md:top-4"
              classNameContainer="overflow-visible"
              colors={FEATURES_DATA[1].colors}
              delay={0.4}
            />
          </div>

          {/* Row 2: Small left + Large right */}
          <div className="md:col-span-5">
            <FeatureCard
              title={t(FEATURES_DATA[2].titleKey)}
              description={t(FEATURES_DATA[2].descriptionKey)}
              image={FEATURES_DATA[2].image}
              imageAlt={FEATURES_DATA[2].imageAlt}
              imageWidth={FEATURES_DATA[2].imageWidth}
              imageHeight={FEATURES_DATA[2].imageHeight}
              colors={FEATURES_DATA[2].colors}
              delay={0.5}
            />
          </div>
          <div className="md:col-span-7">
            <FeatureCard
              title={t(FEATURES_DATA[3].titleKey)}
              description={t(FEATURES_DATA[3].descriptionKey)}
              image={FEATURES_DATA[3].image}
              imageAlt={FEATURES_DATA[3].imageAlt}
              imageWidth={FEATURES_DATA[3].imageWidth}
              imageHeight={FEATURES_DATA[3].imageHeight}
              secondSrc={FEATURES_DATA[3].secondSrc}
              classNameSecondSrc="top-2 md:top-4"
              classNameContainer="overflow-visible"
              colors={FEATURES_DATA[3].colors}
              large
              delay={0.6}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
