"use client"

import Image from "next/image"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import { useTranslations } from "next-intl"

import { Input } from "@/components/ui/input"
import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from "@/components/animate-ui/primitives/buttons/flip"
import { Reveal } from "@/components/animations/reveal"
import { Logo } from "@/components/common/logo"
import { Link } from "@/i18n/navigation"

// --- Constants ---

type LinkItem = {
  nameKey:
    | "link_home"
    | "link_about"
    | "link_features"
    | "link_pricing"
    | "link_career"
    | "link_contact"
    | "link_blog"
    | "link_facebook"
    | "link_instagram"
    | "link_linkedin"
    | "link_style_guide"
    | "link_license"
    | "link_changelog"
    | "link_protected"
    | "link_404"
  href: string
  highlighted?: boolean
}

const quickLinks: LinkItem[] = [
  { nameKey: "link_home", href: "/", highlighted: true },
  { nameKey: "link_about", href: "/about" },
  { nameKey: "link_features", href: "/features" },
  { nameKey: "link_pricing", href: "/pricing" },
  { nameKey: "link_career", href: "/career" },
  { nameKey: "link_contact", href: "/contact" },
]

const resources: LinkItem[] = [{ nameKey: "link_blog", href: "/blog" }]

const socialLinks: LinkItem[] = [
  { nameKey: "link_facebook", href: "https://facebook.com" },
  { nameKey: "link_instagram", href: "https://instagram.com" },
  { nameKey: "link_linkedin", href: "https://linkedin.com" },
]

const legalLinks: LinkItem[] = [
  { nameKey: "link_style_guide", href: "/style-guide" },
  { nameKey: "link_license", href: "/license" },
  { nameKey: "link_changelog", href: "/changelog" },
  { nameKey: "link_protected", href: "/protected" },
  { nameKey: "link_404", href: "/404" },
]

// --- Sub-components ---

function FooterLink({
  link,
  external,
  label,
}: {
  link: LinkItem
  external?: boolean
  label: string
}) {
  return (
    <li className="flex">
      <FlipButton asChild from="bottom" tapScale={0.96}>
        <Link
          href={link.href}
          className={`transition-colors hover:text-white ${
            link.highlighted ? "text-orange-500" : "text-gray-400"
          }`}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
        >
          <FlipButtonFront className="flex items-center gap-1">
            {label} <ArrowUpRight className="h-3 w-3 opacity-0" />
          </FlipButtonFront>
          <FlipButtonBack className="flex items-center gap-1">
            {label} <ArrowUpRight className="h-3 w-3" />
          </FlipButtonBack>
        </Link>
      </FlipButton>
    </li>
  )
}

// --- Main Component ---

export function Footer() {
  const t = useTranslations("footer")

  return (
    <footer className="relative overflow-hidden bg-black pt-20 pb-8 text-white">
      {/* Background Image Overlay */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/footer.avif"
          alt="Footer Background Aurora"
          className="bg-cover bg-top object-cover object-top"
          width={1920}
          height={1080}
          quality={100}
        />
        {/* Gradients to fade into the black background */}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-black" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Section */}
          <Reveal
            delay={0.1}
            direction="up"
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <div className="flex items-center gap-4">
              <Logo width={36} height={36} />
              <span className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
                {t("brand_tagline")}
              </span>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-gray-300 md:text-base">
              {t("brand_description")}
            </p>

            {/* Newsletter Form */}
            <div className="mt-4">
              <h3 className="mb-6 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                {t("newsletter_title")}
              </h3>
              <div className="relative max-w-md">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex items-center"
                >
                  <Input
                    type="email"
                    placeholder={t("newsletter_placeholder")}
                    className="h-14 w-full rounded-full border border-gray-700 bg-black/40 pr-14 pl-6 text-gray-300 backdrop-blur-sm transition-colors placeholder:text-gray-500 hover:border-gray-500 focus-visible:ring-1 focus-visible:ring-orange-500"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                    aria-label="Subscribe"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </form>
              </div>
            </div>
          </Reveal>

          {/* Navigation Links Section */}
          <div className="grid grid-cols-2 gap-8 pt-2 sm:grid-cols-3 lg:col-span-7 lg:pl-12">
            <Reveal delay={0.2} direction="up">
              <div className="flex flex-col gap-6">
                <h4 className="text-lg font-medium text-white">
                  {t("quick_links")}
                </h4>
                <ul className="flex flex-col gap-4 text-sm">
                  {quickLinks.map((link) => (
                    <FooterLink
                      key={link.nameKey}
                      link={link}
                      label={t(link.nameKey)}
                    />
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="up" className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h4 className="text-lg font-medium text-white">
                  {t("resources")}
                </h4>
                <ul className="flex flex-col gap-4 text-sm">
                  {resources.map((link) => (
                    <FooterLink
                      key={link.nameKey}
                      link={link}
                      label={t(link.nameKey)}
                    />
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-6">
                <h4 className="text-lg font-medium text-white">
                  {t("social")}
                </h4>
                <ul className="flex flex-col gap-4 text-sm">
                  {socialLinks.map((link) => (
                    <FooterLink
                      key={link.nameKey}
                      link={link}
                      external
                      label={t(link.nameKey)}
                    />
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.4} direction="up">
              <div className="flex flex-col gap-6">
                <h4 className="text-lg font-medium text-white">{t("legal")}</h4>
                <ul className="flex flex-col gap-4 text-sm">
                  {legalLinks.map((link) => (
                    <FooterLink
                      key={link.nameKey}
                      link={link}
                      label={t(link.nameKey)}
                    />
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.5} direction="up">
          {/* Divider */}
          <hr className="my-8 border-gray-800" />

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 sm:flex-row">
            <p>
              {t("copyright", { year: new Date().getFullYear().toString() })}{" "}
              <span className="font-medium text-white">
                {t("copyright_team")}
              </span>
            </p>
            <p>
              {t("powered_by")}{" "}
              <span className="font-medium text-white">
                {t("powered_by_tech")}
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
