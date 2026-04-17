import { Container } from "../ui/container";
import { AboutImage } from "./AboutImage";
import { AboutContent } from "./AboutContent";

export function AboutSection() {
  return (
    <section id="about" className="relative bg-gray-100 py-16 lg:py-24">
      {/* Orange accent bar on the left */}
      <div className="absolute left-0 top-0 h-full w-2 bg-remington-orange" />
      
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <AboutImage />
          </div>
          
          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <AboutContent />
          </div>
        </div>
      </Container>
    </section>
  );
}
