import Link from "next/link";
import Image from "next/image";
import { Container } from "../ui/container";
import { SocialLinks } from "./SocialLinks";
import { BRAND, COPYRIGHT } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo */}
          <Link href="/" className="transition-opacity hover:opacity-80">
            <Image
              src={BRAND.logo.src}
              alt={BRAND.logo.alt}
              width={200}
              height={0}
              priority
              objectFit="contain"
            />
          </Link>

          {/* Social Links */}
          <SocialLinks />
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>{COPYRIGHT}</p>
        </div>
      </Container>
    </footer>
  );
}
