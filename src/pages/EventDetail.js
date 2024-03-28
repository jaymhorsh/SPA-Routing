import React from "react";
import { useParams } from "react-router-dom";
const EventDetail = () => {
 const param = useParams();
  return <div>{param.eventId}</div>;
};

export default EventDetail;
