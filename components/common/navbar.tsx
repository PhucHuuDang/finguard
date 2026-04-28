"use client"

import { CheckIcon, ChevronDown, Menu, ShoppingCart } from "lucide-react"
import { useTranslations } from "next-intl"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  HoverCard,
  HoverCardArrow,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from "@/components/animate-ui/primitives/buttons/flip"
import { Logo } from "@/components/common/logo"
import {
  TreeExpander,
  TreeLabel,
  TreeNode,
  TreeNodeContent,
  TreeNodeTrigger,
  TreeProvider,
  TreeView,
} from "@/components/kibo-ui/tree"
import { Link } from "@/i18n/navigation"

// --- Types & Data ---

type DropdownItemInfo = { label: string; href: string }
type DropdownColumnInfo = {
  title: string
  items: DropdownItemInfo[]
}

const DROPDOWN_COLUMNS: DropdownColumnInfo[] = [
  {
    title: "Main pages",
    items: [
      { label: "Home V1", href: "/" },
      { label: "Home V2", href: "/" },
      { label: "Home V3", href: "/" },
      { label: "About V1", href: "/about" },
      { label: "About V2", href: "/about" },
      { label: "About V3", href: "/about" },
      { label: "Features V1", href: "/features" },
      { label: "Features V2", href: "/features" },
      { label: "Features V3", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Inner pages",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Blog single", href: "/blog" },
      { label: "Pricing single", href: "/pricing" },
      { label: "Integration", href: "/features" },
      { label: "Integration single", href: "/features" },
      { label: "FAQ", href: "/#faq" },
      { label: "Career", href: "/career" },
      { label: "Login", href: "/login" },
      { label: "Register", href: "/register" },
      { label: "Coming soon", href: "/" },
    ],
  },
  {
    title: "Utility pages",
    items: [
      { label: "Style guide", href: "/style-guide" },
      { label: "License", href: "/license" },
      { label: "Changelog", href: "/changelog" },
      { label: "404", href: "/404" },
    ],
  },
]

// --- Sub-components ---

