import type { ComponentProps, ReactNode } from "react"

type HeadingVariant = "primary" | "secondary" | "tertiary"

interface HeadingProps extends ComponentProps<"span"> {
  children: ReactNode
  variant?: HeadingVariant
  fontSize?: string
  fontWeight?: string
}

export function Heading({
  children,
  variant = "primary",
  fontSize = "text-h2",
  fontWeight = "font-medium",
  className = "",
  ...props
}: HeadingProps) {
  const base =
    `inline ${fontSize} ${fontWeight} rounded-[7px] px-1 py-0.5 color-black box-decoration-clone leading-snug transition-smooth`

  const variants: Record<HeadingVariant, string> = {
    primary:
      "bg-green text-black",
    secondary:
      "bg-white text-black",
    tertiary:
      "bg-dark text-white",
  }

  return (
    <span
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  )
}
