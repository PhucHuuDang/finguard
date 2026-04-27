"use client"

import Image from "next/image"
import { useTranslations } from "next-intl"

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"

export default function NotFound() {
  const t = useTranslations("error")

  return (
    <div className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden p-6 text-center">
      {/* Increased rows and cols to cover full heights and wide screens securely */}
      <BackgroundRippleEffect rows={20} cols={40} />

      {/* Adding pointer-events-none so clicks on empty space pass through to the ripple background */}
      <div className="pointer-events-none relative z-10 flex flex-col items-center justify-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/not-found.svg"
            alt="404 Not Found"
            width={230}
            height={150}
            priority
          />
        </div>

        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {t("not_found_title")}
        </h2>
        <p className="pointer-events-auto mx-auto mb-8 max-w-md text-sm text-muted-foreground md:text-base">
          <Link href="/" className="font-medium text-primary hover:underline">
            {t("not_found_go_back")}
          </Link>{" "}
          {t("not_found_description")}
        </p>

        <Button
          asChild
          size="default"
          className="pointer-events-auto min-w-[150px]"
        >
          <Link href="/">{t("not_found_go_home")}</Link>
        </Button>
      </div>
    </div>
  )
}
