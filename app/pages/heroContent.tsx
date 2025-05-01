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
      <div
        className="absolute z-10 inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative rounded-full left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] translate-x-1/2 bg-linear-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div>

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

      {/* <AnimatePresence>
        {openResume && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenResume(false)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={(e) => e.stopPropagation()} // ป้องกันการปิดเมื่อคลิกที่รูป
              className=" p-4 w-full h-full m-auto"
            >
              <Image
                src="/images/resume/last-resume.png"
                alt="Logo Expanded"
                width={800}
                height={800}
                className="rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}

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
