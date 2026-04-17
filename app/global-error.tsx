"use client"

import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="vi">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
          <div className="max-w-md space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-destructive">
              Lỗi Cấu Trúc Toàn Cục
            </h2>
            <p className="text-muted-foreground">
              Một lỗi hệ thống nghiêm trọng đã xảy ra ở layout gốc không thể
              phục hồi theo cách thông thường.
            </p>
            <div className="flex justify-center gap-4">
              <Button
                onClick={() => window.location.reload()}
                variant="outline"
              >
                Tải lại trang
              </Button>
              <Button onClick={() => reset()} variant="default">
                Khôi phục trạng thái
              </Button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
