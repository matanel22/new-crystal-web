import Image from "next/image";
import React, { useEffect, useState } from "react";
import Events from "./Events";
import axios from "../../lib/axios";
import { Bounce, toast } from "react-toastify";

export default function PopupDay({
  missionDay,
  setMissionDay,
  setExclusions,

  openPopUp,
  setOpenPopUp,
  events,
  setEvents,
}) {
  const { year, month, day, dayOfWeek } = missionDay;
  console.log();
  const [eventDate, setEventDate] = useState({});
  const [date, setDate] = useState({
    beginning_date: `${year}-${month}-${day}`,
    end_date: `${year}-${month}-${day}`,
    activityDay: dayOfWeek,
  });

  useEffect(() => {
    setEventDate([
      {
        beginning_date: `${year}-${month}-${day}`,
        end_date: `${year}-${month}-${day}`,
        activityDay: dayOfWeek,
      },
    ]);
    setDate({
      beginning_date: `${year}-${month}-${day}`,
      end_date: `${year}-${month}-${day}`,
      activityDay: dayOfWeek,
    });
  }, [missionDay]);

  const [activity, setActivity] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`/events/${year}-${month}-${day}`);
        console.log(response.data);

        if (response.data.length > 0) {
          setEventDate(response.data);
          setActivity(true);
        } else {
          setActivity(false);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetchData();
  }, [missionDay]);

  const mission = () => {
    setOpenPopUp(false);
    setMissionDay(null);
  };
  // console.log(events);

  const addNewEvent = async () => {
    const event = {
      beginning_date: date.beginning_date,
      end_date: date.end_date,
      event: "Sunday",
      is_global: true,
    };
    if (events !== "edit") {
      try {
        const response = await axios.post(`/events`, event);
        setOpenPopUp(false);
        setMissionDay(null);
        return response.status;
      } catch (error) {
        console.error("error fetching : ", error?.response?.data?.message);
      }
    }
    if (events === "edit") {
      {
        try {
          const response = await axios.put(`/events/${eventDate[0].id}`, event);
          setOpenPopUp(false);
          setMissionDay(null);
          return response.status;
        } catch (error) {
          console.error("error fetching : ", error?.response?.data?.message);
        }
      }
    }
  };
  return (
    <>
      <div className="flex flex-col h-full ">
        <div className="">
          <div onClick={mission} className="">
            <Image src={"/x.svg"} width={15} height={15} alt="x" />
          </div>
          <div className="flex justify-center items-center">
            <Image src="/logo.svg" width={240} height={64} alt="" />
          </div>
        </div>

        <div className="w-full ">
          <div className=" flex justify-center items-center mt-3 font-bold text-2xl">
            יום {dayOfWeek}
          </div>

          <div className="flex justify-center items-center text-xl">
            {day}/{month}/{year}
          </div>

          <div className="flex justify-center items-center p-2">
            <h2 className=" w-4/5 p-2 border rounded-full font-semibold text-lg text-center text-white bg-blue_color">
              סוג פעילות
            </h2>
          </div>
        </div>

        <div className=" h-full w-full">
          <Events
            date={date}
            setDate={setDate}
            events={events}
            setEvents={setEvents}
            missionDay={missionDay}
            setMissionDay={setMissionDay}
            eventDate={eventDate}
            setEventDate={setEventDate}
            activity={activity}
          />
        </div>
      </div>

      <div className="flex justify-center gap-4 pb-10">
        <button
          onClick={() => setExclusions(true)}
          className="flex gap-2 items-center px-3 py-2 rounded-full border-[1px]  border-blue_color"
        >
          <Image src="/exclusions.svg" width={20} height={20} alt="" />
          <p>החרגות</p>
        </button>

        {events !== "new" && events !== "edit" && (
          <button
            onClick={() => setEvents("new")}
            className="bg-blue_color flex gap-2 items-center text-white px-3 py-2 rounded-full"
          >
            <Image src="/addEmployee.svg" width={20} height={20} alt="" />
            <p>הוסף אירוע</p>
          </button>
        )}

        {(events === "new" || events === "edit") && (
          <button
            onClick={() => addNewEvent()}
            className="bg-blue_color flex gap-2 items-center text-white px-5 py-2 rounded-full"
          >
            <p>שמור</p>
          </button>
        )}

        {activity && events !== "new" && events !== "edit" && (
          <button
            onClick={() => setEvents("edit")}
            className="bg-blue_color flex gap-2 items-center text-white px-3 py-2 rounded-full"
          >
            <Image src="/edit.svg" width={20} height={20} alt="" />
            <p>ערוך</p>
          </button>
        )}
      </div>
    </>
  );
}
