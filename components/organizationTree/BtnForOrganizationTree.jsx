import Image from "next/image";
import plusForTree from "@/public/plusForTree.svg";

export default function BtnForOrganizationTree({ setShowPopUpSelectUnit }) {
  return (
    <div className="p-5 absolute z-10">
      <button
        onClick={(e) => {
          e.stopPropagation(), setShowPopUpSelectUnit(true);
        }}
        className="bg-[#002A78] w-[128px] h-[42px] border-none rounded-[35px] flex items-center justify-center cursor-pointer"
      >
        <span className="text-white text-[20px] leading-[30px] mr-[8px]">
          הוסף
        </span>
        <Image src={plusForTree} alt="plusForTree" width={20} height={20} />
      </button>
    </div>
  );
}
