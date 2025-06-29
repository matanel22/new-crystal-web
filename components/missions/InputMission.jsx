import React, { useState, useEffect } from "react";

export default function InputMission({
    labelName,
    label,
    handleInputChange,
    valueToEdit
}) {
  // console.log(valueToEdit,"input");
  
  const [inputValue, setInputValue] = useState(valueToEdit );

  // Update inputValue if valueToEdit changes
  useEffect(() => {
    setInputValue(valueToEdit );
  }, [valueToEdit]);

  const numbersOnly = [
    "Mission_number",
    "Approved_route_days",
    "Approved_hours",
    "Approved_budget",
  ];
  const empty = ["Approved_budget", "Approved_hours", "Approved_route_days"];
  const notRequiredLabels = ["Mission_name", "Approved_route_days", "Sections"];

  return (
    <input
      type={numbersOnly.includes(labelName) ? "number" : "text"}
      placeholder={
        !valueToEdit
          ? labelName === "Mission_name" ||
            labelName === "Mission_number" ||
            labelName === "Ktzin_nosse_name"
            ? label
            : empty.includes(labelName)
            ? "-"
            : ""
          : ""
      }
      value={inputValue||''}
      onChange={(e) => {
        setInputValue(e.target.value);
        handleInputChange(labelName, e.target.value);
      }}
      className={`w-full  ${
        labelName === "createdBy" && "bg-[#EBEEF5]"
      } border [&::-webkit-inner-spin-button]:appearance-none placeholder:text-[#99AAC9] rounded-lg px-3 py-1`}
      required={!notRequiredLabels.includes(labelName)}
      // readOnly={labelName === "createdBy"}
    />
  );
}
