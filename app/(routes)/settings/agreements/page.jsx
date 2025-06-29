import SettingsSearch from "@/components/settings/SettingsSearch";

import TabieSettings from "@/components/settings/TableSettings";
import Image from "next/image";
import React from "react";

export default function agreements() {
  const headers = [
    "קוד הסכם",
    " שם הסכם",
    "שעת כניסה ",
    "שעת יציאה",
    "מגבלת שעות נוספות",
    "כמות שעות",
    "הפסקה",
  ];
  const addFormFields = [
    {
      name: "code",
      label: "קוד הסכם",
      placeholder: "קוד הסכם",
    },
    {
      name: "name",
      label: "שם הסכם",
      placeholder: "מחיר צבאי",
    },
    {
      name: "entry_time",
      label: "שעת כניסה",
      placeholder: "שעת כניסה",
    },
    {
      name: "exit_time",
      label: "שעת יציאה",
      placeholder: "שעת יציאה",
    },
    {
      name: "overtime_limit",
      label: "מגבלת שעות נוספות",
      placeholder: "מגבלת שעות נוספות",
    },
    // {
    //   name: "amount_of_hours",
    //   label:"כמות שעות",
    //   placeholder: "כמות שעות",

    // },
    {
      name: "break",
      label: "הפסקה",
      placeholder: "הפסקה",
    },
  ];

  const agreement = [
    {
      activity_type: "axcvג",
      code_namber: 1,
      type: "חג",
      namber: 1,
      activity: "חג",
      ac: "חג",
      actty: "חג",
    },
    {
      activity_type: "axcvג",
      code_namber: 1,
      type: "חג",
      namber: 1,
      activity: "חג",
    },
    {
      activity_type: "axcvג",
      code_namber: 1,
      type: "חג",
      namber: 1,
      activity: "חג",
    },
    {
      activity_type: "axcvג",
      code_namber: 1,
      type: "חג",
      namber: 1,
      activity: "חג",
    },
  ];
  return (
    <>
      <div className="h-full w-full flex flex-col ">
        <div className="flex justify-between items-center w-full pb-2">
          <div className="w-full font-bold text-4xl">ניהול הסכמים </div>
          <SettingsSearch fields={addFormFields} />
        </div>

        <TabieSettings data={agreement} headers={headers} />
      </div>
    </>
  );
}
