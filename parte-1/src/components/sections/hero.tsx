import { Navbar } from "../layout/navbar";
import { Button } from "../ui/button";

import megaphone from "../../assets/images/illustrations/megaphone.svg";
import { CompanyLogos } from "../company-logos";

export function Hero() {
  return (
    <div className="flex flex-col gap-8 sm:gap-12 md:gap-14 lg:gap-17.5">
      <Navbar />

      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
        
        <div className="flex flex-col gap-4 sm:gap-6 lg:gap-9.75 w-full lg:w-132.75 items-center lg:items-start text-center lg:text-left">
          
          <h1 className="color-black text-3xl sm:text-4xl md:text-5xl lg:text-h1 font-medium leading-[110%]">
            Navigating the digital landscape for success
          </h1>

          <p className="color-black text-base sm:text-lg md:text-h4 font-normal leading-7 max-w-full lg:max-w-124.5">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <div className="w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto">
              Book a consultation
            </Button>
          </div>
        </div>

        <img
          src={megaphone}
          alt="Megafone com icones ao redor"
          className="max-w-full md:max-w-80 lg:max-w-150 w-full h-auto object-contain"
        />
      </div>

      <CompanyLogos />
    </div>
  );
}