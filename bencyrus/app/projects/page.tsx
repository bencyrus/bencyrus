import { ProjectCard } from "@/components/project-card";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="md:p-[36px] flex flex-col gap-[60px] p-[24px]">
      <ProjectsHeader />
      <Projects />
    </div>
  );
}

function ProjectsHeader() {
  return (
    <div className="flex flex-col gap-[8px]">
      <h1 className="text-[36px] font-bold">Projects</h1>
      <span className="text-neutral-400">
        Some of the projects I have been working on.
      </span>
    </div>
  );
}

function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-[36px] md:gap-[24px]">
      <ProjectCard
        title="Glovee - CRM for Immigration Consultants"
        imageSrc="/assets/image/glovee-project-thumbnail.png"
        startDate="Sep 2023"
        endDate="Ongoing"
        projectUrl="/projects/glovee"
      />
      <ProjectCard
        title="JayPlus - Business management platform for car detailing businesses"
        imageSrc="/assets/image/jayplus-project-thumbnail.png"
        startDate="Oct 2022"
        endDate="Feb 2023"
        projectUrl="/projects/jayplus"
      />
    </div>
  );
}
