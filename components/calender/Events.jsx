"use client";
import React, { useEffect, useState } from "react";
import AddEvent from "./AddEvent";
import Event from "./Event";
import Image from "next/image";
import EditEvent from "./EditEvent";
import ExcludedEvent from "./ExcludedEvent";

export default function Events({
  missionDay,
  setMissionDay,
  events,
  setEvents,
  eventDate,
  setEventDate,
  activity,
  date,
  setDate,
}) {
  const [ex, setEx] = useState(0);
  const { year, month, day } = missionDay;
  // console.log(activity);

  // useEffect(() => {
  //   if (events === "new" || events === "edit") {
  //     setEvents("add");
  //   }
  // },[missionDay]);
  return (
    <div className="  h-full">
      {!activity && events !== "new" && events !== "edit" && (
        // <div className="h-full">
        //   <div className="flex justify-center items-center p-2">
        //     <h2 className=" w-4/5 p-2 border rounded-full font-semibold text-lg text-center text-white bg-blue_color">
        //       סוג פעילות
        //     </h2>
        //   </div>
          <div className="  h-full flex justify-center items-center">
            <Image
              onClick={() => setEvents("new")}
              src="addEvent.svg"
              width={240}
              height={155}
              alt="e"
            />
          </div>
        // </div>
      )}
      {events == "new" && (
        <AddEvent
          date={date}
          setDate={setDate}
          setEvents={setEvents}
          missionDay={missionDay}
          setMissionDay={setMissionDay}
          eventDate={eventDate}
          setEventDate={setEventDate}
        />
      )}
      {events == "edit" && (
        <EditEvent
          date={date}
          setDate={setDate}
          missionDay={missionDay}
          setMissionDay={setMissionDay}
          eventDate={eventDate}
          setEventDate={setEventDate}
        />
      )}
      {console.log(eventDate)}
      {Array.isArray(eventDate) &&
        eventDate.map(
          (event, index) =>
            activity &&
            events !== "edit" &&
            event?.is_global === 1 && (
              <Event
                key={event.id}
                missionDay={missionDay}
                setMissionDay={setMissionDay}
                eventDate={event}
              />
            )
        )}
      {/* ) : ( */}
      {activity && events !== "new" && events !== "edit" && (
        <div className="flex justify-center items-center px-2 pt-5">
          <h2 className=" w-4/5 p-2 border rounded-full font-semibold text-lg text-center text-white bg-blue_color">
            החרגות
          </h2>
        </div>
      )}

      {Array.isArray(eventDate) &&
        eventDate.map((event, index) =>
          event.is_global === 0 ? (
            <ExcludedEvent key={index} event={event} />
          ) : null
        )}
    </div>
  );
}
