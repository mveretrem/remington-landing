import Image from "next/image";
import { ABOUT_CONTENT } from "@/lib/constants";

export function AboutImage() {
  return (
    <div className="relative h-full min-h-[400px] overflow-hidden rounded-2xl lg:min-h-[500px]">
      <Image
        src={ABOUT_CONTENT.image.src}
        alt={ABOUT_CONTENT.image.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}
