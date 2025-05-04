import Image from "next/image";
import React from "react";

interface Props {
  url: string;
  image: string;
  title: string;
  description: string;
}

export default function ProjectCard({ url, image, title, description }: Props) {
  return (
    <div className="w-[380px] h-[400px] rounded-2xl border border-gray-500 p-5 flex flex-col justify-between items-center shadow-xl">
      <Image src={image} alt="Project Image" width={500} height={500}  className="rounded-xl w-full h-full object-cover"/>

      <div className="flex justify-center items-center w-full gap-2 mt-2">
        <div className="flex flex-col w-full items-start">
          <h2 className="text-md font-bold">{title}</h2>
          <p className="text-sm text-gray-500 text-left">{description}</p>
        </div>

        <div className="flex flex-row gap-2">
          <a
            href={url}
            className="px-4 py-2 bg-linear-to-r from-[#615FFF] to-[#00A6F4] text-primary font-semibold rounded-full transition"
          >
            <p className="text-white text-sm">More</p>
          </a>
        </div>
      </div>
    </div>
  );
}
