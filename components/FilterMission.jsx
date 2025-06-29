import { CircleX } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function FilterMission({closeFilter, filterSearch, setFilterPopUp, filterPopUp}) {
  const [openLabel, setOpenLabel] = useState(null);
  const [selectOption, setSelectOption] = useState({});
  const [formData, setFormData] = useState({});

  //   פותח אפשריות בחירה
  const handleOption = (labelName, option) => {
    setSelectOption((prev) => ({
      ...prev,
      [labelName]: option,
    }));
    setFormData((prev) => ({
      ...prev,
      [labelName]: option,
    }));
    console.log(formData,"data");
    
    // setOpenLabel(null);
  };

  //   מנקה את הבחירה בלחיצה על האיקס
  const clearOption = (labelName) => {
    setSelectOption((prev) => ({
      ...prev,
      [labelName]: null, // Clear the selected option
    }));
    setFormData((prev) => ({
      ...prev,
      [labelName]: "", // Clear the formData value as well
    }));
    
  };

  const handleFilterData = ()=>{
    filterSearch(formData)
    closeFilter(false)    
  }

  //   האפשריות שמופיעות בלחיצה
  const toggleOptionMenu = (labelName) => {
    setOpenLabel((prev) => (prev === labelName ? null : labelName));
  };

  //   אפשריות בהתאם ללחיצה
  const getOptionsArray = (labelName) => {
    switch (labelName) {
      case "Year":
        return yearArray;
      case "Paying_factor":
        return gamash;
      case "Status":
        return Status;
      default:
        return [];
    }
  };

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

  useEffect(()=>{console.log(formData,"data");},[formData])

  return (
    <>
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
      className="absolute hover:cursor-default top-full right- mt-2  z-50  w-96 p-4 bg-white shadow-lg border border-gray-300 rounded-lg"
    >
      <div className="bg-[#EFF3FB] p-2 rounded-lg ">
        <div className="font-bold">סינונים</div>

        <div>
          {labels.map(({ label, labelName }, index) => (
            <div key={index} className="mb-3 relative">
              <div className="block text-base text-right pr-6 text-[#002A78] truncate font-bold">
                {label}
              </div>

              <div className="relative flex items-center ">
                <div
                  className="ml-2 hover:cursor-pointer"
                  onClick={() => clearOption(labelName)}
                >
                  <CircleX
                    size={20}
                    color={
                      selectOption[labelName] || formData[labelName]
                        ? "red"
                        : "#a5a7aa"
                    }
                  />
                </div>
                {arrow.includes(labelName) ? (
                  <div
                    onClick={() => toggleOptionMenu(labelName)}
                    className=" bg-white hover:cursor-pointer text-right rounded-lg py-1  flex justify-between w-full items-center mt-1"
                  >
                    <div
                      className={`px-3 flex justify-between relative truncate w-full ${
                        selectOption[labelName]
                          ? "text-[#002A78]"
                          : "text-gray-400"
                      }`}
                    >
                      <div>
                        {selectOption[labelName]?
                        selectOption[labelName] :
                        labelName === 'Year' ? 'YYYY' :
                        'בחר ' + label}
                      </div>
                      <Image
                        src="/downArrow.svg"
                        width={10}
                        height={10}
                        alt="arrow"
                        className="ml-2"
                      />
                    </div>
                    {/* האפשריות לבחירה */}
                    {openLabel === labelName && (
                      <div
                        ref={menuRef}
                        className="absolute w-[90%]  top-10 bg-white border border-gray-300 rounded shadow-lg mt-1 z-10"
                      >
                        <ul className="flex flex-col  p-2">
                          {getOptionsArray(labelName).map((option, index) => (
                            <li
                              key={index}
                              className="cursor-pointer px-2 py-1 hover:bg-[#002A78] hover:text-white rounded-lg"
                              onClick={() => handleOption(labelName, option)}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  labelName.includes("date") && (
                    <div className="w-full relative mt-1">
                      <div className="absolute hover:cursor-pointer left-2 top-1/2 transform -translate-y-1/2">
                        <Image
                          src="/calender.svg"
                          width={20}
                          height={20}
                          alt="calender"
                          onClick={
                            labelName === "Opening_date"
                              ? handleIconClickFrom
                              : handleIconClickTo
                          }
                        />
                      </div>
                      <input
                        type="date"
                        ref={
                          labelName === "Opening_date" ? dateFromRef : dateToRef
                        }
                        value={formData[labelName]|| ''}
                        className="w-full border rounded-lg px-3 py-1 text-[#002A78]"
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            [labelName]: e.target.value,
                          }))
                        }
                      />
                    </div>
                  )
                )}

                
               
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between mt-6">
          <div 
          onClick={()=>{closeFilter(false)}}
          className="border hover:cursor-pointer border-[#002A78] rounded-full px-6 bg-white">ביטול</div>
          <div 
          onClick={()=>handleFilterData()}
          className="rounded-full hover:cursor-pointer bg-[#002A78] text-white px-6  font-thin">החל סינון</div>
        </div>
      </div>
    </div>
    <div onClick={()=>filterPopUp&&setFilterPopUp(false)} className="fixed hover:cursor-default  inset-0  "></div>
    </>
  );
}

const labels = [
  { label: "תאריך תחילה", labelName: "Opening_date" },
  { label: "תאריך סיום", labelName: "Closing_date" },
  { label: "שנה", labelName: "Year" },
  { label: 'גמ"ש', labelName: "Paying_factor" },
  { label: "סטטוס", labelName: "Status" },
];

const arrow = ["Year", "Status", "Paying_factor"];
const yearArray = ["2022", "2023", "2024"];
const gamash = ["אמת", "נסא", "תקיפה","תחמושת"];
const Status = ["לא פעיל", "פעיל"];
