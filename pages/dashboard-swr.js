import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

export default function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div className="m-4 p-2 bg-pink-100 rounded text-gray-700">
      <h1 className="text-2xl">Dashboard</h1>
      <hr />
      <h2>{data.posts} posts</h2>
      <h2>{data.likes} likes</h2>
      <h2>{data.followers} followers</h2>
      <h2>{data.following} following</h2>
    </div>
  );
}
