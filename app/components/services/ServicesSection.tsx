import { Container } from "../ui/container";
import { ServiceCard } from "./ServiceCard";
import { SERVICES_CONTENT } from "@/lib/constants";

export function ServicesSection() {
  return (
    <section id="services" className="bg-gray-100 py-16 lg:py-24">
      <Container>
        {/* Heading */}
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 lg:text-5xl">
          {SERVICES_CONTENT.heading}
        </h2>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_CONTENT.services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              href={service.href}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
