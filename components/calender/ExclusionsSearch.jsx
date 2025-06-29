import axios from "@/lib/axios";
import { clsx } from "clsx";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function ExclusionsSearch({
  openSearch,
  emploeeyEvent,
  setEmploeeyEvent,
}) {
  console.log(openSearch);

  const [user, setUsers] = useState([]);
  // const [emploeeyEvent, setEmploeeyEvent] = useState([]);
  console.log(emploeeyEvent);

  const handleSearch = () => {
    setColor(!color);
  };
  const check = (user) => {
    const index = emploeeyEvent.indexOf(user.id);
    if (index !== -1) {
      return true;
    }
  };

  const handleV = (user) => {
    const index = emploeeyEvent.indexOf(user.id);
    const updatedEmploeeyEvent = [...emploeeyEvent];
    if (index !== -1) {
      updatedEmploeeyEvent.splice(index, 1);
      setEmploeeyEvent(updatedEmploeeyEvent);
    } else {
      updatedEmploeeyEvent.push(user.id);
      setEmploeeyEvent(updatedEmploeeyEvent);
    }
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/employees");
        console.log(response.data);
        setUsers(response.data ?? []);
        // console.log(employees);
      } catch (error) {
        console.error("error fetching employees: ", error);
        throw error;
      } finally {
        // setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div
      dir="ltr"
      className={clsx("px-1 z-50 overflow-auto bg-white absolute w-[92%] ", {
        "shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]": openSearch,
      })}
    >
      <div
        className={clsx(
          { " h-[30vh] overflow-auto ": openSearch },
          { "h-[15vh] overflow-auto ": openSearch === false }
        )}
      >
        {user.map((user, i) => (
          <div key={i}>
            <div dir="rtl" className="flex ">
              <div className="flex justify-center items-center">
                <div
                  onClick={() => handleV(user)}
                  className={`flex justify-center items-center mr-2 border border-blue_color w-4 h-4 ${
                    check(user) ? "bg-blue_color " : ""
                  }`}
                >
                  {check(user) && (
                    <Image src={"v.svg"} width={10} height={9} alt="v" />
                  )}
                </div>
              </div>
              <div onClick={handleSearch} className="p-2">
                <div>{user.first_name}</div>
                <div>{user.employee_number}</div>
              </div>
            </div>
            <div className=" mx-4 border border-b-[#EFF3FB]"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
