import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
import { GoArrowUpRight } from "react-icons/go";
import { LuMail } from "react-icons/lu";

export default function HomePage() {
  return (
    <div className="p-[36px]">
      <HomePageHeader />
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
      <div className="mt-[28px] flex gap-[12px]">
        <MoreAboutMeButton />
        <GetInTouchButton />
      </div>
    </div>
  );
}

function HomePageProjects() {
  return <div>Projects</div>;
}

function HomePageBlogPosts() {
  return <div>Blog Posts</div>;
}
