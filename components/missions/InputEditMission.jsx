import React, { useEffect, useRef, useState } from "react";
import ArrorwsMission from "../ArrorwsMission";
import InputDateMission from "./InputDateMission";
import InputMission from "./InputMission";
import MadorsToggle from "./MadorsToggle";

export default function 
InputEditMission({ theData, label, labelName }) {
  const [openLabel, setOpenLabel] = useState(null);
  const [selectOption, setSelectOption] = useState({});
  const [formData, setFormData] = useState(theData||{});



  const toggleOptionMenu = (labelName) => {
    setOpenLabel((prev) => (prev === labelName ? null : labelName));
  };

  const handleOption = (labelName, option) => {
    setSelectOption((prev) => ({
      ...prev,
      [labelName]: option,
    }));
    handleInputChange(labelName, option);
    setOpenLabel(null);
  };

  const handleInputChange = (labelName, value) => {
    setFormData((prev) => ({
      ...prev,
      [labelName]: value,
    }));  
  };

  const arrow = [
    "Year",
    "Leading_section",
    "Interest_level",
    "Sections",
    "Mission_type",
    "Paying_factor",
  ];

  const yearArray = ["2022", "2023", "2024"];
  const Mission_type = ["אמת", "נסא", "תקיפה"];
  const mador = ["אמת", "נסא", "תקיפה"];
  const madors = ["מדור 1","מדור 34","מדור 65","מדור 346","מדור 364","מדור 43","מדור 66","מדור 68",];
  const gamash = ["אמת", "נסא", "תקיפה"];
  const interestArray = ["מעניין", "לא מעניין", "מעניין מאוד"];

  const getOptionsArray = (labelName) => {
    switch (labelName) {
      case "Year":
        return yearArray;
      case "Mission_type":
        return Mission_type;
      case "Interest_level":
        return interestArray;
      case "Paying_factor":
        return gamash;
      case "Leading_section":
        return mador;
      case "Sections":
        return madors;
      default:
        return [];
    }
  };

  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenLabel(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    console.log(formData,"the data");
  }, [formData]);


//   const onSubmit = () => {
//     const newMission = {
//       Mission_number: formData?.Mission_number,
//       Mission_name: formData?.Mission_name,
//       Mission_type: formData?.Mission_type,
//       Year: formData?.Year,
//       Paying_factor: formData?.Paying_factor,
//       Opening_date: formData?.Opening_date || currentDate(),
//       Closing_date: formData?.Closing_date || currentDate(),
//       Ktzin_nosse_name: formData?.Ktzin_nosse_name,
//       Status: isActive(),
//       Interest_level: formData?.Interest_level,
//       Leading_section: formData?.Leading_section,
//       Approved_budget: formData?.Approved_budget,
//       Approved_hours: formData?.Approved_hours,
//       Approved_route_days: formData?.Approved_route_days,
//       Sections: formData?.Sections,
//       createdBy: formData?.createdBy,
//     };

//     if (Object.values(newMission).some((value) => !value)) {
//       alert("חלק מהשדות חסרים");
//       return;
//     }
//     setMissions((prev) => [newMission, ...prev]);
//     setShowPopup(false);
//   };

  
  return (
    <>
      <div className="relative">
        {arrow.includes(labelName) && labelName !== "Sections" && (
          <ArrorwsMission
            toggleOptionMenu={toggleOptionMenu}
            labelName={labelName}
            label={label}
            selectOption={selectOption}
            valueToEdit={formData[labelName]}
          />
        )}

        {openLabel === labelName && (
          <div ref={menuRef} className="absolute inset-y-8 w-full z-20 mt-1">
            <ul className="flex flex-col bg-white p-1 rounded shadowForDrop">
              {getOptionsArray(labelName).map((option, index) => (
                <li
                  key={index}
                  className="cursor-pointer px-4 w-full md:truncate py-1 text-[#002A78] rounded hover:bg-[#002A78] hover:text-white"
                  onClick={() => handleOption(labelName, option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}

        {labelName.includes("date") ? (
          <InputDateMission
            labelName={labelName}
            formData={formData[labelName]}
            handleInputChange={handleInputChange}
            // currentDate={currentDate}
            // valueToEdit={formData[labelName]}
            min={labelName === "Closing_date" ? formData["Opening_date"] : null}
            max={labelName === "Opening_date" ? formData["Closing_date"] : null}
          />
        ) : labelName === "Sections" ? (
          <MadorsToggle
            madors={madors}
            handleInputChange={handleInputChange}
            selectedMadors={formData.Sections || []}
            valueToEdit={formData[labelName]}
          />
        ) : (
            !arrow.includes(labelName)&&
          <InputMission
            labelName={labelName}
            label={label}
            handleInputChange={handleInputChange}
            valueToEdit={formData[labelName]}
          />
        )}
      </div>
    </>
  );
}
