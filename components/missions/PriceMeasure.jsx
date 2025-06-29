import Image from "next/image";
import React from "react";

export default function PriceMeasure({handleInputChange, labelName}) {
    const handleChange = (event) => {
        handleInputChange(labelName, event.target.value); // Pass the label name and value
      };
  return (
    <>
      <div className="block text-[#002A78] font-bold">מחיר</div>
      <div className="relative">
        <div className="absolute left-5 top-1/2 transform -translate-y-1/2">
          <Image src="/money.svg" width={20} height={20} alt="arrow" />
        </div>
        <input
          type="number"
          placeholder={"-"}
          className={`w-full [&::-webkit-inner-spin-button]:appearance-none placeholder:text-[#002A78] border rounded-lg px-3 py-1`}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
}
