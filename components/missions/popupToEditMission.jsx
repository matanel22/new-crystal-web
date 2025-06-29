import React, { useState } from "react";
import Image from "next/image";
import PopupReport from "../PopupReport";
import InputReadOrEditMission from "./InputReadOrEditMission";
import { formatDate } from "@/util/dateFormat";
import axios from "@/lib/axios";
// import { format, parseISO } from "date-fns";

export default function PopupToEditMission({
  value = "",
  updateValue = () => {},
  deleteEmployee = () => {},
  setReportData = () => {},
  reportData = "",
}) {
  const setShowPopup = () => {
    updateValue(null);
  };
  const labels = [
    { label: "מספר משימה", labelName: "Mission_number" },
    { label: "שם משימה", labelName: "Mission_name" },
    { label: "סוג משימה", labelName: "Mission_type" },
    { label: "שנה", labelName: "Year" },
    { label: "תאריך פתיחה", labelName: "Opening_date" },
    { label: "תאריך סגירה", labelName: "Closing_date" },
    { label: "שם קצין נושא", labelName: "Ktzin_nosse_name" },
    { label: "רמת עניין", labelName: "Interest_level" },
    { label: 'גמ"ש', labelName: "Paying_factor" },
    { label: "מדור מוביל", labelName: "Leading_section" },
    { label: "תקציב מאושר", labelName: "Approved_budget" },
    { label: "שעות מאושרות", labelName: "Approved_hours" },
    { label: "ימי מסלול מאושרים", labelName: "Approved_route_days" },
    { label: "מדורים", labelName: "Sections" },
    { label: 'נוצר ע"י', labelName: "createdBy" },
  ];

  // const reportArray = [
  //   {
  //     typeOfMeasure: "בלהההה",
  //     measure: "משהו",
  //     subMeasure: "ןיהןהנן",
  //     Opening_date: "2024-09-07",
  //     Closing_date: "2024-09-07",
  //     amount: "10",
  //     price: "1390",
  //   },
  //   {
  //     typeOfMeasure: "בלהההה",
  //     measure: "משהו",
  //     subMeasure: "ןיהןהנן",
  //     Opening_date: "2024-09-07",
  //     Closing_date: "2024-09-07",
  //     amount: "10",
  //     price: "1390",
  //   },
  //   {
  //     typeOfMeasure: "בלהההה",
  //     measure: "משהו",
  //     subMeasure: "ןיהןהנן",
  //     Opening_date: "2024-09-07",
  //     Closing_date: "2024-09-07",
  //     amount: "10",
  //     price: "1390",
  //   },
  // ];
  // סטייט לפופאפ דיווח אמצעים
  const [popupReport, setPopupReport] = useState(false);
  // // המידע של דיווח אמצעים
  // const [reportData, setReportData] = useState(reportArray);
  // המידע שמגיע בשביל לעדכן אותו
  // const [value, setValue] = useState(value);
  // לחיצה בשביל מצב עריכה
  const [clickToEdit, setClickToEdit] = useState(false);

  const handleClickToEdit = () => {
    if (clickToEdit) {
      // putTheChangeData(async() => {
      //   try {
      //     const response = await axios.put(
      //       `http://127.0.0.1:8000/api/missions/`,
      //     )
      //     updateValue(((prev)=>[response.data, ...prev]))
      //   } catch (error) {
      //     console.error("שגיאה בעידכון המשימה", error);
      //   }
      // });
    }
    setClickToEdit(!clickToEdit);
  };
  return (
    <div
      className={
        "fixed inset-0 flex justify-center items-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50"
      }
    >
      <div className="bg-white rounded-lg p-5 w-2/3">
        <div className=" p-4 relative flex items-center justify-center">
          <div
            className="absolute top-0 left-0 hover:cursor-pointer"
            onClick={(e) => {
              e.stopPropagation(), setShowPopup();
            }}
          >
            <Image src={"/x.svg"} width={15} height={15} alt="x" />
          </div>

          <div className="text-xl px-5 py-1 tru mb-4 flex justify-center items-center text-white font-semibold bg-blue_color text-center rounded-full">
            {reportData?.Mission_name}
          </div>
        </div>

        <div>
          <div className=" grid grid-cols-3 gap-5 ">
            {labels?.map(({ label, labelName }, index) => (
              <div key={index} className="mb-4 relative">
                <div className="block text-blue_color truncate font-bold">
                  {label}
                </div>
                {/* מצב קריאה או עריכה */}
                <InputReadOrEditMission
                  clickToEdit={clickToEdit}
                  theData={reportData}
                  labelName={labelName}
                  label={label}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <div
            onClick={(e) => {
              e.stopPropagation(), setShowPopup();
            }}
            className="px-4 py-1 border border-blue_color rounded-full text-blue_color font-semibold text-xl hover:cursor-pointer"
          >
            ביטול
          </div>
          <div
            onClick={handleClickToEdit}
            className="px-4 py-1 text-xl bg-blue_color text-white rounded-full hover:cursor-pointer flex justify-center items-center"
          >
            <div className="ml-2">
              <Image
                src={clickToEdit ? "/keepChange.svg" : "/editing.svg"}
                width={20}
                height={20}
                alt={clickToEdit ? "keepChange" : "editing"}
              />
            </div>
            {clickToEdit ? "שמור שינויים" : "עריכה"}
          </div>
        </div>

        <div className="bg-[#EBEEF5]  w-full items-center  py-3 mt-5 rounded-md ">
          <div
            className={`flex  ${
              reportData?.length > 0 ? "justify-between mx-4" : ""
            }`}
          >
            <div className="font-bold truncate mr-9 text-2xl">דיווח אמצעים</div>
            <div
              onClick={() => setPopupReport(true)}
              className="bg-[#002A78]  hover:cursor-pointer mr-32 text-white flex rounded-full text-xl p-1 px-4 items-center truncate justify-center"
            >
              <div className="m-1 ml-2">
                <Image src={"/report.svg"} width={20} height={20} alt="f" />
              </div>
              דיווח אמצעים
            </div>
          </div>

          <div
            className={` overflow-y-auto ${
              reportData?.length > 0 ? "h-24 mt-4" : ""
            } dirLtr mr-1`}
          >
            {reportData?.length > 0 && (
              <div className=" ">
                {reportData.map((report, index) => (
                  <div
                    key={index}
                    className="dirRtl  mb-2 font-bold bg-white justify-around mx-4 rounded-md py-2"
                  >
                    <div className="flex justify-around ">
                      <p className=" truncate">{report.typeOfMeasure}</p>
                      <p className="truncate">{report.subMeasure}</p>
                      <p className="truncate">{report.measure}</p>
                      <p className="truncate">
                        {formatDate(report.Opening_date)}
                      </p>
                      <p className="truncate">
                        {formatDate(report.Closing_date)}
                      </p>
                      <p className="truncate">{report.amount}</p>
                      <p className="truncate">{report.price}</p>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteEmployee(report);
                        }}
                        className={`pr-2  flex items-center justify-center hover:cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out`}
                      >
                        <Image
                          src={"/trash.svg"}
                          height="25"
                          width="25"
                          alt="trash"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {popupReport && (
            <PopupReport
              // handleChange={handleChange}
              setPopupReport={setPopupReport}
              reportData={reportData}
              setReportData={setReportData}
              closingDate={value.Closing_date}
              openingDate={value.Opening_date}
            />
          )}
        </div>
      </div>
    </div>
  );
}
