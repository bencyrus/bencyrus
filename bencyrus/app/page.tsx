import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { LuMail } from "react-icons/lu";

import blogPosts from "@/data/blog-posts.json";
import projects from "@/data/projects.json";
import ProjectCard from "@/components/project-card";
import BlogPostCard from "@/components/blog-post-card";
import PageFooter from "@/components/page-footer";

export default function HomePage() {
  return (
    <div className="md:p-[36px] flex flex-col gap-[60px] p-[24px]">
      <HomePageHeader />
      <HomePageProjects />
      <HomePageBlogPosts />
      <PageFooter />
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
  const featuredProjects = projects
    .filter((project) => project.featured)
    .sort(
      (a, b) =>
        new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    );

  return (
    <div>
      <h3 className="text-[20px] font-medium">Selected Projects</h3>
      <div className="flex gap-[24px] mt-[20px] flex-col md:flex-row">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}

function HomePageBlogPosts() {
  const featuredBlogPosts = blogPosts
    .filter((post) => post.featured)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      <h3 className="text-[20px] font-medium">Selected Blog Posts</h3>
      <div className="flex gap-[32px] mt-[20px] flex-col">
        {featuredBlogPosts.map((post, index) => (
          <>
            <BlogPostCard key={post.title} blogPost={post} />
            {index !== featuredBlogPosts.length - 1 && (
              <hr className="border-neutral-700 border-dashed w-full" />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
