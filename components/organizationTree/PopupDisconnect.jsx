import React from "react";
import Image from "next/image";
import axios from "axios";

export default function PopupDisconnect({
  setShowPopUpDisconnect,

}) {
  // const axiosDelete = async () => {
  //   try {
  //     await axios
  //       .put(`api/${urlPage}/${objectToDelete.id}`)
  //       .then((res) => res.status);
  //   } catch (error) {
  //     console.error("error with delete", error);
  //   }
  // };

  return (
    <div
      dir="rtl"
      className="fixed inset-0 flex  items-center justify-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50"
    >
      <div className="bg-white  w-[844px] h-[146px] rounded-xl text-right pr-7 pl-3">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold leading-6 text-[#002A78] pt-5 pb-[6px]">
            {" "}
            ניתוק קשר{" "}
          </h1>
          <Image
            onClick={() => setShowPopUpDisconnect(false)}
            className="hover:cursor-pointer pb-2"
            src={"/x.svg"}
            width={15}
            height={15}
            alt="x"
          />
        </div>
        <p className="text-[#002A78] text-xl font-normal pb-1">
          האם ברצונך לנתק את מחלקה “שם מחלקה” ואת כל הענפים והמדורים שתחתיה?
        </p>
        <div className="flex w-full  justify-end mt-4 pl-2">
          <button
            onClick={() => setShowPopUpDisconnect(false)}
            className="bg-white text-blue_color px-6 py-[2px] rounded-full border border-blue_color text-xl font-normal"
          >
            ביטול
          </button>
          <button
            onClick={"axiosDelete"}
            className="bg-blue_color text-white rounded-full px-6  mr-1 text-xl font-normal"
          >
            נתק
          </button>
        </div>
      </div>
    </div>
  );
}
