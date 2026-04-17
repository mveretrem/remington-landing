import Link from "next/link";
import { Facebook, Linkedin, Instagram, Twitter, LucideIcon } from "lucide-react";

interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon;
}

const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: Facebook,
  },
  {
    name: "X",
    href: "https://x.com/",
    icon: Twitter,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <Link
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 transition-colors hover:text-white"
            aria-label={social.name}
          >
            <span className="sr-only">{social.name}</span>
            <Icon className="h-6 w-6" />
          </Link>
        );
      })}
    </div>
  );
}
