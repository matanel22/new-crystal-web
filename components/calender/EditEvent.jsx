"use client";
import Image from "next/image";
import Option from "../ui/Option";
import { useEffect, useRef, useState } from "react";
import { CalendarDays } from "lucide-react";

export default function EditEvent({
  missionDay,
  setMissionDay,
  eventDate,
  setEventDate,
  date,
  setDate,
}) {
  const [toggle, setToggle] = useState(false);

  // const { year, month, day } = missionDay;
  // const date = `${year}-${month}-${day}`;
  useEffect(() => {
    setDate(eventDate[0]);
  }, []);

  const { beginning_date, end_date, activityDay, id, event } = date;
  console.log(beginning_date, end_date, id, event);

  const dateFromRef = useRef(null);
  const dateToRef = useRef(null);

  const handleIconClickFrom = () => {
    if (dateFromRef.current) {
      dateFromRef.current.showPicker();
    }
  };

  const handleIconClickTo = () => {
    if (dateToRef.current) {
      dateToRef.current.showPicker();
    }
  };

  const handelDate = (e, type) => {
    console.log(type);
    if (type == "day") {
      console.log(e);
      setDate((prevState) => ({ ...prevState, activityDay: e }));
      console.log(date);
      return;
    }
    const newDate = e.target.value;
    console.log(newDate);

    if (type == "from") {
      const [year, month, day] = newDate.split("-");
      setDate((prevState) => ({
        ...prevState,
        beginning_date: `${year}-${month}-${day}`,
      }));
      console.log(date);

      // setMissionDay(`${year}-${month}-${day}`);
    }
    if (type == "to") {
      const [year, month, day] = newDate.split("-");
      setDate((prevState) => ({
        ...prevState,
        end_date: `${year}-${month}-${day}`,
      }));
      console.log(date);
    }
    console.log(eventDate);
  };
  const activity_type = [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי",
    "שבת",
    "חג",
  ];

  return (
    <>
      <div className="flex justify-center items-center p-2">
        <h2 className=" w-4/5 p-2 border rounded-full font-semibold text-lg text-center text-white bg-blue_color">
          סוג פעילות
        </h2>
      </div>
      <div className="w-full px-2 font-normal text-lg ">
        <div className="w-full ">
          <div className="font-bold">סוג פעילות</div>
          <Option
            data={activity_type}
            handel={handelDate}
            value={event}
            toggle={toggle}
            setToggle={setToggle}
          />
          <div className="flex flex-col w-full ">
            <div className="py-2">
              <div className="font-bold py-1"> תאריך </div>

              <div className="w-full flex justify-center  gap-1">
                <div className="w-1/2 relative">
                  <input
                    ref={dateFromRef}
                    className=" w-full  border rounded-full border-blue_color px-3 "
                    type="date"
                    value={beginning_date}
                    onChange={(e) => handelDate(e, "from")}
                  />
                  <div
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue_color"
                    onClick={handleIconClickFrom}
                  >
                    <CalendarDays size={20} strokeWidth={1.5} />
                  </div>
                </div>

                <Image src="leftArrow.svg" width={25} height={25} alt="r" />

                <div className=" w-1/2 relative">
                  <input
                    ref={dateToRef}
                    className=" w-full border rounded-full border-blue_color px-2 "
                    type="date"
                    value={end_date}
                    onChange={(e) => handelDate(e, "to")}
                  />
                  <div
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue_color"
                    onClick={handleIconClickTo}
                  >
                    <CalendarDays size={20} strokeWidth={1.5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
