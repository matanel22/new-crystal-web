import React, { useState } from "react";

const BaseCell = ({ rowId, cellLogic, currentValue }) => {
  // const { updateCellValue } = useCellContext(); // Uncomment and import your context if needed
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipText, setTooltipText] = useState(null);

  const handleCellClick = (event) => {
    if (cellLogic.handleClick) {
      cellLogic.handleClick(event, currentValue);
    }
  };

  const handleMouseEnter = (event) => {
    setIsHovered(true);
    if (cellLogic.handleHover) {
      cellLogic.handleHover(event, currentValue);
    }
    if (typeof currentValue === "string" && currentValue.length > 20) {
      setTooltipText(currentValue);
    }
  };

  const handleMouseLeave = (event) => {
    setIsHovered(false);
    if (cellLogic.handleMouseLeave) {
      cellLogic.handleMouseLeave(event, currentValue);
    }
    setTooltipText(null);
  };

  const handleUpdate = (newValue) => {
    // updateCellValue(rowId, cellLogic.id, newValue);
  };
  if (!cellLogic) {
    return;
  }
  return (
    <td
      className="relative"
      onClick={handleCellClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-cell-id={"cell-" + rowId + "-" + currentValue}
    >
      {tooltipText && (
        <div
          className="absolute left-1 top-0 -translate-x-1/2 -translate-y-1/2 font-normal
         rounded-md shadow-lg px-2 py-1 text-base bg-white z-50 tooltip whitespace-nowrap"
        >
          {tooltipText}
        </div>
      )}
      {cellLogic.renderContent(currentValue, handleUpdate)}
    </td>
  );
};

export default BaseCell;
