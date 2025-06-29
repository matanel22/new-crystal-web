import { CalendarDays } from "lucide-react";
import React from "react";

export default function Input({ref,className,type,value, handel,max,min}) {
  return (
    <div className="w-1/2 relative">
      <input
        ref={ref}
        className={className}
        type={type}
        value={value}
        onChange={(e) => handel(e, "from")}
        max={end_date}
        min={min}
      />

      <div
        className="absolute left-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-blue_color"
        onClick={handleIconClickFrom}
      >
        <CalendarDays size={20} strokeWidth={1.5} />
      </div>
    </div>
  );
}
