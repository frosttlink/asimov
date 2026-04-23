import { Button } from "../ui/button";
import ctaIlustration from "../../assets/images/illustrations/cta.svg"

export function Cta() {
  return (
    <div className="flex items-center justify-center pt-10 md:pt-25 px-4 md:px-0">
      <div className="w-full min-h-75 md:h-86.75 flex items-center justify-between p-8 md:px-15 rounded-[45px] bg-grey transition-smooth">
        
        <div className="flex items-center md:items-start flex-col gap-6 md:gap-6.5 max-w-full md:max-w-125 text-center md:text-left">
          <h2 className="font-medium text-l3-mob md:text-h3 leading-tight md:leading-[100%] text-black">
            Let's make things happen
          </h2>
          
          <p className="font-normal text-p leading-relaxed md:leading-[100%] text-black">
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          
          <Button className="w-full md:w-auto">
            Get your free proposal
          </Button>
        </div>

        <img 
          src={ctaIlustration} 
          alt="CTA Illustration" 
          className="hidden lg:block w-87.5 xl:w-auto object-contain"
        />
      </div>
    </div>
  )
}