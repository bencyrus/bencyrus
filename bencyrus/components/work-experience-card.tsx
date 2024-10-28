import Image from "next/image";

import { WorkExperienceType } from "@/contracts/types";

interface WorkExperienceCardProps {
  workExperience: WorkExperienceType;
}

export default function WorkExperienceCard({
  workExperience,
}: WorkExperienceCardProps) {
  return (
    <div>
      <div className="flex gap-[22px]">
        <div className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]">
          <Image
            src={workExperience.companyUrl}
            alt={workExperience.company}
            width={0}
            height={0}
            className="w-full rounded-md"
          />
        </div>
        <div className="w-full">
          <h3 className="text-[18px] font-medium">{workExperience.title}</h3>
          <div className="flex flex-col gap-[4px]">
            <span className="text-[16px] text-neutral-400 mt-[6px]">
              {workExperience.company}
            </span>
            <span className="text-[14px] text-neutral-400">
              {workExperience.startDate} - {workExperience.endDate}
            </span>
          </div>
          <div className="hidden md:flex flex-col gap-[28px] mt-[28px]">
            <ExperienceCardDescription
              descriptionItems={workExperience.descriptionItems}
            />
            <ExperienceCardSkills skills={workExperience.skills} />
          </div>
        </div>
      </div>
      <div className="md:hidden mt-[28px] flex flex-col gap-[28px]">
        <ExperienceCardDescription
          descriptionItems={workExperience.descriptionItems}
        />
        <ExperienceCardSkills skills={workExperience.skills} />
      </div>
    </div>
  );
}

function ExperienceCardDescription({
  descriptionItems,
}: {
  descriptionItems: string[];
}) {
  return (
    <ul className="text-[16px] text-neutral-100 flex flex-col gap-[12px] list-disc pl-[40px] font-light">
      {descriptionItems.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function ExperienceCardSkills({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-[12px]">
      {skills.map((skill) => (
        <span key={skill} className="text-[16px] text-neutral-100 font-bold">
          {skill}
        </span>
      ))}
    </div>
  );
}
