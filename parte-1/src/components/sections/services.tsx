import { Heading } from "../ui/heading";
import { CardSection } from "./card-section";

export function Services() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-6 pt-20 pb-20 md:flex-row md:items-center md:gap-10 lg:pt-35">
        <Heading className="" fontSize="text-h2" fontWeight="font-medium">
          Services
        </Heading>
        <p className="max-w-130 text-center md:text-left">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <CardSection />
    </div>
  );
}
