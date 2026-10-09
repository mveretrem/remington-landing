import Image from "next/image";
import { ArrowUpRight, Images } from "lucide-react";
import type { Project } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
  onClick: () => void;
}

export function ProjectCard({ project, index, featured, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "animate-fade-up group relative block w-full overflow-hidden bg-ink text-left",
        featured ? "aspect-[4/3] sm:col-span-2 sm:row-span-2 sm:aspect-auto sm:min-h-[28rem]" : "aspect-[4/3]"
      )}
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
      aria-label={`${project.title}, ${project.category}. View project details`}
    >
      <Image
        src={project.images[0]}
        alt=""
        fill
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        sizes={featured ? "(max-width: 640px) 100vw, 66vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
      />

      <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/20 to-transparent transition-opacity duration-500 group-hover:from-ink" />

      {/* Top row: category + photo count */}
      <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5">
        <span className="label-mono bg-ink/60 px-2 py-1 text-white/85 backdrop-blur-sm">{project.category}</span>
        {project.images.length > 1 && (
          <span className="label-mono tabular flex items-center gap-1.5 bg-ink/60 px-2 py-1 text-white/85 backdrop-blur-sm">
            <Images className="h-3.5 w-3.5" />
            {project.images.length}
          </span>
        )}
      </div>

      {/* Bottom: title + location */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 lg:p-6">
        <div>
          <h3
            className={cn(
              "font-display font-semibold uppercase leading-[0.95] text-white",
              featured ? "text-4xl lg:text-6xl" : "text-3xl"
            )}
          >
            {project.title}
          </h3>
          {project.location && (
            <p className="mt-2 line-clamp-1 text-sm text-white/65">{project.location}</p>
          )}
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-remington-orange text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </button>
  );
}
