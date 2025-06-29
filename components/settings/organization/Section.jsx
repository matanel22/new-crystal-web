import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Section({ madors, updateRow, setUpdateRow }) {
  return (
    <div className="bg-[#002A78]/25 ">
      {madors?.map((mador, madorIndex) => (
        <div
          key={madorIndex}
          className="grid grid-cols-8 whitespace-nowrap gap-2 content-center text-center   border-b-[1px] py-2.5"
        >
          {Object.entries(mador).map(([key, value], index) =>
            updateRow.row === "section" && updateRow.index === madorIndex ? (
              <div
                className={` flex w-full px-2 ${
                  index === Object.entries(mador).length - 1 && " col-span-2 "
                } `}
              >
                <div
                  className={`" rounded-full flex w-full"
                 ${
                   index === Object.entries(mador).length - 1 &&
                   "  bg-gradient-to-r from-blue_color via-blue_color to-[#EFF3FB]"
                 }`}
                >
                  <input
                    className={`" text-center w-full rounded-full outline-none border border-blue_color "
                  `}
                    value={value}
                  />
                  {index === Object.entries(mador).length - 1 && (
                    <div className="w-full flex justify-center  text-white">
                      שמור שינויים
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div key={key} className="col-span-1 text-center pr-28 ">
                {value}
              </div>
            )
          )}

          <div className="pl-2 flex justify-around col-end-9">
            <div
              onClick={() => {
                console.log(updateRow);

                setUpdateRow({ row: "section", index: madorIndex });
              }}
              className={`${
                updateRow.row === "section" && updateRow.index === madorIndex
                  ? " border border-blue_color/5 bg-blue_color/50"
                  : "bg-blue_color border border-blue_color "
              }"   items-center gap-1 flex px-3 w-fit text-white rounded-full cursor-pointer "`}
            >
              <Pencil strokeWidth={1.5} size={15} />
              <p>עריכת שורה</p>
            </div>
            <Image src={"/bit.svg"} width={15} height={16} alt={"uu"} />
            {/* <Image className="mx-2" src={"/bit.svg"} width={15} height={16} alt={"uu"} /> */}
          </div>
        </div>
      ))}
    </div>
  );
}
