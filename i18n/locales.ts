// i18n/locales.ts — Core locale constants (single source of truth)

export type Locale =
  | "en-US"
  | "en-GB"
  | "sv-SE"
  | "de-DE"
  | "it-IT"
  | "zh-CN"
  | "id-ID"
  | "ja-JP"
  | "cs-CZ"
  | "ru-RU"
  | "ko-KR"
  | "tr-TR"

export interface Language {
  locale: Locale
  label: string // Native name — "Deutsch", NOT "German"
  flag: string // CDN flag SVG URL
}

export const DEFAULT_LOCALE: Locale = "en-US"

export const LANGUAGES: Language[] = [
  {
    locale: "sv-SE",
    label: "Svenska",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685502641d66419fa601da7a_Sweden.svg",
  },
  {
    locale: "en-GB",
    label: "English UK",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503c33e40b07ab26f0c8a_UK.svg",
  },
  {
    locale: "de-DE",
    label: "Deutsch",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b7e4db941df64fe2c1_German.svg",
  },
  {
    locale: "it-IT",
    label: "Italiano",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b64823cbb5a36243ba_Italian.svg",
  },
  {
    locale: "en-US",
    label: "English",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b68238eaa3384b73bf_America.svg",
  },
  {
    locale: "zh-CN",
    label: "中文",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b697aba996dbddd2e7_China.svg",
  },
  {
    locale: "id-ID",
    label: "Bahasa",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b8ac3a3262e7c9d4fe_Poland.svg",
  },
  {
    locale: "ja-JP",
    label: "日本語",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b7c0c21398a0b150d2_Japan.svg",
  },
  {
    locale: "cs-CZ",
    label: "Čeština",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b68238eaa3384b73d7_Czech.svg",
  },
  {
    locale: "ru-RU",
    label: "Русский",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b55e9cc865a796e3e6_Russia.svg",
  },
  {
    locale: "ko-KR",
    label: "한국어",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503b677868eee7405b818_Korea.svg",
  },
  {
    locale: "tr-TR",
    label: "Türkçe",
    flag: "https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685503f7964cdbbb1b37e558_Turkey.svg",
  },
]

/** Derived array of all locale codes — never hardcode this separately */
export const LOCALES: Locale[] = LANGUAGES.map((l) => l.locale)

/** Get a Language object by locale code. Throws if not found. */
export function getLanguageByLocale(locale: Locale): Language {
  const found = LANGUAGES.find((l) => l.locale === locale)
  if (!found) {
    throw new Error(`[i18n] Unknown locale: ${locale}`)
  }
  return found
}

/** Type guard for middleware — checks if an unknown value is a valid Locale */
export function isValidLocale(value: unknown): value is Locale {
  return typeof value === "string" && LOCALES.includes(value as Locale)
}
