import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-secondary active:translate-y-px disabled:pointer-events-none disabled:opacity-50 font-sans cursor-pointer",
  {
    variants: {
      variant: {
        default: "btn-primary shadow-md hover:bg-zinc-200",
        outline:
          "border border-ui-border bg-surface-1 shadow-sm hover:bg-surface-2 text-on-surface",
        secondary:
          "btn-secondary hover:bg-surface-2",
        ghost:
          "btn-ghost hover:bg-surface-2 text-on-surface",
        destructive:
          "bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20",
        link: "text-white underline-offset-4 hover:underline font-normal",
      },
      size: {
        default:
          "h-10 gap-2 px-5",
        xs: "h-7 gap-1 rounded-full px-3 text-xs",
        sm: "h-8 gap-1.5 rounded-full px-4 text-xs",
        lg: "h-12 gap-2 px-6 text-base",
        icon: "size-10 rounded-full",
        "icon-xs":
          "size-7 rounded-full",
        "icon-sm":
          "size-8 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
