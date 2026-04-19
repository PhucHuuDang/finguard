import { ArrowDown, ArrowUp } from "lucide-react"

import { cn } from "@/lib/utils"

interface CryptoCardProps {
  icon: string
  name: string
  type: string
  rewardRate: string
  changePercent: string
  isPositive: boolean
}

export function CryptoCard({
  icon,
  name,
  type,
  rewardRate,
  changePercent,
  isPositive,
}: CryptoCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border bg-neutral-900/30 p-3.5">
      <div className="flex items-center gap-2.5">
        <div className="flex size-9 items-center justify-center rounded-full bg-neutral-800 text-lg">
          {icon}
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-neutral-100">
            {name}
          </p>
          <p className="text-xs text-neutral-500">{type}</p>
        </div>
      </div>
      <div>
        <p className="text-[11px] text-neutral-500">Reward Rate</p>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-neutral-100">
            {rewardRate}
          </span>
          <span
            className={cn(
              "flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
              isPositive
                ? "bg-emerald-500/15 text-emerald-400"
                : "bg-red-500/15 text-red-400"
            )}
          >
            {isPositive ? (
              <ArrowUp className="size-2.5" />
            ) : (
              <ArrowDown className="size-2.5" />
            )}
            {changePercent}
          </span>
        </div>
      </div>
    </div>
  )
}
