"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { LuHome, LuPencil, LuMail } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { PiToolbox } from "react-icons/pi";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-[220px] h-[100svh] py-[16px] px-[12px] bg-neutral-900">
      <SidebarHeader />
      <SidebarBodyMenuItems />
      <SidebarSocials />
    </div>
  );
}

function SidebarHeader() {
  return (
    <div className="flex flex-row items-center justify-start gap-[12px]">
      <div className="">
        <Image
          src="/assets/image/profile-picture.jpeg"
          alt="logo"
          width={50}
          height={50}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <div className="text-[18px] font-semiold text-white">Ben Cyrus</div>
        <div className="text-[14px] font-light text-neutral-400">
          Software Engineer
        </div>
      </div>
    </div>
  );
}

function SidebarBodyMenuItems() {
  const menuItems = [
    {
      icon: <LuHome />,
      label: "Homepage",
      path: "/",
    },
    {
      icon: <IoPersonOutline />,
      label: "About",
      path: "/about",
    },
    {
      icon: <LuPencil />,
      label: "Blog",
      path: "/blog",
    },
    {
      icon: <PiToolbox />,
      label: "Projects",
      path: "/projects",
    },
    {
      icon: <LuMail />,
      label: "Contact",
      path: "/contact",
    },
  ];

  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <div className="mt-[16px] flex flex-col gap-[4px] text-neutral-400">
      {menuItems.map((item) => (
        <Link href={item.path} key={item.label}>
          <div
            key={item.label}
            className={`flex flex-row items-center justify-start gap-[12px] py-[6px] px-[12px] cursor-pointer ${
              isActive(item.path) ? "text-white bg-neutral-700 rounded-xl" : ""
            }`}
          >
            <div className="text-[20px]">{item.icon}</div>
            <div className="text-[16px]">{item.label}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

function SidebarSocials() {
  const socials = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/bencyrus",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/bencyrus/",
    },
    {
      icon: <FaInstagram />,
      label: (
        <div>
          <span>Instagram</span>{" "}
          <span className="text-[12px]">(Portraits)</span>
        </div>
      ),
      link: "https://www.instagram.com/bybencyrus/",
    },
  ];

  return (
    <div className="mt-[20px] text-neutral-400">
      <div className="text-[14px] font-light mb-[8px]">Socials</div>
      <div className="flex flex-col gap-[4px]">
        {socials.map((item) => (
          <Link href={item.link} key={item.link} target="_blank">
            <div className="flex flex-row items-center justify-start gap-[12px] px-[12px] py-[8px] cursor-pointer">
              <div className="text-[20px]">{item.icon}</div>
              <div className="text-[16px]">{item.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
