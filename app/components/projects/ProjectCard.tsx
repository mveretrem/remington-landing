import Image from "next/image";
import { Eye } from "lucide-react";

interface ProjectCardProps {
  title: string;
  image: string;
  showViewMore?: boolean;
  onClick: () => void;
}

export function ProjectCard({ title, image, showViewMore, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative block aspect-square overflow-hidden rounded-lg transition-transform hover:scale-105 w-full"
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
      />

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

      {/* View icon */}
      <div className="absolute right-2 top-2">
        <Eye className="h-5 w-5 text-white opacity-80 transition-opacity group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        {showViewMore && (
          <p className="mt-1 text-xs text-white/90">View More &gt;</p>
        )}
      </div>
    </button>
  );
}
