import React from "react";
import ToolsCard from "../components/ToolsCard";
import { motion, useInView } from "framer-motion";

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
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="flex flex-col justify-center items-center text-center p-10 w-full relative isolate overflow-hidden whitespace-nowrap">
      <motion.div
        ref={ref}
        initial={{ opacity: 1 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center item-center gap-2"
      >
        <h6 className="">{`My Favorite Tools`}</h6>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">{`Exploring the tools,`}</h2>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">{`Behind my Development.`}</h2>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ x: 200, opacity: 1 }}
        animate={{ x: ['0%','-50%'], opacity: 1 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: 'linear',
        }}
        // className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 justify-center items-center w-full gap-4 mt-8 space-x-1 mx-auto"
        className="flex space-x-4 w-full py-4 "
      >
        {tools.map((tool, index) => (
          <div
            key={index}
            className="justify-center items-center gap-4 sm:gap-2 w-full"
          >
            <ToolsCard logo={tool.logo} toolName={tool.toolName} />
          </div>
        ))}
      </motion.div>

      
    </section>
  );
}
