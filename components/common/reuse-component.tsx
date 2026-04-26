import { MoveRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Reveal } from "@/components/animations/reveal"

import { BorderBeam } from "./border-beam"

interface ArrowIconCommonProps {
  className?: string
  classIcon?: string
}
export const ArrowIconCommon = ({
  className,
  classIcon,
}: ArrowIconCommonProps) => {
  return (
    <div
      className={cn(
        "flex size-6 items-center justify-center rounded-full bg-[#E5D7D1]",
        className
      )}
    >
      <MoveRightIcon className={cn("size-3 text-neutral-900", classIcon)} />
    </div>
  )
}

export interface TitleSectionCommonProps {
  title: React.ReactNode
  icon?: React.ReactNode
  className?: string
  titleClassName?: string
  delay?: number
}

export const TitleSectionCommon = ({
  title,
  icon,
  className,
  titleClassName,
  delay,
}: TitleSectionCommonProps) => {
  return (
    <Reveal delay={delay}>
      <BorderBeam
        className={cn(
          "inline-flex w-fit items-center gap-3 px-4 py-1.5 md:gap-4",
          className
        )}
      >
        <span className={cn("text-gradient-neutral", titleClassName)}>
          {title}
        </span>
        {icon !== undefined ? icon : <ArrowIconCommon />}
      </BorderBeam>
    </Reveal>
  )
}
