"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useState } from "react";

export default function ReportGenerator() {
  const [fieldsTo, setFieldsTo] = useState([]);
  const employees = [
    {
      Employee_name: "שמואל",
      Employee_number: "12345",
      entry_time_1: "08:00",
      Entry_Time_2: "10:00",
      exit_Time_1: "09:00",
      exit_Time_2: "11:00",
      date: "2024-05-03",
      branch: "אמת",
      department: "משקים ומטה",
      section: "מחשוב",
    },
    {
      Employee_name: "שמואל",
      Employee_number: "12345",
      entry_time_1: "08:00",
      Entry_Time_2: "10:00",
      exit_Time_1: "09:00",
      exit_Time_2: "11:00",
      date: "2024-05-03",
      branch: "אמת",
      department: "משקים ומטה",
      section: "מחשוב",
    },
    {},
    {
      Employee_name: "שמואל",
      Employee_number: "12345",
      entry_time_1: "08:00",
      Entry_Time_2: "10:00",
      exit_Time_1: "09:00",
      exit_Time_2: "11:00",
      date: "2024-05-03",
      branch: "אמת",
      department: "משקים ומטה",
      section: "מחשוב",
    },
    {},
    {
      Employee_name: "שמואל",
      Employee_number: "12345",
      entry_time_1: "08:00",
      Entry_Time_2: "10:00",
      exit_Time_1: "09:00",
      exit_Time_2: "11:00",
      date: "2024-05-03",
      branch: "אמת",
      department: "משקים ומטה",
      section: "מחשוב",
    },
    {},
    {
      Employee_name: "שמואל",
      Employee_number: "12345",
      entry_time_1: "08:00",
      Entry_Time_2: "10:00",
      exit_Time_1: "09:00",
      exit_Time_2: "11:00",
      date: "2024-05-03",
      branch: "אמת",
      department: "משקים ומטה",
      section: "מחשוב",
    },
    {},
    {
      Employee_name: "שמואל",
      Employee_number: "12345",
      entry_time_1: "08:00",
      Entry_Time_2: "10:00",
      exit_Time_1: "09:00",
      exit_Time_2: "11:00",
      date: "2024-05-03",
      branch: "אמת",
      department: "משקים ומטה",
      section: "מחשוב",
    },
    {},
    {
      Employee_name: "שמואל",
      Employee_number: "12345",
      entry_time_1: "08:00",
      Entry_Time_2: "10:00",
      exit_Time_1: "09:00",
      exit_Time_2: "11:00",
      date: "2024-05-03",
      branch: "אמת",
      department: "משקים ומטה",
      section: "מחשוב",
    },
    {},
    {
      Employee_name: "שמואל",
      Employee_number: "12345",
      entry_time_1: "08:00",
      Entry_Time_2: "10:00",
      exit_Time_1: "09:00",
      exit_Time_2: "11:00",
      date: "2024-05-03",
      branch: "אמת",
      department: "משקים ומטה",
      section: "מחשוב",
    },
    {},
    {
      Employee_name: "שמואל",
      Employee_number: "12345",
      entry_time_1: "08:00",
      Entry_Time_2: "10:00",
      exit_Time_1: "09:00",
      exit_Time_2: "11:00",
      date: "2024-05-03",
      branch: "אמת",
      department: "משקים ומטה",
      section: "מחשוב",
    },
    {},
    {
      Employee_name: "שמואל",
      Employee_number: "12345",
      entry_time_1: "08:00",
      Entry_Time_2: "10:00",
      exit_Time_1: "09:00",
      exit_Time_2: "11:00",
      date: "2024-05-03",
      branch: "אמת",
      department: "משקים ומטה",
      section: "מחשוב",
    },
    {},
    {
      Employee_name: "שמואל",
      Employee_number: "12345",
      entry_time_1: "08:00",
      Entry_Time_2: "10:00",
      exit_Time_1: "09:00",
      exit_Time_2: "11:00",
      date: "2024-05-03",
      branch: "אמת",
      department: "משקים ומטה",
      section: "מחשוב",
    },
    {},
    {
      Employee_name: "שמואל",
      Employee_number: "12345",
      entry_time_1: "08:00",
      Entry_Time_2: "10:00",
      exit_Time_1: "09:00",
      exit_Time_2: "11:00",
      date: "2024-05-03",
      branch: "אמת",
      department: "משקים ומטה",
      section: "מחשוב",
    },
    {
      Employee_name: "שמואל",
      Employee_number: "12345",
      entry_time_1: "08:00",
      Entry_Time_2: "10:00",
      exit_Time_1: "09:00",
      exit_Time_2: "11:00",
      date: "2024-05-03",
      branch: "אמת",
      department: "משקים ומטה",
      section: "מחשוב",
    },
  ];
  const buttons = [
    { text: "בטל", icon: "censel.svg" },
    { text: "חדש", icon: "new.svg" },
    { text: "שמור", icon: "save.svg" },
    { text: "יצוא לקובץ Excel", icon: "download.svg" },
    { text: "שלח", icon: "send.svg" },
    { text: "שנה שם", icon: "changeName.svg" },
    { text: "הוסף למועדפים", icon: "star.svg" },
    { text: "מחק", icon: "bit.svg", color: "red" },
  ];
  const fields = {
    Employee_name: "שם עובד",
    Employee_number: "מספר עובד",
    entry_time_1: "שעת כניסה 1",
    Entry_Time_2: "שעת כניסה2",
    exit_Time_1: "שעת יציאה 1",
    exit_Time_2: "שעת יציאה2",
    date: "תאריך",
    branch: "ענף",
    department: "מחלקה",
    section: "מדור",
  };

  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    console.log(draggedItem);
    console.log(item);
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    // console.log(e);
    // e.target.classList.add("dragndrop");
    e.dataTransfer.dropEffect = "move";
  };
  const handleDragLeave = (e) => {
    // e.target.classList.remove("dragndrop");
  };

  const handleDrop = (e) => {
    e.preventDefault();

    let newFieldsTo = [...fieldsTo];

    console.log(newFieldsTo);
    let newItem = { key: draggedItem.key, field: draggedItem.field };
    if (draggedItem.field === "תאריך") {
      newFieldsTo.splice(0, 0, newItem);
    } else {
      newFieldsTo.push(newItem);
    }
    setFieldsTo(newFieldsTo);
    handleDragEnd();
  };
  

  const removeItem = (item) => {
    const newArr = [...fieldsTo];
    newArr.splice(item, 1);
    setFieldsTo(newArr);
  };
  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   let newFieldsTo = [...fieldsTo ?? ""]
  //   console.log(newFieldsTo);
  //   if (draggedItem === "תאריך") {
  //       newFieldsTo = { "תאריך": draggedItem, ...newFieldsTo };
  //   } else {
  //       newFieldsTo[draggedItem] = draggedItem;
  //   }
  //   setFieldsTo(newFieldsTo);
  //   handleDragEnd();
  // };

  return (
    <div className="h-full overflow-hidden flex flex-col w-full rounded-xl p-3 bg-[#EFF3FB]">
      <div className=" flex gap-4 pb-3 ">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`border ${
              button.color
                ? "border-[#B00000] text-[#B00000]"
                : "border-blue_color"
            } flex gap-2 justify-center items-center px-4 py-[2px] bg-white rounded-3xl`}
            onClick={() => console.log(button.text)}
          >
            <Image src={button.icon} width={15} height={15} alt={button.icon} />
            <div>{button.text}</div>
          </button>
        ))}
      </div>
      <div className="h-full overflow-hidden flex gap-4 ">
        <div className="bg-white  w-1/5 p-2 rounded-xl ">
          <div className="dirLtr h-full p-4 flex-col overflow-y-auto font-normal text-xl">
            <div className="text-center font-semibold text-2xl pb-2">
              שדות אפשריים
            </div>{" "}
            <div className="dirRtl">
              <div className="relative">
                <input
                  type="text"
                  className="dirRtl w-full p-2 rounded-3xl bg-[#EFF3FB] "
                  placeholder=" חיפוש"
                />
                <Image
                  className="absolute left-[5%] top-[26%]"
                  src="/MagnifyingGlass.svg"
                  width={20}
                  height={20}
                  alt="search"
                />
              </div>

              {Object.entries(fields).map(([key, field], i) => (
                <div
                  draggable
                  onDragStart={(e) => handleDragStart(e, { key, field })}
                  onDragEnd={handleDragEnd}
                  key={i}
                  className="border-b-[1px] py-4 px-4 flex  "
                >
                  <p>{field}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full w-4/5  rounded-lg  gap-1 ">
          <div className="bg-white h-2/5 rounded-lg flex flex-col p-2 overflow-hidden ">
            <div className=" flex items-center">
              <div className="inline bg-blue_color rounded-[4px] px-8 py-1 text- text-white ">
                מסננים
              </div>
              <p className="px-2 text-end text-[#7A90B8] flex-1 ">
                גרור שדה לאיזור זה, על מנת להוסיפו לסינון
              </p>
              <div className=" flex bg-blue_color rounded-full px-2 py-1  gap-2 text-white ">
                <Image
                  className="white-image"
                  src="/bit.svg"
                  width={18}
                  height={18}
                  alt=""
                />
                <Image
                  className="white-image "
                  src="options.svg"
                  width={13}
                  height={13}
                  alt=""
                />
              </div>
            </div>
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e)}
              className="py-2  flex-1  overflow-y-auto"
            >
              <div className="justify-items-center grid grid-cols-3 gap-3">
                {fieldsTo.map((fieldObj, i) => (
                  <div key={i} className="w-full px-5">
                    <p className="block text-lg font-semibold">
                      {fieldObj.field}
                    </p>

                    <div className="w-full flex gap-2">
                      {fieldObj.field === "תאריך" ? (
                        <div className="w-full flex gap-2">
                          <div className="justify-end flex ga bg-blue_color rounded-full w-3/5">
                            <p className="w-1/4 text-white  ">dddd</p>
                            <input
                              type="date"
                              className=" outline-none px-3 border  border-blue_color rounded-full "
                            />
                          </div>
                          <Image
                            className=""
                            src="/leftArrow.svg"
                            width={24}
                            height={22}
                            alt=""
                          />
                          <input
                            type="date"
                            className=" outline-none px-3 border border-blue_color rounded-full "
                          />
                        </div>
                      ) : (
                        <input
                          type="text"
                          className=" outline-none pr-3 border w-full border-blue_color rounded-full "
                        />
                      )}
                      <Image
                        onClick={() => removeItem(fieldObj)}
                        className=""
                        src="/bit.svg"
                        width={15}
                        height={15}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-0 text-white">
            <button className="bg-blue_color px-[30px] py-2 rounded-full flex gap-3 text-xl font-normal items-center m-1">
              <Image
                className=""
                src="/refresh.svg"
                width={20}
                height={20}
                alt=""
              />
              רענן נתונים
            </button>
          </div>

          <div className="bg-white flex p-2 gap-3 flex-1 overflow-hidden ">
            <div className="w-fit dirLtr h-full overflow-auto ">
              <div className="flex dirRtl px-2">
                {fieldsTo.map((field, index) => (
                  <div key={field} className="flex flex-col justify-center text-center  ">
                    <div
                      key={index}
                      className={clsx(
                        " justify-center max-w-40  bg-blue_color flex px-5 p-2 whitespace-nowrap text-white",
                        {
                          "rounded-r-xl": index == 0,
                          "rounded-l-xl": index == fieldsTo.length - 1,
                        }
                      )}
                    >
                      {field.field}
                    </div>
                    <div className="bg-white">
                      {employees.map((employee, Index) => (
                        <p
                          className="p-2  text-center whitespace-nowrap "
                          key={Index}
                        >
                          {employee[field.key]}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
           
              {fieldsTo.length <= 10 && (
                <div className="bg-[#EFF3FB]  flex-1 border-dashed border-2 border-blue_color rounded-lg p-2  flex justify-center items-center">
                  <Image src={"addFilid.svg"} width={422} height={200} alt="addFilid.svg"/>
                </div>
              )}{" "}
            
            {/* <div className=" flex ">
            
              
              <div className="h-full  flex  w-fit ">
                {fieldsTo.map((field, index) => (
                  <div className="flex flex-col justify-center text-center  ">
                    <div
                      key={index}
                      className={clsx(
                        " justify-center max-w-40  bg-blue_color flex px-5 p-2 whitespace-nowrap text-white",
                        {
                          "rounded-r-xl": index == 0,
                          "rounded-l-xl": index == fieldsTo.length - 1,
                        }
                      )}
                    >
                      {field.field}
                    </div>
                    <div className="bg-white">
                      {employees.map((employee, Index) => (
                        <p
                          className="p-2 w-full text-center whitespace-nowrap "
                          key={Index}
                        >
                          {employee[field.key]}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
             
            </div>   {fieldsTo.length <= 10 && (
              <div className="bg-[#EFF3FB] w-full h-full border-dashed border-2 border-blue_color rounded-lg p-2 h flex justify-center items-center">
                <Image src={"addFilid.svg"} width={422} height={200} />
              </div>
            )} 
            
            </div>  */}
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /*
        
        
          
            

           
         

          <div className="overflow-x-auto w-full bg-white overflow-y-scroll p-2 flex gap-1 rounded-lg ">
           
            {fieldsTo.length <= 10 && (
              <div
                className={clsx(
                  "bg-[#EFF3FB] w-full border-dashed border-2 border-blue_color rounded-lg p-2"
                )}
              >
                <div className=" h-full flex justify-center items-center">
                  <Image src={"addFilid.svg"} width={422} height={200} />
                </div>
              </div>
            )}
          </div>
        </div> */
}
{
  /* </div> */
}

{
  /* <div className=" max-w-full flex flex-col" >
            { employees.map((employee, rowIndex) => (
            <div className="w-full flex justify-center  p-2 " key={rowIndex}>
              {fieldsTo.map((field, colIndex) => (
                <p className="w-full text-center" key={colIndex}>{employee[field.key]}</p>
              ))}
            </div>
          ))}
          
            </div> */
}
