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
        high: "border-red-500/30 bg-red-500/10 text-red-400 font-bold",
        medium: "border-yellow-500/30 bg-yellow-500/10 text-yellow-400 font-bold",
        low: "border-blue-500/30 bg-blue-500/10 text-blue-400 font-bold",
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
