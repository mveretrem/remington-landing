import { Container } from "../ui/container";
import { HERO_CONTENT } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_CONTENT.backgroundImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />
      
      <Container className="relative z-10 py-32">
        <div className="max-w-3xl">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {HERO_CONTENT.title}
          </h1>
          <p className="text-xl text-white/90 sm:text-2xl md:text-3xl">
            {HERO_CONTENT.subtitle}
          </p>
        </div>
      </Container>
    </section>
  );
}
