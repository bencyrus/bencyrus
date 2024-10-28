import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";

interface BlogPostCardProps {
  title: string;
  description: string;
  date: string;
  blogPostUrl: string;
}

export default function BlogPostCard({
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
