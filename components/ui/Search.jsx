"use client";

import axios from "@/lib/axios";
import clsx from "clsx";
import { useEffect, useState } from "react";
import Button from "./Button";
import Image from "next/image";

export default function Search({
  btnTxt,
  btnImage,
  btnFunc,
  searchText,
  formatData,
  addNew,
  bg,
  missionDay,
  searchEmployees,
  setEmployees,
}) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase(); // Convert query to lowercase for case-insensitive comparison
    setQuery(searchQuery);

    if (searchQuery.trim()) {
      // חיפוש על העובדים לפי שם/מספר
      const filteredEmployees = searchEmployees.filter((employee) => {
        const employeeNumber = employee.employeeToShow.employee_number
          ?.toString()
          .trim();
        const employeeName = employee.employeeToShow.first_name
          ?.trim()
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");

        return (
          (employeeName && employeeName.startsWith(searchQuery)) ||
          (employeeNumber && employeeNumber.startsWith(searchQuery))
        );
      });
      setEmployees(filteredEmployees);
    } else {
      setEmployees(searchEmployees); // מחזיר חזרה את העובדים
    }
  };

  return (
    <div
      className={clsx(
        "w-full flex h-10 border border-white rounded-full items-center",
        {
          "bg-gradient-to-r from-blue_color via-blue_color to-[#EFF3FB]":
            !missionDay,
        }
      )}
    >
      {/* Input + Icon */}
      <div className="relative flex-1 h-full">
        <input
          className={clsx(
            "rounded-full pr-2 pl-10 outline-none h-full placeholder:text-blue_color w-full bg-[#EFF3FB]",
            { "bg-white border": bg },
            { "w-[85%]": !missionDay }
          )}
          value={query}
          onChange={handleSearch}
          placeholder={searchText}
        />
        <Image
          src={"/MagnifyingGlass.svg"}
          alt="Search"
          width={20}
          height={20}
          className="absolute left-3 top-1/2 -translate-y-1/2"
        />
      </div>
      {!missionDay && (
        <div className="ml-2">
          <Button textBtn={btnTxt} image={btnImage} onClick={btnFunc} />
        </div>
      )}
    </div>
  );
}
