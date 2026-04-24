import { ArrowLeftRight, ChevronRight, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CryptoCard } from "@/features/landing/crypto-card"

import Logo from "../../components/common/logo"

const cryptoData = [
  {
    icon: "💎",
    name: "Ethereum (ETH)",
    type: "Proof of Stake",
    rewardRate: "13.65%",
    changePercent: "37.8%",
    isPositive: true,
  },
  {
    icon: "🔶",
    name: "BNB Chain",
    type: "Proof of Stake",
    rewardRate: "15.25%",
    changePercent: "37.8%",
    isPositive: true,
  },
  {
    icon: "🟣",
    name: "Polygon (Matic)",
    type: "Proof of Stake",
    rewardRate: "11.45%",
    changePercent: "7.8%",
    isPositive: false,
  },
  {
    icon: "☀️",
    name: "Solarcoin (Slr)",
    type: "Proof of Stake",
    rewardRate: "14.54%",
    changePercent: "37.8%",
    isPositive: true,
  },
]

export function TradingCard() {
  return (
    // animate-float
    <div className="relative w-full max-w-[500px] overflow-hidden rounded-3xl bg-zinc-700/40 p-5">
      {/* Card content (above chart) */}
      <div className="relative z-10">
        {/* Header */}
        <div className="group flex items-center gap-2">
          {/* <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-400 text-xl">
            🐰
          </div> */}
          <Logo
            className="rounded-xl bg-neutral-400/15 p-1.5"
            height={40}
            width={40}
          />
          <div className="min-w-0 flex-1">
            <h3 className="cursor-pointer text-base font-bold text-neutral-100 group-hover:underline">
              FINGUARD
            </h3>
            <p className="truncate text-xs text-neutral-500">
              PancakeSwap Token: 0×23rA...4f2lTd
            </p>
          </div>
        </div>

        {/* Tabs + Trade */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button className="rounded-lg bg-neutral-800/80 p-2 text-neutral-400 transition-colors hover:text-neutral-200">
              <ArrowLeftRight className="size-4" />
            </button>
            <button className="rounded-lg bg-neutral-800/80 p-2 text-orange-400 transition-colors hover:text-orange-300">
              <Star className="size-4" />
            </button>
            <button className="rounded-lg bg-neutral-800/80 p-2 text-neutral-400 transition-colors hover:text-neutral-200">
              <Users className="size-4" />
            </button>
          </div>
          <Button
            size="sm"
            className="rounded-lg bg-neutral-800/80 px-5 text-sm font-medium text-neutral-200 hover:bg-neutral-700"
          >
            Trade
          </Button>
        </div>

        {/* Price */}
        <div className="mt-5">
          <p className="text-3xl font-bold tracking-tight text-neutral-100">
            893,47520$
          </p>
          <div className="mt-1.5 flex items-center justify-between gap-3 text-xs">
            <span className="flex items-center gap-1 text-neutral-500">
              <span className="inline-block size-2 rounded-full bg-sky-500" />
              0.2498488
            </span>
            <div className="flex items-center gap-2">
              <span className="text-neutral-600">24H</span>
              <span className="font-medium text-emerald-400">+5.74</span>
              <ChevronRight className="size-3 text-sky-400" />
            </div>
          </div>
        </div>

        {/* Spacer for chart visibility area */}
        <div className="h-8" />

        {/* Crypto Grid */}
        <div className="grid grid-cols-2 gap-3">
          {cryptoData.map((crypto) => (
            <CryptoCard key={crypto.name} {...crypto} />
          ))}
        </div>
      </div>
    </div>
  )
}
