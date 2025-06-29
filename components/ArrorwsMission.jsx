import Image from "next/image";
import React, { useState } from "react";

export default function ArrowsMission({
    toggleOptionMenu,
    labelName,
    label,
    selectOption,
    valueToEdit
}) {
  // console.log(valueToEdit,"sssssss");
  // const [x, setx]= useState(selectOption[labelName]??valueToEdit)
  return (
    <div
      onClick={() => toggleOptionMenu(labelName)}
      className="hover:cursor-pointer bg-white border py-1 rounded-md flex justify-between w-full items-center "
    >
      <div
        className={`mr-3 truncate  ${
           selectOption[labelName] || valueToEdit ? "text-[#002A78]" : "text-[#99AAC9]"
        }`}
      >
        {/* Display valueToEdit if it exists, otherwise fall back to selectOption or placeholder */}
        {        
        selectOption[labelName]? selectOption[labelName]:
        valueToEdit
          ? valueToEdit
          : labelName === "Leading_section"
          ? `בחר ${label.split(" ").slice(0, -1).join(" ")}`
          : `בחר ${label}`
          }
      </div>
      <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
        <Image  src="/downArrow.svg" width={10} height={10} alt="arrow" />
      </div>
    </div>
  );
}
