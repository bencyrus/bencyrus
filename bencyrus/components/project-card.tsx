import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  startDate: string;
  endDate: string;
  projectUrl: string;
}

export function ProjectCard({
  imageSrc,
  title,
  startDate,
  endDate,
  projectUrl,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl w-full border border-neutral-700">
      <Link href={projectUrl}>
        <div>
          <Image
            src={imageSrc}
            alt=""
            width={0}
            height={0}
            layout="responsive"
            className="rounded-t-xl"
          />
        </div>
        <div className="p-[12px]">
          <h4 className="text-[16px] text-neutral-100">{title}</h4>
          <span className="text-[12px] text-neutral-400">
            {startDate} - {endDate}
          </span>
        </div>
      </Link>
    </div>
  );
}
