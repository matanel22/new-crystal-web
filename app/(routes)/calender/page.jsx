"use client";
import { useEffect, useState } from "react";

import PopupDay from "../../../components/calender/PopupDay";
import Exclusions from "../../../components/calender/Exclusions";
import Year from "../../../components/calender/Year";
import Image from "next/image";

export default function Calendar() {
  const [missionDay, setMissionDay] = useState(); //selected day
  const [exclusions, setExclusions] = useState(false); //open popup החרגות
  const [openPopUp, setOpenPopUp] = useState(false);
  const [events, setEvents] = useState("add");
  const daysInHebrew = [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי",
    "שבת",
  ];

  const dateToObject = async (string) => {
    if (string === null || string.includes("null")) {
      setMissionDay(null);
      return;
    }

    const [year, month, day] = string.split("-");
    const date = new Date(year, month - 1, day);
    const dayOfWeek = daysInHebrew[date.getDay()];
    const objectDate = {
      year: year,
      month: month.padStart(2, "0"),
      day: day.padStart(2, "0"),
      dayOfWeek: dayOfWeek,
    };
    setMissionDay(objectDate);
    setOpenPopUp(true);
  };

  const imageAdd = (
    <Image src={"/exclusions_white.svg"} width={20} height={20} alt="" />
  );
  const openExclusion = () => {
    setExclusions(!exclusions);
  };

  return (
    <>
      <div className="flex flex-col h-full p-2 pb-0">
        {/* <div className="h-11  flex justify-center ">
          <Search
            searchText={""}
            textBtn={"החרגות"}
            addNew={openExclusion}
            addImage={imageAdd}
            missionDay={missionDay}
          />
        </div> */}
        <div
          className={`h-full overflow-hidden p-2 ${
            openPopUp && missionDay !== null
              ? "w-4/5 pr-3 transition-width"
              : " w-full px-[5%]"
          } `}
        >
          <div className="h-full  flex flex-col">
            <Year
              missionDay={missionDay}
              setMissionDay={dateToObject}
              events={events}
              setEvents={setEvents}
            />
          </div>
        </div>
      </div>
      {openPopUp && missionDay !== null && (
        <div className="border w-1/5 transition-width  flex  border-r-blue_color  flex-col gap-y-1 absolute top-0 left-0 bg-white h-full p-2 z-40">
          <PopupDay
            missionDay={missionDay}
            setMissionDay={dateToObject}
            setExclusions={setExclusions}
            setOpenPopUp={setOpenPopUp}
            openPopUp={openPopUp}
            events={events}
            setEvents={setEvents}
          />
        </div>
      )}

      {exclusions && (
        <Exclusions
          missionDay={missionDay}
          openExclusion={openExclusion}
          setMissionDay={setMissionDay}
        />
      )}
    </>
  );
}
