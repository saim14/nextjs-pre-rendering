import React from "react";
import User from "../components/user";

export default function UserList({ users }) {
  return (
    <div className="bg-blue-500 -mt-2">
      <h1 className="text-3xl m-2 p-2 text-white">List of Users</h1>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
}

// This code run only on the server side.
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
