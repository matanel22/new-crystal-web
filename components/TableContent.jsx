import { useState } from "react";
import ReadObject from "./ReadObject";
import UpdateObject from "./UpdateObject";
import Image from "next/image";
import { Toaster } from "react-hot-toast";

export default function TableContent({
  data,
  deleteEmployeeById,
  headLength,
}) {

  const [updateEmployee, setUpdateEmployee] = useState(null);

  return (
    <div className="w-full bg-[#EFF3FB] ">
      <div className="w-full ">
        {data &&
          data?.map(({employeeToShow,hiddenEmployeeData, updateEmployeeMood}, index) => (
            <div
              onClick={() => {
                // e.stopPropagation(),
                  setUpdateEmployee(employeeToShow);
              }}
              key={hiddenEmployeeData.id}
              className={`flex w-full gap-2  border-b  border-t-[#A7BFE8]/30 hover:bg-[#e8eef7] transition-transform duration-200 ease-in-out`}
            >
              {/* DELETE BUTTON */}
              <div
                onClick={(e) => {
                  e.stopPropagation(), deleteEmployeeById(hiddenEmployeeData);
                }}
                className={`pr-2  flex items-center justify-center hover:cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out`}
              >
                <Image src={"/trash.svg"} height="20" width="20" alt="trash" />
              </div>
              
              {/* <div className="w-full  "> */}
                <div
                  className={`grid grid-cols-${headLength}   w-full justify-around gap-3 font-normal text-[18px] leading-5 text-blue_color`}
                >
                  {updateEmployee === employeeToShow
                  ? (
                    //עידכון העובד פופאפ
                    <UpdateObject
                    hiddenEmployeeData={hiddenEmployeeData}
                    updateEmployeeMood={updateEmployeeMood}
                      setUpdateEmployee={setUpdateEmployee}
                    />
                  ) : (
                    //מצב קריאה
                    <ReadObject
                    data={employeeToShow}
                  />
                  )}
                  
                </div>
              {/* </div> */}
            </div>
          ))}
      </div>
      {/* <Toaster position="top-center"/> */}
    </div>
  );
}
