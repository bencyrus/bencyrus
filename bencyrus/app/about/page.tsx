import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="md:p-[36px] flex flex-col gap-[60px] p-[24px]">
      <AboutPageHeader />
      <Experiences />
      <Education />
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

function Experiences() {
  return (
    <div>
      <h3 className="text-[24px] font-medium">Experience</h3>
      <div className="flex gap-[42px] mt-[20px] flex-col">
        {workExperience.map((experience, index) => (
          <>
            <ExperienceCard
              key={experience.company}
              title={experience.title}
              company={experience.company}
              startDate={experience.startDate}
              endDate={experience.endDate}
              descriptionItems={experience.descriptionItems}
              skills={experience.skills}
              companyUrl={experience.companyUrl}
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
          <EducationCard
            key={education.school}
            school={education.school}
            degree={education.degree}
            startDate={education.startDate}
            endDate={education.endDate}
            schoolUrl={education.schoolUrl}
          />
        ))}
      </div>
    </div>
  );
}

interface ExperienceCardProps {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  descriptionItems: string[];
  skills: string[];
  companyUrl: string;
}

function ExperienceCard({
  title,
  company,
  startDate,
  endDate,
  descriptionItems,
  skills,
  companyUrl,
}: ExperienceCardProps) {
  return (
    <div className="flex gap-[22px]">
      <div className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]">
        <Image
          src={companyUrl}
          alt={company}
          width={0}
          height={0}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full">
        <h3 className="text-[18px] font-medium">{title}</h3>
        <div className="flex flex-col gap-[4px]">
          <span className="text-[16px] text-neutral-400 mt-[6px]">
            {company}
          </span>
          <span className="text-[14px] text-neutral-400">
            {startDate} - {endDate}
          </span>
        </div>
        <ul className="text-[16px] text-neutral-100 flex flex-col gap-[12px] mt-[28px] list-disc pl-[40px] font-light">
          {descriptionItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-[12px] mt-[28px]">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-[16px] text-neutral-100 font-bold"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface EducationCardProps {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  schoolUrl: string;
}

function EducationCard({
  school,
  degree,
  startDate,
  endDate,
  schoolUrl,
}: EducationCardProps) {
  return (
    <div className="flex gap-[22px]">
      <div className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]">
        <Image
          src={schoolUrl}
          alt={school}
          width={0}
          height={0}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-full">
        <div className="flex flex-col gap-[0px]">
          <h3 className="text-[18px] font-medium">{school}</h3>
          <span className="text-[16px] text-neutral-400">{degree}</span>
          <span className="text-[14px] text-neutral-400">
            {startDate} - {endDate}
          </span>
        </div>
      </div>
    </div>
  );
}

const workExperience = [
  {
    company: "GreenShield",
    title: "QA Automation Engineer III",
    startDate: "Jan 2024",
    endDate: "Present",
    descriptionItems: [
      "Architected a highly configurable test automation framework for our Mental Health product, using JSON toselect validations dynamically",
      "Took ownership of the Practitioner Portal QA, conducted regular analysis, and reduced regression testingtime from 12 to 6 hours by collaboratively rewriting the regression suite to follow a more efficient flow.",
      "Documented our collaborations with development and QA teams, promoting use of consistent test identifiers, configurable test frameworks for multiple languages, and white-label clients.",
    ],
    skills: [
      "Cypress",
      "Java",
      "Selenium",
      "GitHub Actions",
      "Docker",
      "Test Automation",
      "Manual Testing",
    ],
    companyUrl: "/assets/image/greenshield_logo.jpeg",
  },
  {
    company: "Glovee",
    title: "Software Engineer - Co-Founder",
    startDate: "Sep 2023",
    endDate: "Present",
    descriptionItems: [
      "Led a 3-person team through product discovery and development, building a CRM for immigration consultants to centralize client management and communication.",
      "Built a modular monolith backend using Golang and PL/pgSQL, and developed a form template builder with NextJS and browser APIs.",
      "Refactored the frontend through reusable components, reducing code duplication, tightening form validation, and optimizing search functionality.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Product Management",
      "Strategic Planning",
    ],
    companyUrl: "/assets/image/glovee_logo.jpeg",
  },
  {
    company: "QA Consultants",
    title: "QA Automation Engineer",
    startDate: "Mar 2023",
    endDate: "Dec 2023",
    descriptionItems: [
      "Enhanced efficiency by developing robust automation frameworks using Selenium and Cypress.",
      "Integrated frameworks with GitHub Actions, Jenkins, and Docker for CI/CD.",
      "Increased test coverage and adherence to quality standards by creating and executing comprehensive test plans.",
    ],
    skills: [
      "Python",
      "Selenium",
      "Cypress",
      "Postman",
      "JMeter",
      "GitHub Actions",
      "Jenkins",
      "Test Automation",
    ],
    companyUrl: "/assets/image/qa_consultants_logo.jpeg",
  },
  {
    company: "Yuhu Inc.",
    title: "Software Engineer Intern",
    startDate: "Apr 2022",
    endDate: "Oct 2022",
    descriptionItems: [
      "Optimized codebase by building functions to handle common query combinations and PDF mapping, resulting in enhanced consistency, speeding up customer onboarding, and reducing files from 1000+ to under 300 lines.",
      "Onboarded multi-family properties by implementing their lease agreements in Rails modules, handled code reviews and bug fixes and worked with onboarding specialists to improve reliability and resolve customer issues.",
    ],
    skills: [
      "Ruby on Rails",
      "JavaScript",
      "React",
      "SQL",
      "MongoDB",
      "Git",
      "Linux",
      "CircleCI",
      "Docker",
      "Jira",
    ],
    companyUrl: "/assets/image/yuhu_inc_logo.jpeg",
  },
  {
    company: "Independent Contractor (Freelance)",
    title: "Financial Portfolio Manager",
    startDate: "Mar 2018",
    endDate: "Jan 2021",
    descriptionItems: [
      "Financial analysis based on macroeconomic factors, government policies, and market behavior.",
      "Developed risk management strategies using technical and fundamental analysis, and financial derivatives.",
      "Collaborated with investment managers to create an options trading arbitrage algorithm.",
    ],
    skills: [
      "Portfolio Management",
      "Python",
      "NumPy",
      "Data Analysis",
      "Financial Analysis",
    ],
    companyUrl: "/assets/image/default_company_logo.png",
  },
];

const education = [
  {
    school: "Seneca College",
    degree: "Computer Programming Diploma",
    startDate: "Jan 2022",
    endDate: "Apr 2023",
    location: "Toronto, Canada",
    schoolUrl: "/assets/image/seneca_college_logo.jpeg",
  },
];
