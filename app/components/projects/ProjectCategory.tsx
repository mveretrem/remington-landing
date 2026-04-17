'use client';

import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { PROJECTS_CONTENT } from "@/lib/constants";

type Project = typeof PROJECTS_CONTENT.categories[number]['projects'][number];

interface ProjectCategoryProps {
  name: string;
  projects: readonly Project[];
}

export function ProjectCategory({ name, projects }: ProjectCategoryProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="mb-12">
        {/* Category Name */}
        <h3 className="mb-6 text-2xl font-bold text-gray-900">{name}</h3>

        {/* Projects Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              showViewMore={'showViewMore' in project ? project.showViewMore : false}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
