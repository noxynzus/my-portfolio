import React, { JSX } from "react";

interface Props {
  onClick: () => void;
  text: string;
  icon?: JSX.Element;
}

export default function OutlineRoundLinearBtn({
  onClick,
  text,
  icon = <></>,
}: Props) {
  return (
    <button
      onClick={onClick}
      className="relative rounded-full bg-linear-to-r from-[#615FFF] to-[#00A6F4] p-[1px] my-1 cursor-pointer hover:bg-[#00A6F4] shadow-md shadow-[#0070f3]"
    >
      <div className="flex items-center gap-2 bg-[#161614] text-white rounded-full px-6 py-2 hover:bg-[#00A6F4]">
        {icon}
        <h6 className="text-[14px] font-mono">{text}</h6>
      </div>
    </button>
  );
}
