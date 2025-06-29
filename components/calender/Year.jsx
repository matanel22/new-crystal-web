"use client";
import { useEffect, useState } from "react";
import React from "react";
import MonthTable from "./MonthTable";
import FilterByYear from "./FilterByYear";
import axios from "@/lib/axios";

export default function Year({ missionDay, setMissionDay, events, setEvents }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [evensInYear, setEvensInYear] = useState([]);
  const monthsInHebrew = [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
  ];
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `/events/datesWithEvents/${selectedDate.getFullYear()}`
        );
        // console.log(response.data);
        setEvensInYear(response.data);
      } catch (error) {
        console.error("error fetching : ", error);
        throw error;
      }
    }
    fetchData();
  }, [selectedDate, missionDay]);

  // Function to get days in month
  const getDaysInMonth = (year, month) =>
    new Date(year, month + 1, 0).getDate();

  // Function to generate array of days in month
  const generateDaysArray = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const firstDayEmptySlots = Array.from(
      { length: firstDayOfMonth },
      () => null
    );
    const daysArray = [
      ...firstDayEmptySlots,
      ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
    ];
    return daysArray;
  };
  const monthsAndDays = monthsInHebrew.map((month, index) => {
    const daysInMonth = generateDaysArray(selectedDate.getFullYear(), index);

    return {
      month,
      daysInMonth,
    };
  });

  return (
    <>
      <div className="h-11 p-2">
        <FilterByYear
          setSelectedDate={setSelectedDate}
          selectedDate={selectedDate}
        />
      </div>

      <div className="h-full dirLtr px-5 overflow-y-auto">
        <div className="dirRtl grid grid-cols-4  ">
          {/* Iterate over each month and display days */}
          {monthsAndDays.map(({ month, daysInMonth }, index) => (
            <MonthTable
              key={index}
              missionDay={missionDay}
              setMissionDay={setMissionDay}
              month={month}
              daysInMonth={daysInMonth}
              indexMonth={index}
              selectedDate={selectedDate.getFullYear()}
              evensInYear={evensInYear}
              events={events}
              setEvents={setEvents}
            />
          ))}
        </div>
      </div>
    </>
  );
}
