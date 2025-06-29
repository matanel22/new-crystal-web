import Image from "next/image";
import { formatDate } from "../util/dateFormat";
import Flow from "./missions/Flow";

export default function ({ data }) {
  return (
    <>
      {Object.entries(data).map(([key, value], i) => (
        <div
          key={key}
          className={`truncate items-center justify-center text-center`}
        >
          <Flow
            value={
              key === "activity_end" || key === "activity_start"
                ? formatDate(value)
                : value
            }
          />
        </div>
      ))}
    </>
  );
}
