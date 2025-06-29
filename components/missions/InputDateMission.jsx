import Image from "next/image";
import React, { useRef } from "react";
import { parse, format, isValid, parseISO } from "date-fns";
// import { CalendarIcon } from "../../../public/bit.svg";
export default function InputDateMission({
  labelName,
  formData,
  handleInputChange,
  currentDate,
  openingDate,
  closingDate,
  min,
  max,
}) {
  // console.log(labelName, "labelName first");
  console.log(formData, "formData");
  console.log(min, "min");
  console.log(max, "max");

  // console.log(valueToEdit, "InputDateMission");

  const dateFromRef = useRef(null);
  const dateToRef = useRef(null);

  const handleIconClick = () => {
    if (labelName === "Opening_date" && dateFromRef.current) {
      dateFromRef.current.showPicker();
    } else if (labelName === "Closing_date" && dateToRef.current) {
      dateToRef.current.showPicker();
    }
  };

  const formatDateForInput = (dateStr) => {
    if (!dateStr) return "";
    let date;

    if (dateStr.includes("/")) {
      date = parse(dateStr, "dd/MM/yyyy", new Date());
    } else if (dateStr.includes("-")) {
      date = parse(dateStr, "yyyy-MM-dd", new Date());
    } else {
      console.error("Unrecognized date format:", dateStr);
      return "";
    }

    if (!isValid(date)) {
      console.error("Invalid date:", dateStr);
      return "";
    }
    return format(date, "yyyy-MM-dd");
  };

  return (
    <div className="w-full relative">
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
        <Image
          src="calendar.svg"
          width={20}
          height={20}
          alt="calender"
          onClick={handleIconClick}
        />
      </div>
      <input
        type="date"
        ref={labelName === "Opening_date" ? dateFromRef : dateToRef}
        className="w-full border rounded-lg px-3 py-1"
        onChange={(e) => {
          handleInputChange(labelName, e.target.value);
          // console.log(labelName,"change");
        }}
        value={
          formatDateForInput(formData) || ""
          // לשאול אם מקבלים תאריך מהמשימה או תאריך של היום
          // (labelName === "Opening_date" && formatDateForInput(openingDate)) ||
          // (labelName === "Closing_date" && formatDateForInput(closingDate)) ||
          // formatDateForInput(currentDate())
        }
        min={formatDateForInput(min)}
        max={formatDateForInput(max)}
        required
      />
    </div>
  );
}
