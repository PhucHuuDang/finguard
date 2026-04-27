import { Logo } from "@/components/common/logo"
import { Classic } from "@/components/loading-ui/classic"

export default function Loading() {
  return (
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center p-6 pb-20">
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Animated Finguard Logo Wrap */}
        <div className="relative flex items-center justify-center">
          {/* Subtle aurora/glow effect behind the logo */}
          <div
            className="absolute -inset-6 animate-pulse rounded-full bg-primary/20 blur-2xl"
            style={{ animationDuration: "2s" }}
          />
          <Logo
            width={56}
            height={56}
            className="relative z-10 animate-pulse drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
            style={{ animationDuration: "2s" }}
          />
        </div>

        {/* Loading Indicator Group */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-2.5">
            <Classic className="size-5 text-primary drop-shadow-[0_0_8px_rgba(234,88,12,0.5)]" />
            <span className="font-heading text-lg font-semibold tracking-widest text-foreground">
              FINGUARD
            </span>
          </div>

          {/* Subtitle pulse */}
          <p className="animate-pulse text-sm font-medium tracking-wide text-muted-foreground">
            Synchronizing data...
          </p>
        </div>
      </div>
    </div>
  )
}
