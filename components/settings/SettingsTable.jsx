"use client";
import Image from "next/image";
import { useState } from "react";

export default function SettingsTable({ data, headers }) {
  const [updateRow, setUpdateRow] = useState("ppp");
  console.log(updateRow);
  return (
    <div className="flex-1 flex flex-col overflow-hidden  rounded-lg">
      <div className=" px-2  dirLtr h-full rounded-2xl overflow-auto">
        <div className=" dirRtl bg-[#EFF3FB] rounded-lg ">
          <div className="p-2 pb-0 text-white rounded-lg sticky top-0 bg-[#EFF3FB] w-full">
            <div className="grid grid-cols-9  sticky top-0 rounded-lg p-2 bg-blue_color justify-center ">
              {headers.map((header, index) => (
                <div
                  key={header}
                  className=" text-center font-semibold text-xl"
                >
                  {header}
                </div>
              ))}
              <div
                className="text-center  col-end-10
             "
              >
                פעולות
              </div>
            </div>
          </div>
          <div className="flex flex-col px-2   ">
            {data.map((code, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-9 justify-center border-b-[2px] py-2.5"
              >
                {Object.entries(code).map(([code_key, code_value], index) => (
                  <div key={index} className="text-center">
                    {code_value}
                  </div>
                ))}
                <div className="flex  carsor justify-around col-end-10 ">
                  <div
                    onClick={() => {
                      setUpdateRow(rowIndex);
                      console.log(updateRow);
                    }}
                    className=" cursor-pointer gap-1 flex px-3 w-fit text-white rounded-full bg-blue_color"
                  >
                    <Image
                      src={"/editing.svg"}
                      width={15}
                      height={16}
                      alt={"uu"}
                    />

                    <p>עריכת שורה</p>
                  </div>
                  <Image src={"/bit.svg"} width={15} height={16} alt={"uu"} />
                </div>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
