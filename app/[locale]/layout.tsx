import { notFound } from "next/navigation"
import { hasLocale, NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { Toaster } from "sonner"

import { Footer } from "@/components/common/footer"
import { ScrollToTop } from "@/components/common/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import { routing } from "@/i18n/routing"

export function generateStaticParams(): Array<{ locale: string }> {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Toaster richColors position="top-right" />
      <ThemeProvider>
        {children}
        <ScrollToTop threshold={400} />
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
