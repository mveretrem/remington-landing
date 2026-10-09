import Image from "next/image";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { OCCUPIED_CONTENT } from "@/lib/constants";

export function OccupiedSection() {
  return (
    <section className="grain relative overflow-hidden bg-ink py-24 text-white lg:py-36">
      <div className="blueprint-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
      <Container className="relative max-w-[90rem]">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-6">
            <p className="label-mono mb-8 flex items-center gap-3 text-white/60">
              <span className="h-px w-10 bg-remington-orange" />
              {OCCUPIED_CONTENT.eyebrow}
            </p>
            <h2 className="font-display text-5xl font-semibold uppercase leading-[0.9] lg:text-7xl">
              {OCCUPIED_CONTENT.heading}
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/65">{OCCUPIED_CONTENT.body}</p>
          </Reveal>

          <Reveal delay={150} className="relative lg:col-span-5 lg:col-start-8">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={OCCUPIED_CONTENT.image.src}
                alt={OCCUPIED_CONTENT.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <span className="label-mono absolute -bottom-8 left-0 text-white/40">Murraygate Village, Alexandria VA</span>
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-1 border-t border-white/15 sm:grid-cols-2">
          {OCCUPIED_CONTENT.figures.map((f, i) => (
            <Reveal
              key={f.value}
              delay={i * 90}
              className="border-b border-white/15 py-10 sm:border-b-0 sm:pr-8 sm:[&:nth-child(2)]:border-l sm:[&:nth-child(2)]:pl-8"
            >
              <p className="tabular font-display text-8xl font-semibold leading-none text-remington-orange lg:text-9xl">
                {f.value}
              </p>
              <p className="mt-5 max-w-sm text-lg text-white/85">{f.label}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
