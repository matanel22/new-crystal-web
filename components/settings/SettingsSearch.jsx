'use client'
import Image from "next/image";
import React, { useState } from "react";

import AddUser from "./AddUser";

export default function SettingsSearch( {fields}) {
  const [openPopup, setOpenPopup] = useState();
  return (
    <>
    <div className=" w-full px-3">
      <div className=" w-full gap-3 whitespace-nowrap flex">
        <div className="relative flex w-full  ">
          <input
            className="pr-2  w-full outline-none border-[1.5px] border-blue_color rounded-2xl"
            type="text"
          />
          <Image
            className="absolute transform -translate-y-1/2 left-3 top-1/2"
            src="/MagnifyingGlass.svg"
            width={20}
            height={20}
            alt="search"
          />
        </div>
        <button
          onClick={() =>{fields ? setOpenPopup(true) : addRow()}}
          className="w-2/6 flex justify-center gap-1.5 items-center text-white py-1 bg-blue_color rounded-2xl"
        >
          <Image src={"/addEmployee.svg"} width={20} height={20} alt="plus" />
          הוסף שורה חדשה
        </button>
      </div>
      
    </div>{openPopup && <AddUser  fields={fields} setOpenPopup={setOpenPopup}/>}</>
  );
}
