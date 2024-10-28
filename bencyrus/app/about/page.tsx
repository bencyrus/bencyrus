import Image from "next/image";

import { WorkExperienceType } from "@/contracts/types";
import workExperience from "@/data/work-experience.json";
import education from "@/data/education.json";
import PageFooter from "@/components/page-footer";
import WorkExperienceCard from "@/components/work-experience-card";
import EducationCard from "@/components/education-card";

export default function AboutPage() {
  return (
    <div className="md:p-[36px] flex flex-col gap-[60px] p-[24px]">
      <AboutPageHeader />
      <WorkExperience workExperience={workExperience} />
      <Education />
      <PageFooter />
    </div>
  );
}

function AboutPageHeader() {
  return (
    <div className="flex flex-col md:flex-row gap-[24px]">
      <div>
        <h1 className="text-[40px] font-bold">Ben Cyrus</h1>
        <h2 className="text-[40px] font-normal text-neutral-400">
          Software Engineer
        </h2>
        <div className="text-[16px] text-neutral-400 flex flex-col gap-[12px] mt-[28px]">
          <p>I'm Ben. I'm a Software Engineer based in Toronto.</p>
          <p>
            I have been building software for the past three years and have done
            a fair bit of full-stack work. Currently building Glovee, a CRM for
            immigration consultants, with two of my friends.
          </p>
          <p>
            Besides software, I enjoy portrait photography and playing
            badminton.
          </p>
        </div>
      </div>
      <div className="max-w-[250px] mx-auto">
        <Image
          src="/assets/image/profile-picture.jpeg"
          alt=""
          width={0}
          height={0}
          layout="responsive"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

interface WorkExperienceProps {
  workExperience: WorkExperienceType[];
}

function WorkExperience({ workExperience }: WorkExperienceProps) {
  return (
    <div>
      <h3 className="text-[24px] font-medium">Experience</h3>
      <div className="flex gap-[42px] mt-[20px] flex-col">
        {workExperience.map((experience, index) => (
          <>
            <WorkExperienceCard
              key={experience.company}
              workExperience={experience}
            />
            {index !== workExperience.length - 1 && (
              <hr className="border-neutral-700 border-dashed" />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

function Education() {
  return (
    <div>
      <h3 className="text-[24px] font-medium">Education</h3>
      <div className="flex gap-[42px] mt-[20px] flex-col">
        {education.map((education) => (
          <EducationCard key={education.school} education={education} />
        ))}
      </div>
    </div>
  );
}
