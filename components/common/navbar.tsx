"use client"

import { ChevronDown, Menu, ShoppingCart } from "lucide-react"
import { useTranslations } from "next-intl"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/common/logo"
import { Link } from "@/i18n/navigation"

export function Navbar() {
  const t = useTranslations("nav")

  const navLinks = [
    { label: t("home"), href: "/" as const, active: true },
    { label: t("pages"), href: "#" as const, hasDropdown: true },
    { label: t("about"), href: "#" as const },
    { label: t("features"), href: "#" as const },
    { label: t("workspace"), href: "#" as const },
    { label: t("pricing"), href: "#" as const },
  ]

  return (
    <nav className="navbar-fixed fixed top-6 right-0 left-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-center px-4">
      <div className="flex w-full items-center justify-between gap-4 rounded-2xl bg-neutral-900/30 px-8 py-2 backdrop-blur-xl">
        {/* Logo */}
        <Logo width={50} height={50} className="shrink-0 p-1 pt-1.5" />

        {/* Desktop Links */}
        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                link.active
                  ? "text-orange-400"
                  : "text-neutral-200 hover:text-orange-400"
              }`}
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="size-4" />}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-5">
          <button className="relative text-neutral-400 transition-colors hover:text-neutral-200">
            <ShoppingCart className="size-6" />
            <Badge className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-orange-500 p-0 text-[11px] text-white">
              0
            </Badge>
          </button>
          <Button
            variant="outline"
            className="h-10 rounded-full border-neutral-700 bg-white px-7 text-sm font-medium hover:bg-neutral-200"
          >
            {t("login")}
          </Button>
          <button className="text-neutral-400 md:hidden">
            <Menu className="size-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}
