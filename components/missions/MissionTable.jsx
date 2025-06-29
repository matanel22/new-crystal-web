import React, { useState } from "react";
import TableHead from "./TableHead";
import MissionContent from "./MissionContent";
import {
  format,
  parseISO,
  compareDesc,
  compareAsc,
  parse,
  isValid,
} from "date-fns";
import { formatDate } from "@/util/dateFormat";

export default function MissionTable({
  data,
  headTable,
  deleteEmployee,
  tableWidth,
}) {
  // העמוד שממיינים אותו ולאיזה כיון
  const [columnToSortOn, setColumnToSortOn] = useState({
    index: null,
    direction: "desc",
  });

  // מיון כל עמודה
  const sortedData = () => {
    const columnKey = headTable[columnToSortOn.index];
    return [...data].sort((a, b) => {
      let valueA;
      let valueB;
      // console.log(columnKey, "hh");

      if (columnKey === "ת.פתיחה") {
        valueA = formatDate(a.Opening_date);
        valueB = formatDate(b.Opening_date);
      }
      if (columnKey === "ת.סגירה") {
        valueA = formatDate(a.Closing_date);
        valueB = formatDate(b.Closing_date);
      }
      if (columnKey === "שם משימה") {
        valueA = a.Mission_name;
        valueB = b.Mission_name;
      }
      if (columnKey === "סוג משימה") {
        valueA = a.Mission_type;
        valueB = b.Mission_type;
      }
      if (columnKey === "שם קצין נושא") {
        valueA = a.Ktzin_nosse_name;
        valueB = b.Ktzin_nosse_name;
      }
      if (columnKey === "סטטוס") {
        valueA = a.Status;
        valueB = b.Status;
      }
      if (columnKey === "רמת עניין") {
        valueA = a.Interest_level;
        valueB = b.Interest_level;
      }
      if (columnKey === 'גמ"ש') {
        valueA = a.Paying_factor;
        valueB = b.Paying_factor;
      }
      if (columnKey === "מספר משימה") {
        valueA = Number(a.Mission_number);
        valueB = Number(b.Mission_number);
      }
      if (columnKey === "שנה") {
        valueA = Number(a.Year);
        valueB = Number(b.Year);
      }

      // if (isValid(valueA) && isValid(valueB)) {
      //   return columnToSortOn.direction === "desc"
      //     ? compareDesc(valueA, valueB)
      //     : compareAsc(valueA, valueB);
      // }
      if (isValid(valueA) && isValid(valueB)) {
        return columnToSortOn.direction === "desc"
          ? valueB - valueA
          : valueA - valueB;
      }

      if (typeof valueA === "string" && typeof valueB === "string") {
        return columnToSortOn.direction === "desc"
          ? valueB.localeCompare(valueA, "he")
          : valueA.localeCompare(valueB, "he");
      }
      return 0;
    });
  };

  const headLength = headTable.length;

  return (
    <div
      className={`w-${tableWidth} overflow-y-auto my-10 m-auto dirLtr pr-2 h-[90%] rounded-lg`}
    >
      <div className="dirRtl max-w-full ">
        <TableHead
          columnToSortOn={columnToSortOn}
          setColumnToSortOn={setColumnToSortOn}
          headLength={headLength}
          headTable={headTable}
        />
        <MissionContent
          headLength={`grid-cols-${headLength}`}
          data={sortedData()}
          deleteEmployee={deleteEmployee}
        />
      </div>
    </div>
  );
}
