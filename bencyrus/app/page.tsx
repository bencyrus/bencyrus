import Image from "next/image";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { LuArrowRight, LuMail } from "react-icons/lu";

export default function HomePage() {
  return (
    <div className="p-[36px] flex flex-col gap-[60px]">
      <HomePageHeader />
      <HomePageProjects />
      <HomePageBlogPosts />
    </div>
  );
}

function LocationBadge() {
  return (
    <div className="flex flex-row items-center gap-[8px] bg-neutral-700 rounded-xl px-[12px] py-[8px]">
      <div className="text-[16px]">
        <CiLocationOn />
      </div>
      <div className="text-[16px]">Toronto, Canada</div>
    </div>
  );
}

function MoreAboutMeButton() {
  return (
    <Link href="/about">
      <div className="text-[14px] font-light flex items-center gap-[4px] bg-neutral-700 rounded-xl px-[20px] py-[8px] w-fit cursor-pointer">
        <span>Read more about me</span>
        <GoArrowUpRight />
      </div>
    </Link>
  );
}

function GetInTouchButton() {
  return (
    <Link href="/contact">
      <div className="text-[14px] font-light flex items-center gap-[4px] rounded-xl px-[20px] py-[8px] w-fit border border-neutral-700 cursor-pointer">
        <span>Feel free to get in touch</span>
        <LuMail />
      </div>
    </Link>
  );
}

function HomePageHeader() {
  return (
    <div>
      <h1 className="text-[40px] font-bold">Ben Cyrus</h1>
      <div className="flex gap-[12px] md:items-center md:flex-row flex-col items-start">
        <h2 className="text-[40px] font-normal text-violet-400">
          Software Engineer
        </h2>
        <LocationBadge />
      </div>
      <div className="text-[16px] text-neutral-400 flex flex-col gap-[12px] mt-[28px]">
        <p>I'm Ben. I'm a Software Engineer based in Toronto.</p>
        <p>
          I have been building software for the past three years and have done a
          fair bit of full-stack work. Currently building Glovee, a CRM for
          immigration consultants, with two of my friends.
        </p>
        <p>
          Besides software, I enjoy portrait photography and playing badminton.
        </p>
      </div>
      <div className="mt-[28px] flex gap-[22px] flex-col md:flex-row">
        <MoreAboutMeButton />
        <GetInTouchButton />
      </div>
    </div>
  );
}

function HomePageProjects() {
  return (
    <div>
      <h3 className="text-[20px] font-medium">Selected Projects</h3>
      <div className="flex gap-[24px] mt-[20px] flex-col md:flex-row">
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
    </div>
  );
}

function HomePageBlogPosts() {
  return (
    <div>
      <h3 className="text-[20px] font-medium">Selected Blog Posts</h3>
      <div className="flex gap-[32px] mt-[20px] flex-col">
        <BlogPostCard
          title="Why I left my job to start a business"
          description="I left my job to start a business. So should you. Here's why."
          date="Oct 2024"
          blogPostUrl="/blog/post-1"
        />
        <hr className="border-neutral-700 border-dashed w-full" />
        <BlogPostCard
          title="How I built a business in 3 months"
          description="I built a business in 3 months. Here's how I did it."
          date="Oct 2024"
          blogPostUrl="/blog/post-2"
        />
      </div>
    </div>
  );
}

interface ProjectCardProps {
  imageSrc: string;
  title: string;
  startDate: string;
  endDate: string;
  projectUrl: string;
}

function ProjectCard({
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

interface BlogPostCardProps {
  title: string;
  description: string;
  date: string;
  blogPostUrl: string;
}

function BlogPostCard({
  title,
  description,
  date,
  blogPostUrl,
}: BlogPostCardProps) {
  return (
    <div className="flex flex-col gap-[12px]">
      <Link href={blogPostUrl} className="w-fit">
        <h4 className="text-[16px] text-neutral-100">{title}</h4>
      </Link>
      <p className="text-[14px] text-neutral-400">{description}</p>
      <div className="flex flex-row justify-between">
        <span className="text-[12px] text-neutral-400">{date}</span>
        <Link
          href={blogPostUrl}
          className="text-[12px] text-neutral-400 flex items-center gap-[4px]"
        >
          <span>Read more</span>
          <LuArrowRight />
        </Link>
      </div>
    </div>
  );
}
