import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'

export default function FilterByYear({selectedDate,setSelectedDate}) {
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
    <div className="flex justify-center">
    <div className="border w-min p-[1px] rounded-full  text-white bg-blue_color flex justify-center items-center">
      <button onClick={goToPreviousYear}>
        <ArrowRight />
      </button>
      <p className="border  bg-white font-bold text-blue_color  rounded-full px-16">
        {selectedDate.getFullYear()}
      </p>
      <button onClick={goToNextYear}>
        <ArrowLeft />
      </button>
    </div> </div>
  )
}
