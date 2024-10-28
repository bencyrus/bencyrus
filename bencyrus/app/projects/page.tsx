import { ProjectType } from "@/contracts/types";
import projects from "@/data/projects.json";
import ProjectCard from "@/components/project-card";
import PageFooter from "@/components/page-footer";

export default function ProjectsPage() {
  const sortedProjects = projects.sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <div className="md:p-[36px] flex flex-col gap-[40px] p-[24px]">
      <ProjectsPageHeader />
      <Projects projects={sortedProjects} />
      <PageFooter />
    </div>
  );
}

function ProjectsPageHeader() {
  return (
    <div className="flex flex-col gap-[8px]">
      <h1 className="text-[36px] font-bold">Projects</h1>
      <span className="text-neutral-400">
        Some of the projects I have been working on.
      </span>
    </div>
  );
}

interface ProjectsProps {
  projects: ProjectType[];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-[36px] md:gap-[24px]">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}
