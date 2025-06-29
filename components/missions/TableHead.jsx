import { MoveDown, MoveUp } from "lucide-react";
import React, { useState } from "react";

export default function TableHead({
  headTable,
  headLength,
  // handleSortDirectionChange,
  columnToSortOn,
  setColumnToSortOn,
}) {
  const handleClickArrows = (index, direction) => {
    setColumnToSortOn({ index: index, direction: direction });
  };

  return (
    <div className="flex w-full bg-[#EFF3FB] p-1 sticky top-0 z-10">
      <div className="flex w-full bg-blue_color rounded">
        <div className="w-[50px]"></div>
        <div
          className={`text-[20px] grid grid-cols-11 gap-3 w-full font-semibold leading-6 py-3 text-center items-center text-white`}
        >
          {headTable.map((head, index) => (
            <div key={head} className={`relative truncate flex justify-center items-center  ${head === "מייל" &&'ml-16'}`}>
              <div className={`truncate`}>{head}</div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
