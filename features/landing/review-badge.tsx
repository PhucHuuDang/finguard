"use client"

import * as React from "react"
import dynamic from "next/dynamic"
import Image from "next/image"

import { cn } from "@/lib/utils"

import { Reveal } from "../../components/animations/reveal"

const BorderBeam = dynamic(
  () => import("border-beam").then((mod) => mod.BorderBeam),
  { ssr: false }
)

export type ReviewBadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  classNameContainer?: string
}

export function ReviewBadge({
  className,
  classNameContainer,
  ...props
}: ReviewBadgeProps) {
  return (
    <Reveal delay={0.1} direction="up">
      <div
        className={cn(
          "flex w-full items-center justify-center py-4 md:py-6",
          classNameContainer
        )}
      >
        <BorderBeam>
          <div
            className={cn(
              "flex w-fit items-center gap-3 space-x-1 rounded-xl border border-neutral-800 bg-neutral-950/80 px-4 py-2.5 shadow-xl backdrop-blur-md",
              className
            )}
            {...props}
          >
            <span className="text-[15px] font-medium tracking-tight text-white">
              Excellent
            </span>

            <div className="flex items-center gap-[2px]">
              {/* 4 Full Stars */}
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  src="https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685430d0fec2ec230b215b33_Star%20(1).svg"
                  alt="Full Star"
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px]"
                  unoptimized
                />
              ))}
              {/* 1 Half Star */}
              <Image
                src="https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/685430d05ee8f4d5d58a29fc_Star%20(2).svg"
                alt="Half Star"
                width={22}
                height={22}
                className="h-[22px] w-[22px]"
                unoptimized
              />
            </div>

            <div className="ml-1 flex items-center">
              {/* We use the reconstructed URL for the 3rd link since it was truncated with '...' */}
              <Image
                src="https://cdn.prod.website-files.com/6840859dc0e82803d10f5190/6862222307e5d6b29113db15_Title%20Logo.svg"
                alt="Title Logo"
                width={100}
                height={20}
                className="h-5 w-auto object-contain"
                unoptimized
              />
            </div>
          </div>
        </BorderBeam>
      </div>
    </Reveal>
  )
}
