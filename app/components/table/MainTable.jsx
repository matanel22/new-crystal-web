import React, { useState, useCallback } from "react";
import TableRow from "./TableRow";
import Theader from "./Theader";
import { CellContext } from "./Context";
import {
  ButtonCellLogic,
  DeleteLogic,
  DeleteRowButtonCellLogic,
  DropdownCellLogic,
  EditableCellLogic,
  Empty,
  TextCellLogic,
  TimeControlCellLogic,
} from "./cellLogics";

const MainTable = ({
  headTable = [],
  initialTableData = [],
  columnCellLogics,
  defaultRowLogic,
}) => {
  const [tableData, setTableData] = useState(initialTableData);

  const updateCellValue = useCallback((rowId, cellId, newValue) => {
    setTableData((prevData) =>
      prevData.map((row) =>
        row.id === rowId
          ? { ...row, cells: { ...row.cells, [cellId]: newValue } }
          : row
      )
    );
  }, []);

  const handleRowClick = useCallback((rowId, rowData) => {
    alert(`Нажата строка с ID: ${rowId}. Открываем окно редактирования.`);
    console.log("Row data for editing:", rowData);
  }, []);

  const handleDeleteRow = useCallback((rowId) => {
    setTableData((prevData) => prevData.filter((row) => row.id !== rowId));
  }, []);

  const handleIncreaseTime = useCallback((rowId, cellId, currentTime) => {
    console.log(
      `Увеличиваем время для ${rowId}/${cellId}. Текущее: ${currentTime}`
    );
  }, []);

  const handleAnnulTime = useCallback((rowId, cellId) => {
    console.log(`Аннулируем время для ${rowId}/${cellId}.`);
  }, []);

  const cellContextValue = React.useMemo(
    () => ({
      updateCellValue,
    }),
    [updateCellValue]
  );

  const editableRowLogic = React.useMemo(
    () => ({
      id: "defaultRowLogic",
      handleRowClick: (rowId, rowData) => {
        handleRowClick(rowId, rowData);
      },
    }),
    [handleRowClick]
  );

  const allColumnLogics = {
    trash: DeleteLogic("trash", ""),
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
    // <CellContext.Provider value={cellContextValue}>
    <div className="overflow-x-auto max-h-[550px] overflow-y-auto direction-ltr bg-[#EFF3FB] p-1 top-0 z-10 rounded">
      <table className=" w-full divide-y">
        <Theader headrData={headTable} />
        <tbody className="w-full dirRtl bg-[#EFF3FB] ">
          {tableData.map((row, i) => (
            <TableRow
              key={"row" + row.id}
              rowData={row}
              cellLogics={allColumnLogics}
              rowLogic={editableRowLogic}
              onRowClick={handleRowClick}
            />
          ))}
        </tbody>
      </table>
    </div>
    // </CellContext.Provider>
  );
};

export default MainTable;
