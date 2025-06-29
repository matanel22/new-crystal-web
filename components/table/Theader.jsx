import Image from "next/image";
import React from "react";
const rounded = (i, headrData) => {
  if (i === headrData.length - 1) {
    return "rounded-l-lg";
  }
  if (i === 0) {
    return "rounded-r-lg";
  }
};
const Theader = ({ headrData }) => {
  return (
    <thead className="bg-[#EFF3FB] sticky top-0 z-10 overflow-hidden ">
      <tr className="w-full font-normal text-[24px] rounded leading-6 py-[8px] bg-blue_color text-center items-center text-white">
        {headrData.map((head, i) => (
          <th
            key={"header" + i}
            className={`min-w-[50px] whitespace-nowrap overflow-hidden text-ellipsis px-6 py-3 
                ${rounded(i, headrData)}`}
          >
            <span className="flex items-center justify-center gap-2">
              <span>{head.title ? head.title : head}</span>
              {head.icon && (
                <img
                  src={`/${head.icon}`}
                  className="w-[20px] h-[20px]"
                  alt="bit"
                />
              )}
            </span>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Theader;
