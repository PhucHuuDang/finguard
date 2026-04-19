"use client"

import * as React from "react"
import { ArrowUp } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { cn } from "@/lib/utils"

export interface ScrollToTopProps {
  /**
   * Khoảng cách scroll (đơn vị: px) để nút hiển thị.
   * @default 400
   */
  threshold?: number
  className?: string
}

export function ScrollToTop({ threshold = 400, className }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    // Gọi hàm một lần khi mount để check state ngay lập tức nếu page được reload ở vị trí phía dưới
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          onClick={scrollToTop}
          className={cn(
            "fixed right-6 bottom-6 z-50 flex size-12 cursor-pointer items-center justify-center rounded-full bg-neutral-500/30 text-white shadow-xl shadow-orange-500/30 transition-colors hover:bg-neutral-500/50 md:right-10 md:bottom-10",
            className
          )}
          aria-label="Cuộn lên đầu trang"
        >
          <ArrowUp className="size-5 stroke-[2.5]" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
