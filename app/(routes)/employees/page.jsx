"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import EmployeeFilter from "../../components/employees/EmployeeFilter";
import PopupDelete from "../../components/PopupDelete";
import Search from "../../components/ui/Search";
import Table from "../../components/Table";

import PopupFilterEmployees from "@/app/components/employees/PopupFilterEmployees";
import { parse, isEqual, isWithinInterval, parseISO } from "date-fns";

import AddNewEmployee from "@/app/components/employees/AddNewEmployee";
import { Toaster } from "react-hot-toast";

export default function Employees() {
  //FOR CONTAIN THE EMPLOYEES
  const [employees, setEmployees] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);
  // פופאפ לסינון
  const [filterPopUp, setFilterPopUp] = useState(false);

  // מקבל שהוא הסינונים
  const [filterData, setFilterData] = useState(null);

  // הוספת עובד חדש
  const [addNewEmployee, setAddNewEmployee] = useState(false);

  // מחיקת עובד
  const [deleteEmployee, setDeleteEmployee] = useState(null);

  //SHOW THE FREEZE POP UP
  const [showConfirmation, setShowConfirmation] = useState(false);

  const showEmployeesOrFilter = filterData
    ? employees.filter((employee) => {
        let matches = true;

        // ממיר סטרינג מתאריך המשימה לאובייקט כדי לבדוק אותו
        const employeeOpeningDate = employee.employeeToShow.activity_start
          ? parseISO(employee.employeeToShow.activity_start)
          : null;

        const employeeClosingDate = employee.employeeToShow.activity_end
          ? parseISO(employee.employeeToShow.activity_end)
          : null;

        // ממיר סטרינג מתאריך הפילטר לאובייקט כדי לבדוק אותו
        const filterOpeningDate = filterData?.activity_start
          ? parse(filterData.activity_start, "yyyy-MM-dd", new Date())
          : null;
        const filterClosingDate = filterData?.activity_end
          ? parse(filterData.activity_end, "yyyy-MM-dd", new Date())
          : null;

        // פילטר רק על תאריך פתיחה
        if (filterOpeningDate && !filterClosingDate) {
          if (!isEqual(employeeOpeningDate, filterOpeningDate)) {
            matches = false;
          }
        }

        // פילטר רק על תאריך סגירה
        if (filterClosingDate && !filterOpeningDate) {
          if (!isEqual(employeeClosingDate, filterClosingDate)) {
            matches = false;
          }
        }

        // פילטר על התאריכים
        if (filterOpeningDate && filterClosingDate) {
          const isInRange =
            isWithinInterval(employeeOpeningDate, {
              start: filterOpeningDate,
              end: filterClosingDate,
            }) &&
            isWithinInterval(employeeClosingDate, {
              start: filterOpeningDate,
              end: filterClosingDate,
            });

          if (!isInRange) {
            matches = false;
          }
        }

        // פילטר מחלקה
        if (
          filterData?.department_id &&
          !employee.employeeToShow.department_id
            ?.toLowerCase()
            .includes(filterData.department_id.toLowerCase())
        ) {
          matches = false;
        }

        // פילטר ענף
        if (
          filterData?.branch_id &&
          !employee.employeeToShow.branch_id
            ?.toLowerCase()
            .includes(filterData.branch_id.toLowerCase())
        ) {
          matches = false;
        }

        // פילטר מדור
        if (
          filterData?.section_id &&
          !employee.employeeToShow.section_id
            ?.toLowerCase()
            .includes(filterData.section_id.toLowerCase())
        ) {
          matches = false;
        }

        // פילטר הסכם
        if (
          filterData?.contract_id &&
          employee.employeeToShow.contract_id !== filterData.contract_id
        ) {
          matches = false;
        }

        console.log(filterData, "filter data");
        return matches;
      })
    : employees;

  const formatData = (data) => {
    const employees = Array.isArray(data) ? data : [data];
    const employeeArray = employees
      .filter((active) => active.is_active === 1)
      .map((employee) => ({
        employeeToShow: {
          employee_number: employee.employee_number,
          first_name: employee.first_name,
          surname: employee.surname,
          solider_civilian:
            employee.solider_civilian == "0"
              ? "אזרח"
              : employee.solider_civilian == "1" && "חייל",
          department_id: employee.department_id && employee.department_name,
          branch_id: employee.branch_id && employee.branch_name,
          section_id: employee.section_id && employee.section_name,
          contract_id: employee.contract_id && employee.contract.code,
          activity_start: employee.activity_start,
          activity_end: employee.activity_end,
          mail: employee.mail,
        },
        updateEmployeeMood: {
          employee_number: employee.employee_number,
          first_name: employee.first_name,
          surname: employee.surname,
          solider_civilian:
            employee.solider_civilian == "0"
              ? "אזרח"
              : employee.solider_civilian == "1" && "חייל",
          department_id: employee.department_name && employee.department_id,
          branch_id: employee.branch_name && employee.branch_id,
          section_id: employee.section_name && employee.section_id,
          contract_id: employee.contract.code && employee.contract_id,
          activity_start: employee.activity_start,
          activity_end: employee.activity_end,
          mail: employee.mail,
        },
        hiddenEmployeeData: {
          id: employee.id,
          is_active: employee.is_active,
          employee_number: employee.employee_number,
          first_name: employee.first_name,
          surname: employee.surname,
        },
      }));
    setAllEmployees(employeeArray);
    setEmployees(employeeArray);
  };

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("/employees");
      const data = response.data;
      formatData(data);
    } catch (error) {
      console.error("error fetching employees: ", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // console.log(employees,"כל העובדים");

  const formatDepartmentData = (data) => {
    const formatted = data.reduce((acc, company) => {
      acc[company.name] = company.branches.map((branch) => {
        return { [branch.name]: branch.sections || [] };
      });
      return acc;
    }, {});

    // console.log(formatted);
  };

  useEffect(() => {
    async function fetchDropdownData() {
      try {
        const response = await axios.get(
          "departments?appendBranches=true&appendSections=true"
        );
        // console.log(response.data);

        formatDepartmentData(response.data ?? []);
      } catch (error) {
        console.error("error fetching employees: ", error);
        // throw error;
      } finally {
      }
    }
    fetchDropdownData();
  }, []);

  const handleAddingNewRow = () => {
    setAddNewEmployee(true);
  };

  {
    /*DELETE  EMPLOYEES*/
  }
  const deleteEmployeeById = async (employee) => {
    try {
      setDeleteEmployee(employee);
      setShowConfirmation(true);
    } catch (error) {
      console.error("error delete employee: ", error);
    }
  };

  {
    /*ARRAY FOR THE HEAD OF THE TABLE*/
  }
  const headTable = [
    "מספר עובד",
    "שם פרטי",
    "שם משפחה",
    "חייל / אזרח",
    "מחלקה / יחידה",
    "ענף",
    "מדור",
    "סוג הסכם",
    "תחילת פעילות",
    "סיום פעילות",
    "מייל",
  ];

  const handlePopUpFilter = () => {
    setFilterPopUp(!filterPopUp);
  };

  // מסנן את המשימות לפי בחירה
  const filterSearch = (data) => {
    setFilterData(data);
  };

  const imageAdd = (
    <Image src={"/addEmployee.svg"} width={20} height={20} alt="plus" />
  );

  return (
    <div className="w-full flex flex-col gap-y-4 h-full">
      <div className="flex  w-full justify-between mx-4">
        <div className="w-1/2">
          <Search
            searchEmployees={allEmployees}
            setEmployees={setEmployees}
            formatData={formatData}
            addNew={handleAddingNewRow}
            textBtn={" הוסף עובד"}
            addImage={imageAdd}
            searchText={"חיפוש לפי מספר עובד / שם עובד"}
          />
        </div>
        <div
          onClick={handlePopUpFilter}
          className="ml-5 relative  flex text-xl text-center hover:cursor-pointer items-center font-medium  justify-end border-2 border-[#002A78] rounded-full"
        >
          <div className="px-4 flex gap-2  truncate">
            <Image src={"/filter.svg"} width={15} height={15} alt="download" />
            <div>סינון</div>
          </div>

          {filterPopUp && (
            <PopupFilterEmployees
              setFilterPopUp={setFilterPopUp}
              filterPopUp={filterPopUp}
              filterSearch={filterSearch}
              closeFilter={setFilterPopUp}
            />
          )}
        </div>
      </div>

      <div className=" dirLtr overflow-y-auto rounded-xl">
        <div className=" h-full ">
          {/* <Table
            data={showEmployeesOrFilter}
            headTable={headTable}
            deleteEmployeeById={deleteEmployeeById}
          /> */}
        </div>
        <Toaster position="top-center" />
      </div>
      {showConfirmation && (
        <PopupDelete
          popUpState={showConfirmation}
          objectToDelete={deleteEmployee}
          showPopup={setShowConfirmation}
          headerText={`העברת עובד למצב "לא פעיל"`}
          messageText={"האם אתה בטוח שאתה רוצה להקפיא את העובד"}
          btnText={"המשך"}
        />
      )}

      {addNewEmployee && (
        <AddNewEmployee
          setAddNewEmployee={setAddNewEmployee}
          setEmployees={setEmployees}
          fetchEmployees={fetchEmployees}
        />
      )}
    </div>
  );
}
