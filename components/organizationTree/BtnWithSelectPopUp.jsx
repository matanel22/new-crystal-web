"use client";

import { useState } from "react";
import BtnForOrganizationTree from "./BtnForOrganizationTree";
import PopUpForTree from "./PopUpForTree";
import { PopUpCreateUnit } from "./PopUpCreateUnit";

export default function BtnWithSelectPopUp({
  showPopUpSelectUnit,
  setShowPopUpSelectUnit,
  setNodes,
  unitName,
  setUnitName,
  selectedLevel,
  setSelectedLevel




  
}) {
  const [showPopUpCreateUnit, setShowPopUpCreateUnit] = useState(false);

  return (
    <div className="relative">
      <BtnForOrganizationTree setShowPopUpSelectUnit={setShowPopUpSelectUnit} />

      {showPopUpSelectUnit && (
        <PopUpForTree
          setShowPopUpCreateUnit={setShowPopUpCreateUnit}
          setSelectedLevel={setSelectedLevel}
        />
      )}

      {showPopUpCreateUnit && (
        <PopUpCreateUnit
          setShowPopUpCreateUnit={setShowPopUpCreateUnit}
          selectedLevel={selectedLevel}
          setNodes={setNodes}
          unitName={unitName}
          setUnitName={setUnitName}
        />
      )}
    </div>
  );
}
