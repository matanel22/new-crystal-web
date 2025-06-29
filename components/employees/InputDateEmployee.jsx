import Image from 'next/image';
import React, { useRef } from 'react'
import { parse, format, isValid, parseISO } from "date-fns";


export default function InputDateEmployee({
    labelName,
    formData,
    handleInputChange,
    min,
    max
}) {
  console.log(formData,"labelName");
  console.log(min,"min");
  console.log(max,"max");
  

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

    const dateFromRef = useRef(null);
    const dateToRef = useRef(null);
  
    const handleIconClick = () => {
      if (labelName === "activity_start" && dateFromRef.current) {
        dateFromRef.current.showPicker();
      } else if (labelName === "activity_end" && dateToRef.current) {
        dateToRef.current.showPicker();
      }
    };
  return (
    <div className="w-full relative">
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
        <Image
          src="/calender.svg"
          width={20}
          height={20}
          alt="calender"
          onClick={handleIconClick}
        />
      </div>
      <input
        type="date"
        ref={labelName === "activity_start" ? dateFromRef : dateToRef}
        className="w-full border rounded-lg px-3 py-1"
        onChange={(e) => {
          handleInputChange(labelName, e.target.value);
        }}
        value={
          formatDateForInput(formData)
        }
        min={formatDateForInput(min)}
        max={ formatDateForInput(max)}
        required
      />
    </div>
  )
}
