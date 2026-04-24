"use client"

import React from "react"
import dynamic from "next/dynamic"

const DynamicBorderBeam = dynamic(
  () => import("border-beam").then((mod) => mod.BorderBeam),
  { ssr: false }
)

interface BorderBeamProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  duration?: number
  colorFrom?: string
  colorTo?: string
  borderWidth?: number
  anchor?: number
  delay?: number
}

export function BorderBeam({ children, className, ...props }: BorderBeamProps) {
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <DynamicBorderBeam className={className} {...props}>
      {children}
    </DynamicBorderBeam>
  )
}
