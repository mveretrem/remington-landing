import { Container } from "../ui/container";
import { ProjectCategory } from "./ProjectCategory";
import { PROJECTS_CONTENT } from "@/lib/constants";

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-16 lg:py-24">
      <Container>
        {/* Main Heading */}
        <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 lg:text-5xl">
          {PROJECTS_CONTENT.heading}
        </h2>

        {/* Categories */}
        <div>
          {PROJECTS_CONTENT.categories.map((category) => (
            <ProjectCategory
              key={category.id}
              name={category.name}
              projects={category.projects}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
