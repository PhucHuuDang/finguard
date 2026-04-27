// app/not-found.tsx — Root-level catch-all for unmatched routes
// Renders as a server component so we can provide NextIntlClientProvider for Footer

import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"

import { Footer } from "@/components/common/footer"

import { NotFoundContent } from "./not-found-content"

export default async function NotFound() {
  const locale = await getLocale()
  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <div className="flex min-h-screen flex-col">
        <NotFoundContent />
        <Footer />
      </div>
    </NextIntlClientProvider>
  )
}
