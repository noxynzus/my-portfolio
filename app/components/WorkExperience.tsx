import Image from "next/image";
import React from "react";

interface Props {
  title: string;
}

const experinceWork = [
  {
    year: "2022-2025",
    company: "X-Innovations Technology Co., Ltd.",
    position: "Software Developer & Designer",
    location: "Chang Rai, Thailand",
  },
  {
    year: "2020-2022",
    company: "Tokyo Rubble Inc., Ltd.",
    position: "Machine Controller",
    location: "Chiba, Japan",
  },
];

export default function ExperienceCard({}: Props) {
  return (
    <div className="min-w-[350px]  h-[450px] max-h-[550px] rounded-2xl border border-gray-500 p-5 flex flex-col justify-start items-center z-10 bg-linear-to-b from-[#2A2A2A] to-[#161614]  bg-opacity-50 mx-auto">
      {/* Title */}
      <div className="flex flex-row w-full items-center justify-start gap-2">
        <div className="w-[60px] h-[60px] bg-linear-to-r from-[#2A2A2A] to-[#161614] items-center flex justify-center rounded-full">
          <Image
            src="/images/icons/work.svg"
            alt="Logo Image"
            width={40}
            height={40}
            className="rounded-xl  object-cover"
          />
        </div>
        <h2 className="text-2xl">{"Work Experience"}</h2>
      </div>
      {/* Divider */}
      <div className="border-t border-gray-500 w-full opacity-50 my-4"></div>

      {experinceWork.map((item, index) => (
        <div
          key={index}
          className="flex flex-col w-full items-center justify-center gap-2 py-4"
        >
          <div className="flex flex-col w-full items-start text-start gap-2">
            <h2 className="text-md text-gray-400">{`${item.year} / ${item.location}`}</h2>
            <h2 className="text-xl font-bold">{item.company}</h2>
            <h2 className="text-lg text-gray-300">{item.position}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
