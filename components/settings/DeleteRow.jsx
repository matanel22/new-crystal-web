import axios from "@/lib/axios";
import Image from "next/image";
import React from "react";

export default function DeleteRow({ row, showPopup }) {
  const axiosDelete = async (id) => {
    try {
      const response = await axios.delete(`/${id}`);
      // console.log(response.data);
      setEvensInYear(response.data);
    } catch (error) {
      console.error("error fetching: ", error);
      throw error;
    }
  };

  return (
    <div>
      <div className="fixed inset-0 flex  items-center justify-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50">
        <div className="bg-white p-2 pr-4 w-[50%] rounded-xl text-right">
          <div
            onClick={() => showPopup(null)}
            className=" w-full flex justify-end mt-0 hover:cursor-pointer"
          >
            <Image src={"/x.svg"} width={15} height={15} alt="x" />
          </div>

          <h1 className="font-bold leading-6	">
            {" "}
            מחיקת שורה {/* {headerText} */}
          </h1>

          <p>
            האם ברצונך למחוק את רשומה מספר{row.number}
            {/* {messageText} "{objectToDelete?.firstName} {objectToDelete?.lastName}{objectToDelete?.agreementName}{objectToDelete?.id}"?/ */}
          </p>
          <div className="flex w-full  justify-end mt-4">
            <button
              onClick={() => showPopup(null)}
              className="bg-white text-blue_color px-4  rounded-full border border-blue_color"
            >
              ביטול
            </button>
            <button
              onClick={() => axiosDelete(row?.id)}
              className="bg-blue_color text-white rounded-full px-4  mr-1 "
            >
              {" "}
              מחק
              {/* {btnText ?? "מחק"} */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
