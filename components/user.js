import React from "react";

export default function User({ user }) {
  return (
    <div key={user.id}>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <hr />
    </div>
  );
}
