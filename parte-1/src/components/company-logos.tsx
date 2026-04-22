import amazonLogo from "../assets/logos/companies/amazon.svg"
import dribbbleLogo from "../assets/logos/companies/dribbble.svg"
import hubspotLogo from "../assets/logos/companies/hubspot.svg"
import notionLogo from "../assets/logos/companies/notion.svg"
import netflixLogo from "../assets/logos/companies/netflix.svg"
import zoomLogo from "../assets/logos/companies/zoom.svg"

export function CompanyLogos() {
  return (
    <div className="flex justify-between grayscale">
      <img src={amazonLogo} alt="Logo da Amazon" />
      <img src={dribbbleLogo} alt="Logo da Dribbble" />
      <img src={hubspotLogo} alt="Logo do HubSpot" />
      <img src={notionLogo} alt="Logo do Notion" />
      <img src={netflixLogo} alt="Logo da Netflix" />
      <img src={zoomLogo} alt="Logo do Zoom" />
    </div>
  )
}