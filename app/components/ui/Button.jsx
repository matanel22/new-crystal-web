import clsx from "clsx";
import React from "react";

const Button = ({ textBtn, image, color, onClick }) => {
  const defaultStyle =
    "text-gray-100 text-[20px] font-medium px-3 py-2";

  // Define color styles
  const colorStyles = {
    blue: "text-gray-100 bg-[#002A78]",
    green: "text-white bg-[#1D7044]",
    white: "text-[#002A78] bg-white border border-[#002A78]",
  };
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-3 py-2 flex justify-center gap-2 items-center whitespace-nowrap left-0 font-normal text-[20px] rounded-full hover:cursor-pointer",
        color ? colorStyles[color] : defaultStyle
      )}
    >
      <p>{textBtn}</p>
      <div>{image}</div>
    </button>
  );
};

export default Button;
