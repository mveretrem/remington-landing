"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { PROJECTS, PROJECT_CATEGORIES, type Project, type ProjectCategoryName } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategoryName;
const FILTERS: Filter[] = ["All", ...PROJECT_CATEGORIES];

export function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );
  const withPhotos = visible.filter((p) => p.images.length > 0);
  const withoutPhotos = visible.filter((p) => p.images.length === 0);
  const countFor = (f: Filter) => (f === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === f).length);

  return (
    <section id="projects" className="bg-paper pb-24 lg:pb-36">
      <Container className="max-w-[90rem]">
        <div className="border-t border-ink/15 pt-24 lg:pt-36">
          {/* Header */}
          <Reveal className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="label-mono mb-6 text-stone">(02) Selected work</p>
              <h2 className="font-display text-6xl font-semibold uppercase leading-[0.88] text-ink lg:text-8xl">
                Our projects
                <sup className="tabular ml-2 align-top font-mono text-lg font-normal text-remington-orange lg:text-2xl">
                  {PROJECTS.length}
                </sup>
              </h2>
            </div>
            <p className="max-w-sm text-ink/60 lg:col-span-4 lg:justify-self-end">
              Dormitories, historic co-ops, resort hotels, and military housing. Tap a project for the full scope.
            </p>
          </Reveal>

          {/* Filter pills */}
          <div role="tablist" aria-label="Filter projects by sector" className="mb-10 flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  "flex items-center gap-2 border px-4 py-2 text-sm font-medium transition-all active:scale-[0.98]",
                  filter === f
                    ? "border-ink bg-ink text-white"
                    : "border-ink/20 text-ink/70 hover:border-ink hover:text-ink"
                )}
              >
                {f}
                <span className={cn("tabular font-mono text-xs", filter === f ? "text-remington-orange" : "text-stone")}>
                  {countFor(f)}
                </span>
              </button>
            ))}
          </div>

          {/* Photo grid */}
          <div key={filter} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {withPhotos.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                featured={i === 0}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>

          {/* Projects without photography yet */}
          {withoutPhotos.length > 0 && (
            <div className="mt-20">
              <div className="mb-4 flex items-baseline justify-between">
                <h3 className="label-mono text-stone">More projects</h3>
                <span className="label-mono tabular text-stone">{withoutPhotos.length} projects</span>
              </div>
              <ul className="border-t border-ink/15">
                {withoutPhotos.map((project) => (
                  <li key={project.slug} className="border-b border-ink/15">
                    <button
                      onClick={() => setSelected(project)}
                      className="group grid w-full grid-cols-[1fr_auto] gap-x-6 gap-y-2 py-6 text-left transition-colors hover:bg-ink/[0.03] md:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)_auto] md:px-2"
                    >
                      <span>
                        <span className="block font-display text-2xl font-semibold uppercase leading-tight text-ink md:text-3xl">
                          {project.title}
                        </span>
                        <span className="label-mono mt-1 block text-stone">
                          {[project.category, project.location].filter(Boolean).join(" · ")}
                        </span>
                      </span>
                      {project.scope && (
                        <span className="col-span-2 line-clamp-2 text-sm leading-relaxed text-ink/60 md:col-span-1 md:row-start-1 md:col-start-2">
                          {project.scope}
                        </span>
                      )}
                      <ArrowUpRight className="col-start-2 row-start-1 h-5 w-5 self-start text-ink/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-remington-orange md:col-start-3" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>

      <ProjectModal key={selected?.slug} project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
