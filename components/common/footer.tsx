"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronRight } from "lucide-react"

import { Input } from "@/components/ui/input"
import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from "@/components/animate-ui/primitives/buttons/flip"
import { Reveal } from "@/components/animations/reveal"
import { Logo } from "@/components/common/logo"

const quickLinks = [
  { name: "Home", href: "/", highlighted: true },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Career", href: "/career" },
  { name: "Contact Us", href: "/contact" },
]

const resources = [{ name: "Blog and News", href: "/blog" }]

const socialLinks = [
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
]

const legalLinks = [
  { name: "Style Guide", href: "/style-guide" },
  { name: "License", href: "/license" },
  { name: "Changelog", href: "/changelog" },
  { name: "Pass Protected", href: "/protected" },
  { name: "404", href: "/404" },
]

export function Footer() {
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

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Newsletter Section */}
          <Reveal
            delay={0.1}
            direction="up"
            className="flex flex-col gap-6 lg:col-span-5"
          >
            <div className="flex items-center gap-4">
              <Logo width={36} height={36} />
              <span className="font-heading text-xl font-semibold tracking-tight sm:text-2xl">
                Conquering Your Trading Goals
              </span>
            </div>

            <p className="max-w-md text-sm leading-relaxed text-gray-300 md:text-base">
              Customize your business journey effortlessly with Finguard
              dashboard, backed by a suite of powerful tools at your fingertips.
            </p>

            <div className="mt-4">
              <h3 className="mb-6 font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Subscribe To Our Newsletter
              </h3>
              <div className="relative max-w-md">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="flex items-center"
                >
                  <Input
                    type="email"
                    placeholder="Enter email address"
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
            {/* Quick Links */}
            <Reveal delay={0.2} direction="up" className="flex flex-col gap-6">
              <h4 className="text-lg font-medium text-white">Quick Links</h4>
              <ul className="flex flex-col gap-4 text-sm">
                {quickLinks.map((link) => (
                  <li key={link.name} className="flex">
                    <FlipButton asChild from="bottom" tapScale={0.96}>
                      <Link
                        href={link.href}
                        className={`transition-colors hover:text-white ${
                          link.highlighted ? "text-orange-500" : "text-gray-400"
                        }`}
                      >
                        <FlipButtonFront className="flex items-center gap-1">
                          {link.name}{" "}
                          <ArrowUpRight className="h-3 w-3 opacity-0" />
                        </FlipButtonFront>
                        <FlipButtonBack className="flex items-center gap-1">
                          {link.name} <ArrowUpRight className="h-3 w-3" />
                        </FlipButtonBack>
                      </Link>
                    </FlipButton>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Resources & Social */}
            <Reveal delay={0.3} direction="up" className="flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <h4 className="text-lg font-medium text-white">Resources</h4>
                <ul className="flex flex-col gap-4 text-sm">
                  {resources.map((link) => (
                    <li key={link.name} className="flex">
                      <FlipButton asChild from="bottom" tapScale={0.96}>
                        <Link
                          href={link.href}
                          className="text-gray-400 transition-colors hover:text-white"
                        >
                          <FlipButtonFront className="flex items-center gap-1">
                            {link.name}{" "}
                            <ArrowUpRight className="h-3 w-3 opacity-0" />
                          </FlipButtonFront>
                          <FlipButtonBack className="flex items-center gap-1">
                            {link.name} <ArrowUpRight className="h-3 w-3" />
                          </FlipButtonBack>
                        </Link>
                      </FlipButton>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-6">
                <h4 className="text-lg font-medium text-white">Social</h4>
                <ul className="flex flex-col gap-4 text-sm">
                  {socialLinks.map((link) => (
                    <li key={link.name} className="flex">
                      <FlipButton asChild from="bottom" tapScale={0.96}>
                        <Link
                          href={link.href}
                          className="text-gray-400 transition-colors hover:text-white"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FlipButtonFront className="flex items-center gap-1">
                            {link.name}{" "}
                            <ArrowUpRight className="h-3 w-3 opacity-0" />
                          </FlipButtonFront>
                          <FlipButtonBack className="flex items-center gap-1">
                            {link.name} <ArrowUpRight className="h-3 w-3" />
                          </FlipButtonBack>
                        </Link>
                      </FlipButton>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Legal Information */}
            <Reveal delay={0.4} direction="up" className="flex flex-col gap-6">
              <h4 className="text-lg font-medium text-white">
                Legal Information
              </h4>
              <ul className="flex flex-col gap-4 text-sm">
                {legalLinks.map((link) => (
                  <li key={link.name} className="flex">
                    <FlipButton asChild from="bottom" tapScale={0.96}>
                      <Link
                        href={link.href}
                        className="text-gray-400 transition-colors hover:text-white"
                      >
                        <FlipButtonFront className="flex items-center gap-1">
                          {link.name}{" "}
                          <ArrowUpRight className="h-3 w-3 opacity-0" />
                        </FlipButtonFront>
                        <FlipButtonBack className="flex items-center gap-1">
                          {link.name} <ArrowUpRight className="h-3 w-3" />
                        </FlipButtonBack>
                      </Link>
                    </FlipButton>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.5} direction="up">
          {/* Divider */}
          <hr className="my-8 border-gray-800" />

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Finguard. Designed & Developed by{" "}
              <span className="font-medium text-white">Finguard Team</span>
            </p>
            <p>
              Powered by <span className="font-medium text-white">Next.js</span>
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  )
}
