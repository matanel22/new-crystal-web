// "use client";
// import axios from "axios";
// import React, { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// export default function EmployeeFilter({ dataArray, label }) {

//   const [selectOption, setSelectOption] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const menuRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setToggle(false); // Close the option menu if click occurs outside of it
//       }
//     }
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [menuRef]);

//   const handleOption = (option) => {
//     setSelectOption(option);
//     setToggle(false); 
//   };

//   const toggleOptionMenu = () => {
//     setToggle((prevState) => !prevState); 
//   };

//   return (
//     <div className={`relative w-[9%] 
//     ${label=== 'מחלקה' ? 'w-[11%]' : ''}
//     `}>
//       <div
//         className={`flex p-[1.9px] border  pr-2 hover:cursor-pointer rounded-full bg-white border-blue_color
        
//         `}
//         onClick={toggleOptionMenu}
//       >
//         {selectOption || label || 'בחר'}
//         <div className=" absolute left-2  top-1/2 transform -translate-y-1/2">
//           <Image src={'/optionArrow.svg'} width={7} height={7} alt="arrow" />
//         </div>
//       </div>

//       {toggle && (
//         <div 
//         ref={menuRef} 
//         className="absolute inset-y-8 w-full z-20 mt-1  "
        
//         >
//           <ul className="flex flex-col  bg-white p-1 rounded shadowForDrop">
//             {dataArray.map((option, index) => (
//               <li
//                 className="cursor-pointer px-4 w-full md:truncate  py-1  text-blue_color rounded hover:bg-blue_color hover:text-white"
//                 onClick={() => handleOption(option)}
//                 key={index}
//               >
//                 {option}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
