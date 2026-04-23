import type { ComponentProps, ReactNode } from "react"

type CardVariant = "primary" | "secondary" | "tertiary"

interface CardProps extends ComponentProps<"div"> {
  children: ReactNode
  illustration?: string
  variant?: CardVariant
}

export function Card({
  children,
  illustration,
  variant = "primary",
  className = "",
  ...props
}: CardProps) {
  const base =
    "flex items-center justify-between w-[600px] h-[310px] rounded-[45px] border-[1px] p-[50px] gap-8 transition-smooth"

  const variants: Record<CardVariant, string> = {
    primary:
      "bg-grey border-dark shadow-[0px_5px_0px_0px_#191A23]",
    secondary:
      "bg-green border-dark shadow-[0px_5px_0px_0px_#191A23]",
    tertiary:
      "bg-dark border-dark shadow-[0px_5px_0px_0px_#191A23] text-white",
  }

  return (
    <div
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      <div className="flex flex-col justify-between h-full flex-1">
        <div>{children}</div>
        <a href="#" className="text-sm font-medium hover:underline transition-smooth">
          Learn more
        </a>
      </div>
      {illustration && (
        <img src={illustration} className="shrink-0" />
      )}
    </div>
  )
}