"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import DeleteRow from "./DeleteRow";
import Select, { components } from "react-select";
import { clsx } from "clsx";

// import { getDisplayName } from "next/dist/shared/lib/utils";
const options = [
  { value: "מנהל", label: "מנהל" },
  { value: "מנהל מערכת", label: "מנהל מערכת " },
  { value: "מנהל משימות", label: "מנהל משימות" },
];

export default function TabieSettings({ data, headers, page, add }) {
  const pathName = usePathname();
  const [updateIndex, setUpdateIndex] = useState();
  const [updateRow, setUpdateRow] = useState("");
  const [deleteRow, setDeleteRow] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);

  // console.log(selectedOptions);
  const updateAxios = (row, id) => {
    console.log(row, id);
  };
  // useEffect(() => {
  //   if (data[0].name == null) {
  //     setUpdateIndex(0);
  //     setUpdateRow("");
  //   }
  // }, [data]);

  const handleSelectChange = (selected) => {
    const hesSystemAdministrator = selected?.some(
      (option) => option.value === "מנהל מערכת"
    );

    if (hesSystemAdministrator) {
      const systemAdministrator = options.find(
        (option) => option.value === "מנהל מערכת"
      );
      setSelectedOptions([systemAdministrator]);
      setUpdateRow((prve) => ({
        ...prve,
        permissions: systemAdministrator.value,
      }));
    } else {
      setSelectedOptions(selected);
      setUpdateRow((prve) => ({
        ...prve,
        permissions: selected.map((option) => option.value),
      }));
    }
  };
  const handelCanghe = (key, value) => {
    setUpdateRow((prve) => ({ ...prve, [key]: value }));
  };
  const customSelectStyles = {
    control: () => ({
      border: "1px solid black",
      display: "flex",
      alignItems: "center",
      height: "26px",
      backgroundColor: "#ffffff ",
      borderRadius: 100,
      width: "100%",
      marginLeft: 4,
    }),
    container: () => ({
      display: "flex",
      alignItems: "center",
    }),

    placeholder: (base) => ({
      ...base,
      width: "100%",
      textAlign: "center",
      color: "#002a78 ",
    }),
    dropdownIndicator: () => ({
      color: "#A4A4A4",
    }),
    option: (base, state) => ({
      ...base,
      display: "flex",
      justifyContent: "space-between", // Places checkbox on the right
      backgroundColor: "white",
      color: state.isSelected ? "black" : "inherit",
      direction: "rtl",
      // padding: '10px 15px',
      position: "a",
      overflow: "absolute", // Ensure overflow is hidden for the gradient effect
      zIndex: 9999,
      ":hover": {
        backgroundColor: "#002A78",
        color: "#ffffff",
        borderRadius: "5px",
        "&:before": {
          content: "none", // Prevents the line from appearing on hover
        },
      },
      "&:before": {
        content: '""',
        position: "absolute",
        left: "5%", // Start the shadow from 15%
        right: "5%", // End the shadow at 15%
        bottom: "0",
        height: "1px",
        backgroundColor: "#e9e9e9",
      },
      // borderRadius:'10px',
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "10px", // Matching the rounded border for the dropdown menu
      marginTop: "0px",
      position: "absolute",
      zIndex: "9999",
      paddingRight: "2px",
      // overflow: "scroll",
      ":hover": {
        cursor: "pointer",
      },
    }),
    menuList: (base) => ({
      ...base,
      direction: "ltr", // Change direction to right-to-left
      zIndex: "9999",
      // padding: "5px",
      // maxHeight: '200px', // Adjust this value to fit approximately 5 items
      overflowY: "auto",
      position: "absolute",
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: "#002A78", // Background color for selected items
      color: "white",
      borderRadius: "20px",
      height: "18px",
      // paddingRight:'5px',
      // padding: '0.3px 5px 0.3px 0px '
    }),
    multiValueLabel: (base) => ({
      ...base,
      display: "flex",
      padding: "0px",
      textAlign: "center",
      alignItems: "center",
      paddingLeft: "15px",
      paddingRight: "15px",
      color: "white", // Text color for selected items
    }),
    multiValueContainer: (base) => ({
      ...base,
      textAlign: "center",

      padding: "0px",
      paddingRight: "5px",
      color: "white", // Text color for selected items
    }),
    indicatorsContainer: (base) => ({
      ...base,
      padding: "0px", // Removes the gap between the arrow and selected options
    }),
    clearIndicator: (base) => ({
      ...base,
      display: "none", // Hides the "X" clear button
    }),
  };

  // להביא את החץ
  const CustomDropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <Image
          className="mx-2"
          src="/downArrow.svg"
          alt="Custom Arrow"
          width={10}
          height={10}
        />
      </components.DropdownIndicator>
    );
  };

  return (
    <>
      <div className="p-2 pb-0 dirRtl text-white rounded-lg sticky z-50  top-0 bg-[#EFF3FB] w-full">
        <div className="grid grid-cols-9 sticky top-0 rounded-lg p-2 bg-blue_color justify-center ">
          {headers.map((header, index) => (
            <div
              key={header}
              className=" text-center  truncate font-semibold text-xl"
            >
              {header}
            </div>
          ))}
          <div
            className="text-center text-xl font-semibold col-end-10
                 "
          >
            פעולות
          </div>
        </div>
      </div>
      <div className="bg-[#EFF3FB] dirRtl flex flex-col px-2  text-base ">
        {data.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="w-full grid grid-cols-9 relative whitespace-nowrap justify-center border-b-[2px] py-2.5"
          >
            {Object.entries(row).map(
              ([code_key, code_value], index) =>
                code_key !== "id" && (
                  <div
                    className={clsx(
                      {
                        " col-span-2 ":
                          index === Object.entries(row).length - 1 &&
                          updateIndex === rowIndex,
                      },
                      {
                        " w-full col-span-6  ":
                          pathName.includes("stages") &&
                          index === Object.entries(row).length - 1,
                        // &&
                        // updateIndex === rowIndex,
                      },
                      {
                        " w-full col-span-5":
                          pathName.includes("users") &&
                          index === Object.entries(row).length - 1 &&
                          updateIndex === rowIndex,
                      }
                    )}
                  >
                    {updateIndex === rowIndex && index !== 0 ? (
                      <div
                        className={`" flex   ${
                          code_key === "permissions" ? " w-fit " : " w-full "
                        }px-2 "`}
                      >
                        <div
                          className={`" rounded-full flex w-fit "
                             ${
                               index === Object.entries(row).length - 1 &&
                               "  bg-gradient-to-r  from-blue_color via-blue_color to-[#EFF3FB] w-full"
                             }`}
                        >
                          {code_key === "permissions" ? (
                            <>
                              <div className=" relative ">
                                <Select
                                  isMulti
                                  onChange={handleSelectChange}
                                  options={options}
                                  value={selectedOptions}
                                  components={{
                                    DropdownIndicator: CustomDropdownIndicator,
                                  }}
                                  className="min-w-36 "
                                  styles={customSelectStyles}
                                  placeholder={updateRow[code_key] || ""}
                                />
                              </div>
                              <button
                                onClick={() =>
                                  updateAxios(updateRow, code_key.id)
                                }
                                className={`${
                                  pathName.includes("stages")
                                    ? " px-4 "
                                    : " w-fit px-4 "
                                }  flex justify-center border border-blue_color rounded-full text-white`}
                              >
                                שמור שינויים
                              </button>
                            </>
                          ) : (
                            <>
                              <input
                                className={`" text-center w-full rounded-full outline-none border border-blue_color "
                              `}
                                onFocus={() => handelCanghe(code_key, "")}
                                onChange={(e) =>
                                  handelCanghe(code_key, e.target.value)
                                }
                                value={updateRow[code_key] || ""}
                              />

                              {index === Object.entries(row).length - 1 && (


                                <button
                                  onClick={() => console.log(updateRow)}
                                  className={`${
                                    pathName.includes("stages")
                                      ? " px-4 "
                                      : " w-full "
                                  }  flex justify-center border border-blue_color rounded-full text-white`}
                                >
                                  שמור שינויים
                                </button>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    ) : code_key.includes("price") ? (
                      <div
                        key={index}
                        className="flex gap-2 justify-center  text-center w-full"
                      >
                        <Image
                          className=" right-7 "
                          src={"/shekelSine.svg"}
                          width={10}
                          height={10}
                          alt=""
                        />

                        <span className="dirLtr  ">{code_value}</span>
                      </div>
                    ) : (
                      <div className={clsx(" text-center ",{
                        " text-right":
                          pathName.includes("stages") &&
                          index === Object.entries(row).length - 1,
                        // &&
                        // updateIndex === rowIndex,
                      },)}>{code_value}</div>
                    )}
                  </div>
                )
            )}
            <div className="flex cursor-pointer justify-around col-end-10 ">
              <div
                className={`${
                  updateIndex === rowIndex
                    ? "bg-blue_color/20 border border-blue_color/5"
                    : "bg-blue_color border border-blue_color"
                }  gap-1 flex px-3 w-fit text-white rounded-full cursor-pointer "`}
                onClick={() => {
                  setUpdateIndex(data[0].name !== null ? rowIndex : 0);
                  setUpdateRow(data[0].name !== null ? row : "");
                }}
              >
                <Image src={"/editing.svg"} width={15} height={16} alt={"uu"} />

                <button>עריכת שורה</button>
              </div>

              <Image
                onClick={() => {
                  setDeleteRow(row), console.log(row);
                }}
                src={"/bit.svg"}
                width={15}
                height={16}
                alt={"uu"}
              />
            </div>
          </div>
        ))}
      </div>
      <div></div>{" "}
      {deleteRow && <DeleteRow row={deleteRow} showPopup={setDeleteRow} />}
    </>
  );
}
