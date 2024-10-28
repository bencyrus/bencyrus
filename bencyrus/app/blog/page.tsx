import { BlogPostType } from "@/contracts/types";
import blogPosts from "@/data/blog-posts.json";
import BlogPostCard from "@/components/blog-post-card";
import PageFooter from "@/components/page-footer";

export default function BlogPage() {
  const sortedBlogPosts = blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="md:p-[36px] flex flex-col gap-[40px] p-[24px]">
      <BlogPageHeader />
      <BlogPosts blogPosts={sortedBlogPosts} />
      <PageFooter />
    </div>
  );
}

function BlogPageHeader() {
  return (
    <div className="flex flex-col gap-[8px]">
      <h1 className="text-[36px] font-bold">Blog</h1>
      <span className="text-neutral-400">
        Some of my thoughts and experiences.
      </span>
    </div>
  );
}

interface BlogPostsProps {
  blogPosts: BlogPostType[];
}

function BlogPosts({ blogPosts }: BlogPostsProps) {
  return (
    <div className="flex gap-[32px] flex-col">
      {blogPosts.map((blogPost, index) => (
        <>
          <BlogPostCard key={blogPost.title} blogPost={blogPost} />
          {index !== blogPosts.length - 1 && (
            <hr className="border-neutral-700 border-dashed w-full" />
          )}
        </>
      ))}
    </div>
  );
}
