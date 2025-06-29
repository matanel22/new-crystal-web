import Image from "next/image";
import React, { useRef } from "react";

export default function DateEmployeesFilter({
  labelName,
  formData,
  setFormData,
}) {
    
  // מביא את הלוח שנה
  const dateFromRef = useRef(null);
  const dateToRef = useRef(null);

  const handleIconClickFrom = () => {
    if (dateFromRef.current) {
      dateFromRef.current.showPicker();
    }
  };

  const handleIconClickTo = () => {
    if (dateToRef.current) {
      dateToRef.current.showPicker();
    }
  };

  return (
    <div className="w-full relative mt-1">
      <div className="absolute hover:cursor-pointer left-2 top-1/2 transform -translate-y-1/2">
        <Image
          src="/calender.svg"
          width={20}
          height={20}
          alt="calender"
          onClick={
            labelName === "activity_start"
              ? handleIconClickFrom
              : handleIconClickTo
          }
        />
      </div>
      <input
        type="date"
        ref={labelName === "activity_start" ? dateFromRef : dateToRef}
        value={formData[labelName] || ""}
        className="w-full border rounded-lg px-3 py-1 text-[#002A78]"
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            [labelName]: e.target.value,
          }))
        }
      />
    </div>
  );
}
