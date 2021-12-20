import React from "react";
import User from "../components/user";

export default function UserList({ users }) {
  return (
    <div>
      <h1>List of Users</h1>
      <hr />
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
}
