import React from "react";

export default function AmountMeasure({handleInputChange, labelName}) {
    const handleChange = (event) => {
        handleInputChange(labelName, event.target.value); // Pass the label name and value
      };
  return (
    <>
      <div className="block text-[#002A78] font-bold">כמות</div>

      <div className="relative">
        <input
          type="number"
          placeholder={"-"}
          className={`w-full [&::-webkit-inner-spin-button]:appearance-none placeholder:text-[#002A78] text-[#002A78] border rounded-lg px-3 py-1`}
          onChange={
            handleChange
          }
          required
        />
      </div>
    </>
  );
}
