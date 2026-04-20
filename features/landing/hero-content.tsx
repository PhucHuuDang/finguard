import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { HOME_LABEL } from "@/constant/label"

import { NoiseBackground } from "../../components/ui/noise-background"

export function HeroContent() {
  return (
    <div className="flex flex-col gap-8">
      {/* Badge */}
      <div className="flex">
        <Badge
          variant="outline"
          className="flex items-center gap-2 rounded-full border-neutral-700/60 bg-neutral-900/60 px-4 py-4 text-sm backdrop-blur-sm"
        >
          <span className="text-neutral-400">{HOME_LABEL.BADGE}</span>
          <span className="font-medium text-neutral-200">
            {HOME_LABEL.BADGE_2}
          </span>
          <span className="flex size-5 items-center justify-center rounded-full bg-orange-500">
            <ArrowUpRight className="size-3 text-white" />
          </span>
        </Badge>
      </div>

      {/* Heading */}
      <h1 className="max-w-lg font-heading text-2xl leading-[1.08] font-bold tracking-tight text-white md:text-3xl lg:text-5xl">
        {HOME_LABEL.HERO_TITLE}
      </h1>

      {/* Subtitle */}
      <p className="max-w-md text-[15px] leading-relaxed text-neutral-400">
        {HOME_LABEL.HERO_SUBTITLE}
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant="outline"
          className="h-[56px] gap-2 rounded-full border-neutral-600 bg-transparent px-8 text-base font-semibold text-white hover:bg-neutral-800"
        >
          {HOME_LABEL.HERO_BUTTON_1}
          <ArrowUpRight data-icon="inline-end" />
        </Button>
        {/* <Button
          size="lg"
          className="gap-2 rounded-full bg-linear-to-r from-orange-600 to-red-500 px-7 text-base font-semibold text-white shadow-lg shadow-orange-600/30 hover:from-orange-500 hover:to-red-400"
        >
          <Play data-icon="inline-start" className="size-4 fill-white" />
          {HOME_LABEL.HERO_BUTTON_2}
        </Button> */}

        <NoiseBackground
          containerClassName="w-fit p-2 rounded-full"
          gradientColors={[
            "rgb(255, 100, 150)",
            "rgb(100, 150, 255)",
            "rgb(255, 200, 100)",
          ]}
        >
          <button className="h-full w-full cursor-pointer rounded-full bg-linear-to-r from-neutral-100 via-neutral-100 to-white px-4 py-2 text-black shadow-[0px_2px_0px_0px_var(--color-neutral-50)_inset,0px_0.5px_1px_0px_var(--color-neutral-400)] transition-all duration-100 active:scale-98 dark:from-black dark:via-black dark:to-neutral-900 dark:text-white dark:shadow-[0px_1px_0px_0px_var(--color-neutral-950)_inset,0px_1px_0px_0px_var(--color-neutral-800)]">
            {HOME_LABEL.HERO_BUTTON_2}
          </button>
        </NoiseBackground>
      </div>
    </div>
  )
}
