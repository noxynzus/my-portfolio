import Image from "next/image";
import React from "react";
import { motion, useInView } from "framer-motion";
import LinkButtonOutline from "../components/buttons/LinkButtonOutline";

export default function HeroContent() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="about"
      className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-5 lg:py-20 justify-center items-center text-center text-white relative isolate "
    >
      {/* Left */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="capitalize w-full flex flex-col justify-center sm:justify-start md:justify-center  items-center  sm:items-start md:items-center gap-4 text-left sm:text-center md:text-center"
      >
        <h6 className="text-lg md:text-xl font-semibold mb-2">{`Hello, There!`}</h6>
        <div className="flex flex-col sm:flex-row gap-4  items-center sm:items-start md:items-center">
          <h3 className="text-white text-3xl md:text-4xl font-bold">{`I'm`}</h3>
          <h2 className="text-5xl font-bold bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-gradient-x">
            {`Aui Atthawat`}
          </h2>
        </div>
        <div className="flex flex-col gap-4 items-center sm:items-start md:items-center">
          <h2 className="text-1xl md:text-2xl font-bold">
            {`Software Developer & Designer`}
          </h2>
          <h2 className="text-1xl md:text-2xl font-bold">
            {`Based in Chang Rai, Thailand`}
          </h2>
        </div>

        <LinkButtonOutline
          href={"/images/resume/last-resume.png"}
          text="Download Resume"
          download="last-resume.png"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m-6 3.75 3 3m0 0 3-3m-3 3V1.5m6 9h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75"
              />
            </svg>
          }
        />
      </motion.div>

      {/* Right */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="hidden lg:flex xl:flex justify-center items-center w-full "
      >
        <Image
          src="/images/backgrounds/bg-code.png"
          alt="Hero Image"
          width={500}
          height={500}
          className="absolute -z-10"
        />
      </motion.div>
    </section>
  );
}
