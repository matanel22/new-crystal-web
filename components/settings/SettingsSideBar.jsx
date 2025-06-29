"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SettingsSideBar() {
  const pathName = usePathname();

  const sideBar = [
    { text: "משתמשים", link: "users" },
    { text: "ימי עמדה", link: "giving_days" },
    { text: "לקוחות", link: "clients" },
    { text: " שלבים למדור", link: "stages" },
    { text: " הוצאות אחרות", link: "other_expenses" },
    { text: " שעות עבודה", link: "working_hours" },
    { text: "מספרי דרישה", link: "requisition_number" },
    { text: "ארכיון", link: "archive" },
    { text: "ניהול עץ אירגוני", link: "organization" },
    { text: "ניהול הסכמים", link: "agreements" },
    { text: "ניהול קודי פעילות", link: "activity_code" },
  ];
  return (
    <div className=" bg-[#EFF3FB]  whitespace-nowrap rounded-2xl p-4 pt-0 ">
      <div className="w-full h-full dirLtr overflow-auto ">
        <div className=" text-[22px] dirRtl  ">
          {sideBar.map((nav, index) => (
            <Link
              key={index}
              href={
                !pathName.includes("settings/")
                  ? `settings/${nav.link}`
                  : nav.link
              }
            >
              <div className="my-5 mt-4 p-1 pl-8 pr-2 rounded-md hover:bg-blue_color hover:text-white ">
                {nav.text}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
