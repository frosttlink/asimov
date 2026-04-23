import { Heading } from "../ui/heading";
import { CardSection } from "./card-section";

export function Services() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-10 pt-35 pb-20">
        <Heading fontSize="text-h2" fontWeight="font-medium">
          Services
        </Heading>
        <p className="max-w-130">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <CardSection />
    </div>
  );
}
