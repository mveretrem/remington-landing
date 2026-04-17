"use client";

import { ClientLogo } from "./ClientLogo";
import { CLIENTS_CONTENT } from "@/lib/constants";

export function ClientCarousel() {
  // Duplicate clients array for seamless infinite scroll
  const duplicatedClients = [...CLIENTS_CONTENT.clients, ...CLIENTS_CONTENT.clients];

  return (
    <div className="relative w-full overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-100 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray-100 to-transparent" />

      {/* Scrolling container */}
      <div className="flex animate-scroll hover:pause-animation">
        {duplicatedClients.map((client, index) => (
          <ClientLogo
            key={`${client.name}-${index}`}
            name={client.name}
            logoSrc={client.logoSrc}
            alt={client.alt}
            className="flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
