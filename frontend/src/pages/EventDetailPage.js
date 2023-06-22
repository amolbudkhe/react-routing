import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

function EventDetailPage() {
  const data = useRouteLoaderData("fetch-events");

  return <EventItem event={data.event} />;
}

export default EventDetailPage;

export async function fetchEventsLoader({ request, params }) {
  const eventId = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + eventId);

  if (!response.ok) {
    throw json({ message: "Could not fetch the response." }, { status: 500 });
  } else {
    return response;
  }
}

export async function deleteEventAction({ request, params }) {
  const eventId = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: "Could note delete event" }, { status: 500 });
  }

  return redirect("/events");
}
