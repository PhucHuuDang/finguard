import { Figtree, Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

import { Toaster } from "sonner"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const geistHeading = Geist({ subsets: ["latin"], variable: "--font-heading" })

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