function NavFlipItem({ item }: { item: DropdownItemInfo }) {
  return (
    <FlipButton
      asChild
      from="top"
      tapScale={1}
      style={{
        display: "inline-grid",
        placeItems: "start",
        perspective: "1000px",
      }}
    >
      <Link
        href={item.href as string}
        className="group rounded-md py-[7px] text-[15px] font-medium text-neutral-100/90 transition-colors duration-150 hover:text-white"
      >
        <FlipButtonFront
          style={{
            gridArea: "1 / 1",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {item.label}
        </FlipButtonFront>
        <FlipButtonBack
          style={{
            gridArea: "1 / 1",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "8px",
          }}
          className="group-hover:text-orange-400/90"
        >
          {item.label}
          <CheckIcon className="size-3.5" />
        </FlipButtonBack>
      </Link>
    </FlipButton>
  )
}

function NavDropdownMenu({ label }: { label: string }) {
  return (
    <HoverCard openDelay={100} closeDelay={150}>
      <HoverCardTrigger asChild>
        <button className="group flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-neutral-200 transition-colors outline-none hover:text-orange-400 data-[state=open]:text-orange-400">
          {label}
          <ChevronDown className="size-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </button>
      </HoverCardTrigger>

      <HoverCardContent
        align="center"
        sideOffset={16}
        className="w-auto min-w-[600px] overflow-hidden rounded-2xl border-amber-800/25 bg-[#1a0d06] p-0 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] ring-0"
      >
        <HoverCardArrow width={14} height={7} className="fill-[#1a0d06]" />

        <div className="flex gap-0 px-10 py-8">
          {DROPDOWN_COLUMNS.map((column, colIdx) => (
            <div key={column.title} className="flex">
              <div className="flex min-w-[180px] flex-col">
                <span className="mb-4 text-[15px] font-semibold tracking-wide text-amber-200/50">
                  {column.title}
                </span>

                <div className="flex flex-col gap-0">
                  {column.items.map((item) => (
                    <NavFlipItem key={item.label} item={item} />
                  ))}
                </div>
              </div>

              {/* Vertical divider (not after last column) */}
              {colIdx < DROPDOWN_COLUMNS.length - 1 && (
                <div className="mx-8 w-px self-stretch bg-white/12" />
              )}
            </div>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}

function NavSimpleLink({
  label,
  href,
  active,
}: {
  label: string
  href: string
  active?: boolean
}) {
  return (
    <Link
      href={href as string}
      className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
        active ? "text-orange-400" : "text-neutral-200 hover:text-orange-400"
      }`}
    >
      {label}
    </Link>
  )
}

function RightActions({
  loginText,
  navLinks,
}: {
  loginText: string
  navLinks: {
    label: string
    href: string
    active?: boolean
    hasDropdown?: boolean
  }[]
}) {
  return (
    <div className="flex items-center gap-3 md:gap-5">
      <button className="relative text-neutral-400 transition-colors hover:text-neutral-200">
        <ShoppingCart className="size-6" />
        <Badge className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-orange-500 p-0 text-[11px] text-white">
          0
        </Badge>
      </button>
      <Button
        variant="outline"
        className="hidden h-10 rounded-full border-neutral-700 bg-white px-7 text-sm font-medium hover:bg-neutral-200 sm:inline-flex"
      >
        {loginText}
      </Button>

      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <button className="cursor-pointer text-neutral-400 transition outline-none hover:text-neutral-200 lg:hidden">
            <Menu className="size-6" />
          </button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="w-[350px] overflow-y-auto border-l-neutral-800 bg-[#1a0d06] p-6 text-neutral-200 sm:min-w-[450px]"
        >
          <SheetHeader className="mb-8">
            <SheetTitle className="text-left text-neutral-100">
              <Logo />
            </SheetTitle>
          </SheetHeader>
          <div className="flex w-full flex-col gap-6 pb-10">
            <TreeProvider
              defaultExpandedIds={["Pages", "Main pages"]}
              showIcons={false}
              indent={20}
            >
              <TreeView>
                {navLinks.map((link) => {
                  if (link.hasDropdown) {
                    return (
                      <TreeNode key={link.label} nodeId={link.label}>
                        <TreeNodeTrigger className="px-0 py-2 hover:bg-transparent">
                          <TreeExpander hasChildren />
                          <TreeLabel
                            className={`text-lg font-medium transition-colors ${
                              link.active
                                ? "text-orange-400"
                                : "text-neutral-200"
                            }`}
                          >
                            {link.label}
                          </TreeLabel>
                        </TreeNodeTrigger>
                        <TreeNodeContent hasChildren>
                          {DROPDOWN_COLUMNS.map((col, colIdx) => (
                            <TreeNode
                              key={col.title}
                              nodeId={col.title}
                              level={1}
                              isLast={colIdx === DROPDOWN_COLUMNS.length - 1}
                            >
                              <TreeNodeTrigger className="px-0 py-2 hover:bg-transparent">
                                <TreeExpander hasChildren />
                                <TreeLabel className="text-[11px] font-semibold tracking-wider text-amber-200/50 uppercase">
                                  {col.title}
                                </TreeLabel>
                              </TreeNodeTrigger>
                              <TreeNodeContent hasChildren>
                                {col.items.map((item, itemIdx) => (
                                  <TreeNode
                                    key={item.label}
                                    nodeId={item.label}
                                    level={2}
                                    isLast={itemIdx === col.items.length - 1}
                                  >
                                    <TreeNodeTrigger className="px-0 py-1 hover:bg-transparent">
                                      {/* Re-use Flip animation item but inside the Tree Leaf */}
                                      <div className="-ml-3 flex flex-1 items-center">
                                        <TreeExpander hasChildren={false} />
                                        <NavFlipItem item={item} />
                                      </div>
                                    </TreeNodeTrigger>
                                  </TreeNode>
                                ))}
                              </TreeNodeContent>
                            </TreeNode>
                          ))}
                        </TreeNodeContent>
                      </TreeNode>
                    )
                  }

                  return (
                    <TreeNode key={link.label} nodeId={link.label}>
                      <TreeNodeTrigger className="px-0 py-2 hover:bg-transparent">
                        <TreeExpander hasChildren={false} />
                        <Link
                          href={link.href}
                          className="flex flex-1 items-center"
                        >
                          <TreeLabel
                            className={`text-lg font-medium transition-colors ${
                              link.active
                                ? "text-orange-400"
                                : "text-neutral-200 hover:text-orange-400"
                            }`}
                          >
                            {link.label}
                          </TreeLabel>
                        </Link>
                      </TreeNodeTrigger>
                    </TreeNode>
                  )
                })}
              </TreeView>
            </TreeProvider>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

// --- Main Navbar ---

export function Navbar() {
  const t = useTranslations("nav")

  const navLinks = [
    { label: t("home"), href: "/", active: true },
    { label: t("pages"), href: "#", hasDropdown: true },
    { label: t("about"), href: "/about" },
    { label: t("features"), href: "/features" },
    { label: t("workspace"), href: "#" },
    { label: t("pricing"), href: "/pricing" },
  ]

  return (
    <nav className="navbar-fixed fixed top-6 right-0 left-0 z-50 mx-auto flex w-full max-w-7xl items-center justify-center px-4">
      <div className="flex w-full items-center justify-between gap-4 rounded-2xl bg-neutral-900/30 px-4 py-2 backdrop-blur-xl md:px-8">
        {/* Logo */}
        <Logo width={50} height={50} className="shrink-0 p-1 pt-1.5" />

        {/* Desktop Links */}
        <div className="hidden items-center gap-2 lg:flex">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <NavDropdownMenu key={link.label} label={link.label} />
            ) : (
              <NavSimpleLink
                key={link.label}
                label={link.label}
                href={link.href}
                active={link.active}
              />
            )
          )}
        </div>

        {/* Right Actions & Mobile Menu */}
        <RightActions loginText={t("login")} navLinks={navLinks} />
      </div>
    </nav>
  )
}
