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
      {/* Heading */}
      <h2 className="mb-4 text-4xl font-bold text-gray-900 lg:text-5xl">
        {CONTACT_CONTENT.heading}
      </h2>

      {/* Subheading */}
      <p className="mb-8 text-base text-gray-600 lg:text-lg">
        {CONTACT_CONTENT.subheading}
      </p>

      {/* Contact Details */}
      <div className="space-y-6">
        {CONTACT_CONTENT.contactInfo.map((info) => {
          const IconComponent = iconMap[info.icon as keyof typeof iconMap];
          
          return (
            <a
              key={info.id}
              href={info.href}
              className="flex items-start gap-4 transition-opacity hover:opacity-80"
              target={info.icon === 'map-pin' ? '_blank' : undefined}
              rel={info.icon === 'map-pin' ? 'noopener noreferrer' : undefined}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                {IconComponent && (
                  <IconComponent className="h-6 w-6 text-remington-orange" />
                )}
              </div>

              {/* Content */}
              <div>
                <div className="font-semibold text-remington-orange">
                  {info.label}
                </div>
                <div className="text-gray-900">{info.value}</div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
