import { Outlet } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";

function EventsRootLayout() {
  return (
    <>
      
      <main>
        <EventsNavigation />
        <Outlet />
      </main>
    </>
  );
}

export default EventsRootLayout;
