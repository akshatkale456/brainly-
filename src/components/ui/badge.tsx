import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 label-caps transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 select-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-on-primary hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-on-secondary hover:bg-secondary/80",
        destructive:
          "border-transparent bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20",
        outline: "text-on-surface border border-ui-border bg-surface-1",
        high: "border-transparent bg-zinc-100 text-zinc-900 font-medium",
        medium: "border-transparent bg-zinc-200 text-zinc-900 font-medium",
        low: "border-transparent bg-zinc-300 text-zinc-900 font-medium",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
