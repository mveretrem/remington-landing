import Image from "next/image";
import { Container } from "../ui/container";
import { CLIENTS_CONTENT } from "@/lib/constants";

export function ClientsSection() {
  return (
    <section id="clients" className="border-b border-white/10 bg-ink py-14 text-white">
      <Container className="max-w-[90rem]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="label-mono shrink-0 text-white/50">{CLIENTS_CONTENT.heading}</h2>
          <ul className="grid grid-cols-2 items-center gap-x-12 gap-y-10 sm:grid-cols-4 lg:gap-x-20">
            {CLIENTS_CONTENT.clients.map((client) => (
              <li key={client.name} className="flex justify-center">
                <Image
                  src={client.logoSrc}
                  alt={client.alt}
                  width={160}
                  height={56}
                  className="h-9 w-auto object-contain opacity-60 transition-opacity hover:opacity-100 lg:h-10"
                />
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
