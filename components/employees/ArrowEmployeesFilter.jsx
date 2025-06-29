import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function ArrowEmployeesFilter({
  toggleOptionMenu,
  labelName,
  label,
  selectOption,
  getOptionsArray,
  openLabel,
  handleOption,
  setOpenLabel,
  fetchDepartments,
}) {
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

    
  return (
    <div
      onClick={() => toggleOptionMenu(labelName)}
      className=" bg-white hover:cursor-pointer text-right rounded-lg py-1  flex justify-between w-full items-center mt-1"
    >
      <div
        className={`px-3 flex justify-between relative truncate w-full ${
          selectOption[labelName] ? "text-[#002A78]" : "text-gray-400"
        }`}
      >
        <div>
          {selectOption[labelName]
            ? selectOption[labelName]
            // : labelName === "Year"
            // ? "YYYY"
            : "בחר " + label}
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
  );
}
