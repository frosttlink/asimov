import Marquee from "react-fast-marquee";

import amazonLogo from "../assets/logos/companies/amazon.svg";
import dribbbleLogo from "../assets/logos/companies/dribbble.svg";
import hubspotLogo from "../assets/logos/companies/hubspot.svg";
import notionLogo from "../assets/logos/companies/notion.svg";
import netflixLogo from "../assets/logos/companies/netflix.svg";
import zoomLogo from "../assets/logos/companies/zoom.svg";

const MarqueeComponent = Marquee.default ?? Marquee;

export function CompanyLogos() {
  return (
    <div className="grayscale transition-smooth">
      <div className="md:hidden">
        <MarqueeComponent speed={25} gradient={false}>
          <div className="flex items-center gap-8 px-4">
            <img src={amazonLogo} alt="Logo da Amazon" />
            <img src={dribbbleLogo} alt="Logo da Dribbble" />
            <img src={hubspotLogo} alt="Logo do HubSpot" />
            <img src={notionLogo} alt="Logo do Notion" />
            <img src={netflixLogo} alt="Logo da Netflix" />
            <img src={zoomLogo} alt="Logo do Zoom" />
          </div>
        </MarqueeComponent>
      </div>

      <div className="hidden md:flex justify-between">
        <img src={amazonLogo} alt="Logo da Amazon" />
        <img src={dribbbleLogo} alt="Logo da Dribbble" />
        <img src={hubspotLogo} alt="Logo do HubSpot" />
        <img src={notionLogo} alt="Logo do Notion" />
        <img src={netflixLogo} alt="Logo da Netflix" />
        <img src={zoomLogo} alt="Logo do Zoom" />
      </div>

    </div>
  );
}