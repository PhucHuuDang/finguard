// i18n/navigation.ts — Locale-aware navigation primitives

import { createNavigation } from "next-intl/navigation"

import { routing } from "@/i18n/routing"

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing)
