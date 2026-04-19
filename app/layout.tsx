import { Figtree, Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

import { Metadata } from "next"
import { Toaster } from "sonner"

import { cn } from "@/lib/utils"
import { ScrollToTop } from "@/components/common/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"
import { META } from "@/constant/meta"

const geistHeading = Geist({ subsets: ["latin"], variable: "--font-heading" })

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = META

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        figtree.variable,
        geistHeading.variable
      )}
    >
      <body>
        <Toaster richColors position="top-right" />
        <ThemeProvider>
          {children}
          <ScrollToTop threshold={400} />
        </ThemeProvider>
      </body>
    </html>
  )
}
