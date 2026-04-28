"use client"

import { ChevronDown } from "lucide-react"
import { motion } from "motion/react"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function ScrollIndicator() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 lg:bottom-12">
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.button
              onClick={scrollToFeatures}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="group flex size-8 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50 shadow-lg backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
              aria-label="Scroll to features"
            >
              <motion.div
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </motion.button>
          </TooltipTrigger>
          <TooltipContent
            side="top"
            sideOffset={12}
            className="border-white/10 bg-white/80 text-black/90 backdrop-blur-md dark:bg-black/80 dark:text-white/90"
            arrowClassName="fill-white/80 dark:fill-black/80"
          >
            <p className="text-xs font-medium capitalize">see our features</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
