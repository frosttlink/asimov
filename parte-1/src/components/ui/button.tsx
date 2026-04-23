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
    "inline-flex items-center justify-center gap-2.5 rounded-[14px] font-normal transition-smooth active:scale-95 px-8.75 py-5 cursor-pointer"

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-dark text-white border border-dark hover:bg-black",
    secondary:
      "bg-transparent text-black border border-dark hover:bg-grey",
    tertiary:
      "bg-green text-black border border-green hover:bg-[#a8f050]",
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