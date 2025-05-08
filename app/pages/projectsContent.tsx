import React from "react";
import OutlineRoundLinearBtn from "../components/buttons/outline-round-linear-btn";
import ProjectCard from "../components/ProjectCard";
import { motion, useInView } from "framer-motion";
// Projects Data
import projectDataContext from "../context/myproject";
import { ProjectData } from "../context/myproject";

export default function ProjectsContent() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative isolate z-10 flex flex-col justify-center items-center text-center py-20 px-4  text-white">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full"
      >
        {/* Title */}
        <div className="flex flex-col justify-center items-center sm:justify-start sm:items-start w-full sm:w-1/2 gap-4">
          <h6 className="">{`My Projects!`}</h6>
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 bg-linear-to-r from-[#0070f3]  to-[#00a6f4] bg-clip-text text-transparent animate-gradient-x">{`My Lasted Projects!`}</h2>
        </div>

        {/* Button */}
        <div className="flex flex-col sm:justify-end items-center sm:items-end w-full sm:w-1/2 gap-4">
          <OutlineRoundLinearBtn
            onClick={() => {
              if (typeof window !== "undefined") {
                window.open("/pages/projects", "_self");
              }
            }}
            text="View All Projects"
          />
        </div>
      </motion.div>

      {/* Projects Card */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="flex flex-wrap item-center mt-8 w-full "
      >
        {projectDataContext.map((project: ProjectData, index: number) => (
          <div
            key={index}
            className="w-full  md:w-1/2 lg:w-1/3 p-4 flex justify-center"
          >
            <ProjectCard
              url={project.url}
              image={project.primaryImg}
              title={project.title}
              description={project.description}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
