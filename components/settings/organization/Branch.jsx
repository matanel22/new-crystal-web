import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import Section from "./Section";

export default function Branch({
  updateRow,
  setUpdateRow,
  branchs,
  openDepartment,
  depIndex,
  openBranch,
  handleBranchToggle,
}) {
  return (
    <div className="bg-[#002A78]/25 ">
      {branchs.map((branch, branchIndex) => (
        <div key={branchIndex}>
          <div className="grid grid-cols-8 whitespace-nowrap gap-2 content-center text-center  border-b-[1px] py-2.5">
            {Object.entries(branch).map(
              ([key, value],index) =>
                key !== "madors" &&
                (updateRow.row === "branchs" &&
                updateRow.index === branchIndex ? ( 
                 
                <div 

                  className={` flex w-full px-2 ${
                    index === Object.entries(branch).length - 2 && " col-span-2"
                  } `}
                >
                  <div
                    className={`" rounded-full flex w-full"
                   ${
                     index === Object.entries(branch).length - 2 &&
                     "  bg-gradient-to-r from-blue_color via-blue_color to-[#EFF3FB]"
                   }`}
                  >
                    <input
                      className={`" text-center w-full rounded-full outline-none border border-blue_color "
                    `}
                      value={value}
                    />
                    {index === Object.entries(branch).length - 2 && (
                      <div className="w-full flex justify-center  text-white">
                        שמור שינויים
                      </div>
                    )}
                  </div>
                </div>
                  // <input
                  //   className="text-center rounded-full border  border-blue_color"
                  //   type="text"
                  //   value={value}
                  // />
                ) : (
                  <div key={key} className="col-span-1 text-center ">
                    {value}
                  </div>
                ))
            )}
            <div
              onClick={() => {handleBranchToggle(branchIndex),setUpdateRow({
                index: "",
                row: "",
              })}}
              className="col-end-8 flex justify-end pl-2 cursor-pointer"
            >
              <Image
                className={`${
                  openBranch === branchIndex ? " outline rotate-180" : ""
                }`}
                src={"/downArrow.svg"}
                width={12}
                height={15}
                alt={"downArrow"}
              />
            </div>

            <div className="pl-2 flex justify-around col-end-9">
              <div
                onClick={() =>
                  setUpdateRow({ row: "branchs", index: branchIndex })
                }
                className={`${
                  updateRow.row === "branchs" && updateRow.index === branchIndex
                    ? " border border-blue_color/5 bg-blue_color/50"
                    : "bg-blue_color border border-blue_color "
                }"   items-center gap-1 flex px-3 w-fit text-white rounded-full cursor-pointer "`}
              >
                <Pencil strokeWidth={1.5} size={15} />
                <p>עריכת שורה</p>
              </div>
              <Image src={"/bit.svg"} width={15} height={16} alt={"uu"} />
            </div>
          </div>
          {openBranch === branchIndex && (
            <Section
              madors={branch.madors}
              updateRow={updateRow}
              setUpdateRow={setUpdateRow}
            />
          )}
        </div>
      ))}
    </div>
  );
}
