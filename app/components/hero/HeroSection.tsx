import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Container } from "../ui/container";
import { CAPABILITIES, HERO_CONTENT, HERO_STATS, HERO_TRUST } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="grain relative isolate overflow-hidden bg-ink text-white">
      {/* Background photo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HERO_CONTENT.backgroundImage}
          alt="University of Florida residence halls at dusk"
          fill
          priority
          sizes="100vw"
          className="animate-slow-zoom object-cover object-[70%_50%]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-ink/20" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/60" />
      </div>

      <Container className="flex min-h-[100dvh] max-w-[90rem] flex-col pt-36 pb-10 lg:pt-44">
        <div className="flex flex-1 flex-col justify-center">
          <p
            className="label-mono animate-fade-up mb-8 flex items-center gap-3 text-white/70"
            style={{ animationDelay: "100ms" }}
          >
            <span className="h-px w-10 bg-remington-orange" />
            {HERO_CONTENT.eyebrow}
          </p>

          <h1 className="font-display text-[clamp(3.25rem,9vw,8.5rem)] font-semibold uppercase leading-[0.86] tracking-[-0.01em]">
            {HERO_CONTENT.title.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-[0.04em]">
                <span
                  className={`animate-rise block ${i === 2 ? "text-remington-orange" : ""}`}
                  style={{ animationDelay: `${200 + i * 110}ms` }}
                >
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <div
            className="animate-fade-up mt-10 flex max-w-2xl flex-col gap-8 sm:flex-row sm:items-end"
            style={{ animationDelay: "650ms" }}
          >
            <p className="max-w-md text-base leading-relaxed text-white/75 lg:text-lg">
              {HERO_CONTENT.subtitle}
            </p>
          </div>

          <div
            className="animate-fade-up mt-10 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "800ms" }}
          >
            <Link
              href="#contact"
              className="group flex items-center gap-2 bg-remington-orange px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-[#cf4209] active:translate-y-px"
            >
              Request a bid
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="#projects"
              className="group flex items-center gap-2 border border-white/25 px-7 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
            >
              See our projects
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Stat rail */}
        <div
          className="animate-fade-up mt-16 grid grid-cols-2 border-t border-white/15 lg:grid-cols-4"
          style={{ animationDelay: "950ms" }}
        >
          {HERO_STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`py-6 pr-6 ${i > 0 ? "lg:border-l lg:border-white/15 lg:pl-6" : ""} ${i % 2 === 1 ? "border-l border-white/15 pl-6 lg:pl-6" : ""}`}
            >
              <p className="tabular font-display text-5xl font-semibold leading-none lg:text-6xl">
                {stat.value}
              </p>
              <p className="mt-3 max-w-[16rem] text-sm leading-snug text-white/60">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Who we have built for */}
        <div
          className="animate-fade-up flex flex-col gap-3 border-t border-white/15 pt-6 lg:flex-row lg:items-center lg:gap-10"
          style={{ animationDelay: "1100ms" }}
        >
          <p className="label-mono shrink-0 text-white/45">Projects at</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 lg:gap-x-8">
            {HERO_TRUST.map((name) => (
              <li key={name} className="font-display text-xl font-semibold uppercase tracking-wide text-white/85 lg:text-2xl">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </Container>

      {/* Capabilities marquee */}
      <div className="relative border-y border-white/10 bg-ink-2 py-5">
        <div className="flex w-max animate-scroll hover:pause-animation">
          {[...CAPABILITIES, ...CAPABILITIES].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-10 pr-10 font-display text-2xl font-medium uppercase tracking-wide text-white/80"
              aria-hidden={i >= CAPABILITIES.length}
            >
              {item}
              <span className="h-2 w-2 rotate-45 bg-remington-orange" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
