import Image from "next/image";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { ABOUT_CONTENT } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="bg-paper pb-24 lg:pb-36">
      <Container className="max-w-[90rem]">
        <div className="grid items-center gap-12 border-t border-ink/15 pt-24 lg:grid-cols-12 lg:pt-36">
          <Reveal className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={ABOUT_CONTENT.image.src}
                alt={ABOUT_CONTENT.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden bg-remington-orange px-6 py-5 text-white sm:block lg:-right-10">
              <p className="label-mono text-white/80">Headquarters</p>
              <p className="mt-1 font-display text-2xl font-semibold uppercase">Vienna, Virginia</p>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <p className="label-mono mb-6 text-stone">(04) {ABOUT_CONTENT.heading}</p>
            <blockquote>
              <p className="font-display text-4xl font-medium uppercase leading-[0.98] text-ink lg:text-6xl">
                <span className="text-remington-orange">&ldquo;</span>
                {ABOUT_CONTENT.quote.text}
                <span className="text-remington-orange">&rdquo;</span>
              </p>
              <footer className="label-mono mt-6 text-stone">— {ABOUT_CONTENT.quote.author}</footer>
            </blockquote>
            <p className="mt-10 max-w-[60ch] text-lg leading-relaxed text-ink/70">{ABOUT_CONTENT.description}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
