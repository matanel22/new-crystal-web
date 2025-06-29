import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MadorsToggle from "./MadorsToggle";
import ArrorwsMission from "../ArrorwsMission";
import InputMission from "./InputMission";
import InputDateMission from "./InputDateMission";
import axios from "axios";

export default function PopupMission({ setShowPopup, setMissions }) {
  const [openLabel, setOpenLabel] = useState(null);
  const [selectOption, setSelectOption] = useState({});
  const [formData, setFormData] = useState({});

  // useEffect(() => {
    const postMission = async (newMission) => {
      try {
        const response = await axios.post(
          `http://127.0.0.1:8000/api/missions/`,
          newMission
        );
        setMissions((prev) => [response.data, ...prev]);
      } catch (error) {
        console.error("שגיאה ביצירת המשימה", error);
      }
    };
  //   postMission();
  // }, []);

  const toggleOptionMenu = (labelName) => {
    setOpenLabel((prev) => (prev === labelName ? null : labelName));
  };

  const handleOption = (labelName, option) => {
    setSelectOption((prev) => ({
      ...prev,
      [labelName]: option,
    }));
    setFormData((prev) => ({
      ...prev,
      [labelName]: option,
    }));
    setOpenLabel(null);
  };

  const handleInputChange = (labelName, value) => {
    setFormData((prev) => ({
      ...prev,
      [labelName]: value,
    }));
    console.log(formData);
  };

  const labels = [
    { label: "מספר משימה", labelName: "Mission_number" },
    { label: "שם משימה", labelName: "Mission_name" },
    { label: "סוג משימה", labelName: "Mission_type" },
    { label: "שנה", labelName: "Year" },
    { label: "תאריך פתיחה", labelName: "Opening_date" },
    { label: "תאריך סגירה", labelName: "Closing_date" },
    { label: "שם קצין נושא", labelName: "Ktzin_nosse_name" },
    { label: "רמת עניין", labelName: "Interest_level" },
    { label: 'גמ"ש', labelName: "Paying_factor" },
    { label: "מדור מוביל", labelName: "Leading_section" },
    { label: "תקציב מאושר", labelName: "Approved_budget" },
    { label: "שעות מאושרות", labelName: "Approved_hours" },
    { label: "ימי מסלול מאושרים", labelName: "Approved_route_days" },
    { label: "מדורים", labelName: "Sections" },
    { label: 'נוצר ע"י', labelName: "createdBy" },
  ];

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
  const madors = [
    "מדור 1",
    "מדור 34",
    "מדור 65",
    "מדור 346",
    "מדור 364",
    "מדור 43",
    "מדור 66",
    "מדור 68",
  ];
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
    console.log(formData, "data");
  }, [formData]);


  // אם תאריך הסגירה עבר הוא מסמן אותו כ"לא פעיל" בסטטוס
  const isActive = () => {
    if (
      !formData?.Closing_date ||
      new Date(formData?.Closing_date) > new Date()
    ) {
      return "פעיל";
    } else {
      return "לא פעיל";
    }
  };

  const onSubmit = async () => {
    console.log(formData,'subform'); // Check what data is being sent
  
    const newMission = {
      Mission_number: formData?.Mission_number,
      Mission_name: formData?.Mission_name,
      Mission_type: formData?.Mission_type,
      Year: formData?.Year,
      Paying_factor: formData?.Paying_factor,
      Opening_date: formData?.Opening_date,
      Closing_date: formData?.Closing_date,
      Ktzin_nosse_name: formData?.Ktzin_nosse_name,
      Status: isActive(),
      Interest_level: formData?.Interest_level,
      Leading_section: formData?.Leading_section,
      Approved_budget: formData?.Approved_budget,
      Approved_hours: formData?.Approved_hours,
      Approved_route_days: formData?.Approved_route_days,
      Sections: formData?.Sections,
      createdBy: formData?.createdBy || "",
    };
  
    console.log(newMission,"new"); // Check the constructed mission data
  
    // Check if any field is missing
    if (Object.values(newMission).some((value) => !value)) {
      alert("חלק מהשדות חסרים");
      return;
    }
    
    setMissions((prev) => [newMission, ...prev]);
  
  //   try {
  //     const response = await axios.post(`http://127.0.0.1:8000/api/missions/`, newMission);
  //     console.log(response.data); // Check the response data
  
  //     // Update missions after the successful response
  //     setMissions((prev) => [response.data, ...prev]);
  //   } catch (error) {
  //     console.error("Error adding mission:", error);
  //     alert("לא הצלחנו להוסיף את המשימה. נסה שוב מאוחר יותר.");
  //   }
  
    setShowPopup(false);
  };
  

  return (
    <div
      className={
        "fixed inset-0 flex justify-center items-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50"
      }
    >
      <div className="bg-white rounded-lg p-5 w-3/4 ">
        <div className=" p-4 relative flex items-center justify-center">
          <div
            className="absolute top-0 left-0 hover:cursor-pointer"
            onClick={() => setShowPopup(false)}
          >
            <Image src={"/x.svg"} width={15} height={15} alt="x" />
          </div>

          <div className="text-xl truncate tracking-wide py-1 font-medium px-5 mb-4 flex justify-center items-center text-white bg-[#002A78] text-center rounded-full">
            שם משימה חדשה
          </div>
        </div>

        <div className=" grid grid-cols-3 px-5 gap-5">
          {labels.map(({ label, labelName }, index) => (
            <div key={index} className="mb-4 relative">
              <div className="block text-[#002A78] truncate font-bold">
                {label}
              </div>
              <div className="relative">
                {arrow.includes(labelName) && labelName !== "Sections" && (
                  <ArrorwsMission
                    toggleOptionMenu={toggleOptionMenu}
                    labelName={labelName}
                    label={label}
                    selectOption={selectOption}
                  />
                )}

                {openLabel === labelName && (
                  <div
                    ref={menuRef}
                    className="absolute inset-y-8 w-full z-20 mt-1"
                  >
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
                    min={
                      labelName === "Closing_date"
                        ? formData["Opening_date"]
                        : null
                    }
                    max={
                      labelName === "Opening_date"
                        ? formData["Closing_date"]
                        : null
                    }
                  />
                ) : labelName === "Sections" ? (
                  <MadorsToggle
                    madors={madors}
                    handleInputChange={handleInputChange}
                    selectedMadors={formData.Sections || []}
                  />
                ) : (
                  !arrow.includes(labelName) && (
                    <InputMission
                      labelName={labelName}
                      label={label}
                      handleInputChange={handleInputChange}
                    />
                  )
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3">
          <div
            onClick={() => setShowPopup(false)}
            className="px-4 py-1 border border-[#002A78] rounded-full text-[#002A78] font-semibold text-xl hover:cursor-pointer"
          >
            ביטול
          </div>
          <div
            onClick={() => {
              onSubmit(formData);
            }}
            className="px-4 py-1 text-xl bg-[#002A78] text-white rounded-full hover:cursor-pointer flex justify-center items-center"
          >
            <div className="ml-2">
              <Image
                src={"/addEmployee.svg"}
                width={20}
                height={20}
                alt="addEmployee"
              />
            </div>
            צור משימה
          </div>
        </div>
      </div>
    </div>
  );
}
