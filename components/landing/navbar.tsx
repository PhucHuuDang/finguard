import Link from "next/link"
import { ChevronDown, Menu, ShoppingCart } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/common/logo"

const navLinks = [
  { label: "Home", href: "/", active: true },
  { label: "Pages", href: "#", hasDropdown: true },
  { label: "About", href: "#" },
  { label: "Features", href: "#" },
  { label: "Pricing", href: "#" },
]

export function Navbar() {
  return (
    <nav className="fixed top-6 right-0 left-0 z-50 mx-auto flex w-full max-w-2xl items-center justify-center px-4">
      <div className="glass-nav flex w-full items-center justify-between gap-2 rounded-full px-6 py-3">
        {/* Logo */}
        <Logo width={32} height={32} className="shrink-0" />

        {/* Desktop Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                link.active
                  ? "text-orange-400"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {link.label}
              {link.hasDropdown && <ChevronDown className="size-3.5" />}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button className="relative text-neutral-400 transition-colors hover:text-neutral-200">
            <ShoppingCart className="size-5" />
            <Badge className="absolute -top-2 -right-2 flex size-4 items-center justify-center rounded-full bg-orange-500 p-0 text-[10px] text-white">
              0
            </Badge>
          </button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-neutral-700 bg-white px-5 text-sm font-medium text-black hover:bg-neutral-200"
          >
            Login
          </Button>
          <button className="text-neutral-400 md:hidden">
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}
