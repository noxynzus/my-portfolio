import React from "react";

interface Props {
  onClick: () => void;
  text: string;
}

export default function OutlineRoundLinearBtn({ onClick,text }: Props) {
  return (
    <button onClick={onClick} className="relative rounded-full bg-linear-to-r from-[#615FFF] to-[#00A6F4] p-[1px] my-1 cursor-pointer">
      <div className="bg-[#161614] text-white rounded-full px-6 py-2">
        <h6 className="text-[14px] font-mono">{text}</h6>
      </div>
    </button>
  );
}
