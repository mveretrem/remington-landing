import { Container } from "../ui/container";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="grain relative overflow-hidden bg-ink py-24 text-white lg:py-36">
      <Container className="relative max-w-[90rem]">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
