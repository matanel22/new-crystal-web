"use client";
import SettingsSearch from "@/components/settings/SettingsSearch";

import TabieSettings from "@/components/settings/TableSettings";
import Image from "next/image";
import React, { useState } from "react";

export default function activity() {
  const [data, setData] = useState([
    {
      number: "1",
      name: "אוטבוס ",
      armyPrice: "S1234",
      price1: 12345,
      price2: 12345,
    },
    {
      number: "1",
      name: "אוטבוס ",
      armyPrice: "S1234",
      price1: 12345,
      price2: 12345,
    },
    {
      number: "1",
      name: "אוטבוס ",
      armyPrice: "S1234",
      price1: 12345,
      price2: 12345,
    },
    {
      number: "1",
      name: "אוטבוס ",
      armyPrice: "S1234",
      price1: 12345,
      price2: 12345,
    },
  ]);

  const headers = ["#", "שם משאב", "מחיר צבאי", 'מחיר משהב"ט', 'מחיר סיב"ט'];

  const addFormFields = [
    {
      name: "name",
      label: "שם משאב",
      placeholder: "שם משאב",
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

  // const addRow = () => {
  //   const hasNullValue = Object.values(data[0] || {}).some((value) => value === null)
  //   if(!hasNullValue){
  //   const row = {
  //     number: "",
  //     name: null,
  //     armyPrice: null,
  //     price1: null,
  //     price2: null,
  //   };
  //   setData((prev) => [row, ...prev]);
  //  }

  //  return

  // };

  return (
    <>
      <div className="h-full w-full flex flex-col ">
        <div className="flex justify-between items-center w-full pb-2">
          <div className="w-full font-bold text-4xl">ניהול הוצאות אחרות</div>
          <SettingsSearch fields={addFormFields} />
        </div>

        <TabieSettings data={data} headers={headers} />
      </div>
    </>
  );
}
