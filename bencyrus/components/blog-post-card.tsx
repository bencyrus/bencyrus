import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

import { BlogPostType } from "@/contracts/types";

interface BlogPostCardProps {
  blogPost: BlogPostType;
}

export default function BlogPostCard({ blogPost }: BlogPostCardProps) {
  return (
    <div className="flex flex-col gap-[12px]">
      <Link href={blogPost.blogPostUrl} className="w-fit">
        <h4 className="text-[16px] text-neutral-100">{blogPost.title}</h4>
      </Link>
      <p className="text-[14px] text-neutral-400">{blogPost.description}</p>
      <div className="flex flex-row justify-between">
        <span className="text-[12px] text-neutral-400">{blogPost.date}</span>
        <Link
          href={blogPost.blogPostUrl}
          className="text-[12px] text-neutral-400 flex items-center gap-[4px]"
        >
          <span>Read more</span>
          <LuArrowRight />
        </Link>
      </div>
    </div>
  );
}
