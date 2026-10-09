import { Phone, Printer, MapPin, Mail } from "lucide-react";
import { CONTACT_CONTENT } from "@/lib/constants";

const iconMap = {
  phone: Phone,
  printer: Printer,
  'map-pin': MapPin,
  mail: Mail,
};

export function ContactInfo() {
  return (
    <div className="flex flex-col">
      <p className="label-mono mb-8 flex items-center gap-3 text-white/60">
        <span className="h-px w-10 bg-remington-orange" />
        (05) Contact
      </p>
      <h2 className="font-display text-6xl font-semibold uppercase leading-[0.88] lg:text-8xl">
        {CONTACT_CONTENT.heading}
      </h2>
      <p className="mt-8 max-w-md text-lg text-white/65">{CONTACT_CONTENT.subheading}</p>

      <div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2">
        {CONTACT_CONTENT.contactInfo.map((info) => {
          const IconComponent = iconMap[info.icon as keyof typeof iconMap];
          return (
            <a
              key={info.id}
              href={info.href}
              className="group flex flex-col gap-3 bg-ink p-5 transition-colors hover:bg-ink-2"
              target={info.icon === 'map-pin' ? '_blank' : undefined}
              rel={info.icon === 'map-pin' ? 'noopener noreferrer' : undefined}
            >
              <span className="label-mono flex items-center gap-2 text-white/45">
                {IconComponent && <IconComponent className="h-3.5 w-3.5 text-remington-orange" />}
                {info.label}
              </span>
              <span className="tabular text-white transition-colors group-hover:text-remington-orange">{info.value}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
