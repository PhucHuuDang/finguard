"use client"

import { ReactNode } from "react"
import { HTMLMotionProps, motion } from "motion/react"

import { cn } from "@/lib/utils"

export interface StaggerProps extends Omit<HTMLMotionProps<"div">, "viewport"> {
  children: ReactNode
  staggerDelay?: number
  delayChildren?: number
  useViewport?: boolean
  className?: string
}

interface Direction {
  x: number
  y: number
}

export function Stagger({
  children,
  staggerDelay = 0.1,
  delayChildren = 0,
  useViewport = true,
  className,
  ...props
}: StaggerProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: staggerDelay,
        staggerDirection: -1,
      },
    },
  }

  if (useViewport) {
    return (
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        exit="exit"
        className={cn(className)}
        {...props}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="exit"
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  duration?: number
  className?: string
}

export function StaggerItem({
  children,
  direction = "up",
  distance = 30,
  duration = 0.6,
  className,
  ...props
}: StaggerItemProps) {
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

  const item: import("framer-motion").Variants = {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, ease: [0.21, 0.47, 0.32, 0.98] },
    },
    exit: {
      opacity: 0,
      ...directions[direction],
      transition: { duration: duration * 0.8, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  }

  return (
    <motion.div variants={item} className={cn(className)} {...props}>
      {children}
    </motion.div>
  )
}
