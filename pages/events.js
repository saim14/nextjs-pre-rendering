import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";

export default function EventList({ eventList }) {
  const [events, setEvents] = useState(eventList);
  const router = useRouter();
  const fetchSportsEvents = async () => {
    const response = await fetch(
      "http://localhost:4000/events?category=sports"
    );
    const data = await response.json();
    setEvents(data);
    router.push("/events?category=sports", undefined, { shallow: true });
  };
  return (
    <>
      <button
        className="bg-green-500 rounded p-2 m-4"
        onClick={fetchSportsEvents}
      >
        Sports Events
      </button>
      <h1>List of event</h1>
      {events.map((event) => (
        <div key={event.id}>
          <p>{event.id}</p>
          <p>{event.title}</p>
          <p>{event.description}</p>
          <p>{event.date}</p>
          <p>{event.category}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  const { category } = query;
  const queryString = category ? "category=sports" : "";
  const response = await fetch(`http://localhost:4000/events?${queryString}`);
  const data = await response.json();
  return {
    props: {
      eventList: data,
    },
  };
}
