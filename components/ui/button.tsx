import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[12px] button transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
        variant: {
            primary: "bg-[#171717] text-white hover:bg-[#2791FF] active:bg-[#1F74CC] disabled:bg-[#F5F5F5] disabled:text-[#A9A9A9]",
            default: "bg-[#171717] text-white hover:bg-[#2791FF] active:bg-[#1F74CC] disabled:bg-[#F5F5F5] disabled:text-[#A9A9A9]",
            secondary: "bg-[#F5F5F5] text-[#171717] border-2 border-[#EBEBEB] hover:bg-[#EBEBEB] hover:border-[#A9A9A9] active:bg-[#2791FF] active:border-[#2791FF] disabled:bg-[#F5F5F5] disabled:text-[#A9A9A9] disabled:border-[#F5F5F5]",
            whatsup_d: "bg-[#32CC65] text-white hover:bg-[#289F4F] active:bg-[#1C7A3C] active:text-[#32CC65]",
            whatsup_o: "border-2 border-[#32CC65] text-[#32CC65] hover:bg-[#32CC65]/20 active:bg-[#32CC65]/40",
            ghost: "bg-transparent text-[#171717] hover:bg-[#F5F5F5] active:bg-[#F5F5F5] disabled:bg-[#F5F5F5] disabled:text-[#A9A9A9] disabled:border-[#F5F5F5]"
        },
      size: {
        default: "h-max px-6 py-3",
        xs: "h-6 gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
        "icon-xl": "size-12",
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
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
