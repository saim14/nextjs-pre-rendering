import React from "react";
import Link from "next/link";

export default function PostList({ posts }) {
  return (
    <div>
      <h1 className="text-2xl mb-4">Posts</h1>
      <hr />
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <p className="cursor-pointer">
              [{post.id}] {post.title}
            </p>
          </Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
}
