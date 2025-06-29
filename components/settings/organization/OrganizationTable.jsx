"use client";
import React, { useState } from "react";
import Organizations from "./Organizations";

export default function OrganizationTable({ data, headers }) {
  const [updateRow, setUpdateRow] = useState({
    index: "",
    row: "",
  });
  const [openDepartment, setOpenDepartment] = useState(null);
  const [openBranch, setOpenBranch] = useState(null);
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  // Toggle organization departments
  const handleAccordion = (index) => {
    if (selectedOrganization !== index) {
      setSelectedOrganization(index);
      setOpenDepartment(null);
      setOpenBranch(null);
    } else {
      setSelectedOrganization(null);
    }
  };

  // Toggle departments within an organization
  const handleDepartmentToggle = (index) => {
    setOpenDepartment(openDepartment === index ? null : index);

    if (openDepartment !== index) {
      setOpenDepartment(index);
      setOpenBranch(null);
    } else {
      setOpenDepartment(null);
    }
  };

  // Toggle mador within a department
  const handleBranchToggle = (index) => {
    if (openBranch !== index) {
      setOpenBranch(index);
    } else {
      setOpenBranch(null);
    }
  };

  return (
        
          <>
            <div className="p-2 pb-0 dirRtl text-white rounded-lg sticky top-0 bg-[#F7F9FD] w-full">
              <div className="grid grid-cols-8 sticky top-0 rounded-lg p-2 bg-blue_color justify-center">
                {headers.map((header) => (
                  <div
                    key={header}
                    className=" text-center truncate font-semibold text-xl"
                  >
                    {header}
                  </div>
                ))}
                <div className="text-center text-xl font-semibold col-end-9">
                  פעולות
                </div>
              </div> 
            </div>
            <div className="flex flex-col px-2 bg-[#F7F9FD] dirRtl text-base">
              <Organizations
                data={data}
                updateRow={updateRow}
                setUpdateRow={setUpdateRow}
                selectedOrganization={selectedOrganization}
                handleAccordion={handleAccordion}
                openDepartment={openDepartment}
                handleDepartmentToggle={handleDepartmentToggle}
                openBranch={openBranch}
                handleBranchToggle={handleBranchToggle}
              />
            </div>
          </>
   
      
   
  );
}

