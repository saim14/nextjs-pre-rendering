import React from "react";

export default function User({ user }) {
  return (
    <div className="bg-blue-100 my-2 px-4 py-2" key={user.id}>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  );
}
