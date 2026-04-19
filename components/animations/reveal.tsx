"use client"

import { ReactNode } from "react"
import { HTMLMotionProps, motion } from "motion/react"

import { cn } from "@/lib/utils"

export interface RevealProps extends Omit<HTMLMotionProps<"div">, "viewport"> {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  delay?: number
  duration?: number
  useViewport?: boolean
  className?: string
}

interface Direction {
  x: number
  y: number
}

const EASING = {
  smooth: [0.21, 0.47, 0.32, 0.98] as [number, number, number, number],
}

export function Reveal({
  children,
  direction = "up",
  distance = 30,
  delay = 0,
  duration = 0.6,
  useViewport = true,
  className,
  ...props
}: RevealProps) {
  const directions: Record<
    "up" | "down" | "left" | "right" | "none",
    Direction
  > = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  }

  const initial = {
    opacity: 0,
    ...directions[direction],
  }

  const animate = {
    opacity: 1,
    x: 0,
    y: 0,
  }

  const exit = {
    opacity: 0,
    ...directions[direction],
  }

  const transition = {
    duration,
    delay,
    ease: EASING.smooth,
  }

  if (useViewport) {
    return (
      <motion.div
        initial={initial}
        whileInView={animate}
        viewport={{ once: true, margin: "-50px" }}
        exit={exit}
        transition={transition}
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}
