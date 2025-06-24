import React from "react";
import BaseCell from "./BaseCell.jsx";

const TableRow = ({ rowData, cellLogics, rowLogic, onRowClick }) => {
  const handleRowClick = () => {
    if (rowLogic && rowLogic.handleRowClick) {
      rowLogic.handleRowClick(rowData.id, rowData);
    } else {
      onRowClick(rowData.id, rowData);
    }
  };

  return (
    <tr
      className={`font-normal text-[16px] leading-5 text-blue_color border-b 
        border-t-[#A7BFE8]/30 hover:bg-[#e1e8f3] transition-transform duration-200 
        ease-in-out`}
      data-row-id={rowData.id}
      onClick={handleRowClick}
    >
      {Object.keys(rowData).map((cellId) => {
        return (
          <BaseCell
            key={cellId}
            rowId={rowData.id}
            cellLogic={cellLogics[cellId]}
            currentValue={rowData[cellId]}
          />
        );
      })}
    </tr>
  );
};

export default TableRow;
