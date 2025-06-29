import Image from "next/image";
import React, { useEffect } from "react";

export default function ExcludedEvent({ event, }) {
  const formatDate = (dateString) => {
    console.log(dateString);
    const [day, month, year] = dateString.split("-");
    return `${year}/${month}/${day}`;
  };
  const result = (str1, str2) => {
    if (str1 === str2) {
      return true;
    } else {
      return false;
    }
  };


  return (
    <div className=" ">

      {/* {eventDate.map((event, index) => ( */}
      <div className="p-3 border-b-[1px]">
        <div className=" w-full border h-8 rounded-full flex  border-[#E4EBF8] ">
          <div className="w-7/12 h-8 items-center text-lg flex justify-center bg-[#E4EBF8] rounded-full">
            {event.employees[0]?.name}
          </div>
          <div className="w-5/12  text-lg flex justify-center">
            {event.event}
          </div>
        </div>
        {result(event.beginning_date, event.end_date) ? (
          <div className="text-lg font-normal flex pt-3 justify-center gap-3 w-full">
            <div className="p-1 px-4  border-[1px] border-blue_color/17 rounded-full">
              {formatDate(event?.beginning_date)}
            </div>
          </div>
        ) : (
          <div className="  text-lg font-normal flex pt-3 justify-center gap-3 w-full">
            <div className="p-1 px-4  border-[1px] border-blue_color/17 rounded-full">
              {formatDate(event?.beginning_date)}
            </div>
            <Image src="leftArrow.svg" width={25} height={25} alt="r" />
            <div className="p-1 px-2 border rounded-full">
              {formatDate(event?.end_date)}
            </div>
          </div>
        )}
      </div>
      {/* ))} */}
    </div>
  );
}
