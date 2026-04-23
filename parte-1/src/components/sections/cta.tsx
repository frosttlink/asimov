import { Button } from "../ui/button";

import ctaIlustration from "../../assets/images/illustrations/cta.svg"

export function Cta() {
  return (
    <div className="flex items-center justify-center pt-25">
      <div className="w-full h-86.75 flex items-center justify-between px-15 rounded-[45px] bg-grey">
        <div className="flex items-start flex-col gap-6.5 max-w-125">
          <h2 className="font-medium text-h3 leading-[100%] tracking-[0%] text-black">
            Let's make things happen
          </h2>
          <p className="font-normal text-p leading-[100%] tracking-[0%] text-black">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <Button>Get your free proposal</Button>
        </div>
        <img src={ctaIlustration} alt="CTA Illustration" />
      </div>
    </div>
  )
}