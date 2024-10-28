import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import { LuGithub, LuInstagram } from "react-icons/lu";

import { SocialType } from "@/contracts/types";

interface SocialButtonProps {
  social: SocialType;
}

export default function SocialButton({ social }: SocialButtonProps) {
  const socialIcon =
    social.name === "LinkedIn" ? (
      <FaLinkedin className="text-[#0077b5]" />
    ) : social.name === "Instagram" ? (
      <LuInstagram className="text-[#e4405f]" />
    ) : social.name === "GitHub" ? (
      <LuGithub />
    ) : null;

  return (
    <Link
      href={social.url}
      className="bg-neutral-700/80 rounded-md p-[8px] w-full flex flex-row items-center justify-center gap-[8px]"
      target="_blank"
    >
      <span className="text-[32px]">{socialIcon}</span>
      <span className="font-medium text-[18px]">{social.name}</span>
    </Link>
  );
}
