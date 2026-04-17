import Link from "next/link"
import { FileQuestion } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center p-6 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-muted/50">
        <FileQuestion className="h-10 w-10 text-muted-foreground" />
      </div>

      <h2 className="mb-2 text-3xl font-bold tracking-tight">
        404 - Không Tìm Thấy Trang
      </h2>
      <p className="mx-auto mb-8 max-w-sm text-muted-foreground">
        Trang bạn đang cố truy cập không tồn tại, đã bị xóa hoặc URL có thể bị
        sai.
      </p>

      <Link href="/">
        <Button size="lg" className="gap-2">
          Trở về Trang Chủ
        </Button>
      </Link>
    </div>
  )
}
