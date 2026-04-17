import { Container } from "../ui/container";
import { FeatureCard } from "./FeatureCard";
import { WHY_CHOOSE_US_CONTENT } from "@/lib/constants";

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="bg-white py-16 lg:py-24">
      <Container>
        {/* Heading */}
        <h2 className="mb-6 text-4xl font-bold text-gray-900 lg:text-5xl">
          {WHY_CHOOSE_US_CONTENT.heading}
        </h2>

        {/* Intro Paragraph */}
        <p className="mb-12 max-w-5xl text-base leading-relaxed text-gray-600 lg:text-lg">
          {WHY_CHOOSE_US_CONTENT.intro}
        </p>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-3 md:divide-x md:divide-gray-200">
          {WHY_CHOOSE_US_CONTENT.features.map((feature, index) => (
            <div
              key={feature.id}
              className={index > 0 ? "md:pl-8" : ""}
            >
              <FeatureCard
                imageSrc={feature.imageSrc}
                imageAlt={feature.imageAlt}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
