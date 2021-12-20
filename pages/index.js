import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>React prerendering</h1>
      <Link href="/users">
        <a>
          Go to <span className="text-blue-600 underline">users</span>
        </a>
      </Link>
      <br />
      <Link href="/posts">
        <a>
          Go to <span className="text-blue-600 underline">posts</span>
        </a>
      </Link>
      <br />
      <Link href="/products">
        <a>
          Go to <span className="text-blue-600 underline">products</span>
        </a>
      </Link>
      <br />
      <Link href="/news">
        <a>
          Go to <span className="text-blue-600 underline">news</span>
        </a>
      </Link>
      <br />
      <Link href="/dashboard">
        <a>
          Go to <span className="text-blue-600 underline">dashboard</span>
        </a>
      </Link>

      <br />
      <Link href="/events">
        <a>
          Go to <span className="text-blue-600 underline">events</span>
        </a>
      </Link>
    </div>
  );
}
