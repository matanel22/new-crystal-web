import React from "react";
import Image from "next/image";
import { useAuthContext } from "@/hooks/AuthContext";

export default function PopupUser({ toggle }) {
  const { user } = useAuthContext();
  return (
    //    <div className='fixed inset-0 z-50 flex items-center justify-center '  >
    // <div className=' fixed inset-0 blur-2xl bg-slate-400 opacity-40'></div>
    // <div className='z-50 h-32 w-1/2 fixed bg-slate-100 justify-between rounded-md flex flex-col px-4 pt-3 'onClick={toggle}>
    //   <div>מחיקת </div>
    //   <div>הודעת מחיקה </div>
    //   <div className='text-end '>
    //   <button className='border w-1/12 rounded-full border-blue_color m-2'>ביטול</button>
    //   <button className='border w-1/12 rounded-full text-white bg-blue_color'>מחק</button>
    //   </div>
    //   </div>
    //   </div>
    <div
      onClick={toggle}
      className=" fixed inset-0  z-50  bg-[#000000]/20 backdrop-blur-[2px] "
    >
      {/* <div className='fixed  inset-0  ' > </div> */}
      <div
        className="
          z-60
          w-[260px]
          h-44
          py-2
          border-2
        border-[#000000]/20
          flex flex-col
          bg-white
          rounded-xl
          absolute left-28 top-20
          shadow-[0px_0px_10px_0px_#FFFFFF80]
          "
      >
        <div className="px-2 flex justify-between">
          <Image src="/emet.svg" width={45} height={44} alt="emet logo" />
          <Image src="/hatal.svg" width={38} height={40} alt=" hatal logo" />
        </div>
        <div className=" pb-3 text-center border-b-[2px] font-semibold text-[24px] border-blue_color">
          {user?.first_name} {user?.surname}
          <p className="leading-[16px] font-normal text-[20px] mt-1">
            {user?.employee_number}
          </p>
        </div>
        <div className="py-1 text-center font-normal border-b-[2px] text-[18px] border-blue_color">
          {user?.role}
        </div>
      </div>
    </div>
  );
}
