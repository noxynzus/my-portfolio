import Image from "next/image";
import React from "react";

interface svgIcon {
  educate: string;
  work: string;
}

const svgIndex: svgIcon = {
  educate: "/images/icons/education.svg",
  work: "/images/icons/work.svg",
};

interface Props {
  title: string;
}

export default function ExperienceCard({ title }: Props) {
  const Iconpath = title === "Education" ? svgIndex.educate : svgIndex.work;
  return (
    <div className="w-[500px] h-[550px] rounded-2xl border border-gray-500 p-5 flex flex-col justify-start items-center">
        {/* Title */}
      <div className="flex flex-row w-full items-center justify-start gap-2">
        <div className="w-[60px] h-[60px] bg-linear-to-r from-[#2A2A2A] to-[#161614] items-center flex justify-center rounded-full">
          <Image
            src={Iconpath}
            alt="Logo Image"
            width={40}
            height={40}
            className="rounded-xl  object-cover"
          />
        </div>
        <h2 className="text-2xl">{title}</h2>
      </div>

      <div className="border-t border-gray-300 w-full opacity-50 my-4"></div> {/* Divider */}
    </div>
  );
}
