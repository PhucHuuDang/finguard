import { Figtree, Geist, Geist_Mono } from "next/font/google"

import "./globals.css"

import { Metadata } from "next"

import { cn } from "@/lib/utils"
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
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        figtree.variable,
        geistHeading.variable
      )}
    >
      <body>{children}</body>
    </html>
  )
}
