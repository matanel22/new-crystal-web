import SettingsSearch from "@/components/settings/SettingsSearch";

import TabieSettings from "@/components/settings/TableSettings";
import Image from "next/image";
import React from "react";

export default function activity() {
  const headers = ["#", "שם מדור ", "מחיר צבאי", 'מחיר משהב"ט', 'מחיר סיב"ט'];
  const addFormFields = [
    {
      name: "name",
      label: "שם מדור",
      placeholder: "שם מדור",
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

  const data = [
    {
      number: "1",
      mador: "בטיחות",
      armyPrice: "S1234",
      price1: 12345,
      price2: 12345,
    },
    {
      number: "1",
      mador: "בטיחות",
      armyPrice: "S1234",
      price1: 12345,
      price2: 12345,
    },
    {
      number: "1",
      mador: "בטיחות",
      armyPrice: "S1234",
      price1: 12345,
      price2: 12345,
    },
    {
      number: "1",
      mador: "בטיחות",
      armyPrice: "S1234",
      price1: 12345,
      price2: 12345,
    },
    {
      number: "1",
      mador: "בטיחות",
      armyPrice: "S1234",
      price1: 12345,
      price2: 12345,
    },
  ];
  return (
    <>
      <div className="h-full w-full flex flex-col ">
        <div className="flex justify-between items-center w-full pb-2">
          <div className="w-full font-bold text-4xl">תמחור שעות עבודה</div>
          <SettingsSearch fields={addFormFields} />
        </div>

        <TabieSettings data={data} headers={headers} />
      </div>
    </>
  );
}
