import { Container } from "../ui/container";
import { ClientCarousel } from "./ClientCarousel";
import { CLIENTS_CONTENT } from "@/lib/constants";

export function ClientsSection() {
  return (
    <section id="clients" className="bg-gray-100 py-16 lg:py-24">
      <Container>
        {/* Heading */}
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 lg:text-5xl">
          {CLIENTS_CONTENT.heading}
        </h2>

        {/* Carousel */}
        <ClientCarousel />
      </Container>
    </section>
  );
}
