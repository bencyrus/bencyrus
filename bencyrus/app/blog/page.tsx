import Link from "next/link";

export default function BlogPage() {
  return (
    <div>
      <h1>Blog</h1>
      <div>
        Back to <Link href="/">Home</Link>
      </div>
    </div>
  );
}
