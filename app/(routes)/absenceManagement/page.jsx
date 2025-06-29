"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PopupDelete from "../../../components/PopupDelete";
import Search from "../../../components/ui/Search";
import Table from "../../../components/Table";
import Image from "next/image";

const absenceData = [
  {
    id: "001",
    absenceName: "Sick Leave",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "002",
    absenceName: "Vacation",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "003",
    absenceName: "Maternity Leave",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "004",
    absenceName: "Personal Leave",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "005",
    absenceName: "Bereavement Leave",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "006",
    absenceName: "Study Leave",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "007",
    absenceName: "Family Leave",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "008",
    absenceName: "Jury Duty",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "009",
    absenceName: "Military Service",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "010",
    absenceName: "Unpaid Leave",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "011",
    absenceName: "Work from Home",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "012",
    absenceName: "Paternity Leave",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "013",
    absenceName: "Compensatory Time Off",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "014",
    absenceName: "National Holiday",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "015",
    absenceName: "Religious Holiday",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "016",
    absenceName: "Paternity Leave",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "017",
    absenceName: "Compensatory Time Off",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "018",
    absenceName: "National Holiday",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "019",
    absenceName: "Religious Holiday",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "020",
    absenceName: "Paternity Leave",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "021",
    absenceName: "Compensatory Time Off",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "022",
    absenceName: "National Holiday",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "023",
    absenceName: "Religious Holiday",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "024",
    absenceName: "Paternity Leave",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "025",
    absenceName: "Compensatory Time Off",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "026",
    absenceName: "National Holiday",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "027",
    absenceName: "Religious Holiday",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "028",
    absenceName: "Paternity Leave",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "029",
    absenceName: "Compensatory Time Off",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
  {
    id: "030",
    absenceName: "National Holiday",
    start: "dd/mm/yyyy",
    end: "dd/mm/yyyy",
  },
];

const headerData = ["קוד היעדרות", "שם היעדרות", "תאריך התחלה", "תאריך סיום"];

export default function ManageAbsence() {
  const [absenceArray, setabsenceArray] = useState(absenceData);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedAbsence, setselectedAbsence] = useState(null);
  const [toggleUpdateInput, setToggleUpdateInput] = useState(false);
  const [ifEmpty, setIfEmpty] = useState(false);

  const addAbsence = () => {
    const newAbsence = {
      id: "",
      absenceName: "",
      start: "",
      end: "",
    };

    setabsenceArray((prevArray) => {
      const newArray = [newAbsence, ...prevArray];
      return newArray;
    });
    setSelectedItemIndex(0);
    setIfEmpty(false);
  };

  const handleNewAbsence = () => {
    !checkIfValueIsEmpty() && addAbsence();
  };

  const deleteAbsence = async (absence) => {
    try {
      setselectedAbsence(absence);
      setShowConfirmation(true);
    } catch (error) {
      // console.error("error delete absence: ", error);
    }
  };

  const handleChange = (e, id, field) => {
    const updatedAbsence = absenceArray.map((absence) => {
      if (absence.id === id) {
        return { ...absence, [field]: e.target.value };
      }
      return absence;
    });

    setabsenceArray(updatedAbsence);
  };

  const checkIfValueIsEmpty = () => {
    if (selectedItemIndex !== null) {
      const selectedItem = selectedItemIndex;

      for (const [key, value] of Object.entries(absenceArray[selectedItem])) {
        if (value === "") {
          setIfEmpty(true);
          return true;
        }
      }
    }
  };
  const imageAdd = (
    <Image src={"/addEmployee.svg"} width={20} height={20} alt="plus" />
  );

  return (
    <div
      onClick={() => !checkIfValueIsEmpty() && setSelectedItemIndex(null)}
      className="h-[93vh] px-4"
    >
      <div className="h-16 w- full flex justify-center m-2">
        <Search
          addImage={imageAdd}
          addNew={handleNewAbsence}
          textBtn={"הוסף היעדרות"}
          updateMode={selectedItemIndex}
          searchText={"חיפוש לפי קוד היעדרות / שם היעדרות"}
        />
      </div>

      {/* THE TABLE */}
      <Table
        tableWidth={"60"}
        data={absenceArray}
        updateMode={selectedItemIndex}
        setUpdateMode={setSelectedItemIndex}
        handleChange={handleChange}
        setToggleUpdateInput={setToggleUpdateInput}
        ifEmpty={ifEmpty}
        changeTheRowToEdit={checkIfValueIsEmpty}
        headTable={headerData}
        deleteEmployee={deleteAbsence}
      />

      {/* DELETE ABSENCE POP-UP */}
      {showConfirmation && (
        <PopupDelete
          popUpState={showConfirmation}
          objectToDelete={selectedAbsence}
          showPopup={setShowConfirmation}
          headerText={"מחיקת היעדרות"}
          messageText={"האם אתה בטוח שאתה רוצה למחוק את ההיעדרות"}
          btnText={"מחק"}
        />
      )}
    </div>
  );
}
