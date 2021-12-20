import React from "react";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      const response = await fetch("http://localhost:4000/dashboard");
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    }

    fetchDashboardData();
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="m-4 p-2 bg-pink-100 rounded text-gray-700">
      <h1 className="text-2xl">Dashboard</h1>
      <hr />
      <h2>{dashboardData.posts} posts</h2>
      <h2>{dashboardData.likes} likes</h2>
      <h2>{dashboardData.followers} followers</h2>
      <h2>{dashboardData.following} following</h2>
    </div>
  );
}
