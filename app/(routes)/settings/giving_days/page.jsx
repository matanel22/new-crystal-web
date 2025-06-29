import SettingsSearch from "@/components/settings/SettingsSearch";
import TabieSettings from "@/components/settings/TableSettings";
import Image from "next/image";
import React from "react";

export default function activity() {
  const headers = ["#", "שם ", "מחיר צבאי", 'מחיר משהב"ט', 'מחיר סיב"ט'];
  const AddFormFields = [
    {
      name: "name",
      label: "שם",
      placeholder: "שם",
      value: null,
      require: true,
    },
    {
      name: "army_price",
      label: "מחיר צבאי",
      placeholder: "מחיר צבאי",
      value: null,
      require: true,
    },
    {
      name: "md_price",
      label: `מחיר משהב"ט`,
      placeholder: `מחיר משהב"ט`,
      value: null,
      require: true,
    },
    {
      name: "sd_price",
      label: `מחיר סיב"ט`,
      placeholder: `מחיר סיב"ט`,
      value: null,
      require: true,
    },
  ];

  const activity_code = [
    {
      number: "1",
      name: "ימי מסלול",
      army_price: "S1234",
      price1: 12345,
      price2: 12345,
    },
  ];
  return (
    <>
      <div className="h-full w-full flex flex-col ">
        <div className="flex justify-between items-center w-full pb-2">
          <div className="w-full font-bold text-4xl">עמדות במערכת</div>
          <SettingsSearch fields={AddFormFields} />
        </div>

        <TabieSettings data={activity_code} headers={headers} />
      </div>
    </>
  );
}
