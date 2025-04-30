import Image from "next/image";
import React from "react";

interface Props {
  logo: string;
  toolName: string;
}

export default function ToolsCard({ logo, toolName }: Props) {
  return (
    <div className="w-[150px] h-[150px] rounded-2xl border border-gray-500 p-5 flex flex-col justify-between items-center cursor-pointer hover:border-[#00A6F4]">
      <div className="w-[60px] h-[60px] p-1 bg-linear-to-r from-[#2A2A2A] to-[#161614] items-center flex justify-center rounded-full">
        <Image
          src={logo}
          alt="Logo Image"
          width={40}
          height={40}
          className="rounded-xl  object-cover"
        />
      </div>

      <div className="flex justify-center items-center w-full gap-2 mt-2">
        <div className="flex flex-col w-full items-center">
          <h2 className="text-md font-bold">{toolName}</h2>
        </div>
      </div>
    </div>
  );
}
