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
      className="relative isolate overflow-hidden grid py-10 my-5 rounded-2xl lg:py-20 justify-center items-center text-center text-white  bg-[#161614] shadow-2xl"
    >

      <svg viewBox="0 0 1024 1024" className="absolute top-1/2 left-1/2 bottom-0 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#0070f3" />
            <stop offset="1" stopColor="#0070f3" />
          </radialGradient>
        </defs>
      </svg>

      <div>
        <Image
          src="/images/backgrounds/circle-linear.png"
          alt="Hero Image"
          width={1024}
          height={1024}
          className="absolute -z-10"
        />
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
          <h2 className="text-5xl font-bold bg-linear-to-r from-[#0070f3]  to-[#00a6f4] bg-clip-text text-transparent drop-shadow-md drop-shadow-[#0070f3]">
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
      {/* <motion.div
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
      </motion.div> */}

      <div className="mask-radial-at-bottom mask-radial-from-100% ">
        <div className="z-2 absolute left-1/4 top-20 -translate-x-1/2 transform rounded-full border-[500px] border-b-blue-400 border-l-violet-600 border-r-pink-500 border-t-purple-400 blur-[240px]"></div>
        <div className="z-2 absolute right-[25vw] top-[50vh] rounded-full border-[300px] border-b-cyan-400 border-l-rose-600 border-r-indigo-500 border-t-blue-400 blur-[200px]"></div>
      </div>

      {/* <div
        className="absolute z-10 inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative rounded-full left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] translate-x-1/2 bg-linear-to-tr from-[#0070f3]  to-[#00a6f4] opacity-15 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
      </div> */}



    {/* <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      <svg viewBox="0 0 1024 1024" className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
       
      </div>
   
    </div> */}
    </section>
  );
}
