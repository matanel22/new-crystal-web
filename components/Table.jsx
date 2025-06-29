import React from "react";
import TableHead from "./missions/TableHead";
import TableContent from "./TableContent";

export default function Table({
  data,
  updateEmployeePopup,
  setUpdateEmployeePopup,
  headTable,
  deleteEmployeeById,
  tableWidth
}) {
  

  
const headLength=headTable.length


  return (
    <div className={`w-${tableWidth} m-auto dirRtl pr-2 h-full rounded-lg`}

    >
      {/* ראש הטבלה */}
      <div className="max-w-full">
        <TableHead
          headLength={headLength}
          headTable={headTable}
          data={data}
        />

        {/* תוכן הטבלה */}
        <TableContent
          headLength={headLength}
          data={data}
          headTable={headTable}
          setUpdateEmployeePopup={setUpdateEmployeePopup}
          updateEmployeePopup={updateEmployeePopup}
          deleteEmployeeById={deleteEmployeeById}
        />
      </div>
    </div>
  );
}
