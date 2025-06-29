export default function BoxField({ name }) {
  return (
    <div className="w-[9vw] h-[8vh] rounded-lg bg-[#E4EBF8] text-xl font-normal flex items-center justify-center relative">
      <span>{name}</span>

      <div className="rounded-full h-5 w-5 border border-blue_color bg-white flex items-center justify-center absolute -bottom-2.5">
        <span className="text-2xl">+</span>
      </div>
    </div>
  );
}
