"use client"

import Image from "next/image"
import { motion } from "motion/react"

import { cn } from "@/lib/utils"

// Các chế độ hoà trộn sẽ được cross-fade mượt mà
const BLEND_MODES: string[] = [
  "mix-blend-screen", // Ánh sáng dịu (Soft glow)
  "mix-blend-color-dodge", // Rực sáng huỳnh quang (Intense neon burn)
  "mix-blend-plus-lighter", // Cộng gộp ánh sáng (Pure additive light)
  "mix-blend-lighten", // Giữ lại vùng sáng nhất (Flat light)
  // "mix-blend-overlay", // Tăng tương phản (High contrast)
]

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#0A0505]">
      {/* Background Image 1 (Base/Candlesticks) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/background.avif"
          alt="Hero Background"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
      </div>

      {/* Cross-fading Glowing Overlays */}
      {BLEND_MODES.map((blendMode: string, index: number) => {
        // Tạo keyframe để crossfade từng lớp
        // Ví dụ có 3 hình:
        // Lớp 1 mờ dần khi Lớp 2 hiện, v.v...
        const keyframes = Array(BLEND_MODES.length + 1).fill(0)
        keyframes[index] = 1
        if (index === 0) keyframes[BLEND_MODES.length] = 1

        return (
          <motion.div
            key={blendMode}
            className={cn("absolute inset-0 z-10", blendMode)}
            animate={{
              opacity: keyframes,
              filter: [
                "hue-rotate(0deg) brightness(1)",
                "hue-rotate(10deg) brightness(1.1)",
                "hue-rotate(0deg) brightness(1)",
              ],
            }}
            transition={{
              opacity: {
                duration: 12, // Tổng thời gian 1 vòng lặp dài 12s
                repeat: Infinity,
                ease: "easeInOut",
              },
              filter: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <Image
              src="/images/backgrounds/background-2.avif"
              alt={`Hero Background Glow - ${blendMode}`}
              fill
              priority
              unoptimized
              className="object-cover object-center"
            />
          </motion.div>
        )
      })}

      {/* Subdued Gradients to fade out edges smoothly without hiding too much detail */}
      <div className="absolute inset-x-0 bottom-0 z-20 h-32 bg-linear-to-t from-[#0A0505] to-transparent" />
      <div className="absolute inset-x-0 top-0 z-20 h-32 bg-linear-to-b from-[#0A0505]/40 to-transparent" />
    </div>
  )
}
