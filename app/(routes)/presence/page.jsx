"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReadObject from "../../../components/ReadObject";
import UpdateObject from "../../../components/UpdateObject";
import Search from "../../../components/ui/Search";
import Btn from "../../../components/Btn";
import PopupMissin from "../../../components/PopupMissin";
import clsx from "clsx";

const arr = {
  date_time: "1978-07-28 ",
  employee_number: "6126811",
  fullName: "Leo Sauer",
  entrances_exits: [
    {
      activity_code: 1,
      entrance: "01:30",
      exit: "10:30",
    },
    {
      activity_code: 1,
      entrance: "11:30",
      exit: "13:00",
    },
    {
      activity_code: 1,
      entrance: "14:00",
      exit: "23:00",
    },
  ],
  contract_id: 3,
  attendance_for_pay: 18.5,
  waiting_time: 1.69,
  extra_hours: 0.66,
  total_attendance_time: "19:30",

  employee_isActive: 0,
  event: "Sunday",
};
//   {
//     "id": 3,
//     "date_time": "1978-07-28 17:41:50",
//     "employee_id": 4,
//     "entrances_exits": [
//         {
//             "entrance": "01:30:00",
//             "exit": "10:30:00",
//             "activity_code": 1
//         },
//         {
//             "entrance": "11:30:00",
//             "exit": "13:00:00"
//         },
//         {
//             "entrance": "14:00:00",
//             "exit": "23:00:00",
//             "activity_code": 1
//         }
//     ],
//     "waiting_time": 1.69,
//     "employee_number": "6126811",
//     "fullName": "Leo Sauer",
//     "contract_id": 3,
//     "employee_isActive": 0,
//     "total_attendance_time": "19:30",
//     "attendance_for_pay": 18.5,
//     "extra_hours": 0.66,
//     "event": "Sunday"
// }
export default function Page() {
  const headers = [
    "תאריך",
    "מספר עובד",
    "שם מלא",
    ["קוד פעילות", "כניסה", "יציאה"],
    "קוד הסכם",
    "סהכ נוכח",
    "נוכח לשכר",
    "ש. המתנה",
    "ש. נוספות",
    "היעדרות לשכר",
    "סטטוס",
    "משימות",
  ];

  const [data, setData] = useState(arr);
  const [updateMode, setUpdateMode] = useState(null);
  const [attendanceData, setattendanceData] = useState({});
  const [addInput, setaddInput] = useState(false);

  const entrances_exits = () => {
    // setaddInput(true)
    const newEntry = {
      activity_code: 1,
      entrance: "00:00",
      exit: "00:00",
    };
    const updatedData = {
      ...data,
      entrances_exits: [...data.entrances_exits, newEntry],
    };

    setData(updatedData);
    setUpdateMode(true);

    console.log(addInput);
  };
  return (
    <>
      {/* <PopupMissin/> */}

      <div className="w-full">
        <div className="h-20 w-full flex justify-center">
          <Search textBtn={"4.6.24"} />
        </div>

        <div className="bg-[#F7F9FD] rounded-lg ">
          <div className="presentTable items-center justify-around text-white bg-blue_color py-2 rounded-md">
            {headers.map((header, index) => (
              <div
                className={clsx("flex justify-center items-center", {
                  "col-span-3 grid grid-cols-3 ": Array.isArray(header),
                })}
                key={index}
              >
                {Array.isArray(header)
                  ? header.map((subHeader, subIndex) => (
                      <div
                        className="flex justify-center items-center"
                        key={subIndex}
                      >
                        {subHeader}
                      </div>
                    ))
                  : header}
              </div>
            ))}
          </div>

          {/* row data */}
          <div className="presentTable items-center justify-around     rounded-md">
            {Object.entries(data).map(([key, value], i) => {
              return (
                <div
                  key={i}
                  className={clsx("flex justify-center items-center ", {
                    "col-span-3 grid grid-cols-3   ": Array.isArray(value),
                  })}
                >
                  {/* OBJECT ENTRY & EXIT & activity_code */}

                  {Array.isArray(value) ? (
                    value.map((entriesValue, entriesindex) => (
                      <div className="col-span-3 grid grid-cols-3 divide-y-2  relative">
                        {Object.entries(entriesValue).map(([k, v], i) =>
                          updateMode && value.length - 1 === entriesindex ? (
                            <div
                              className={clsx(
                                "h-10  flex justify-center items-center ",
                                {
                                  "max-w-fit bg-[#A7BFE8]/15":
                                    k == "entrance" || k == "exit",
                                }
                              )}
                            >
                              <input
                                key={k}
                                className={clsx(
                                  "w-4/6 text-center border border-blue_color outline-none rounded-full",
                                  {
                                    "w-[95%]": k == "activity_code",
                                  }
                                )}
                                value={v}
                              />

                              <Image
                                src="/plus.svg"
                                width={22}
                                height={22}
                                alt="plus icon"
                                className="absolute top-2 z-30 left-2 hidden group-hover:block"
                                onClick={() => entrances_exits()}
                              />
                            </div>
                          ) : (
                            <div
                              className={clsx(
                                "h-10 flex justify-center items-center   :",
                                {
                                  "bg-[#A7BFE8]/15  group ":
                                    k == "entrance" || k == "exit",
                                }
                              )}
                            >
                              {v}
                              {value.length - 1 === entriesindex ? (
                                <Image
                                  src="/plus.svg"
                                  width={22}
                                  height={22}
                                  alt="plus icon"
                                  className="absolute top-2 left-2 hidden group-hover:block"
                                  onClick={() => entrances_exits()}
                                />
                              ) : (
                                ""
                              )}
                            </div>
                          )
                        )}
                      </div>
                    ))
                  ) : (
                    <div>{value}</div>
                  )}
                </div>
              );
            })}
            <div className="flex justify-center items-center">
              <Btn text={"צפה במשימות"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
