"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AddUser({ fields, setOpenPopup }) {
  const [toggle, setToggle] = useState(null);

  const [fieldsData, setFieldsData] = useState({});

  useEffect(() => {
    setToggle(null);
  }, [fieldsData]);
  const handleSelect = (fieldName, value) => {
    setFieldsData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };
  const fetchAddRow = async () => {
    alert(`${fieldsData}`)
    // try {
    //   const response = await axios.get();
    //   console.log(response.status);
    // } catch (error) {
    //   console.error("error : ", error);
    //   throw error;
    // } finally {
    // }
  };
  const fieldOptionForPermissions = ["1", "2", "3", "4"];
  const fieldOptionForD = ["A", "B", "C", "D"];
  const fieldOptionForB = ["ק", "א", "א", "ו"];
  const fieldOptionForS = ["דד", "דד", "דד", "דד"];
  const fieldOptionForc = ["קוד", "קוד","קוד", "קוד"];
  const fieldOptionFort = ["סוג", "סוג","סוג", "סוג"];
  const options = (fieldName) => {
    switch (fieldName) {
      case "Department":
        return fieldOptionForD;
      case "branch":
        return fieldOptionForB;
      case "section":
        return fieldOptionForS;
      case "permissions":
        return fieldOptionForPermissions;
      case "code":
        return fieldOptionForc;
      case "type":
        return fieldOptionFort;
      default:
        return [];
    }
  };

  return (
    <div>
      <div className="fixed inset-0 flex  items-center justify-center bg-[#000000] bg-opacity-30 backdrop-blur-sm z-50">
        <div className="bg-white p-4 pr-4 w-1/2 rounded-xl">
          <div>
            <div className=" w-full flex justify-end mt-0 hover:cursor-pointer">
              {" "}
              <Image
                src={"/x.svg"}
                width={15}
                height={15}
                alt="x"
                onClick={() =>{ setOpenPopup(null),setFieldsData(null) }}
              />
            </div>
            <div className=" text-center ">
              <spen className="p-2 px-5 text-xl font-semibold rounded-full bg-blue_color  text-white">
                {} הוסף עמדה במערכת
              </spen>
            </div>
            <div className="pt-7 pb-4 px-10 gap-5 grid grid-cols-2">
              {fields.map((field, index) => (
                <div className="flex flex-col   ">
                  <label className=" text-lg font-semibold" htmlFor="">
                    {field.label}
                  </label>

                  <div className=" relative  pr-0  p-2">
                    {field.type === "option" ? (
                      <div
                        onClick={() => {
                          console.log(toggle);
                          setToggle((prevToggle) =>
                            prevToggle === field.name ? null : field.name
                          );

                        }}
                        className="relative rounded-lg border py-2  h-full w-full"
                      >
                        <p className="pr-2">
                          {fieldsData[field.name] || field.placeholder}
                        </p>
                        <Image
                          className="absolute -translate-y-1/2 left-6 top-1/2"
                          src={"/options.svg"}
                          width={10}
                          height={10}
                          alt="x"
                        />
                        {toggle === field.name && (
                          <div
                            onClick={() => setToggle(null)}
                            className="shadowForDrop w-full top-[100%] rounded-xl absolute bg-white z-30"
                          >
                            {options(field.name).map((v, i) => (
                              <div
                                key={i}
                                onClick={() => handleSelect(field.name, v)}
                                className="cursor-pointer px-4 w-full md:truncate  py-1 rounded hover:bg-blue_color hover:text-white text-blue_color"
                              >
                                {v}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <input
                        type="text"
                        className=" rounded-lg border p-2 h-full w-full"
                        placeholder={field.placeholder}
                        value={fieldsData[field.name] || ""}
                        onChange={(e) =>
                          setFieldsData((prevData) => ({
                            ...prevData,
                            [field.name]: e.target.value,
                          }))
                        }
                      />
                    )}
                    {field.name.includes("price") && (
                      <Image
                        className="absolute -translate-y-1/2 left-5 top-1/2"
                        src={"/shekelSine.svg"}
                        width={13}
                        height={15}
                        alt="x"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className=" text-left m-2">
              <button
                onClick={() => fetchAddRow()}
                className="p-1 px-4 text-xl font- rounded-full bg-blue_color  text-white"
              >
                שמירה
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
