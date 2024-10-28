import Image from "next/image";
import { EducationType } from "@/contracts/types";

interface EducationCardProps {
  education: EducationType;
}

export default function EducationCard({ education }: EducationCardProps) {
  return (
    <div className="flex gap-[22px]">
      <div className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]">
        <Image
          src={education.schoolUrl}
          alt={education.school}
          width={0}
          height={0}
          className="w-full rounded-md"
        />
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-[0px]">
          <h3 className="text-[18px] font-medium">{education.school}</h3>
          <span className="text-[16px] text-neutral-400">
            {education.degree}
          </span>
          <span className="text-[14px] text-neutral-400">
            {education.startDate} - {education.endDate}
          </span>
        </div>
      </div>
    </div>
  );
}
