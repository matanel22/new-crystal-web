"use client";
import Search from "../../../components/ui/Search";
import Image from "next/image";
import { useEffect, useState } from "react";
import PopupDelete from "@/components/PopupDelete";
import FilterMission from "@/components/FilterMission";
import { parse, isEqual, isWithinInterval } from "date-fns";
import PopupMission from "@/components/missions/PopupMission";
import * as XLSX from "xlsx";
import MainTable from "@/components/table/MainTable";
import { DeleteLogic, TextCellLogic } from "@/components/table/cellLogics";
import Button from "@/components/ui/Button";
import { getAllMissions } from "@/api/missions";
import { login } from "@/api/login";
import PopupToEditMission from "@/components/missions/popupToEditMission";

const data = [
  {
    trash: "",
    id: "00111",
    Mission_number: "111111",
    Mission_name: "אא משימה שם משימה שם משימה",
    Mission_type: "סוג משימה משימהמשימהמשימה",
    Year: "2024",
    Paying_factor: "אמת",
    Opening_date: "2024-02-01",
    Closing_date: "2024-03-02",
    Ktzin_nosse_name: "שש ישראל ישראלי",
    Status: "לא פעיל",
    Interest_level: 'רמ"ד',
  },
  {
    trash: "",
    id: "00022",
    Mission_number: "222222",
    Mission_name: "בב משימה שם משימה שם משימה",
    Mission_type: "סוג משימה",
    Year: "2022",
    Paying_factor: "תקיפה",
    Opening_date: "2024-04-04",
    Closing_date: "2024-04-04",
    Ktzin_nosse_name: "תת ישראל ישראלי",
    Status: "לא פעיל",
    Interest_level: 'ש"ש',
  },
  {
    trash: "",
    id: "00333",
    Mission_number: "333333",
    Mission_name: "שם משימה שם משימה שם משימה",
    Mission_type: "סוג משימה",
    Year: "2024",
    Paying_factor: "תחמושת",
    Opening_date: "2023-01-01",
    Closing_date: "2023-04-02",
    Ktzin_nosse_name: 'רנ"ג ישראל ישראלי',
    Status: "פעיל",
    Interest_level: 'רמ"ד',
  },
  {
    trash: "",
    id: "00444",
    Mission_number: "444444",
    Mission_name: "שם משימה שם משימה שם משימה",
    Mission_type: "סוג משימה",
    Year: "2023",
    Paying_factor: "תחמושת",
    Opening_date: "2024-01-01",
    Closing_date: "2024-04-02",
    Ktzin_nosse_name: 'רנ"ג ישראל ישראלי',
    Status: "פעיל",
    Interest_level: 'רמ"ד',
  },
  {
    trash: "",
    id: "00555",
    Mission_number: "12346",
    Mission_name: "שם משימה שם משימה שם משימה",
    Mission_type: "סוג משימה",
    Year: "2024",
    Paying_factor: "תחמושת",
    Opening_date: "2024-03-02",
    Closing_date: "2024-10-02",
    Ktzin_nosse_name: 'רנ"ג ישראל ישראלי',
    Status: "פעיל",
    Interest_level: "תת",
  },
  {
    trash: "",
    id: "00666",
    Mission_number: "12345",
    Mission_name: "שם משימה שם משימה שם משימה",
    Mission_type: "סוג משימה",
    Year: "2024",
    Paying_factor: "תחמושת",
    Opening_date: "2024-01-01",
    Closing_date: "2024-10-02",
    Ktzin_nosse_name: 'רנ"ג ישראל ישראלי',
    Status: "פעיל",
    Interest_level: 'רמ"ד',
  },
  {
    trash: "",
    id: "01111",
    Mission_number: "111",
    Mission_name: "אא משימה שם משימה שם משימה",
    Mission_type: "סוג משימה משימהמשימהמשימה",
    Year: "2024",
    Paying_factor: "אמת",
    Opening_date: "2024-02-01",
    Closing_date: "2024-03-02",
    Ktzin_nosse_name: "שש ישראל ישראלי",
    Status: "לא פעיל",
    Interest_level: 'רמ"ד',
  },
  {
    trash: "",
    id: "00222",
    Mission_number: "24343",
    Mission_name: "בב משימה שם משימה שם משימה",
    Mission_type: "סוג משימה",
    Year: "2022",
    Paying_factor: "תקיפה",
    Opening_date: "2024-04-04",
    Closing_date: "2024-04-04",
    Ktzin_nosse_name: "תת ישראל ישראלי",
    Status: "לא פעיל",
    Interest_level: 'ש"ש',
  },
  {
    trash: "",
    id: "03333",
    Mission_number: "4244",
    Mission_name: "שם משימה שם משימה שם משימה",
    Mission_type: "סוג משימה",
    Year: "2024",
    Paying_factor: "תחמושת",
    Opening_date: "2023-01-01",
    Closing_date: "2023-04-02",
    Ktzin_nosse_name: 'רנ"ג ישראל ישראלי',
    Status: "פעיל",
    Interest_level: 'רמ"ד',
  },
  {
    trash: "",
    id: "04444",
    Mission_number: "22223",
    Mission_name: "שם משימה שם משימה שם משימה",
    Mission_type: "סוג משימה",
    Year: "2023",
    Paying_factor: "תחמושת",
    Opening_date: "2024-01-01",
    Closing_date: "2024-04-02",
    Ktzin_nosse_name: 'רנ"ג ישראל ישראלי',
    Status: "פעיל",
    Interest_level: 'רמ"ד',
  },
  {
    trash: "",
    id: "05555",
    Mission_number: "34224",
    Mission_name: "שם משימה שם משימה שם משימה",
    Mission_type: "סוג משימה",
    Year: "2024",
    Paying_factor: "תחמושת",
    Opening_date: "2024-03-02",
    Closing_date: "2024-10-02",
    Ktzin_nosse_name: 'רנ"ג ישראל ישראלי',
    Status: "פעיל",
    Interest_level: "תת",
  },
  {
    trash: "",
    id: "06666",
    Mission_number: "1234245",
    Mission_name: "שם משימה שם משימה שם משימה",
    Mission_type: "סוג משימה",
    Year: "2024",
    Paying_factor: "תחמושת",
    Opening_date: "2024-01-01",
    Closing_date: "2024-10-02",
    Ktzin_nosse_name: 'רנ"ג ישראל ישראלי',
    Status: "פעיל",
    Interest_level: 'רמ"ד',
  },
];

