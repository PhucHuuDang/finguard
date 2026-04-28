"use client"

import { useTranslations } from "next-intl"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/animations/reveal"
import { Link } from "@/i18n/navigation"

export const Market = () => {
  const t = useTranslations("market")

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Background Aurora */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 w-full max-w-[1600px] min-w-[1000px] -translate-x-1/2 -translate-y-1/2 mask-[radial-gradient(ellipse_at_center,black_50%,transparent_80%)] mix-blend-screen">
        <picture>
          <source
            media="(min-width: 2560px)"
            type="image/webp"
            srcSet="https://static.tradingview.com/static/bundles/aurora-large.b76b06787b54bf7e8d56.webp"
          />
          <img
            src="https://static.tradingview.com/static/bundles/aurora.9fb1100135d77f0193c8.webp"
            role="presentation"
            alt=""
            className="h-auto w-full object-cover"
          />
        </picture>
      </div>

      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-8 px-6 text-center lg:px-8">
        {/* Headings */}
        <div className="flex max-w-3xl flex-col items-center gap-4">
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              {t("heading")}
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-base text-neutral-400 md:text-lg">
              {t("subheading")}
            </p>
          </Reveal>
        </div>

        {/* Video Mockup */}
        <Reveal
          direction="up"
          delay={0.3}
          className="mt-8 flex w-full justify-center"
        >
          <div className="relative w-full max-w-5xl rounded-2xl bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 p-[2px] shadow-2xl shadow-purple-500/20">
            <div className="h-full w-full overflow-hidden rounded-[calc(var(--radius-2xl)-2px)] bg-black">
              <video
                className="w-full object-cover"
                muted
                autoPlay
                loop
                playsInline
                disableRemotePlayback
              >
                <source
                  src="https://static.tradingview.com/static/bundles/platform.hvc1.83394b2f4a3a707c652f.mp4"
                  type="video/mp4;codecs=hvc1.1.0.L150.b0"
                />
                <source
                  src="https://static.tradingview.com/static/bundles/platform.ad5fd4590dfbd9ecb2e5.webm"
                  type="video/webm"
                />
                <source
                  src="https://static.tradingview.com/static/bundles/platform.avc1.05b4ee8889ea9ea3ea1d.mp4"
                  type="video/mp4;codecs=avc1"
                />
              </video>
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal direction="up" delay={0.4} className="mt-8">
          <Button
            asChild
            size="lg"
            className="h-14 rounded-full bg-white px-8 text-base font-semibold text-black hover:bg-neutral-200"
          >
            <Link href="/features">{t("cta_button")}</Link>
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
