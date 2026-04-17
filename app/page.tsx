import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/hero/HeroSection";
import { AboutSection } from "./components/about/AboutSection";
import { ServicesSection } from "./components/services/ServicesSection";
import { ClientsSection } from "./components/clients/ClientsSection";
import { ProjectsSection } from "./components/projects/ProjectsSection";
import { WhyChooseUsSection } from "./components/why-choose-us/WhyChooseUsSection";
import { ContactSection } from "./components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ClientsSection />
        <ProjectsSection />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
