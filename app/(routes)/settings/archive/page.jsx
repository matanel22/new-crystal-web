import SettingsSearch from "@/components/settings/SettingsSearch";

import TabieSettings from "@/components/settings/TableSettings";
import Image from "next/image";
import React from "react";

export default function activity() {
  const headers = [
    "#",
    "מספר דרישה",
    "שם ניסוי",
    "ת. הכנסה לארכיון",
    "המשתמש המוחק",
  ];

  const data = [
    {
      code_namber: 1,
      activity_type: "axcvג",
      type: "חג",
      namber: 1,
      activity: "חג",
    },
  ];
  return (
    <>
      <div className="h-full w-full flex flex-col ">
        <div className="flex justify-between items-center w-full pb-2">
          <div className="w-full font-bold text-4xl">ארכיון</div>
          <SettingsSearch />
        </div>

        <TabieSettings data={data} headers={headers} />
      </div>
    </>
  );
}
