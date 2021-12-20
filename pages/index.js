import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>React prerendering</h1>
      <Link href="/users">
        <a>Go to users</a>
      </Link>
      <br />
      <Link href="/posts">
        <a>Go to posts</a>
      </Link>
      <br />
      <Link href="/products">
        <a>Go to products</a>
      </Link>
    </div>
  );
}
