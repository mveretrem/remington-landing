import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { WHY_CHOOSE_US_CONTENT } from "@/lib/constants";

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="bg-paper py-24 lg:py-36">
      <Container className="max-w-[90rem]">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Sticky intro */}
          <div className="lg:col-span-5">
            <Reveal className="lg:sticky lg:top-28">
              <p className="label-mono mb-6 text-stone">(03) Why Remington</p>
              <h2 className="font-display text-6xl font-semibold uppercase leading-[0.88] text-ink lg:text-8xl">
                Three core beliefs.
              </h2>
              <p className="mt-8 max-w-md leading-relaxed text-ink/65">{WHY_CHOOSE_US_CONTENT.intro}</p>
            </Reveal>
          </div>

          {/* Beliefs */}
          <ol className="lg:col-span-6 lg:col-start-7">
            {WHY_CHOOSE_US_CONTENT.features.map((feature, i) => (
              <Reveal
                as="li"
                key={feature.id}
                delay={i * 80}
                className="grid grid-cols-1 gap-4 border-t border-ink/15 py-10 last:border-b sm:grid-cols-[6rem_1fr]"
              >
                <span className="tabular font-display text-6xl font-semibold leading-none text-remington-orange">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-3xl font-semibold uppercase text-ink lg:text-4xl">{feature.title}</h3>
                  <p className="mt-4 max-w-[60ch] leading-relaxed text-ink/65">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
