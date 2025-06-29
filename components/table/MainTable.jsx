import React, { useState, useCallback } from "react";
import TableRow from "./TableRow";
import Theader from "./Theader";
import { CellContext } from "./Context";

const MainTable = ({
  headTable = [],
  initialTableData = [],
  cellsLogics,
  columnCellLogics,
  defaultRowLogic,
}) => {
  const [tableData, setTableData] = useState(initialTableData);

  // const updateCellValue = useCallback((rowId, cellId, newValue) => {
  //   setTableData((prevData) =>
  //     prevData.map((row) =>
  //       row.id === rowId
  //         ? { ...row, cells: { ...row.cells, [cellId]: newValue } }
  //         : row
  //     )
  //   );
  // }, []);

  // const handleRowClick = useCallback((rowId, rowData) => {
  //   alert(`Нажата строка с ID: ${rowId}. Открываем окно редактирования.`);
  //   console.log("Row data for editing:", rowData);
  // }, []);

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

  // const cellContextValue = React.useMemo(
  //   () => ({
  //     updateCellValue,
  //   }),
  //   [updateCellValue]
  // );

  const editableRowLogic = React.useMemo(
    () => ({
      id: "defaultRowLogic",
      handleRowClick: (rowId, rowData) => {
        columnCellLogics(rowId, rowData);
      },
    }),
    [columnCellLogics]
  );

  return (
    // <CellContext.Provider value={cellContextValue}>
    <div className="overflow-x-auto overflow-y-auto max-h-[85vh] mt-20 direction-ltr bg-[#EFF3FB] p-1 top-0 z-10 rounded">
      <table className=" w-full divide-y">
        <Theader headrData={headTable} />
        <tbody className="w-full dirRtl bg-[#EFF3FB] ">
          {tableData.map((row, i) => (
            <TableRow
              key={"row" + row.id}
              rowData={row}
              cellLogics={cellsLogics}
              rowLogic={editableRowLogic}
              onRowClick={columnCellLogics}
            />
          ))}
        </tbody>
      </table>
    </div>
    // </CellContext.Provider>
  );
};

export default MainTable;
