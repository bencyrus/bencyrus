"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import { LuHome } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { LuPencil } from "react-icons/lu";
import { PiToolbox } from "react-icons/pi";
import { LuMail } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClickItem() {
    setIsOpen(false);
  }

  return (
    <div className="bg-neutral-900 absolute top-0 left-0 w-full">
      <div className="flex items-center justify-between p-[8px]">
        <div className="w-[50px] h-[50px]">
          <Image
            src="/assets/image/profile-picture.jpeg"
            alt="profile picture"
            width={0}
            height={0}
            className="w-full rounded-md"
          />
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          {isOpen ? (
            <MdClose className="text-[24px]" />
          ) : (
            <FaBars className="text-[24px]" />
          )}
        </div>
      </div>
      <NavbarContent isOpen={isOpen} onClickItem={handleClickItem} />
    </div>
  );
}

interface NavbarContentProps {
  isOpen: boolean;
  onClickItem: () => void;
}

function NavbarContent({ isOpen, onClickItem }: NavbarContentProps) {
  return (
    <div
      className={`flex flex-col px-[16px] pb-[24px] relative h-[100svh] ${
        !isOpen && "hidden"
      }`}
    >
      <NavbarMenuItems onClick={onClickItem} />
      <NavbarSocials onClick={onClickItem} />
    </div>
  );
}

interface NavbarMenuItemsProps {
  onClick: () => void;
}

function NavbarMenuItems({ onClick }: NavbarMenuItemsProps) {
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
        <Link href={item.path} key={item.label} onClick={onClick}>
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

interface NavbarSocialsProps {
  onClick: () => void;
}

function NavbarSocials({ onClick }: NavbarSocialsProps) {
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
          <Link
            href={item.link}
            key={item.link}
            target="_blank"
            onClick={onClick}
          >
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
