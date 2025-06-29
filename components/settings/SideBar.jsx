`use client`
import Link from "next/link";
import React from "react";

export default function SideBar() {
  const sideBar = [
    { text: "משתמשים", link: "" },
    { text: "ימי עמדה", link: "" },
    { text: "לקוחות", link: "" },
    { text: " שלבים למדור", link: "" },
    { text: " הוצאות אחרות", link: "" },
    { text: " שעות עבודה", link: "" },
    { text: "מספרי דרישה", link: "" },
    { text: "ארכיון", link: "" },
    { text: "ניהול עץ אירגוני", link: "" },
    { text: "ניהול הסכמים", link: "" },
    { text: "ניהול קודי פעילות", link: "activity_code" },
  ];
  return (
    <div className=" bg-[#EFF3FB] w-[17%] rounded-2xl ">
      <div className="p-3 text-[22px]">
        {sideBar.map((nav, index) => (
          <Link key={index} href={`settings/${nav.link}`}>
            <div
              
              className=" m-2 py-3 px-5 rounded-md hover:bg-blue_color hover:text-white hover:font-semibold"
            >
              {nav.text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
