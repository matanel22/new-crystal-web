import React, { useState } from "react";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import PopupToEditMission from "./popupToEditMission";
import { formatDate } from "@/util/dateFormat";
import Flow from "./Flow";

export default function MissionContent({ headLength, data, deleteEmployee }) {
  const [popupToEditMission, setPopupToEditMission] = useState(null);
  // המידע של דיווח אמצעים
  const [reportData, setReportData] = useState([]);

  const handleClosePopup = () => {
    setPopupToEditMission(null);
  };

  // const handleUpdateMission = (updatedMission) => {
  //   setMissionsData((prevData) =>
  //     prevData.map((mission) =>
  //       mission.Mission_number === updatedMission.Mission_number
  //         ? updatedMission
  //         : mission
  //     )
  //   );
  // };

  // רק את השדות האלה רואים בטבלה
  const filteredTheObj = (obj) => {
    const theMissionToShow = {
      Mission_number: obj?.Mission_number,
      Mission_name: obj?.Mission_name,
      Mission_type: obj?.Mission_type,
      Year: obj?.Year,
      Paying_factor: obj?.Paying_factor,
      Opening_date: formatDate(obj?.Opening_date),
      Closing_date: formatDate(obj?.Closing_date),
      Ktzin_nosse_name: obj?.Ktzin_nosse_name,
      Status: obj?.Status,
      Interest_level: obj?.Interest_level,
    };
    return theMissionToShow;
  };

  return (
    <div className="w-full dirRtl bg-[#EFF3FB] ">
      <div className=" w-full ">
        {data.map((mission, index) => (
          <div
            onClick={() => setPopupToEditMission(mission)}
            key={mission.id}
            className={`flex w-full gap-2 border-b  border-t-[#A7BFE8]/30
                ${
                  popupToEditMission === mission.id
                    ? "bg-[#e8eef7]"
                    : " hover:bg-[#e1e8f3] transition-transform duration-200 ease-in-out"
                }
                `}
          >
            {/* DELETE BUTTON */}
            <div
              onClick={(e) => {
                e.stopPropagation();
                deleteEmployee(mission);
              }}
              className={`pr-2  flex items-center justify-center hover:cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out`}
            >
              <Image src={"/trash.svg"} height="30" width="30" alt="trash" />
            </div>

            <div
              className={`grid ${headLength}  w-full justify-around gap-3 font-normal text-[20px] leading-5 text-blue_color`}
            >
              {Object.entries(filteredTheObj(mission)).map(([key, value]) => (
                // פופאפ קטן כשיש נקודות
                <Flow key={key} value={value} />
              ))}
            </div>
          </div>
        ))}
        {popupToEditMission && (
          <PopupToEditMission
            updateValue={setPopupToEditMission}
            value={popupToEditMission}
            setShowPopup={handleClosePopup}
            deleteEmployee={deleteEmployee}
            setReportData={setReportData}
            reportData={reportData}
          />
        )}
      </div>
    </div>
  );
}
