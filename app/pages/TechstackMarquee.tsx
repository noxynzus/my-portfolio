import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const tools = [
  {
    logo: "/images/icons/techstack/nextjs.svg",
    toolName: "NextJs",
  },
  {
    logo: "/images/icons/techstack/angular.svg",
    toolName: "Angular",
  },
  {
    logo: "/images/icons/techstack/bootstrap.svg",
    toolName: "Bootstrap",
  },
  {
    logo: "/images/icons/techstack/figma.svg",
    toolName: "Figma",
  },
  {
    logo: "/images/icons/techstack/mui.svg",
    toolName: "Material UI",
  },
  {
    logo: "/images/icons/techstack/mysql.svg",
    toolName: "MySQL",
  },
  {
    logo: "/images/icons/techstack/nodejs.svg",
    toolName: "NodeJs",
  },
  {
    logo: "/images/icons/techstack/postgresql.svg",
    toolName: "PostgreSQL",
  },
  {
    logo: "/images/icons/techstack/js.svg",
    toolName: "Javascript",
  },
  {
    logo: "/images/icons/techstack/tailwindcss.svg",
    toolName: "TailwindCss",
  },
  {
    logo: "/images/icons/techstack/github.svg",
    toolName: "Github",
  },
  {
    logo: "/images/icons/techstack/html5.svg",
    toolName: "HTML5",
  },
  {
    logo: "/images/icons/techstack/css3.svg",
    toolName: "CSS3",
  },
  {
    logo: "/images/icons/techstack/redux.svg",
    toolName: "Redux",
  },
];

function TechstackMarquee() {
  const ref = React.useRef(null);

  const rendersLogo = () =>
    tools.map((tool, index) => (
      <li className="flex justify-center items-center mx-2 w-full" key={index}>
        <Image
          src={tool.logo}
          alt="Logo Image"
          width={40}
          height={40}
          className="mx-4  whitespace-nowrap object-cover"
        />
      </li>
    ));

  return (
    <div className="relative isolate inset-0 w-full py-12">
      <div className="overflow-hidden w-full h-full">
        <div className="mask-x-from-70% mask-x-to-90% ">
        <motion.div
          ref={ref}
          //   initial={{ x: 200, opacity: 1 }}
          animate={{ x: ["0%", "-50%"], opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
          className="flex w-max"
        >
          <ul className="flex justify-start items-center whitespace-nowrap">
            {rendersLogo()}
          </ul>

          <ul
            className="flex justify-start items-center whitespace-nowrap"
            aria-hidden="true"
          >
            {rendersLogo()}
          </ul>
        </motion.div>
        </div>
      </div>
    </div>
  );
}

export default TechstackMarquee;
