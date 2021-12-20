import Link from "next/link";
import React from "react";

export default function Post({ post }) {
  return (
    <div>
      <h2 className="text-lg">
        {post.id} - {post.title}
      </h2>
      <p className="text-sm">{post.body}</p>
      <Link href="/posts">
        <a className="text-sm mt-2 text-blue-500">Back to posts</a>
      </Link>
    </div>
  );
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post) => ({ params: { postId: `${post.id}` } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
}
