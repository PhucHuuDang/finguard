"use client"

import {
  ArrowLeft,
  Check,
  Clock,
  Monitor,
  Smartphone,
  Type,
  X, // Only needed for the specific Pixsellz case or we can just use the prop
} from "lucide-react"

import { DynamicBadge } from "@/components/ui/dynamic-badge"

export function BadgeShowcase() {
  return (
    <div className="flex w-full items-center justify-center p-12">
      <div className="flex flex-col items-center gap-4">
        {/* Row 1: Profile Badges */}
        <div className="flex items-center gap-3">
          <DynamicBadge
            variant="outline"
            avatarSrc="/finguard.jpg"
            label="Alex"
            showCloseButton
            className="bg-white dark:bg-black"
          />
          <DynamicBadge
            variant="outline"
            avatarSrc="/finguard.jpg"
            label="Anna"
            showCloseButton
            className="bg-white dark:bg-black"
          />
          <DynamicBadge
            variant="outline"
            avatarSrc="/finguard.jpg"
            label="Pixsellz"
            showCloseButton
            className="bg-white dark:bg-black"
          />
        </div>

        {/* Row 2: Status Badges (using flat colors icons) */}
        <div className="flex items-center gap-3">
          <DynamicBadge variant="success" icon={Check} label="Paid" />
          <DynamicBadge variant="danger" icon={X} label="Declined" />
          <DynamicBadge variant="neutral" icon={Clock} label="Pending" />
          <DynamicBadge variant="warning" icon={ArrowLeft} label="Refunded" />
        </div>

        {/* Row 3: Country Tags with Emoji Flags */}
        <div className="flex items-center gap-3">
          <DynamicBadge
            variant="outline"
            emoji="🇺🇸"
            label="United States"
            showCloseButton
            className="bg-white dark:bg-black"
          />
          <DynamicBadge
            variant="outline"
            emoji="🇨🇳"
            label="China"
            showCloseButton
            className="bg-white dark:bg-black"
          />
          <DynamicBadge
            variant="outline"
            emoji="🇫🇷"
            label="France"
            showCloseButton
            className="bg-white dark:bg-black"
          />
          <DynamicBadge
            variant="outline"
            emoji="🇵🇹"
            label="Portugal"
            showCloseButton
            className="bg-white dark:bg-black"
          />
        </div>

        {/* Row 4: Brand & Category Tags */}
        <div className="flex items-center gap-3">
          <DynamicBadge variant="brand" icon={Monitor} label="Web Design" />
          <DynamicBadge variant="brand" icon={Smartphone} label="Mobile" />
          <DynamicBadge variant="brand" icon={Type} label="Typography" />
        </div>

        {/* Row 5: Active Dot Indicator Tags */}
        <div className="flex items-center gap-3">
          <DynamicBadge variant="dot-danger" showDot label="Offline" />
          <DynamicBadge variant="dot-success" showDot label="Online" />
        </div>
      </div>
    </div>
  )
}
