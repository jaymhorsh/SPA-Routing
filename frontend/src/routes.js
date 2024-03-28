// import React from 'react'
import { useRoutes } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import EventRoot from "./pages/EventRoot";
import EventPage from "./pages/Event";    //{ loader as eventsLoader }
import EventDetail from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import EditEventPage from "./pages/EditEvent";
const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: 'events',
          element: <EventRoot />,
          children: [
            {
              index: true,
              element: <EventPage />,
              // loader: eventsLoader,
            },
            { path: ':eventId', element: <EventDetail /> },
            { path: 'new', element: <NewEventPage /> },
            { path: ':eventId/edit', element: <EditEventPage /> },
          ],
        },
      ],
    },
  ]);
  return routes;
};

export default Routes;
