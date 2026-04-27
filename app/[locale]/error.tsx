"use client"

import { useEffect } from "react"
import { AlertTriangle, RefreshCcw } from "lucide-react"
import { useTranslations } from "next-intl"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations("error")

  useEffect(() => {
    console.error("Unhandled App Error:", error)
  }, [error])

  return (
    <div className="flex min-h-[400px] w-full flex-col items-center justify-center p-6">
      <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center space-y-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10">
          <AlertTriangle className="h-10 w-10 text-destructive" />
        </div>

        <div className="space-y-2 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            {t("error_title")}
          </h2>
          <p className="text-muted-foreground">{t("error_description")}</p>
        </div>

        {process.env.NODE_ENV === "development" && error.message && (
          <Alert variant="destructive" className="w-full text-left">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>{t("error_detail_title")}</AlertTitle>
            <AlertDescription className="wrap-break-words mt-2 font-mono text-xs">
              {error.message}
            </AlertDescription>
          </Alert>
        )}

        <Button onClick={() => reset()} className="w-full gap-2" size="lg">
          <RefreshCcw className="h-4 w-4" />
          {t("error_try_again")}
        </Button>
      </div>
    </div>
  )
}
