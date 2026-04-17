"use client"

import { toast } from "sonner"

import { AppError } from "@/lib/errors"

export function useErrorHandler() {
  /**
   * Catch and format any error to display a beautiful toast notification.
   */
  const handleError = (
    error: unknown,
    fallbackMessage = "Đã có lỗi không xác định xảy ra."
  ) => {
    // Log properly based on environment
    if (process.env.NODE_ENV === "development") {
      console.error("[ErrorHandler Hook]:", error)
    }

    if (error instanceof AppError) {
      // Standardized Application Errors
      toast.error("Thất bại", {
        description: error.message,
      })
      return
    }

    if (error instanceof Error) {
      // Native JS Errors (e.g. TypeError, SyntaxError or custom unhandled Errors)
      toast.error("Lỗi hệ thống", {
        description: error.message,
      })
      return
    }

    // Completely unknown structure
    toast.error("Đã xảy ra lỗi", {
      description: fallbackMessage,
    })
  }

  return { handleError }
}
