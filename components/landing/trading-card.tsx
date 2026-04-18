import { ArrowLeftRight, ChevronRight, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CryptoCard } from "@/components/landing/crypto-card"

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
    <div className="animate-float glass-card w-full max-w-[420px] rounded-2xl p-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex size-11 items-center justify-center rounded-xl bg-cyan-400 text-xl">
          🐰
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-bold text-neutral-100">BSC/Cake</h3>
          <p className="truncate text-xs text-neutral-500">
            PancakeSwap Token: 0×23rA...4f2lTd
          </p>
        </div>
      </div>

      {/* Tabs + Trade */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <button className="rounded-lg bg-neutral-800 p-2 text-neutral-400 transition-colors hover:text-neutral-200">
            <ArrowLeftRight className="size-4" />
          </button>
          <button className="rounded-lg bg-neutral-800 p-2 text-orange-400 transition-colors hover:text-orange-300">
            <Star className="size-4" />
          </button>
          <button className="rounded-lg bg-neutral-800 p-2 text-neutral-400 transition-colors hover:text-neutral-200">
            <Users className="size-4" />
          </button>
        </div>
        <Button
          size="sm"
          className="rounded-lg bg-neutral-800 px-5 text-sm font-medium text-neutral-200 hover:bg-neutral-700"
        >
          Trade
        </Button>
      </div>

      {/* Price */}
      <div className="mt-5">
        <p className="text-3xl font-bold tracking-tight text-neutral-100">
          893,47520$
        </p>
        <div className="mt-1 flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1 text-neutral-500">
            <span className="inline-block size-2 rounded-full bg-blue-500" />
            0.2498488
          </span>
          <span className="text-neutral-600">24H</span>
          <span className="font-medium text-emerald-400">+5.74</span>
          <ChevronRight className="size-3 text-blue-400" />
        </div>
      </div>

      {/* Mini Chart Background (decorative) */}
      <div className="relative my-4 h-12 w-full overflow-hidden rounded-lg">
        <svg
          viewBox="0 0 400 60"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="oklch(0.65 0.18 30)"
                stopOpacity="0.4"
              />
              <stop
                offset="100%"
                stopColor="oklch(0.65 0.18 30)"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>
          <path
            d="M0,50 L30,45 L60,48 L90,30 L120,35 L150,20 L180,25 L210,15 L240,28 L270,10 L300,18 L330,8 L360,12 L400,5"
            fill="none"
            stroke="oklch(0.65 0.18 30)"
            strokeWidth="2"
          />
          <path
            d="M0,50 L30,45 L60,48 L90,30 L120,35 L150,20 L180,25 L210,15 L240,28 L270,10 L300,18 L330,8 L360,12 L400,5 L400,60 L0,60 Z"
            fill="url(#chartGrad)"
          />
        </svg>
      </div>

      {/* Crypto Grid */}
      <div className="grid grid-cols-2 gap-3">
        {cryptoData.map((crypto) => (
          <CryptoCard key={crypto.name} {...crypto} />
        ))}
      </div>
    </div>
  )
}
