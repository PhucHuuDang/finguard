// middleware.ts — Locale detection + NEXT_LOCALE cookie persistence

import createMiddleware from "next-intl/middleware"

import { routing } from "@/i18n/routing"

export default createMiddleware(routing)

export const config = {
  matcher: [
    // Match all pathnames except static files, APIs, and Next.js internals
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
}
