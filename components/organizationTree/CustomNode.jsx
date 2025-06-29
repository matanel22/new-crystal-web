"use client";
import { useState } from "react";
import { Handle, Position, useReactFlow } from "reactflow";
import "reactflow/dist/style.css";
import PopUpForDeleteDisconnectInTree from "./PopUpForDeleteDisconnectInTree";

export default function CustomNode({ id, data }) {
  const [showPopUpForDeleteAndDisconnect, setShowPopUpForDeleteAndDisconnect] = useState(false);

  const { getEdges } = useReactFlow();
  const edges = getEdges();
  const filteredEdgs = edges.filter((edge) => edge.target === id);
  const filteredIds = [];
  filteredEdgs.forEach((edge) => filteredIds.push(edge.id));

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        setShowPopUpForDeleteAndDisconnect(true);
        data.setUnitToDeleteOrDisconnect({name: data.name, level: data.level})
      }}
      onClick={() => setShowPopUpForDeleteAndDisconnect(false)}
      className="w-[180px] h-[90px] bg-[#E4EBF8] rounded-xl flex justify-center items-center text-[22px] font-normal text-[#002A78] shadow cursor-pointer relative"
    >
      <Handle
        type="target"
        position={Position.Top}
        style={{
          backgroundColor: "transparent",
          border: "none",
          top: "0.5px",
          width: "20px",
          height: "20px",
        }}
      />
        <div className="text-xs font-normal text-[#002A784A] w-fit absolute right-2 top-1">{data.level}</div>
        <div className="text-[18px]">{data.name}</div>
      <div className="w-5 h-5 bg-white rounded-full border border-solid border-[#002A78] flex items-center justify-center absolute -bottom-[10px] text-2xl text-[#002A78] ">
        +
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        style={{
          backgroundColor: "transparent",
          border: "none",
          width: "20px",
          height: "20px",
          bottom: "-10px",
        }}
      />
      {showPopUpForDeleteAndDisconnect && (
        <PopUpForDeleteDisconnectInTree
          setShowPopUp={setShowPopUpForDeleteAndDisconnect}
          filteredIds={filteredIds}
          setShowPopUpDelete={data.setShowPopUpDelete}
          setShowPopUpDisconnect={data.setShowPopUpDisconnect}
        />
      )}
    </div>
  );
}
