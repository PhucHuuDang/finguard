import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 [&>svg]:pointer-events-none [&>svg]:size-3.5",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "text-destructive-foreground border-transparent bg-destructive hover:bg-destructive/80",
        outline: "text-foreground",
        ghost: "border-transparent text-foreground hover:bg-muted/50",
        success:
          "border-transparent bg-emerald-500 text-white hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-700",
        danger:
          "border-transparent bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700",
        warning:
          "border-transparent bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700",
        neutral:
          "border-transparent bg-neutral-400 text-white hover:bg-neutral-500 dark:bg-neutral-600 dark:hover:bg-neutral-700",
        brand:
          "border-blue-200 bg-blue-50 text-blue-600 hover:bg-blue-100 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-400",
        "dot-success":
          "border-emerald-200 bg-emerald-50 text-emerald-600 dark:border-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-400",
        "dot-danger":
          "border-red-200 bg-red-50 text-red-600 dark:border-red-900 dark:bg-red-900/30 dark:text-red-400",
      },
      size: {
        default: "h-6 px-2.5 py-0.5 text-xs",
        sm: "h-5 gap-1 px-2 py-0.5 text-[10px] [&>svg]:size-3",
        md: "h-8 px-3 py-1 text-sm",
        lg: "h-9 gap-2 px-4 py-1 text-sm [&>svg]:size-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      data-size={size}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
