import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
}

export function ServiceCard({ title, description, image, href }: ServiceCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-xl">
      {/* Image */}
      <div className="relative h-64 w-full">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mb-6 flex-1 text-base leading-relaxed text-gray-600">
          {description}
        </p>

        {/* Button */}
        {/* <Link
          href={href}
          className="inline-block rounded-full bg-remington-orange px-8 py-3 text-center font-semibold text-white transition-opacity hover:opacity-90"
        >
          Read More
        </Link> */}
      </div>
    </div>
  );
}
