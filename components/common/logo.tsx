import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export interface LogoProps {
  width?: number
  height?: number
  className?: string
  href?: string
  style?: React.CSSProperties

  isColor?: boolean
}

export function Logo({
  width = 32,
  height = 32,
  className,
  isColor = false,
  href = "/",
  style,
}: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        className
      )}
      style={{ width, height, ...style }}
    >
      <Image
        // src="/finguard.jpg"
        src="/test.png"
        alt="Finguard Logo"
        width={width}
        height={height}
        className={cn(
          "min-h-full min-w-full scale-[1.7] rounded object-cover mix-blend-screen brightness-125 contrast-[1.5] grayscale invert",
          isColor && "mix-blend-normal grayscale-0 invert-0"
        )}
        priority
      />
    </Link>
  )
}

export default Logo
