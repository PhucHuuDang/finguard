import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export interface LogoProps {
  width?: number
  height?: number
  className?: string
  href?: string
}

export function Logo({
  width = 32,
  height = 32,
  className,
  href = "/",
}: LogoProps) {
  return (
    <Link
      href={href}
      className={cn("inline-flex items-center gap-2", className)}
    >
      <Image
        src="/finguard.jpg"
        alt="Finguard Logo"
        width={width}
        height={height}
        className="rounded object-contain mix-blend-screen brightness-125 contrast-[1.5] grayscale invert"
        priority
      />
    </Link>
  )
}

export default Logo
