import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className="">Home</h1>
      <p>Hello World! This is the Home page</p>
      <p>
        Visit the <Link href="/about">About</Link> page.
      </p>
    </div>
  );
}
