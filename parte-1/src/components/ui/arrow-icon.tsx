interface ArrowIconProps {
  size?: "sm" | "lg"
  color?: string
}

export function ArrowIcon({ size = "lg", color = "currentColor" }: ArrowIconProps) {
  if (size === "sm") {
    // width: 17.32px, height: 10px
    return (
      <svg
        width="17"
        height="10"
        viewBox="0 0 20 0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(-30deg)" }}
      >
        <line x1="0" y1="0" x2="20" y2="0" stroke={color} strokeWidth="3" />
      </svg>
    )
  }

  // lg: width: 41px, height: 41px
  return (
    <svg
      width="41"
      height="41"
      viewBox="0 0 41 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_13)">
        <line
          x1="12"
          y1="16"
          x2="32"
          y2="16"
          stroke={color}
          strokeWidth="3"
          style={{ transform: "rotate(-30deg) translateX(8px)" }}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_13">
          <rect width="41" height="41" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
