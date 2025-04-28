import React from "react";

interface Props {
  onClick: () => void;
}

export default function OutlineRoundLinearBtn({ onClick }: Props) {
  return (
    <button onClick={onClick} className="relative rounded-full bg-linear-to-r from-sky-500 to-indigo-500 p-[1px] ">
      <div className="bg-[#161614] text-white rounded-full px-6 py-2">
        <h6 className="text-[20px] font-serif">View My Portfolio</h6>
      </div>
    </button>
  );
}
