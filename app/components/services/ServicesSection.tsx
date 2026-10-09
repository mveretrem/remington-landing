"use client";

import Image from "next/image";
import { useState } from "react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { SERVICES_CONTENT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ServicesSection() {
  const [active, setActive] = useState(0);
  const services = SERVICES_CONTENT.services;

  return (
    <section id="services" className="bg-paper pt-24 pb-16 lg:pt-36 lg:pb-20">
      <Container className="max-w-[90rem]">
        {/* Section header */}
        <Reveal className="mb-16 grid gap-8 lg:mb-24 lg:grid-cols-12">
          <p className="label-mono text-stone lg:col-span-3">(01) What we do</p>
          <h2 className="font-display text-5xl font-semibold uppercase leading-[0.9] text-ink lg:col-span-9 lg:text-7xl">
            Three trades, one accountable team <span className="text-stone">— from the first estimate to the last walkthrough.</span>
          </h2>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Numbered service list */}
          <ol className="border-t border-ink/15 lg:col-span-7">
            {services.map((service, i) => {
              const isActive = active === i;
              return (
                <li
                  key={service.id}
                  id={service.href.slice(1)}
                  className="border-b border-ink/15"
                  onMouseEnter={() => setActive(i)}
                >
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    aria-expanded={isActive}
                    className="group grid w-full grid-cols-[3rem_1fr] items-baseline gap-4 py-8 text-left sm:grid-cols-[5rem_1fr]"
                  >
                    <span className={cn("label-mono tabular transition-colors", isActive ? "text-remington-orange" : "text-stone")}>
                      0{i + 1}
                    </span>
                    <span
                      className={cn(
                        "font-display text-5xl font-semibold uppercase leading-none transition-colors sm:text-6xl lg:text-7xl",
                        isActive ? "text-ink" : "text-ink/35 group-hover:text-ink/70"
                      )}
                    >
                      {service.title}
                    </span>
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <div className="grid gap-8 pb-10 sm:pl-[6rem] md:grid-cols-[1fr_auto] lg:grid-cols-1 xl:grid-cols-[1fr_auto]">
                        <p className="max-w-[60ch] leading-relaxed text-ink/70">{service.description}</p>
                        <ul className="space-y-2 md:min-w-[14rem]">
                          {service.capabilities.map((c) => (
                            <li key={c} className="flex items-center gap-3 text-sm font-medium text-ink">
                              <span className="h-1.5 w-1.5 rotate-45 bg-remington-orange" />
                              {c}
                            </li>
                          ))}
                        </ul>
                        {/* Inline image on small screens */}
                        <div className="relative aspect-[4/3] overflow-hidden lg:hidden">
                          <Image
                            src={service.image.src}
                            alt={service.image.alt}
                            fill
                            sizes="100vw"
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          {/* Sticky image that follows the active service */}
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 aspect-[4/5] overflow-hidden bg-ink">
              {services.map((service, i) => (
                <Image
                  key={service.id}
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  sizes="40vw"
                  className={cn(
                    "object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                  )}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-ink/80 to-transparent p-6 pt-16 text-white">
                <span className="label-mono">{services[active].image.alt}</span>
                <span className="label-mono tabular text-white/60">
                  0{active + 1} / 0{services.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
