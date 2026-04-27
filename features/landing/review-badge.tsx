"use client"

import * as React from "react"
import Image from "next/image"
import { useTranslations } from "next-intl"

import { cn } from "@/lib/utils"
import { Reveal } from "@/components/animations/reveal"
import { BorderBeam } from "@/components/common/border-beam"

export type ReviewBadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  classNameContainer?: string
}

export function ReviewBadge({
  className,
  classNameContainer,
  ...props
}: ReviewBadgeProps) {
  const t = useTranslations("review")

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
              {t("excellent")}
            </span>

            <div className="flex items-center gap-[2px]">
              {/* 4 Full Stars */}
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  src="/features/star.svg"
                  alt="Full Star"
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px]"
                  unoptimized
                />
              ))}
              {/* 1 Half Star */}
              <Image
                src="/features/half-star.svg"
                alt="Half Star"
                width={22}
                height={22}
                className="h-[22px] w-[22px]"
                unoptimized
              />
            </div>

            <div className="ml-1 flex items-center">
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
