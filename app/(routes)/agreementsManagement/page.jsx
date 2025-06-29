"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PopupDelete from "../../../components/PopupDelete";
import Search from "../../../components/ui/Search";
import Table from "../../../components/Table";

export default function AgreementsManagement() {
  const user = [
    {
      id: 12,
      agreementName: "הסכם לחיילים",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 13,
      agreementName: "הסכם לחיילים",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 14,
      agreementName: "הסכם לחיילים",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 15,
      agreementName: "הסכם לאע צים4",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 16,
      agreementName: "הסכם לאע צים5",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 17,
      agreementName: "הסכם לאע צים6",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 18,
      agreementName: "הסגם לאע צים",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 19,
      agreementName: "הסכם לאע צים",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 20,
      agreementName: "הסכם לאע צים",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 21,
      agreementName: "הסכם לחיילים0",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 22,
      agreementName: "הסכם לחיילים1",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 23,
      agreementName: "הסכם לחיילים2",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 24,
      agreementName: "הסכם לחיילים3",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 25,
      agreementName: "הסכם לחיילים4",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 26,
      agreementName: "הסכם לחיילים5",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 27,
      agreementName: "הסכם לחיילים6",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 28,
      agreementName: "הסכם לחיילים7",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 29,
      agreementName: "הסכם לחיילים8",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 30,
      agreementName: "הסכם לחיילים9",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 31,
      agreementName: "הסכם לחיילים0",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 32,
      agreementName: "הסכם לחיילים1",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 33,
      agreementName: "הסכם לחיילים2",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 34,
      agreementName: "הסכם לחיילים3",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 35,
      agreementName: "הסכם לחיילים4",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 36,
      agreementName: "הסכם לחיילים5",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 37,
      agreementName: "הסכם לחיילים6",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 38,
      agreementName: "הסכם לחיילים7",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "09:00",
      breakType: "00:16",
    },
    {
      id: 39,
      agreementName: "הסכם לחיילים8",
      enterTime: "08:00",
      exitTime: "17:00",
      overTimeLimit: "5",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 40,
      agreementName: "הסכם לחיילים9",
      enterTime: "09:00",
      exitTime: "18:00",
      overTimeLimit: "6",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
    {
      id: 41,
      agreementName: "הסכם לחיילים0",
      enterTime: "10:00",
      exitTime: "19:00",
      overTimeLimit: "7",
      hoursAmount: "10:00",
      breakType: "00:16",
    },
  ];
  //FOR CONTAIN THE EMPLOYEES
  const [employees, setEmployees] = useState(user);

  //SHOW THE FREEZE POP UP
  const [showConfirmation, setShowConfirmation] = useState(false);

  //CONTAIN THE EMPLOYEE TO FREEZE
  const [employeeIdToDelete, setEmployeeIdToDelete] = useState(null);

  //ON CLICK FOR UPDATE INPUTS
  const [updateMode, setUpdateMode] = useState(null);

  //ALERT IF FIELD EMPTY
  const [ifEmpty, setIfEmpty] = useState(false);

  //THE TOGGLE FOR SOME OF THE INPUTS
  const [toggleUpdateInput, setToggleUpdateInput] = useState(false);

  //FETCH THE DATA
  const fetchEmployees = async () => {
    try {
      const response = await axios.get(`https://dummyjson.com/users`);
      let data = response.data.users;
      setEmployees(data);

      // const hairOptions = Array.from(
      //   new Set(data.map((employee) => employee.hair))
      // );
      // setOptions(hairOptions);
    } catch (error) {
      console.error("error fetching employees: ", error);
    }
  };
  // useEffect(() => {
  //   fetchEmployees();
  // }, []);

  //MAKING THE UPDATE
  const handleChange = (e, id, field) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === id) {
        return { ...employee, [field]: e.target.value };
      }

      return employee;
    });

    setEmployees(updatedEmployees);
  };

  //UPDATE IN DB
  const updateEmployee = async (id) => {
    try {
      const employee = employees.find((employee) => employee.id === id);
      if (!employee) {
        console.error("Employee not found.");
        return;
      }
      await axios.put(`https://dummyjson.com/users/${id}`, employee);
      setEmployees((prevEmployees) => {
        const updatedEmployees = prevEmployees.map((employee) => {
          if (employee.id === id) {
            return employee;
          }
          return employee;
        });
        return updatedEmployees;
      });
    } catch (error) {
      console.error("error updating employee: ", error);
    }
  };

  const checkIfEmpty = (emptyArray) => {
    let isEmpty = false;

    for (const empty of emptyArray) {
      for (const [key, value] of Object.entries(empty)) {
        if (value === "") {
          isEmpty = true;
        }
      }
      if (isEmpty) {
        break;
      }
    }
    if (isEmpty) {
      setIfEmpty(true);
    } else {
      setUpdateMode(null);
    }
  };
  const changeTheRowToEdit = (index) => {
    let isEmpty = false;

    for (const absence of employees) {
      for (const [key, value] of Object.entries(absence)) {
        if (value === "") {
          isEmpty = true;
          break;
        }
      }
      if (isEmpty) {
        break;
      }
    }
    if (!isEmpty) {
      setUpdateMode(index);
    } else {
      setIfEmpty(true);
    }
  };

  //ADD NEW ROW TO ADD EMPLOYEE
  const addEmployee = () => {
    // IF THE ROW OPEN THE BUTTON NOT WORK
    if (updateMode !== null) {
      return;
    }

    const newEmployee = {
      id: "",
      agreementName: "",
      enterTime: "",
      exitTime: "",
      overTimeLimit: "",
      hoursAmount: "",
      breakType: "",
    };
    setEmployees([newEmployee, ...employees]);
    setUpdateMode(0);
  };

  //DELETE THE EMPLOYEES
  const deleteEmployee = async (employee) => {
    try {
      setEmployeeIdToDelete(employee);
      setShowConfirmation(true);
    } catch (error) {
      console.error("error delete employee: ", error);
    }
  };

  //ARRAY FOR THE HEAD OF THE TABLE
  const headTable = [
    "קוד הסכם",
    "שם הסכם",
    "שעת כניסה",
    "שעת יציאה",
    "מגבלת ש.נ",
    "כמות שעות",
    "סוג הפסקה",
  ];

  const imageAdd = (
    <Image src={"/addEmployee.svg"} width={20} height={20} alt="plus" />
  );

  return (
    <div className="h-[93vh]  px-4">
      <div className="h-16   flex justify-center m-2">
        <Search
          addNew={addEmployee}
          textBtn={" הוסף הסכם "}
          updateMode={updateMode}
          addImage={imageAdd}
          searchText={"חיפוש"}
        />
      </div>

      {/* THE TABLE */}
      <Table
        tableWidth={"80"}
        data={employees}
        updateMode={updateMode}
        setUpdateMode={setUpdateMode}
        handleChange={handleChange}
        toggleUpdateInput={toggleUpdateInput}
        setToggleUpdateInput={setToggleUpdateInput}
        checkIfEmpty={checkIfEmpty}
        ifEmpty={ifEmpty}
        headTable={headTable}
        deleteEmployee={deleteEmployee}
        changeTheRowToEdit={changeTheRowToEdit}
      />

      {/* FEEZE EMPLOYEE */}
      {showConfirmation && (
        <PopupDelete
          popUpState={showConfirmation}
          objectToDelete={employeeIdToDelete}
          showPopup={setShowConfirmation}
          headerText={`מחיקת הסכם`}
          messageText={"האם אתה בטוח שאתה רוצה למחוק את ההסכם  "}
          btnText={"מחק"}
        />
      )}
    </div>
  );
}
