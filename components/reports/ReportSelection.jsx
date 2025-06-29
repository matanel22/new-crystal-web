import Image from "next/image";
import React from "react";

export default function ReportSelection({ oldRepo, newRepo, setCreateRepo }) {
  return (
    <div className=" w-3/4 p-6 rounded-lg bg-[#F2F6FC] flex gap-4 justify-center">
      <div className="bg-white rounded-lg h-[100%] w-1/2 p-4 overflow-hidden">
        <h2 className="text-center p-2 text-xl font-semibold">
          בחר דו”ח מהדו”חות הקיימים
        </h2>
        <div className="relative px-3 ">
          <input
            type="text"
            className="w-full  p-2 pr-4 rounded-3xl 
             focus:outline-0 bg-[#EFF3FB] "
            placeholder=" חיפוש"
          />
          <Image
            className="absolute left-[4%] top-[26%] z-10"
            src="/MagnifyingGlass.svg"
            width={20}
            height={20}
            alt="search"
          />
        </div>

        <div dir="ltr" className="mt-3 relative  h-[90%] pr-3 overflow-y-auto ">
          {oldRepo.map((repo, i) => (
            <div key={i} dir="rtl" className=" border-b-[1px] p-3">
              {repo}
            </div>
          ))}
        </div>
      </div>
      <div className=" h-full w-1/2 ">
        <div className="max-h-3/4 h-3/4 bg-white p-4 overflow-hidden">
          <h2 className="text-center p-2 text-xl font-semibold">דוח חדש</h2>
          <div>
            {newRepo.map((repo, i) => (
              <div key={i} dir="rtl" className=" border-b-[1px] p-3">
                {repo}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center h-1/4">
          <button
            onClick={() => setCreateRepo(true)}
            className="bg-blue_color w-1/3 p-2 rounded-3xl font-normal text-lg text-white"
          >
            המשך ליצירת הדו"ח
          </button>
        </div>
      </div>
    </div>

    // </div>
  );
}
