import type { ComponentProps, ReactNode } from "react"

type CardContainerVariant = "primary" | "secondary" | "tertiary"

interface CardContainerProps extends Omit<ComponentProps<"div">, "title"> {
  title: ReactNode
  link: ReactNode
  illustration?: string
  variant?: CardContainerVariant
}

export function CardContainer({
  title,
  link,
  illustration,
  variant = "primary",
  className = "",
  ...props
}: CardContainerProps) {
  const base =
    "flex items-center justify-between w-[600px] h-[310px] rounded-[45px] border p-[50px] gap-8"

  const variants: Record<CardContainerVariant, string> = {
    primary: "bg-grey border-dark shadow-[0px_5px_0px_0px_#191A23]",
    secondary: "bg-green border-dark shadow-[0px_5px_0px_0px_#191A23]",
    tertiary: "bg-dark border-dark shadow-[0px_5px_0px_0px_#191A23] text-white",
  }

  return (
    <div className={`${base} ${variants[variant]} ${className}`} {...props}>
      
      <div className="flex flex-col justify-between h-full flex-1">
        <div>{title}</div>
        <div>{link}</div>
      </div>

      {illustration && (
        <img src={illustration} className="shrink-0" />
      )}
    </div>
  )
}