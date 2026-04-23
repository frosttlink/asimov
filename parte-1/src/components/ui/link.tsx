import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type LinkVariant =
  // With Background
  | "white-bg-green"
  | "white-bg-black"
  | "dark-bg-green"
  | "dark-bg-white"
  | "green-bg-black"
  | "green-bg-white"

  // None Background
  | "text-green"
  | "text-white"
  | "text-black";

interface LinkProps extends ComponentProps<"a"> {
  children: ReactNode;
  variant?: LinkVariant;
  href: string;
}

export function Link({
  children,
  variant = "text-black",
  className = "",
  ...props
}: LinkProps) {
  const base =
    "inline-flex items-center gap-[15px] transition-all duration-200 cursor-pointer";

  const textBase = "font-sans font-normal text-[20px] leading-[28px]";

  const iconWrapper =
    "w-[41px] h-[41px] flex items-center justify-center rounded-full flex-shrink-0";

  const icon = "";

  const variants: Record<
    LinkVariant,
    {
      textColor: string;
      iconBg?: string;
      iconColor: string;
      arrowSide: "left" | "right";
    }
  > = {
    // White Background
    "white-bg-green": {
      textColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-green",
      arrowSide: "left",
    },
    "white-bg-black": {
      textColor: "text-white",
      iconBg: "bg-white",
      iconColor: "text-black",
      arrowSide: "left",
    },

    // Black Background
    "dark-bg-green": {
      textColor: "text-black",
      iconBg: "bg-dark",
      iconColor: "text-green",
      arrowSide: "left",
    },
    "dark-bg-white": {
      textColor: "text-black",
      iconBg: "bg-dark",
      iconColor: "text-white",
      arrowSide: "left",
    },

    // Green Background
    "green-bg-black": {
      textColor: "text-black",
      iconBg: "bg-green",
      iconColor: "text-black",
      arrowSide: "left",
    },
    "green-bg-white": {
      textColor: "text-white",
      iconBg: "bg-green",
      iconColor: "text-white",
      arrowSide: "left",
    },

    // None Background
    "text-green": {
      textColor: "text-green",
      iconColor: "text-green",
      arrowSide: "right",
    },
    "text-white": {
      textColor: "text-white",
      iconColor: "text-white",
      arrowSide: "right",
    },
    "text-black": {
      textColor: "text-black",
      iconColor: "text-black",
      arrowSide: "right",
    },
  };

  const config = variants[variant];

  const arrow = (
    <div className={`${iconWrapper} ${config.iconBg ?? ""}`}>
      <ArrowUpRight className={`${icon} ${config.iconColor}`} />
    </div>
  );

  return (
    <a className={`${base} ${className}`} {...props}>
      {config.arrowSide === "left" && arrow}

      <span className={`${textBase} ${config.textColor}`}>{children}</span>

      {config.arrowSide === "right" && arrow}
    </a>
  );
}