const headTable = [
  " ",
  { title: "מספר משימה", icon: "filterArrowUp.svg" },
  { title: "שם משימה", icon: "filterArrowDown.svg" },
  { title: "סוג משימה", icon: "filterArrowStatic.svg" },
  { title: "שנה", icon: "filterArrowStatic.svg" },
  { title: 'גמ"ש', icon: "filterArrowStatic.svg" },
  { title: "ת.פתיחה", icon: "filterArrowStatic.svg" },
  { title: "ת.סגירה", icon: "filterArrowStatic.svg" },
  { title: "שם קצין נושא", icon: "filterArrowStatic.svg" },
  { title: "סטטוס", icon: "filterArrowStatic.svg" },
  { title: "רמת עניין", icon: "filterArrowStatic.svg" },
];

const addImage = (
  <Image src={"/addEmployee.svg"} width={20} height={20} alt="plus" />
);
const exelImage = (
  <Image src={"/excel.png"} width={20} height={20} alt="excel" />
);
const filterImage = (
  <Image src={"/filter.svg"} width={15} height={15} alt="download" />
);
const dowloadImage = (
  <Image src={"/downloadArrow.svg"} width={20} height={20} alt="download" />
);
const btnTxt = [
  "סינון",
  "הוסף משימה",
  "הפקת דוח דיווח ימי עמדה",
  "ייצוא לאקסל",
];
export default function Mission() {
  const [popupToEditMission, setPopupToEditMission] = useState(null);
  const [reportData, setReportData] = useState([]);

  //FOR CONTAIN THE MISSION
  const [missions, setMissions] = useState(data);
  // const [loading, setLoading] = useState(true);
  const [showPopupNewMission, setShowPopupNewMission] = useState(false);

  const [filterPopUp, setFilterPopUp] = useState(false);

  //SHOW THE FREEZE POP UP
  const [showConfirmation, setShowConfirmation] = useState(false);

  //CONTAIN THE EMPLOYEE TO FREEZE
  const [missionIdToDelete, setMissionIdToDelete] = useState(null);
  // מביא את הסינון
  const [filterData, setFilterData] = useState(null);

  useEffect( () => {
    async function x() {
      
      await login({ employee_number: 1111111 });
      getAllMissions();
    }
    x()
  }, []);

  const deleteMission = async (mission) => {
    console.log(mission, "gg");

    try {
      setMissionIdToDelete(mission);
      setShowConfirmation(true);
    } catch (error) {
      console.error("error delete mission: ", error);
    }
  };

  const handleAddMission = () => {
    setShowPopupNewMission(true);
  };

  const handlePopUpFilter = () => {
    setFilterPopUp(!filterPopUp);
  };

  // מסנן את המשימות לפי בחירה
  const filterSearch = (formData) => {
    setFilterData(formData);
  };

  // ייצוא לקובץ אקסל
  const EXCEL_TYPE =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

  // ArrayBuffer -ממיר סטרינג ל
  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xff;
    }
    return buf;
  };

  const handleExportToExcel = () => {
    const formattedMissions = missions.map((mission) => ({
      ...mission,
      Sections: Array.isArray(mission.Sections)
        ? mission.Sections.join(", ")
        : mission.Sections,
    }));
    const ws = XLSX.utils.json_to_sheet(formattedMissions);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Missions");
    // Generate buffer
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "binary" });
    const data = new Blob([s2ab(excelBuffer)], { type: EXCEL_TYPE });
    const url = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "missions.xlsx"); // Specify the name of the file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onRowClick = (id, data) => {
    setReportData(data);
    console.log(reportData?.id);
  };

  const allColumnLogics = {
    trash: DeleteLogic("trash", "", deleteMission),
    Mission_number: TextCellLogic("Mission_number", ""),
    Mission_name: TextCellLogic("Mission_name", ""),
    Mission_type: TextCellLogic("Mission_type", ""),
    Year: TextCellLogic("Year", ""),
    Paying_factor: TextCellLogic("Paying_factor", ""),
    Opening_date: TextCellLogic("Opening_date", ""),
    Closing_date: TextCellLogic("Closing_date", ""),
    Ktzin_nosse_name: TextCellLogic("Ktzin_nosse_name", ""),
    Status: TextCellLogic("Status", ""),
    Interest_level: TextCellLogic("Interest_level", ""),
  };

  return (
    <>
      <div className=" px-3">
        <div className="flex  ">
          <div className="w-full flex justify-between mx-4">
            <Search
              btnTxt={btnTxt[1]}
              btnImage={addImage}
              btnFunc={handleAddMission}
              searchText={"חיפוש"}
            />
            {showPopupNewMission && (
              <PopupMission
                showPopup={showPopupNewMission}
                setShowPopup={setShowPopupNewMission}
                // handleSubmit={handleSubmit}
                setMissions={setMissions}
              />
            )}
          </div>

          <div className="flex justify-end gap-3 w-full">
            <div className=" relative  flex text-xl text-center hover:cursor-pointer items-center font-medium  justify-end border-2 border-[#002A78] rounded-full">
              <Button
                textBtn={btnTxt[0]}
                image={filterImage}
                color={"white"}
                onClick={handlePopUpFilter}
              />

              {filterPopUp && (
                <FilterMission
                  setFilterPopUp={setFilterPopUp}
                  filterPopUp={filterPopUp}
                  filterSearch={filterSearch}
                  closeFilter={setFilterPopUp}
                />
              )}
            </div>

            <Button textBtn={btnTxt[2]} image={dowloadImage} color={"blue"} />

            <Button
              textBtn={btnTxt[3]}
              image={exelImage}
              color={"green"}
              onClick={handleExportToExcel}
            />
          </div>
        </div>

        <MainTable
          headTable={headTable}
          initialTableData={data}
          cellsLogics={allColumnLogics}
          columnCellLogics={onRowClick}
        />

        {reportData?.id && (
          <PopupToEditMission
            value={popupToEditMission}
            closePopup={setPopupToEditMission}
            deleteEmployee={deleteMission}
            setReportData={setReportData}
            reportData={reportData}
          />
        )}

        {showConfirmation && (
          <PopupDelete
            popUpState={showConfirmation}
            objectToDelete={missionIdToDelete}
            showPopup={setShowConfirmation}
            headerText={`מחיקת משימה`}
            messageText={"האם אתה בטוח שאתה רוצה למחוק את משימה "}
            btnText={"מחק"}
          />
        )}
      </div>
    </>
  );
}
