import { Badge } from "../badge";
import { Headline } from "./headline";
import { Subheadline } from "./subheadline";
import { CtaSection } from "./cta-section";
import { Bullets } from "./bullets";
import { HeroImage } from "./hero-image";
import { SocialProof } from "./social-proof";

export function Hero() {
  return (
    <div className="mx-auto max-w-350 px-8">
        <div className="pt-24 pb-32">
          <Badge />

          <div className="text-center max-w-245 mx-auto space-y-8">
            <Headline />
            <Subheadline />
            <CtaSection />
            <Bullets />
          </div>

          <HeroImage />
          <SocialProof />
        </div>
      </div>
  )
}