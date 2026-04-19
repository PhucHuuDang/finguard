import { Metadata } from "next"

import { BRAND } from "./label"

export const META: Metadata = {
  title: BRAND.FINGUARD,
  description: BRAND.DESCRIPTION,
  keywords: "FINGUARD, crypto, passive income, decentralized finance",
  icons: {
    icon: [
      {
        url: "/test.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        url: "/images/metadata/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/metadata/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      { url: "/images/metadata/favicon.ico" },
    ],
    apple: [
      {
        url: "/images/metadata/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/images/metadata/site.webmanifest",
  openGraph: {
    title: BRAND.FINGUARD,
    description: BRAND.DESCRIPTION,
    images: [
      {
        url: "/homepage.png",
        width: 1200,
        height: 630,
        alt: BRAND.FINGUARD,
      },
    ],
  },
  twitter: {
    title: BRAND.FINGUARD,
    description: BRAND.DESCRIPTION,
    images: [
      {
        url: "/homepage.png",
        width: 1200,
        height: 630,
        alt: BRAND.FINGUARD,
      },
    ],
  },
}
