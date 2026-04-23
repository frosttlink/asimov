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
    "flex items-center justify-between w-full min-h-[280px] md:h-[310px] rounded-[35px] md:rounded-[45px] border p-7 md:p-[50px] gap-4 md:gap-8 transition-smooth"

  const variants: Record<CardContainerVariant, string> = {
    primary: "bg-grey border-dark shadow-[0px_5px_0px_0px_#191A23]",
    secondary: "bg-green border-dark shadow-[0px_5px_0px_0px_#191A23]",
    tertiary: "bg-dark border-dark shadow-[0px_5px_0px_0px_#191A23] text-white",
  }

  return (
    <div className={`${base} ${variants[variant]} ${className}`} {...props}>
      <div className="flex flex-col justify-between h-full flex-1 py-2 md:py-0 gap-8">
        <div>{title}</div>
        <div>{link}</div>
      </div>

      {illustration && (
        <img 
          src={illustration} 
          className="shrink-0 w-32 sm:w-40 md:w-auto object-contain" 
          alt="Card illustration" 
        />
      )}
    </div>
  )
}