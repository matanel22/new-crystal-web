import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ArrowsMission from "./ArrorwsMission";
import InputDateMission from "./missions/InputDateMission";
import AmountMeasure from "./missions/AmountMeasure";
import PriceMeasure from "./missions/PriceMeasure";
import axios from "../lib/axios";

export default function PopupReport({
  setPopupReport,
  reportData,
  setReportData,
  openingDate,
  closingDate,
}) {
  console.log(reportData, "report");

  const [openLabel, setOpenLabel] = useState(null);
  const [selectOption, setSelectOption] = useState({});
  const [addNewReport, setAddNewReport] = useState({});

  const labels = [
    { label: "סוג אמצעים", labelName: "typeOfMeasure" },
    { label: "תאריך סיום", labelName: "Closing_date" },
    { label: "סוג תת אמצעי", labelName: "subMeasure" },
    { label: "תאריך התחלה", labelName: "Opening_date" },
    { label: "אמצעי", labelName: "measure" },
  ];

  const arrow = ["typeOfMeasure", "measure", "subMeasure"];

  const calender = ["Opening_date", "Closing_date"];

  const toggleOptionMenu = (labelName) => {
    setOpenLabel((prev) => (prev === labelName ? null : labelName));
  };
  const handleOption = (labelName, option) => {
    setSelectOption((prev) => ({
      ...prev,
      [labelName]: option,
    }));
    handleInputChange(labelName, option);
    setOpenLabel(null);
  };

  const handleInputChange = (labelName, value) => {
    setAddNewReport((prev) => ({ ...prev, [labelName]: value }));
  };

  const typeOfMeasure = ["אמת", "נסא", "תקיפה"];
  const subMeasure = ["אמת", "נסא", "תקיפה"];
  const measure = [
    "מדור 1",
    "מדור 34",
    "מדור 65",
    "מדור 346",
    "מדור 364",
    "מדור 43",
    "מדור 66",
    "מדור 68",
  ];

  const getOptionsArray = (labelName) => {
    switch (labelName) {
      case "typeOfMeasure":
        return typeOfMeasure;
      case "subMeasure":
        return subMeasure;
      case "measure":
        return measure;
      default:
        return [];
    }
  };

  const onSubmit = () => {
    const newReport = {
      typeOfMeasure: addNewReport?.typeOfMeasure,
      subMeasure: addNewReport?.subMeasure,
      measure: addNewReport?.measure,
      Opening_date: addNewReport?.Opening_date,
      Closing_date: addNewReport?.Closing_date,
      amount: addNewReport?.amount,
      price: addNewReport?.price,
    };

    if (Object.values(newReport).some((value) => !value)) {
      alert("חלק מהשדות חסרים");
      return;
    }

    // בקשה לשרת ליצירת דיווח אמצעים חדש
    // postReport(async () => {
    //   try {
    //     const response = await axios.post(
    //       `http://127.0.0.1:8000/api/missions/`,
    //       newReport
    //     );
    //     setAddNewReport((prev)=>[response.data, ...prev])
    //   } catch (error) {
    //     console.error("שגיאה ביצירת דיווח אמצעים חדש",error);
    //   }
    // });
    console.log(newReport, "new");

    setSelectOption({});
    setPopupReport(false);
  };

  // const handelReportData = () => {
  //   setReportData(reportData);
  //   setPopupReport(false);
  // };
  //   מנקה את השדות בלחיצה על ביטול כדי שהשדות לא ישמרו
  // const clearOption = (labelName) => {
  //   setSelectOption((prev) => ({
  //     ...prev,
  //     [labelName]: null, // Clear the selected option
  //   }));
  //   setReportData((prev) => ({
  //     ...prev,
  //     [labelName]: "", // Clear the formData value as well
  //   }));

  // };

  const menuRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenLabel(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // useEffect(() => {
  console.log(reportData, "data");
  // }, [reportData]);

  return (
    <div className="fixed inset-0 flex  items-center justify-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50">
      <div className="bg-white py-3 w-2/3  rounded-xl text-right">
        <div className="bg-[#EFF3FB] mx-3 py-4 px-2 rounded-lg">
          <div className="mb-5 p-4 relative flex items-center justify-center ">
            <div
              className="absolute top-0 left-0 hover:cursor-pointer"
              onClick={() => setPopupReport(false)}
            >
              <Image src={"/x.svg"} width={15} height={15} alt="x" />
            </div>
            <div className="text-2xl absolute font-bold text-[#002A78]">
              דיווח אמצעים
            </div>
          </div>

          <div className="px-7 ">
            <div className="grid grid-cols-3 gap-5">
              {labels.map(({ label, labelName }, index) => (
                <div key={index} className="px-3 relative">
                  <div className="block text-[#002A78] truncate font-bold">
                    {label}
                  </div>
                  <div className="relative">
                    {arrow.includes(labelName) && (
                      <ArrowsMission
                        toggleOptionMenu={toggleOptionMenu}
                        labelName={labelName}
                        label={label}
                        selectOption={selectOption}
                      />
                    )}

                    {openLabel === labelName && (
                      <div
                        ref={menuRef}
                        className="absolute inset-y-8 w-full z-20 mt-1"
                      >
                        <ul className="flex flex-col bg-white p-1 rounded shadowForDrop">
                          {getOptionsArray(labelName).map((option, index) => (
                            <li
                              key={index}
                              className="cursor-pointer px-4 w-full md:truncate py-1 text-[#002A78] rounded hover:bg-[#002A78] hover:text-white"
                              onClick={() => handleOption(labelName, option)}
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {calender.includes(labelName) && (
                      <InputDateMission
                        labelName={labelName}
                        formData={addNewReport[labelName]}
                        handleInputChange={handleInputChange}
                        // currentDate={currentDate}
                        openingDate={openingDate}
                        closingDate={closingDate}
                        // valueToEdit={formData[labelName]}
                        min={
                          labelName === "Closing_date"
                            ? addNewReport["Opening_date"]
                            : null
                        }
                        max={
                          labelName === "Opening_date"
                            ? addNewReport["Closing_date"]
                            : null
                        }
                      />
                    )}
                  </div>
                </div>
              ))}

              <div className="flex px-3">
                <div className="w-full ml-4">
                  <AmountMeasure
                    handleInputChange={handleInputChange}
                    labelName="amount"
                  />
                </div>

                <div className="w-full mr-4">
                  <PriceMeasure
                    handleInputChange={handleInputChange}
                    labelName="price"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-5 ml-8">
            <div
              onClick={() => setPopupReport(false)}
              className="px-4 py-1 ml-3 bg-white border border-[#002A78] rounded-full text-blue_color font-semibold text-xl hover:cursor-pointer"
            >
              ביטול
            </div>
            <div
              onClick={onSubmit}
              className="px-4 py-1 text-xl bg-[#002A78] text-white rounded-full hover:cursor-pointer flex justify-center items-center"
            >
              <div className="ml-2">
                <Image
                  src={"/report.svg"}
                  width={20}
                  height={20}
                  alt="report"
                />
              </div>
              דיווח
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
