import Image from "next/image";

interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export function FeatureCard({ imageSrc, imageAlt, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col">
      {/* Icon */}
      <div className="mb-6">
        <Image
          src={imageSrc}
          alt={imageAlt}
          height={50}
          width={50}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Title */}
      <h3 className="mb-4 text-xl font-bold text-gray-900">{title}</h3>

      {/* Description */}
      <p className="text-base leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}
