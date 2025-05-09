import React from "react";
import WorkExperience from "../components/WorkExperience";
import Education from "../components/Education";
import { motion, useInView } from "framer-motion";

export default function EducationAndWork() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="flex flex-col justify-center items-center text-center py-10 w-full">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center item-center gap-2"
      >
        <h6 className="">{`Education & Work`}</h6>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 bg-linear-to-r from-[#0070f3]  to-[#00a6f4] bg-clip-text text-transparent animate-gradient-x">{`My Academic and`}</h2>
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 bg-linear-to-r from-[#0070f3]  to-[#00a6f4] bg-clip-text text-transparent animate-gradient-x">{`Professional Journey.`}</h2>
      </motion.div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center item-center  gap-8 mt-8 w-full"
      >
        <div className="w-full  md:w-1/2 lg:w-1/3 flex flex-col justify-center item-center  mx-auto">
          <Education />
        </div>

        <div className="w-full  md:w-1/2 lg:w-1/3 flex flex-col justify-center item-center  mx-auto">
          <WorkExperience title="Work Experience" />
        </div>
      </motion.div>
    </section>
  );
}
