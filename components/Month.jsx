"use client";
import React, { useState } from "react";
import Day from "./calender/Day";
import FilterByYear from "./calender/FilterByYear";
import MonthTable from "./calender/MonthTable";

export default function Month({
  daysInHebrew,
  monthsInHebrew,
  setMessinDay2,
  messinDay2,
  messinDay,
  setMessinDay,
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());

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

  // Generate array of objects for each month containing days
  const monthsAndDays = monthsInHebrew.map((month, index) => {
    const daysArray = generateDaysArray(selectedDate.getFullYear(), index);
    return {
      month,
      daysArray,
    };
  });

  const goToPreviousYear = () => {
    const previousYear = new Date(
      selectedDate.getFullYear() - 1,
      selectedDate.getMonth()
    );
    setSelectedDate(previousYear);
  };

  const goToNextYear = () => {
    const nextYear = new Date(
      selectedDate.getFullYear() + 1,
      selectedDate.getMonth()
    );
    setSelectedDate(nextYear);
  };
  return (
    <div className="text-blue_color flex-1 w-full flex flex-col justify-between ">
      <FilterByYear
        goToPreviousYear={goToPreviousYear}
        goToNextYear={goToNextYear}
        selectedDate={selectedDate}
      />
      <MonthTable
        monthsAndDays={monthsAndDays}
        daysInHebrew={daysInHebrew}
        setSelectedDate={setSelectedDate}
        selectedDate={selectedDate}
        setMessinDay2={setMessinDay2}
        messinDay2={messinDay2}
        messinDay={messinDay}
        setMessinDay={setMessinDay}
      />
    </div>
  );
}
