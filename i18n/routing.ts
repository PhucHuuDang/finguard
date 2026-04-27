// i18n/routing.ts — next-intl routing configuration

import { defineRouting } from "next-intl/routing"

import { DEFAULT_LOCALE, LOCALES } from "@/i18n/locales"

export const routing = defineRouting({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: "as-needed",
  localeCookie: {
    name: "NEXT_LOCALE",
    maxAge: 60 * 60 * 24 * 365, // 1 year
  },
  localeDetection: true,
})
