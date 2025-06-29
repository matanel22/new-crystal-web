import SettingsSearch from "@/components/settings/SettingsSearch";
import TabieSettings from "@/components/settings/TableSettings";
import Image from "next/image";
import React from "react";

export default function activity() {
  const headers = ["#", 'מייל גמ"ש', "שם לקוח", 'קוד גמ"ש', 'סוג גמ"ש', ,];
  const AddFormFields = [
    {
      name: "email",
      label: `מייל גמ"ש`,
      placeholder: `מייל גמ"ש`,
    },
    {
      name: "client_name",
      label: `שם לקוח`,
      placeholder: `שם לקוח`,
    },
    {
      name: "code",
      label: `קוד גמ"ש`,
      placeholder: `קוד גמ"ש`,
      type: "option",
    },
    {
      name: "type",
      label: `סוג גמ"ש`,
      placeholder: `סוג גמ"ש`,
      type: "option",
    },
  ];

  const clients = [
    {
      number: "1",
      namber: "12345678@gmail.com",
      full_name: "דוד אלקיים",
      code: "1234",
      type: "אחר",
    },
    {
      number: "1",
      namber: "123@idf",
      full_name: "דוד אלקיים",
      code: "1234",
      type: "אחר",
    },
    {
      number: "1",
      namber: "123@idf",
      full_name: "דוד אלקיים",
      code: "1234",
      type: "אחר",
    },
    {
      number: "1",
      namber: "123@idf",
      full_name: "דוד אלקיים",
      code: "1234",
      type: "אחר",
    },
    {
      number: "1",
      namber: "123@idf",
      full_name: "דוד אלקיים",
      code: "1234",
      type: "אחר",
    },
  ];
  return (
    <>
      <div className="h-full w-full flex flex-col ">
        <div className="flex justify-between items-center w-full pb-2">
          <div className="w-full font-bold text-4xl">לקוחות במערכת</div>
          <SettingsSearch fields={AddFormFields} />
        </div>

        <TabieSettings data={clients} headers={headers} />
      </div>
    </>
  );
}
