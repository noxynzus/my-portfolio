import React from "react";
// import ToolsCard from "../components/ToolsCard";
import { motion, useInView } from "framer-motion";
import TechstackMarquee from "./TechstackMarquee";


export default function FavoritesTools() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="flex flex-col justify-center items-center text-center w-full relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 1 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center item-center gap-2"
      >
        <h6 className="">{`My Favorite Tools`}</h6>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 bg-linear-to-r from-[#0070f3]  to-[#00a6f4] bg-clip-text text-transparent animate-gradient-x">{`Exploring the tools,`}</h2>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 bg-linear-to-r from-[#0070f3]  to-[#00a6f4] bg-clip-text text-transparent animate-gradient-x">{`Behind my Development.`}</h2>
      </motion.div>
      <TechstackMarquee />

      
    </section>
  );
}
