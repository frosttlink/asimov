import { CardContainer } from "../ui/card-container"
import { Heading } from "../ui/heading"
import { Link } from "../ui/link"

import magnifierIlustration from "../../assets/images/illustrations/magnifier.svg"
import clickIlustration from "../../assets/images/illustrations/click.svg"
import happyFaceIlustration from "../../assets/images/illustrations/happy-face.svg"
import emailsIlustration from "../../assets/images/illustrations/emails.svg"
import tabsIlustration from "../../assets/images/illustrations/tabs-explorer.svg"
import dataIlustration from "../../assets/images/illustrations/data.svg"

export function CardSection() {
  return (
    <div className="grid grid-cols-2 gap-10">

      <CardContainer
        variant="primary"
        illustration={magnifierIlustration}
        title={
          <Heading variant="primary" fontSize="text-h3" fontWeight="font-medium">
            Search engine optimization
          </Heading>
        }
        link={
          <Link variant="dark-bg-green" href="#">
            Learn more
          </Link>
        }
      />

      <CardContainer
        variant="secondary"
        illustration={clickIlustration}
        title={
          <Heading variant="secondary" fontSize="text-h3" fontWeight="font-medium">
            Pay-per-click advertising
          </Heading>
        }
        link={
          <Link variant="dark-bg-green" href="#">
            Learn more
          </Link>
        }
      />

      <CardContainer
        variant="tertiary"
        illustration={happyFaceIlustration}
        title={
          <Heading variant="secondary" fontSize="text-h3" fontWeight="font-medium">
            Social Media Marketing
          </Heading>
        }
        link={
          <Link variant="white-bg-black" href="#">
            Learn more
          </Link>
        }
      />

      <CardContainer
        variant="primary"
        illustration={emailsIlustration}
        title={
          <Heading fontSize="text-h3" fontWeight="font-medium">
            Email Marketing
          </Heading>
        }
        link={
          <Link variant="dark-bg-green" href="#">
            Learn more
          </Link>
        }
      />

      <CardContainer
        variant="secondary"
        illustration={tabsIlustration}
        title={
          <Heading variant="secondary" fontSize="text-h3" fontWeight="font-medium">
            Content Creation
          </Heading>
        }
        link={
          <Link variant="dark-bg-green" href="#">
            Learn more
          </Link>
        }
      />

      <CardContainer
        variant="tertiary"
        illustration={dataIlustration}
        title={
          <Heading fontSize="text-h3" fontWeight="font-medium">
            Analytics and Tracking
          </Heading>
        }
        link={
          <Link variant="white-bg-black" href="#">
            Learn more
          </Link>
        }
      />

    </div>
  )
}