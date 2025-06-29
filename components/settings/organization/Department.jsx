import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import Branch from "./Branch";

export default function Departments({
  updateRow,
  setUpdateRow,
  departments,
  openDepartment,
  handleDepartmentToggle,
  openBranch,
  handleBranchToggle,
}) {
  const a = "department";
  return (
    <div className="bg-[#002A78]/10 ">
      {departments.map((department, depIndex) => (
        <div key={depIndex} className="border border-b-[#002A78]/20">
          {/* Department row */}
          <div
            // onClick={() => handleDepartmentToggle(depIndex)}
            className="grid grid-cols-8 whitespace-nowrap content-center gap-2  text-center border-b-[1px] py-2.5 cursor-pointer"
          >
            {Object.entries(department).map(
              ([key, value], index) =>
                key !== "branchs" &&
                (updateRow.row === "departments" &&
                updateRow.index === depIndex ? (
                  <div
                    className={` flex w-full px-2 ${
                      index === Object.entries(department).length - 2 &&
                      " col-span-2"
                    } `}
                  >
                    <div
                      className={`" rounded-full flex w-full"
                   ${
                     index === Object.entries(department).length - 2 &&
                     "  bg-gradient-to-r from-blue_color via-blue_color to-[#EFF3FB]"
                   }`}
                    >
                      <input
                        className={`" text-center w-full rounded-full outline-none border border-blue_color "
                    `}
                        value={value}
                      />
                      {index === Object.entries(department).length - 2 && (
                        <div className="w-full flex justify-center  text-white">
                          שמור שינויים
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  // <input type="text" value={value} className="text-center rounded-full border  border-blue_color" />
                  <div key={key} className="col-span-1 text-center ">
                    {value}
                  </div>
                ))
            )}
            <div className="col-end-8 flex justify-end pl-2 cursor-pointer">
              <Image
                className={`${
                  openDepartment === depIndex ? " outline rotate-180" : ""
                }`}
                onClick={() => {handleDepartmentToggle(depIndex),setUpdateRow({
                  index: "",
                  row: "",
                })}}
                src={"/downArrow.svg"}
                width={12}
                height={15}
                alt={"downArrow"}
              />
            </div>
            <div className="pl-2 flex justify-around col-end-9">
              <div
                onClick={() =>
                  setUpdateRow({ row: "departments", index: depIndex })
                }
                className={`${
                  updateRow.row === "departments" &&
                  updateRow.index === depIndex
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

          {/* Display Madors if department is selected */}
          {openDepartment === depIndex && (
            <Branch
              updateRow={updateRow}
              setUpdateRow={setUpdateRow}
              branchs={department.branchs}
              openBranch={openBranch}
              handleBranchToggle={handleBranchToggle}
            />
          )}
        </div>
      ))}
    </div>
  );
}
