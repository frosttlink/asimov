import type { ComponentProps, ReactNode } from "react"

type ButtonVariant = "primary" | "secondary" | "tertiary"

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode
  variant?: ButtonVariant
}

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2.5 rounded-[14px] font-normal transition-all duration-200 px-8.75 py-5 cursor-pointer"

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-dark text-white border border-dark",
    secondary:
      "bg-transparent text-black border border-dark",
    tertiary:
      "bg-green text-black border border-green ",
  }

  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}