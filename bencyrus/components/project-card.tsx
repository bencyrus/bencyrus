import Image from "next/image";
import Link from "next/link";

import { ProjectType } from "@/contracts/types";

interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-xl w-full border border-neutral-700">
      <Link href={project.projectUrl}>
        <div>
          <Image
            src={project.imageSrc}
            alt=""
            width={0}
            height={0}
            layout="responsive"
            className="rounded-t-xl"
          />
        </div>
        <div className="p-[12px]">
          <h4 className="text-[16px] text-neutral-100">{project.title}</h4>
          <span className="text-[12px] text-neutral-400">
            {project.startDate} - {project.endDate}
          </span>
        </div>
      </Link>
    </div>
  );
}
