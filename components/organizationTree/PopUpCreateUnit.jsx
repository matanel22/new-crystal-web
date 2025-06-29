import React, { useState } from "react";
import Image from "next/image";
import axios from "@/lib/axios";

export const addNewUnitInServer = async (url, name, parentId) => {
  let parentName;

  switch (url) {
    case "departments":
      parentName = null;
      break;
    case "branches":
      parentName = "department_id";
      break;
    case "sections":
      parentName = "branch_id";
      break;
    default:
      throw new Error("Unknown type");
  }

  try {
    const payloud = { name: name };
    if (parentName) {
      payloud[parentName] = parentId;
    }

    const respons = await axios.post(url, payloud);

    return respons.data;
  } catch (error) {
    // setError("Failed to craete a new unit. Please try again later.");
    console.error("Error create data:", error);
  }
};

export function PopUpCreateUnit({
  setShowPopUpCreateUnit,
  selectedLevel,
  setNodes,
  unitName,
  setUnitName,
}) {
  const [idCounter, setIdCounter] = useState(null);

  const addNewNodeInClient = () => {
    const x = window.innerWidth - 250;
    const y = window.innerHeight / 2 + idCounter * 110;
    setIdCounter((prevId) => prevId + 1);

    const newUnit = {
      id: `NEW_ID_${idCounter}`,
      data: {
        label: unitName,
        level: selectedLevel.type,
      },
      position: { x: x, y: y },
      type: "CustomNode",
    };

    setNodes((prevNodes) => [...prevNodes, newUnit]);
  };

  return (
    <div
      dir="rtl"
      className="fixed inset-0 flex  items-center justify-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50"
    >
      <div className="bg-white  w-[844px] h-[210px] rounded-xl text-right pr-7 pl-3">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold leading-6 text-[#002A78] pt-5 pb-[6px]">
            יצירת {selectedLevel.type}
          </h1>
          <Image
            onClick={() => setShowPopUpCreateUnit(false)}
            className="hover:cursor-pointer pb-2"
            src={"/x.svg"}
            width={15}
            height={15}
            alt="x"
          />
        </div>
        <p className="text-[#002A78] text-xl font-normal pb-1">
          שם ה{selectedLevel.type}
        </p>

        <input
          type="text"
          placeholder={`שם ${selectedLevel.type}`}
          value={unitName}
          className="w-[579px] h-[41px] bg-white px-6 rounded-[41px] border-[0.84px] border-[#002A7842] shadow-[0_2.4px_6px_-5.68px] text-[16.8px] font-light 
            text-[#002A78]
            flex items-center justify-between z-50 placeholder-[#002A7887]"
          onChange={(e) => setUnitName(e.target.value)}
        />

        <div className="flex w-full  justify-end mt-9 pl-2">
          <button
            onClick={() => setShowPopUpCreateUnit(false)}
            className="bg-white text-blue_color px-6 py-[2px] rounded-full border border-blue_color text-xl font-normal"
          >
            ביטול
          </button>
          <button
            onClick={() => {
              addNewNodeInClient(), setShowPopUpCreateUnit(false);
            }}
            className="bg-blue_color text-white rounded-full px-6  mr-1 text-xl font-normal"
          >
            צור {selectedLevel.type}
          </button>
        </div>
      </div>
    </div>
  );
}
