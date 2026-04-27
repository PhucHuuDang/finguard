"use client"

import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"

import { TitleSectionCommon } from "@/components/common/reuse-component"
import { SelectCountry } from "@/components/common/select-country"
import { LANGUAGES, type Language } from "@/i18n/locales"
import { usePathname, useRouter } from "@/i18n/navigation"

import { Reveal } from "../../components/animations/reveal"

export function SupportLanguages() {
  const t = useTranslations("languages")
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function handleLocaleChange(newLocale: string) {
    router.replace(pathname, { locale: newLocale, scroll: false })
  }

  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-4 text-center md:gap-8">
          <TitleSectionCommon title={t("badge")} className="py-2" />

          <Reveal delay={0.1}>
            <h2 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-6xl">
              {t("heading")}{" "}
              <span className="bg-linear-to-r from-neutral-300 to-neutral-600 bg-clip-text text-transparent">
                {t("heading_highlight")}
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <SelectCountry
              items={LANGUAGES}
              value={locale}
              onChange={handleLocaleChange}
              placeholder={t("select_placeholder")}
              className="mx-auto mt-4"
            />
          </Reveal>
        </div>

        {/* Languages Grid/Flex */}
        <div className="mx-auto mt-16 max-w-[900px]">
          <Reveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {LANGUAGES.map((lang: Language) => {
                const isActive = lang.locale === locale

                return (
                  <button
                    key={lang.locale}
                    onClick={() => handleLocaleChange(lang.locale)}
                    className={`flex cursor-pointer items-center gap-3 rounded-full border p-1.5 pr-6 transition-all ${
                      isActive
                        ? "border-neutral-400 bg-neutral-800"
                        : "border-neutral-700 bg-neutral-900/50 hover:border-neutral-500 hover:bg-neutral-800/80"
                    }`}
                  >
                    <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
                      <Image
                        src={lang.flag}
                        alt={`${lang.label} flag`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span
                      className={`text-sm font-semibold md:text-base ${
                        isActive ? "text-white" : "text-neutral-300"
                      }`}
                    >
                      {lang.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
