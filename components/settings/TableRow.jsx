import Image from "next/image";
import React from "react";
import Section from "./organization/Section";
import Branch from "./Branch";
import OrganizationTable from "./organization/OrganizationTable";
import Organization from "./Organization";

export default function TableRow({
  object,
  rowIndex,
  updateRow,
  setUpdateRow,
  row,
  setRow,
  open,
  setOpen,
}) {
  return (
    <>
      <Organization data={data} />
      {data.map((organization, orgIndex) => (
        <div key={orgIndex} className=" ">
          {/* Organization row */}
          <div className="grid grid-cols-9 whitespace-nowrap justify-center border-b-[2px] py-2.5">
            {Object.entries(organization).map(
              ([key, value]) =>
                key !== "departments" && (
                  <div key={key} className="col-span-1 text-center ">
                    {value}
                  </div>
                )
            )}

            <div className="col-end-9 flex justify-end pl-3 cursor-pointer">
              <Image
                onClick={() => handleAccordion(orgIndex)}
                src={"/downArrow.svg"}
                width={12}
                height={15}
                alt={"downArrow"}
              />
            </div>
            <div className="flex justify-around col-end-10">
              <div className="bg-blue_color border items-center border-blue_color gap-1 flex px-3 w-fit text-white rounded-full cursor-pointer">
                <Pencil strokeWidth={1.5} size={15} />
                <p>עריכת שורה</p>
              </div>
            </div>
          </div>

          {/* Display Departments if organization is selected */}
          {selectedOrganization === orgIndex && (
            <Department departments={organization.departments} />
          )}
        </div>
      ))}
    </>
  );
}
