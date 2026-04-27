// types/i18n.d.ts — Type-safe translation keys for next-intl

import type enUS from "@/locales/en-US/common.json"

type Messages = typeof enUS

declare module "next-intl" {
  interface AppConfig {
    Messages: Messages
  }
}
