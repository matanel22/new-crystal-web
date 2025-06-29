import React from "react";

const HoverOnMission = ({ children, text }) => {
    console.log(children);
    
  return (
      <div className="absolute bg-white font-medium -left-1/2 transform -translate-y-2/4 z-50  px-2 py-2  text-blue_color text-base rounded opacity-0 hover:opacity-100 transition-opacity duration-300">
        {text}
      </div>
   
  );
};

export default HoverOnMission;