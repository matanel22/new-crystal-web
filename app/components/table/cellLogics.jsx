import React, { useState } from "react";
import Flow from "../missions/Flow";
import { truncateText } from "@/app/util/table";
import Image from "next/image";

// 1. TextCellLogic
export function TextCellLogic(id, initialValue) {
  return {
    id,
    initialValue,
    renderContent: (value) => <Flow value={truncateText(value)} />,
  };
}
export function DeleteLogic(id, initialValue) {
  return {
    id,
    initialValue,
    renderContent: (value) => (
      <Image
        onClick={() => {
          alert("you try to delete " + value);
        }}
        className={`pr-2  flex items-center justify-center hover:cursor-pointer transform hover:scale-105 transition-transform duration-200 ease-in-out`}
        src={"/trash.svg"}
        height="30"
        width="30"
        alt="trash"
      />
    ),
  };
}
export function Empty(id, initialValue) {
  return {
    id,
    initialValue,
    renderContent: (value) => <></>,
  };
}

// 2. EditableCellLogic
export function EditableCellLogic(id, initialValue) {
  return {
    id,
    initialValue,
    renderContent: (value, updateCellValue) => {
      const [isEditing, setIsEditing] = useState(false);
      const [inputValue, setInputValue] = useState(value);

      const handleDoubleClick = () => setIsEditing(true);
      const handleBlur = () => {
        setIsEditing(false);
        if (inputValue !== value) updateCellValue(inputValue);
      };
      const handleChange = (e) => setInputValue(e.target.value);
      const handleKeyPress = (e) => {
        if (e.key === "Enter") handleBlur();
      };

      return isEditing ? (
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          autoFocus
        />
      ) : (
        <span onDoubleClick={handleDoubleClick}>{value}</span>
      );
    },
  };
}

// 3. ButtonCellLogic
export function ButtonCellLogic(id, initialValue, action) {
  return {
    id,
    initialValue,
    renderContent: (value) => (
      <button
        onClick={(event) => {
          event.stopPropagation();
          action(value);
          alert(`Кнопка "${value}" нажата!`);
        }}
      >
        {value}
      </button>
    ),
  };
}

// 4. DeleteRowButtonCellLogic
export function DeleteRowButtonCellLogic(id, initialValue, onDeleteRow) {
  return {
    id,
    initialValue,
    renderContent: (value) => (
      <button
        onClick={(event) => {
          event.stopPropagation();
          const rowId =
            event.currentTarget.closest("[data-row-id]")?.dataset.rowId;
          if (rowId) {
            onDeleteRow(rowId);
            alert(`Строка с ID ${rowId} будет удалена!`);
          }
        }}
      >
        {value}
      </button>
    ),
  };
}

// 5. DropdownCellLogic
export function DropdownCellLogic(id, initialValue, options) {
  return {
    id,
    initialValue,
    renderContent: (value, updateCellValue) => (
      <select value={value} onChange={(e) => updateCellValue(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ),
  };
}

// 6. TimeControlCellLogic
export function TimeControlCellLogic(
  id,
  initialValue,
  onIncreaseTime,
  onAnnulTime
) {
  return {
    id,
    initialValue,
    renderContent: (value, updateCellValue) => {
      const [isHovered, setIsHovered] = useState(false);

      const handleIncrease = (e) => {
        e.stopPropagation();
        const rowId =
          e.currentTarget.closest("[data-row-id]")?.dataset.rowId || "unknown";
        onIncreaseTime(rowId, id, value);
        updateCellValue(value + 10);
      };

      const handleAnnul = (e) => {
        e.stopPropagation();
        const rowId =
          e.currentTarget.closest("[data-row-id]")?.dataset.rowId || "unknown";
        onAnnulTime(rowId, id);
        updateCellValue(0);
      };

      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span>{value} минут</span>
          {isHovered && (
            <div style={{ marginLeft: "10px" }}>
              <button onClick={handleIncrease}>+</button>
              <button onClick={handleAnnul}>Ø</button>
            </div>
          )}
        </div>
      );
    },
  };
}
