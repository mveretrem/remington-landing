import { Container } from "../ui/container";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-16 lg:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Contact Info */}
          <div>
            <ContactInfo />
          </div>

          {/* Right: Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
