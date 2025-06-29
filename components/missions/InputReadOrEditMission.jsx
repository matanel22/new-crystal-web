import React from "react";
import InputEditMission from "./InputEditMission";
import { format, parseISO } from "date-fns";
import { formatDate } from "@/util/dateFormat";

export default function InputReadOrEditMission({
  clickToEdit,
  theData,
  label,
  labelName,
}) {
  // const formatDate = (dateStr) => {
  //   if (!dateStr || !dateStr.includes("-")) return dateStr;
  //   try {
  //     return format(parseISO(dateStr), "dd/MM/yyyy");
  //   } catch (error) {
  //     console.error("Invalid date format:", error);
  //     return dateStr;
  //   }
  // };

  return (
    <>
      {!clickToEdit ? (
        labelName === "Sections" ? (
          <div
            className={`flex items-center gap-3 border bg-[#EBEEF5] rounded-lg px-3 py-1`}
          >
            {Array.isArray(theData[labelName]) ? (
              theData[labelName].map((section, index) => (
                <div
                  key={index}
                  className={`bg-[#002A78]  text-white rounded-md px-2  `}
                >
                  {section}
                </div>
              ))
            ) : (
              <div className={`bg-[#002A78] text-white rounded-md px-2 `}>
                {theData[labelName]}
              </div>
            )}
          </div>
        ) : (
          <div className={`w-full border bg-[#EBEEF5] rounded-lg px-3 py-1`}>
            {labelName === "Opening_date" || labelName === "Closing_date"
              ? formatDate(theData[labelName])
              : theData[labelName]}
          </div>
        )
      ) : (
        <InputEditMission
          theData={theData}
          label={label}
          labelName={labelName}
        />
      )}
    </>
  );
}
