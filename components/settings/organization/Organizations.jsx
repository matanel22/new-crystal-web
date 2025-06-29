import { Pencil } from "lucide-react";
import Image from "next/image";
import React from "react";
import Departments from "./Department";

export default function Organizations({
  updateRow,
  setUpdateRow,
  data,
  selectedOrganization,
  handleAccordion,
  openDepartment,
  handleDepartmentToggle,
  openBranch,
  handleBranchToggle,
}) {
  return (
    <>
      {data.map((organization, orgIndex) => (
        <div key={orgIndex} className=" ">
          {/* Organization row */}
          <div className="grid grid-cols-8 whitespace-nowrap gap-2 content-center  text-center border-b-[2px] py-2.5">
            {Object.entries(organization).map(
              ([key, value],index) =>
                key !== "departments" &&
                (updateRow.row === "organization" &&
                updateRow.index === orgIndex ? (
                  <div 

                  className={` flex w-full px-2 ${
                    index === Object.entries(organization).length - 2 && " col-span-2"
                  } `}
                >
                  <div
                    className={`" rounded-full flex w-full"
                   ${
                     index === Object.entries(organization).length - 2 &&
                     "  bg-gradient-to-r from-blue_color via-blue_color to-[#EFF3FB]"
                   }`}
                  >
                    <input
                      className={`" text-center w-full rounded-full outline-none border border-blue_color "
                    `}
                      value={value}
                    />
                    {index === Object.entries(organization).length - 2 && (
                      <div className="w-full flex justify-center  text-white">
                        שמור שינויים
                      </div>
                    )}
                  </div>
                </div>
                ) : (
                  <div key={key} className="col-span-1 ">
                    {value}
                  </div>
                ))
            )}

            <div
              className={`" col-end-8 flex justify-end pl-2 cursor-pointer "`}
            >
              <Image
                className={`${
                  selectedOrganization === orgIndex && " outline rotate-180"
                }`}
                onClick={() =>{ handleAccordion(orgIndex),setUpdateRow({
                  index: "",
                  row: "",
                })}}
                src={"/downArrow.svg"}
                width={12}
                height={15}
                alt={"downArrow"}
              />
            </div>
            <div className=" pl-2 flex justify-around col-end-9">
              <div
                onClick={() =>
                  setUpdateRow({ row: "organization", index: orgIndex })
                }
                className={`${
                  updateRow.row === "organization" &&
                  updateRow.index === orgIndex
                    ? " bg-blue_color/50 border border-blue_color/5 "
                    : "bg-blue_color border border-blue_color "
                }"   items-center gap-1 flex px-3 w-fit text-white rounded-full cursor-pointer "`}
              >
                <Pencil strokeWidth={1.5} size={15} />
                <p>עריכת שורה</p>
              </div>
              <Image c src={"/bit.svg"} width={15} height={16} alt={"uu"} />
              
            </div>
          </div>

          {/* Display Departments if organization is selected */}
          {selectedOrganization === orgIndex && (
            <Departments
              updateRow={updateRow}
              setUpdateRow={setUpdateRow}
              departments={organization.departments}
              openDepartment={openDepartment}
              handleDepartmentToggle={handleDepartmentToggle}
              openBranch={openBranch}
              handleBranchToggle={handleBranchToggle}
            />
          )}
        </div>
      ))}
    </>
  );
}
