import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/container";
import { SocialLinks } from "./SocialLinks";
import { BRAND, COPYRIGHT, NAV_ITEMS, PHONE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-10 text-white">
      <Container className="max-w-[90rem]">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-12 lg:flex-row lg:items-start lg:justify-between">
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image src={BRAND.logo.src} alt={BRAND.logo.alt} width={744} height={240} className="h-12 w-auto" />
          </Link>

          <nav className="flex flex-wrap gap-x-8 gap-y-3" aria-label="Footer">
            {NAV_ITEMS.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm text-white/60 transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="#contact" className="text-sm text-white/60 transition-colors hover:text-white">
              Contact
            </Link>
          </nav>

          <div className="flex flex-col gap-4 lg:items-end">
            <a href={PHONE.href} className="tabular whitespace-nowrap font-display text-3xl font-semibold transition-colors hover:text-remington-orange">
              {PHONE.display}
            </a>
            <SocialLinks />
          </div>
        </div>

        {/* Oversized wordmark */}
        <p
          aria-hidden="true"
          className="select-none py-8 text-center font-display text-[clamp(3rem,15vw,15rem)] font-bold uppercase leading-none tracking-tight text-white/[0.04]"
        >
          Remington
        </p>

        <div className="flex flex-col gap-2 text-sm text-white/40 sm:flex-row sm:justify-between">
          <p>{COPYRIGHT}</p>
          <p>8466-B Tyco Road, Vienna, VA 22182</p>
        </div>
      </Container>
    </footer>
  );
}
