import SettingsSearch from "@/components/settings/SettingsSearch";
import TabieSettings from "@/components/settings/TableSettings";
import Image from "next/image";
import React from "react";

export default function activity() {
  const headers = ["#", "שם מלא", "מספר אישי", "הרשאות", ,];
  const AddFormFields = [
    {
      name: "prievt_namber",
      label: "מספר אישי",
      placeholder: "מספר אישי",
      value: null,
      require: true,
    },
    {
      name: "full_name",
      label: "שם מלא",
      placeholder: "שם מלא",
      value: null,
      require: true,
    },

    {
      name: "permissions",
      label: "הרשאות",
      placeholder: " הרשאות",
      value: null,
      require: true,
      type: "option",
    },

    {
      name: "Department",
      label: " מחלקות",
      placeholder: "מחלקות ",
      value: null,
      require: true,
      type: "option",
    },
    {
      name: "branch",
      label: "ענפים",
      placeholder: "ענף",
      value: null,
      require: true,
      type: "option",
    },
    {
      name: "section",
      label: " מדורים",
      placeholder: " מדורים",
      value: null,
      require: true,
      type: "option",
    },
  ];

  const users = [
    {
      id: "1",
      user_number: "1",
      full_name: "דוד אלקיים",
      namber: "S1234",
      permissions: "מנהל",
    },
    {
      id: "1",
      user_number: "1",
      full_name: "דוד אלקיים",
      namber: "S1234",
      permissions: "מנהל",
    },
    {
      id: "1",
      user_number: "1",
      full_name: "דוד אלקיים",
      namber: "S1234",
      permissions: "מנהל",
    },
    {
      id: "1",
      user_number: "1",
      full_name: "דוד אלקיים",
      namber: "S1234",
      permissions: "מנהל",
    },
    {
      id: "1",
      user_number: "1",
      full_name: "דוד אלקיים",
      namber: "S1234",
      permissions: "מנהל",
    },
  ];
  return (
    <>
      <div className="h-full w-full flex flex-col ">
        <div className="flex justify-between items-center w-full pb-2">
          <div className="w-full font-bold text-4xl">ניהול משתמשים במערכת </div>
          <SettingsSearch fields={AddFormFields} />
        </div>

        <TabieSettings data={users} headers={headers} />
      </div>
    </>
  );
}
