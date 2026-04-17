import Image from "next/image";
import { cn } from "@/lib/utils";

interface ClientLogoProps {
  name: string;
  logoSrc: string;
  alt: string;
  className?: string;
}

export function ClientLogo({ logoSrc, alt, className }: ClientLogoProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-6 transition-all duration-300",
        "grayscale hover:grayscale-0 opacity-60 hover:opacity-100",
        className
      )}
    >
      <Image
        src={logoSrc}
        alt={alt}
        width={180}
        height={80}
        className="h-16 w-auto object-contain md:h-20"
        unoptimized // For placeholder images
      />
    </div>
  );
}
