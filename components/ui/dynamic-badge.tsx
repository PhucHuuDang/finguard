"use client"

import * as React from "react"
import Image from "next/image"
import { type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge, type badgeVariants } from "@/components/ui/badge"

export interface DynamicBadgeProps
  extends
    Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof badgeVariants> {
  /** The main text of the badge */
  label: string | React.ReactNode

  /** URL to the avatar image displayed on the left */
  avatarSrc?: string

  /** Emoji or text string to display on the left (e.g. 🇺🇸) */
  emoji?: string

  /** Lucide icon or custom component to render on the left */
  icon?:
    | React.ReactNode
    | React.ElementType<{ strokeWidth?: number; className?: string }>

  /** Whether to show a small status dot indicator on the left */
  showDot?: boolean

  /** Whether to show a close (X) button on the right */
  showCloseButton?: boolean

  /** Callback when the close button is clicked. Automatically sets showCloseButton to true if provided. */
  onClose?: (e: React.MouseEvent) => void
}

export const DynamicBadge = React.forwardRef<
  HTMLSpanElement,
  DynamicBadgeProps
>(
  (
    {
      label,
      avatarSrc,
      emoji,
      icon: Icon,
      showDot,
      showCloseButton,
      onClose,
      variant,
      size = "md", // Default to 'md' for these specific designs
      className,
      ...props
    },
    ref
  ) => {
    const hasClose = showCloseButton ?? !!onClose

    return (
      <Badge
        ref={ref}
        variant={variant}
        size={size}
        className={cn(
          "rounded-lg",
          hasClose && "cursor-pointer",
          // Adjust padding if an avatar is present to make it flush
          avatarSrc && "pl-2",
          // Adjust padding if close button is present
          hasClose && "pr-3",
          className
        )}
        {...props}
      >
        {/* Avatar Image */}
        {avatarSrc && (
          <div className="relative mr-1.5 size-5 shrink-0 overflow-hidden rounded-full border">
            <Image
              src={avatarSrc}
              alt={String(label)}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Emoji Icon */}
        {emoji && (
          <span className="mr-1.5 text-base leading-none">{emoji}</span>
        )}

        {/* Status Dot SVG */}
        {showDot && (
          <svg className="mr-1 size-2 fill-current" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="4" />
          </svg>
        )}

        {/* Lucide/React Icon Component */}
        {Icon &&
          (React.isValidElement(Icon) ? (
            React.cloneElement(
              Icon as React.ReactElement<{
                strokeWidth?: number | string
                className?: string
              }>,
              {
                strokeWidth:
                  (
                    Icon.props as {
                      strokeWidth?: number | string
                      className?: string
                    }
                  ).strokeWidth ?? (variant === "neutral" ? 2.5 : 3),
                className: cn(
                  "mr-1 size-3.5",
                  (
                    Icon.props as {
                      strokeWidth?: number | string
                      className?: string
                    }
                  ).className
                ),
              }
            )
          ) : typeof Icon === "function" || typeof Icon === "object" ? (
            // @ts-expect-error Typescript won't know if this is a valid element type
            <Icon
              strokeWidth={variant === "neutral" ? 2.5 : 3}
              className="mr-1 size-3.5"
            />
          ) : (
            (Icon as React.ReactNode)
          ))}

        {/* Main Text */}
        <span className="leading-none">{label}</span>

        {/* Conditional Close Button */}
        {hasClose && (
          <span
            role="button"
            tabIndex={0}
            className="ml-1.5 rounded-full ring-offset-background outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            onClick={(e) => {
              if (onClose) {
                e.preventDefault()
                e.stopPropagation()
                onClose(e)
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onClose?.(e as unknown as React.MouseEvent)
              }
            }}
          >
            <X className="size-3.5 text-neutral-500 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100" />
            <span className="sr-only">Remove {label}</span>
          </span>
        )}
      </Badge>
    )
  }
)
DynamicBadge.displayName = "DynamicBadge"
