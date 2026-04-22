import { Navbar } from "../layout/navbar";
import { Button } from "../ui/button";

import megaphone from "../../assets/images/illustrations/megaphone.svg";
import { CompanyLogos } from "../company-logos";

export function Hero() {
  return (
    <div className="flex flex-col gap-17.5 ">
      <Navbar />

      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-9.75 w-132.75 items-start">
          <h1 className="color-black text-h1 font-medium leading-[100%]">
            Navigating the digital landscape for success
          </h1>
          <p className="color-black text-h4 font-normal leading-7 max-w-124.5">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
          <Button variant="primary"> Book a consultation </Button>
        </div>
        <img
          src={megaphone}
          alt="Megafone com icones ao redor"
          className="max-w-150 w-full h-auto"
        />
      </div>

      <CompanyLogos />
    </div>
  );
}
