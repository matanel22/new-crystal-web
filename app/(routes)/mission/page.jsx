"use client";
import Search from "../../components/ui/Search";
import Image from "next/image";
import { useState } from "react";
import PopupDelete from "@/app/components/PopupDelete";
import FilterMission from "@/app/components/FilterMission";
import { parse, isEqual, isWithinInterval } from "date-fns";
import PopupMission from "@/app/components/missions/PopupMission";
import * as XLSX from "xlsx";
import MainTable from "@/app/components/table/MainTable";

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

export default function Mission() {
  // const [updateMode, setUpdateMode] = useState(null);

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

  // useEffect(() => {
  //   const fetchMissions = async () => {
  //     try {
  //       const response = await axios.get("http://127.0.0.1:8000/api/missions/"); // Replace with your API endpoint
  //       setMissions(response.data); // Assuming response.data contains the array of mission data
  //     } catch (error) {
  //       console.error("שגיאה בהבאת המשימות", error);
  //     }
  //     //  finally {
  //     //   setLoading(false); // Once data is fetched, set loading to false
  //     // }
  //   };

  //   fetchMissions();
  // }, []);

  // מביא את כל המשימות או את הסינון
  const showMissionsOrFilter = filterData
    ? missions.filter((mission) => {
        let matches = true;

        // ממיר סטרינג מתאריך המשימה לאובייקט כדי לבדוק אותו
        const missionOpeningDate = parse(
          mission.Opening_date,
          "dd/MM/yyyy",
          new Date()
        );
        const missionClosingDate = parse(
          mission.Closing_date,
          "dd/MM/yyyy",
          new Date()
        );

        // ממיר סטרינג מתאריך הפילטר לאובייקט כדי לבדוק אותו
        const filterOpeningDate = filterData?.Opening_date
          ? parse(filterData.Opening_date, "yyyy-MM-dd", new Date())
          : null;
        const filterClosingDate = filterData?.Closing_date
          ? parse(filterData.Closing_date, "yyyy-MM-dd", new Date())
          : null;

        // פילטר שנה
        if (filterData?.Year && mission.Year !== filterData.Year) {
          matches = false;
        }

        // פילטר גמ"ש
        if (
          filterData?.Paying_factor &&
          mission.Paying_factor !== filterData.Paying_factor
        ) {
          matches = false;
        }

        // פילטר סטטוס
        if (filterData?.Status && mission.Status !== filterData.Status) {
          matches = false;
        }

        // פילטר רק על תאריך פתיחה
        if (filterOpeningDate && !filterClosingDate) {
          if (!isEqual(missionOpeningDate, filterOpeningDate)) {
            matches = false;
          }
        }

        // פילטר רק על תאריך סגירה
        if (filterClosingDate && !filterOpeningDate) {
          if (!isEqual(missionClosingDate, filterClosingDate)) {
            matches = false;
          }
        }

        // פילטר על התאריכים
        if (filterOpeningDate && filterClosingDate) {
          const isInRange =
            isWithinInterval(missionOpeningDate, {
              start: filterOpeningDate,
              end: filterClosingDate,
            }) &&
            isWithinInterval(missionClosingDate, {
              start: filterOpeningDate,
              end: filterClosingDate,
            });

          if (!isInRange) {
            matches = false;
          }
        }
        return matches;
      })
    : missions;

  {
    /*DELETE  EMPLOYEES*/
  }
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

  const add = (
    <Image src={"/addEmployee.svg"} width={20} height={20} alt="plus" />
  );

  // ייצוא לקובץ אקסל
  const EXCEL_TYPE =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

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

  // ArrayBuffer -ממיר סטרינג ל
  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i = 0; i < s.length; i++) {
      view[i] = s.charCodeAt(i) & 0xff;
    }
    return buf;
  };

  return (
    <>
      <div className=" px-3">
        <div className="flex  ">
          <div className="w-full flex justify-between mx-4">
            <Search
              className="w-full"
              textBtn={"הוסף משימה"}
              addImage={add}
              addNew={handleAddMission}
            />
          </div>

          <div className="flex justify-end gap-3 w-full">
            <div
              onClick={handlePopUpFilter}
              className=" relative  flex text-xl text-center hover:cursor-pointer items-center font-medium  justify-end border-2 border-[#002A78] rounded-full"
            >
              <div className="px-3 flex gap-2  truncate">
                <Image
                  src={"/filter.svg"}
                  width={15}
                  height={15}
                  alt="download"
                />
                <div>סינון</div>
              </div>

              {filterPopUp && (
                <FilterMission
                  setFilterPopUp={setFilterPopUp}
                  filterPopUp={filterPopUp}
                  filterSearch={filterSearch}
                  closeFilter={setFilterPopUp}
                />
              )}
            </div>
            <div className="bg-[#002A78] hover:cursor-pointer px-5 text-white text-xl rounded-full text-center items-center flex justify-center ">
              <div className="ml-2 truncate">
                <Image
                  src={"/downloadArrow.svg"}
                  width={20}
                  height={20}
                  alt="download"
                />
              </div>
              <div className="truncate">הפקת דוח דיווח ימי עמדה</div>
            </div>

            <div
              onClick={handleExportToExcel}
              className="bg-[#1D7044] hover:cursor-pointer px-4 gap-2 text-white text-xl rounded-full text-center items-center flex justify-center "
            >
              <Image src={"/excel.png"} width={20} height={20} alt="excel" />
              <div className="truncate">ייצוא לאקסל</div>
            </div>
          </div>
        </div>
        {/* {filterPopUp && <div><FilterMission/></div>} */}

        <MainTable headTable={headTable} initialTableData={data} />

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

        {showPopupNewMission && (
          <PopupMission
            showPopup={showPopupNewMission}
            setShowPopup={setShowPopupNewMission}
            // handleSubmit={handleSubmit}
            setMissions={setMissions}
          />
        )}
      </div>
    </>
  );
}
