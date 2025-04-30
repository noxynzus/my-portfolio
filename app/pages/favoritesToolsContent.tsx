import React from "react";
import ToolsCard from "../components/ToolsCard";
import Image from "next/image";

const tools = [
  {
    logo: "/images/logos/NextJs.png",
    toolName: "NextJs",
  },
  {
    logo: "/images/logos/angular.png",
    toolName: "Angular",
  },
  {
    logo: "/images/logos/Bootstrap.png",
    toolName: "Bootstrap",
  },
  {
    logo: "/images/logos/Figma.png",
    toolName: "Figma",
  },
  {
    logo: "/images/logos/mui.png",
    toolName: "Material UI",
  },
  {
    logo: "/images/logos/mysql.png",
    toolName: "MySQL",
  },
  {
    logo: "/images/logos/Nodejs.png",
    toolName: "NodeJs",
  },
  {
    logo: "/images/logos/postgresql.png",
    toolName: "PostgreSQL",
  },
  {
    logo: "/images/logos/Javascript.png",
    toolName: "Javascript",
  },
  {
    logo: "/images/logos/tailwind.png",
    toolName: "TailwindCss",
  },
];

export default function FavoritesTools() {
  return (
    <section className="flex flex-col justify-center items-center text-center p-10 w-full">
      <Image
        src="/images/backgrounds/tools-bg-ef.svg"
        alt="Hero Image"
        width={1406}
        height={436}
        className="absolute z-0  items-center justify-center w-full h-full opacity-80"
      />
      <div className="flex flex-col justify-center item-center gap-2">
        <h6 className="">{`My Favorite Tools`}</h6>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">{`Exploring the tools,`}</h2>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">{`Behind my Development.`}</h2>
      </div>

      <div className="flex flex-wrap justify-center items-center w-full gap-2 mt-8 space-x-1 mx-auto">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex justify-center items-center md:w-1/6 lg:w-1/6 gap-4"
          >
            <ToolsCard logo={tool.logo} toolName={tool.toolName} />
          </div>
        ))}
      </div>
    </section>
  );
}
