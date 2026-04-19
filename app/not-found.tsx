"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  const router = useRouter()

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
          This is not the page you are looking for
        </h2>
        <p className="pointer-events-auto mx-auto mb-8 max-w-md text-sm text-muted-foreground md:text-base">
          <button
            type="button"
            onClick={() => router.back()}
            className="font-medium text-primary hover:underline"
          >
            Go back
          </button>{" "}
          or head to the homepage to find a new path.
        </p>

        <Button
          asChild
          size="default"
          className="pointer-events-auto min-w-[150px]"
        >
          <Link href="/">Go to homepage</Link>
        </Button>
      </div>
    </div>
  )
}
