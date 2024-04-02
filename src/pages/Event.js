// import { Link } from "react-router-dom";

// const DUMMY_EVENTS = [
//   {
//     id: "e1",
//     title: "Some event",
//   },
//   {
//     id: "e2",
//     title: "Another event",
//   },
// ];

// function EventsPage() {
//   return (
//     <>
//       <h1>EventsPage</h1>
//       <ul>
//         {DUMMY_EVENTS.map((event) => (
//           <li key={event.id}>
//             <Link to={event.id}>{event.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default EventsPage;

import { useEffect, useState } from "react";

import EventsList from "../components/EventsList";

function EventsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    // We can make the fetch data accessible to all sibling using the loader() from RRD
    async function fetchEvents() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/events");

      if (!response.ok) {
        setError("Fetching events failed.");
      } else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);
    }

    fetchEvents();
  }, []);
  return (
    <>
      <div style={{ textAlign: "center" }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </div>
      {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    </>
  );
}
export default EventsPage;

// We can make the fetch data accessible to all sibling using the loader() from react-router-dom

// import React from "react";
// import { useLoaderData } from "react-router-dom";
// import EventsList from "../components/EventsList";

// function EventsPage() {
//   const { data, error } = useLoaderData();

//   if (error) {
//     return <p>{error.message}</p>;
//   }

//   if (!data) {
//     return <p>Loading...</p>;
//   }

//   const events = data.events;

//   return <EventsList events={events} />;
// }

// export default EventsPage;

// export async function loader() {
//   const response = await fetch('http://localhost:8080/events');
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || 'Could not fetch events.');
//   }

//   return { events: data };
// }
