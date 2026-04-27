// i18n/request.ts — next-intl server request configuration

import { getRequestConfig } from "next-intl/server"

import { isValidLocale, type Locale } from "@/i18n/locales"
import { routing } from "@/i18n/routing"

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale: Locale = isValidLocale(requested)
    ? requested
    : (routing.defaultLocale as Locale)

  const messages = (await import(`@/locales/${locale}/common.json`))
    .default as Record<string, unknown>

  return {
    locale,
    messages,
    onError(error) {
      if (error.code === "MISSING_MESSAGE") {
        console.warn(`[i18n] Missing key: ${error.message}`)
        return
      }
      console.error("[i18n]", error)
    },
    getMessageFallback({ key, namespace }) {
      const fullKey = namespace ? `${namespace}.${key}` : key
      return `⚠️ ${fullKey}`
    },
  }
})
